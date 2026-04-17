import { NextResponse } from 'next/server';
import { createClient } from '@vercel/kv';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/contact-schema';
import { escapeHtml } from '@/lib/html-escape';
import { resolveKvRestConfig } from '@/lib/motd-kv';
import { DEFAULT_CONTACT_TO_EMAIL, getResendMailConfig } from '@/lib/resend-config';

export const runtime = 'nodejs';

const RATE_WINDOW_SEC = 15 * 60;
const RATE_MAX = 8;

function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  return req.headers.get('x-real-ip')?.trim() || 'unknown';
}

async function rateLimitOk(ip: string): Promise<boolean> {
  const cfg = resolveKvRestConfig();
  if (!cfg) return true;
  try {
    const kv = createClient({ url: cfg.url, token: cfg.token });
    const key = `contact:rl:v1:${ip}`;
    const n = await kv.incr(key);
    if (n === 1) await kv.expire(key, RATE_WINDOW_SEC);
    return n <= RATE_MAX;
  } catch (e) {
    console.error('contact: rate limit KV error', e);
    return true;
  }
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!(await rateLimitOk(ip))) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 });
  }

  const mail = getResendMailConfig();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_TO_EMAIL;

  if (!mail) {
    console.error(
      'contact: Resend not configured — set RESEND_API_KEY on the server (e.g. Vercel → Environment Variables → Production). Sender defaults to noreply@lcguns.com; override with RESEND_FROM_EMAIL if needed.',
    );
    return NextResponse.json(
      {
        error:
          'We could not send your message from the website. Please call the Pro Shop at 843-784-5474 or try again later.',
      },
      { status: 503 },
    );
  }

  const { apiKey, from } = mail;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const firstMsg = parsed.error.issues[0]?.message?.trim();
    const safeError =
      firstMsg && firstMsg.length <= 200 && !/[<>]/.test(firstMsg)
        ? firstMsg
        : 'Please check your form and try again.';
    return NextResponse.json({ error: safeError }, { status: 400 });
  }

  const { name, phone, email, subject, message } = parsed.data;

  const text = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Topic: ${subject}`,
    '',
    message,
  ].join('\n');

  const html = `
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Topic:</strong> ${escapeHtml(subject)}</p>
<hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
<p style="white-space:pre-wrap;font-family:ui-sans-serif,system-ui,sans-serif">${escapeHtml(message)}</p>
`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[lcguns.com] ${subject}`,
    text,
    html,
  });

  if (error) {
    console.error('contact: Resend error', {
      name: error.name,
      message: error.message,
      statusCode: error.statusCode,
    });

    const phone = '843-784-5474';

    /** Resend messages are usually safe; strip noise and cap length for the browser. */
    const resendHint = (() => {
      const raw = typeof error.message === 'string' ? error.message.replace(/\s+/g, ' ').trim() : '';
      if (!raw || raw.length > 400) return '';
      if (/\bre_[A-Za-z0-9_-]{10,}\b/.test(raw)) return '';
      return raw;
    })();

    if (error.name === 'invalid_from_address') {
      return NextResponse.json(
        {
          error: `The site email sender is not allowed yet (${resendHint || 'invalid from'}). Verify your domain in Resend and set RESEND_FROM_EMAIL on Vercel to an address on that domain, or call ${phone}.`,
          code: error.name,
        },
        { status: 502 },
      );
    }

    /** Resend test / onboarding `from` only allows delivery to the account owner inbox. */
    const rawMsg = typeof error.message === 'string' ? error.message : '';
    if (/testing emails|only send testing|verify a domain at resend/i.test(rawMsg)) {
      console.error(
        'contact: Resend blocked send — use a From address on your verified domain (not onboarding@resend.dev).',
        { configuredFrom: from },
      );
      return NextResponse.json(
        {
          error: `We could not deliver your message through the form right now. Please call the Pro Shop at ${phone}.`,
          code: 'resend_verified_domain_required',
        },
        { status: 502 },
      );
    }

    if (error.name === 'monthly_quota_exceeded' || error.name === 'daily_quota_exceeded') {
      return NextResponse.json(
        {
          error: `Email quota reached. Please call the Pro Shop at ${phone}.`,
          code: error.name,
        },
        { status: 502 },
      );
    }

    const suffix = resendHint ? ` (${resendHint})` : '';
    return NextResponse.json(
      {
        error: `Could not send your message${suffix}. Try again or call the Pro Shop at ${phone}.`,
        code: error.name,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
