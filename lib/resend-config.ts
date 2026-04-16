/**
 * Resend settings for the contact form.
 * Vercel: set for Production (and Preview if you want forms there).
 *
 * - RESEND_API_KEY: API key from Resend dashboard
 * - RESEND_FROM_EMAIL or RESEND_FROM: verified sender (e.g. "Name <noreply@yourdomain.com>")
 */
export function getResendMailConfig(): { apiKey: string; from: string } | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    process.env.RESEND_FROM?.trim() ||
    "";

  if (!apiKey || !from) {
    return null;
  }

  return { apiKey, from };
}
