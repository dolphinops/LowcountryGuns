/**
 * Resend settings for site forms (contact, etc.).
 * Vercel: set `RESEND_API_KEY` for Production (and Preview if forms should work there).
 *
 * - RESEND_API_KEY: required to send mail
 * - RESEND_FROM_EMAIL or RESEND_FROM: optional override; defaults to {@link DEFAULT_RESEND_FROM}.
 *   Values containing onboarding@resend.dev are ignored (use a verified @lcguns.com sender in production).
 * - CONTACT_TO_EMAIL: optional override for inbound form mail; defaults to {@link DEFAULT_CONTACT_TO_EMAIL}
 */
export const DEFAULT_RESEND_FROM = 'Lowcountry Guns <noreply@lcguns.com>' as const;

export const DEFAULT_CONTACT_TO_EMAIL = 'aj@lcguns.com' as const;

/** Resend onboarding sender only allows test recipients; ignore if left in env by mistake. */
const RESEND_ONBOARDING_FROM_RE = /onboarding@resend\.dev/i;

export function getResendMailConfig(): { apiKey: string; from: string } | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEnv =
    process.env.RESEND_FROM_EMAIL?.trim() || process.env.RESEND_FROM?.trim() || '';
  const from =
    !fromEnv || RESEND_ONBOARDING_FROM_RE.test(fromEnv) ? DEFAULT_RESEND_FROM : fromEnv;

  if (!apiKey) {
    return null;
  }

  return { apiKey, from };
}
