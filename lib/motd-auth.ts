/** Shared secret for /admin and POST /api/motd (Bearer token). Set in Vercel env, never commit. */
export function getExpectedMotdAdminSecret(): string | undefined {
  const s = process.env.MOTD_ADMIN_SECRET?.trim();
  return s && s.length > 0 ? s : undefined;
}
