import { NextResponse } from 'next/server';

const NO_STORE = { 'Cache-Control': 'private, no-store, max-age=0' } as const;

/** JSON response that must not be cached (MOTD, auth-adjacent APIs). */
export function jsonNoStore(data: unknown, init?: { status?: number }) {
  return NextResponse.json(data, {
    status: init?.status,
    headers: NO_STORE,
  });
}
