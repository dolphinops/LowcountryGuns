import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CANONICAL_SITE_ORIGIN, getCanonicalSiteOrigin, isCanonicalSiteHost } from "@/lib/site";

function hostnameFromHostHeader(host: string | null): string | null {
  if (!host) return null;
  return host.split(":")[0]?.split(",")[0]?.trim().toLowerCase() ?? null;
}

/**
 * Non-canonical hosts (*.vercel.app, localhost, etc.) must not accumulate search equity.
 * Canonical production: apex **lcguns.com** only; **www** redirects here (see ACTION-PLAN).
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const hostname = hostnameFromHostHeader(host);

  if (hostname === "www.lcguns.com") {
    const dest = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      CANONICAL_SITE_ORIGIN,
    );
    return NextResponse.redirect(dest, 308);
  }

  const { pathname } = request.nextUrl;
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return NextResponse.next();
  }

  if (isCanonicalSiteHost(host)) {
    const res = NextResponse.next();
    const origin = getCanonicalSiteOrigin();
    const path = request.nextUrl.pathname || "/";
    const canonicalHref = new URL(path, origin).href;
    res.headers.set("Link", `<${canonicalHref}>; rel="canonical"`);
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
