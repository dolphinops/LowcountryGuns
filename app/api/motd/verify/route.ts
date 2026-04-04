import { getExpectedMotdAdminSecret } from '@/lib/motd-auth';
import { jsonNoStore } from '@/lib/json-no-store';

/** Confirms Bearer token matches server secret (login check). */
export async function POST(req: Request) {
  const expected = getExpectedMotdAdminSecret();
  if (!expected) {
    return jsonNoStore({ error: 'Server misconfigured' }, { status: 503 });
  }

  const authHeader = req.headers.get('Authorization');
  const token = authHeader?.replace(/^Bearer\s+/i, '').trim();

  if (!token || token !== expected) {
    return jsonNoStore({ error: 'Unauthorized' }, { status: 401 });
  }

  return jsonNoStore({ ok: true });
}
