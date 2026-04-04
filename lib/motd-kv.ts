/**
 * MOTD persistence: Vercel KV / Upstash Redis (REST).
 *
 * Legacy Vercel KV used `KV_REST_API_URL` + `KV_REST_API_TOKEN`.
 * New Marketplace Upstash Redis typically uses `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`.
 *
 * @see https://vercel.com/docs/storage/vercel-kv/kv-reference
 * @see https://vercel.com/marketplace?category=storage&search=redis
 */
import { createClient, type VercelKV } from '@vercel/kv';

export const MOTD_KV_KEY = 'motd_banner_message' as const;

export type KvRestConfig = { url: string; token: string };

/**
 * Resolve REST URL + token as a coherent pair only.
 * Mixing KV_REST_API_URL with UPSTASH_REDIS_REST_TOKEN breaks auth; avoid OR-ing URL and token separately.
 */
export function resolveKvRestConfig(): KvRestConfig | null {
  const kvUrl = process.env.KV_REST_API_URL?.trim();
  const kvToken = process.env.KV_REST_API_TOKEN?.trim();
  if (kvUrl && kvToken) return { url: kvUrl, token: kvToken };

  const upUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const upToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (upUrl && upToken) return { url: upUrl, token: upToken };

  return null;
}

export function isVercelKvConfigured(): boolean {
  return resolveKvRestConfig() !== null;
}

let _client: VercelKV | null = null;
let _clientSig = '';

function getClient(): VercelKV | null {
  const cfg = resolveKvRestConfig();
  if (!cfg) return null;
  const sig = `${cfg.url}\0${cfg.token}`;
  if (!_client || _clientSig !== sig) {
    _client = createClient({ url: cfg.url, token: cfg.token });
    _clientSig = sig;
  }
  return _client;
}

export async function getMotdFromKv(): Promise<string> {
  const client = getClient();
  if (!client) return '';
  const value = await client.get<string>(MOTD_KV_KEY);
  return value ?? '';
}

export async function setMotdInKv(message: string): Promise<void> {
  const client = getClient();
  if (!client) {
    throw new Error('Vercel KV / Upstash Redis is not configured');
  }
  await client.set(MOTD_KV_KEY, message);
}
