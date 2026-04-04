import { z } from 'zod';
import {
  getMotdFromKv,
  isVercelKvConfigured,
  setMotdInKv,
} from '@/lib/motd-kv';
import { getExpectedMotdAdminSecret } from '@/lib/motd-auth';
import { jsonNoStore } from '@/lib/json-no-store';
import { looksLikeRedisAuthOrPermissionFailure } from '@/lib/redis-error';

export const dynamic = 'force-dynamic';

const motdPostSchema = z.object({
  message: z.string().max(100),
});

const REDIS_WRITE_HINT =
  'Redis refused the write. Use the primary REST token with write access (UPSTASH_REDIS_REST_TOKEN or KV_REST_API_TOKEN), not a read-only token.';

export async function GET() {
  try {
    if (!isVercelKvConfigured()) {
      console.warn(
        'Redis REST not configured. Set KV_REST_API_URL + KV_REST_API_TOKEN (legacy) or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (Marketplace). MOTD GET returns empty.',
      );
      return jsonNoStore({ message: '' });
    }

    const message = await getMotdFromKv();
    return jsonNoStore({ message: message || '' });
  } catch (error) {
    console.error('Error fetching MOTD:', error);
    return jsonNoStore({ message: '' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const expected = getExpectedMotdAdminSecret();
    if (!expected) {
      return jsonNoStore({ error: 'Server misconfigured' }, { status: 503 });
    }

    const authHeader = req.headers.get('Authorization');
    const token = authHeader?.replace(/^Bearer\s+/i, '').trim();

    if (!token || token !== expected) {
      return jsonNoStore({ error: 'Unauthorized' }, { status: 401 });
    }

    const raw = await req.json().catch(() => null);
    const parsed = motdPostSchema.safeParse(raw);
    if (!parsed.success) {
      return jsonNoStore({ error: 'Invalid input' }, { status: 400 });
    }
    const { message } = parsed.data;

    if (!isVercelKvConfigured()) {
      return jsonNoStore(
        { error: 'KV Store not configured on Vercel' },
        { status: 500 },
      );
    }

    await setMotdInKv(message);

    return jsonNoStore({ success: true, message });
  } catch (error) {
    console.error('Error updating MOTD:', error);
    const raw = error instanceof Error ? error.message : String(error);
    if (looksLikeRedisAuthOrPermissionFailure(raw)) {
      return jsonNoStore({ error: REDIS_WRITE_HINT }, { status: 502 });
    }
    return jsonNoStore({ error: 'Internal Server Error' }, { status: 500 });
  }
}
