import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CANONICAL_SITE_ORIGIN, getCanonicalSiteOrigin, isCanonicalSiteHost } from "@/lib/site";

function hostnameFromHostHeader(host: string | null): string | null {
  if (!host) return null;
  return host.split(":")[0]?.split(",")[0]?.trim().toLowerCase() ?? null;
}

/** Hardening headers; omit X-Frame-Options on `/embed/*` so pages may be framed cross-origin (e.g. waiver embed). */
function applySecurityHeaders(res: NextResponse, pathname: string) {
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  if (!pathname.startsWith("/embed")) {
    res.headers.set("X-Frame-Options", "SAMEORIGIN");
  }
}

/**
 * Non-canonical hosts (*.vercel.app, localhost, etc.) must not accumulate search equity.
 * Canonical production: apex **lcguns.com** only; **www** redirects here (see ACTION-PLAN).
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const hostname = hostnameFromHostHeader(host);
  const { pathname } = request.nextUrl;

  const indexKey = process.env.INDEXNOW_KEY?.trim();
  if (indexKey && pathname === `/${indexKey}.txt`) {
    const res = NextResponse.rewrite(new URL("/api/indexnow-key", request.url));
    applySecurityHeaders(res, pathname);
    return res;
  }

  if (hostname === "www.lcguns.com") {
    const dest = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      CANONICAL_SITE_ORIGIN,
    );
    const res = NextResponse.redirect(dest, 308);
    applySecurityHeaders(res, pathname);
    return res;
  }

  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    const res = NextResponse.next();
    applySecurityHeaders(res, pathname);
    return res;
  }

  if (isCanonicalSiteHost(host)) {
    const res = NextResponse.next();
    const origin = getCanonicalSiteOrigin();
    const path = request.nextUrl.pathname || "/";
    const canonicalHref = new URL(path, origin).href;
    res.headers.set("Link", `<${canonicalHref}>; rel="canonical"`);
    applySecurityHeaders(res, pathname);
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  applySecurityHeaders(res, pathname);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
