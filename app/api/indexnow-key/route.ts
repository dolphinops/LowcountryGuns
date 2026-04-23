import { NextResponse } from "next/server";

/**
 * Serves the IndexNow verification key (plain text body must equal the key).
 * Requested at `/{INDEXNOW_KEY}.txt` via middleware rewrite.
 */
export async function GET() {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key) {
    return new NextResponse("Not configured", { status: 404 });
  }

  return new NextResponse(key, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
