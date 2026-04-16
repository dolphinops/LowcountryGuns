import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isCanonicalSiteHost } from "@/lib/site";

/**
 * Non-canonical hosts (*.vercel.app, localhost, etc.) must not accumulate search equity.
 * Canonical production: lcguns.com (and optional www).
 *
 * Next.js 16+: `middleware` was renamed to `proxy` (same behavior at the network boundary).
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return NextResponse.next();
  }

  const host = request.headers.get("host");
  if (isCanonicalSiteHost(host)) {
    return NextResponse.next();
  }

  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
