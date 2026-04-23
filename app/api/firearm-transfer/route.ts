import { NextResponse } from 'next/server';
import { createClient } from '@vercel/kv';
import { Resend } from 'resend';
import { firearmTransferFormSchema } from '@/lib/firearm-transfer-schema';
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
    const key = `firearm-transfer:rl:v1:${ip}`;
    const n = await kv.incr(key);
    if (n === 1) await kv.expire(key, RATE_WINDOW_SEC);
    return n <= RATE_MAX;
  } catch (e) {
    console.error('firearm-transfer: rate limit KV error', e);
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
      'firearm-transfer: Resend not configured — set RESEND_API_KEY on the server (e.g. Vercel → Environment Variables → Production).',
    );
    return NextResponse.json(
      {
        error:
          'We could not send your request from the website. Please call the Pro Shop at 843-784-5474 or try again later.',
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

  const parsed = firearmTransferFormSchema.safeParse(body);
  if (!parsed.success) {
    const firstMsg = parsed.error.issues[0]?.message?.trim();
    const safeError =
      firstMsg && firstMsg.length <= 200 && !/[<>]/.test(firstMsg)
        ? firstMsg
        : 'Please check your form and try again.';
    return NextResponse.json({ error: safeError }, { status: 400 });
  }

  const d = parsed.data;

  const text = [
    'Firearm transfer request (website form)',
    '',
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Email: ${d.email}`,
    '',
    '--- Description of firearm ---',
    `Make: ${d.make}`,
    `Type of action: ${d.typeOfAction}`,
    `Model: ${d.model}`,
    `Caliber: ${d.caliber}`,
    `Barrel length: ${d.barrelLength}`,
    `Finish: ${d.finish}`,
    `Serial #: ${d.serialNumber}`,
    `Dealer name: ${d.dealerName}`,
    `Order number: ${d.orderNumber}`,
    '',
    d.otherIdentifyingInfo ? `Other identifying information:\n${d.otherIdentifyingInfo}` : 'Other identifying information: (none)',
  ].join('\n');

  const otherBlock = d.otherIdentifyingInfo
    ? `<p style="white-space:pre-wrap;font-family:ui-sans-serif,system-ui,sans-serif">${escapeHtml(d.otherIdentifyingInfo)}</p>`
    : '<p><em>(none)</em></p>';

  const html = `
<p><strong>Firearm transfer request</strong> (website form)</p>
<hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
<p><strong>Name:</strong> ${escapeHtml(d.name)}</p>
<p><strong>Phone:</strong> ${escapeHtml(d.phone)}</p>
<p><strong>Email:</strong> ${escapeHtml(d.email)}</p>
<hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
<p><strong>Make:</strong> ${escapeHtml(d.make)}</p>
<p><strong>Type of action:</strong> ${escapeHtml(d.typeOfAction)}</p>
<p><strong>Model:</strong> ${escapeHtml(d.model)}</p>
<p><strong>Caliber:</strong> ${escapeHtml(d.caliber)}</p>
<p><strong>Barrel length:</strong> ${escapeHtml(d.barrelLength)}</p>
<p><strong>Finish:</strong> ${escapeHtml(d.finish)}</p>
<p><strong>Serial #:</strong> ${escapeHtml(d.serialNumber)}</p>
<p><strong>Dealer name:</strong> ${escapeHtml(d.dealerName)}</p>
<p><strong>Order number:</strong> ${escapeHtml(d.orderNumber)}</p>
<p><strong>Other identifying information:</strong></p>
${otherBlock}
`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: d.email,
    subject: `[lcguns.com] Firearm transfer request — ${d.make} ${d.model}`,
    text,
    html,
  });

  if (error) {
    console.error('firearm-transfer: Resend error', {
      name: error.name,
      message: error.message,
      statusCode: error.statusCode,
    });

    const phone = '843-784-5474';

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

    const rawMsg = typeof error.message === 'string' ? error.message : '';
    if (/testing emails|only send testing|verify a domain at resend/i.test(rawMsg)) {
      console.error('firearm-transfer: Resend blocked send — verified domain required.', { configuredFrom: from });
      return NextResponse.json(
        {
          error: `We could not deliver your request through the form right now. Please call the Pro Shop at ${phone}.`,
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
        error: `Could not send your request${suffix}. Try again or call the Pro Shop at ${phone}.`,
        code: error.name,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
