import { NextResponse } from 'next/server';
import { createClient } from '@vercel/kv';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/contact-schema';
import { escapeHtml } from '@/lib/html-escape';
import { resolveKvRestConfig } from '@/lib/motd-kv';
import { getResendMailConfig } from '@/lib/resend-config';

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
  const to = process.env.CONTACT_TO_EMAIL?.trim() || 'aj@lcguns.com';

  if (!mail) {
    console.error(
      'contact: Resend not configured — set RESEND_API_KEY and RESEND_FROM_EMAIL (or RESEND_FROM) on the server (e.g. Vercel → Environment Variables → Production).',
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
    return NextResponse.json({ error: 'Please check your form and try again.' }, { status: 400 });
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
    tags: [{ name: 'source', value: 'contact_form' }],
  });

  if (error) {
    console.error('contact: Resend error', error);
    return NextResponse.json({ error: 'Could not send your message. Please try again or call us.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
