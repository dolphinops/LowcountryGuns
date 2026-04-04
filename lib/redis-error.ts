/** Heuristic: Upstash/Redis REST errors when token is read-only or invalid. */
export function looksLikeRedisAuthOrPermissionFailure(message: string): boolean {
  return /invalid\s*token|read[\s-]*only|WRONGPASS|NOREADWRITE|\b401\b|\b403\b|unauthorized/i.test(
    message,
  );
}
