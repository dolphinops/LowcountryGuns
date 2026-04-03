import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

const BANNER_KEY = 'motd_banner_message';
const ADMIN_PASSWORD = 'lcguns2026';

export async function GET() {
  try {
    // If KV is not configured, we'll return an empty string or a fallback
    if (!process.env.KV_REST_API_URL) {
      console.warn('Vercel KV not configured. Using fallback memory store.');
      return NextResponse.json({ message: '' });
    }

    const message = await kv.get<string>(BANNER_KEY);
    return NextResponse.json({ message: message || '' });
  } catch (error) {
    console.error('Error fetching MOTD:', error);
    return NextResponse.json({ message: '' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const authHeader = req.headers.get('Authorization');
    const password = authHeader?.replace('Bearer ', '');

    // Authorization Check
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Validation
    if (message.length > 100) {
      return NextResponse.json({ error: 'Message too long (max 100 chars)' }, { status: 400 });
    }

    // Save to KV
    if (!process.env.KV_REST_API_URL) {
      return NextResponse.json({ error: 'KV Store not configured on Vercel' }, { status: 500 });
    }

    await kv.set(BANNER_KEY, message);
    
    return NextResponse.json({ success: true, message });
  } catch (error) {
    console.error('Error updating MOTD:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
