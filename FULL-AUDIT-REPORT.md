# Full SEO Audit — Lowcountry Guns & Range

**Audit URL:** [https://lowcountry-guns.vercel.app/](https://lowcountry-guns.vercel.app/)  
**Audit date:** April 16, 2026  
**Stack observed:** Next.js on Vercel (prerendered HTML, `server: Vercel`, `strict-transport-security` present)

> **Scope note:** `scripts/fetch_page.py` and optional Google/DataForSEO helpers from the audit skill are not in this repo. Findings combine live HTTP/HTML checks against the Vercel host, `curl` for `robots.txt` / `sitemap.xml`, and static review of the Next.js codebase (`app/`, `vercel.json`).

---

## Executive summary

| Metric | Value |
|--------|--------|
| **SEO health score (estimated)** | **64 / 100** |
| **Business type** | Hybrid **local brick-and-mortar** (indoor shooting range + retail/training) — SAB-style service area copy for Savannah / Hilton Head / Beaufort |

### Top 5 issues (severity)

1. **Critical — Split canonical / brand URLs:** On the audited host, HTML exposes **`og:url`** as `https://lowcountryguns.com`, **Open Graph / Twitter images** as `https://lcguns.com/...`, **ShootingRange** JSON-LD as `lowcountryguns.com`, and **GunStore** JSON-LD as `lcguns.com` — while the page is served from **`lowcountry-guns.vercel.app`**. Search engines and social crawlers see **three** authority targets plus preview host noise.
2. **High — Robots + sitemap point off-host:** `robots.txt` declares `Sitemap: https://lcguns.com/sitemap.xml` and the sitemap `<loc>` entries are all `https://lcguns.com/...`. That is appropriate for **production** canonical strategy but confirms the preview domain is **not** the URL set to consolidate signals; any accidental indexing of the preview duplicates content without self-referential sitemap entries.
3. **High — Duplicate JSON-LD entity definitions on homepage:** Both **ShootingRange** (layout) and **GunStore** (home page) with **different** `url` / `@id` / `image` domains — risks ambiguous primary entity for rich results.
4. **Medium — Sitemap completeness (code):** `app/sitemap.ts` does not include **`/first-experience`**, which exists in the app and is linked from navigation ([sitemap source](app/sitemap.ts)).
5. **Medium — AI / GEO surface:** No `llms.txt` (optional); preview host should use `X-Robots-Tag: noindex` if the deployment must stay non-canonical (Vercel project or middleware).

### Top 5 quick wins

1. Pick **one** canonical apex (`https://lcguns.com` per `metadataBase` is the clearest production choice) and align **`openGraph.url`**, **all JSON-LD `url` / `@id` / `sameAs`**, and **schema images** to that origin (or relative paths resolved by `metadataBase`).
2. Collapse homepage structured data to **one** primary `@type` (e.g. `ShootingRange` or `LocalBusiness` + `department` if needed) with a single `@id`.
3. Add **`/first-experience`** to `app/sitemap.ts` with sensible `changeFrequency` / `priority`.
4. For **preview only:** set environment-based `metadata.robots = { index: false, follow: false }` or `X-Robots-Tag: noindex` so Google does not index `*.vercel.app`.
5. Add **`VERCEL_URL` / `NEXT_PUBLIC_SITE_URL`-aware** `metadataBase` in non-production so OG tags on previews match the opened tab (reduces QA confusion).

---

## Technical SEO (~22% weight) — score ~62

| Check | Result |
|--------|--------|
| **HTTP / TLS** | `200` on `/`; **HSTS** with preload (`strict-transport-security: max-age=63072000; includeSubDomains; preload`). |
| **Caching** | `x-vercel-cache: HIT` / prerender — good for TTFB on static shell. |
| **robots.txt** | Serves Next-generated rules: allow `/`, disallow `/api/`, `/_next/`, `/static/`; sitemap line points to **`https://lcguns.com/sitemap.xml`**. |
| **Sitemap** | `/sitemap.xml` returns `200` with XML urlset; all `<loc>` values use **`https://lcguns.com`**, not the audit host. |
| **Redirects** | `vercel.json` + `next.config.ts` include useful legacy path 301s (e.g. indoor gun range → shooting-range slugs). |
| **Indexability of preview** | No `noindex` observed on homepage response headers from spot check — **risk** if this URL is not intended to rank. |

**Crawl model:** Internal route count in-repo is modest (~34 `page.tsx` files + blog slugs from `data/blog-posts.ts`), well under the skill’s 500-page cap. No full recursive crawl was executed; sitemap + route list is sufficient for this site size.

---

## Content quality & E-E-A-T (~23% weight) — score ~82

- **Homepage** ([live snapshot](https://lowcountry-guns.vercel.app/)): Clear value prop, location, hours, pricing, training paths, FAQ block, reviews — strong **local + YMYL-adjacent** signals for a range.
- **Blog** exists with long-form posts in data — supports expertise when published on canonical domain.
- **Thin content risk:** Low for core pages; embed/waiver utility routes are fine if noindexed or minimally linked.

---

## On-page SEO (~20% weight) — score ~58

- **Title / description** (root metadata): Clear, keyword-aware, geographically scoped — good.
- **Canonical / social consistency:** Weakened by **`og:url`** ≠ **`metadataBase`** domain and mixed absolute URLs in tags — **priority fix** before production cutover.
- **Heading hierarchy** (from rendered content): Single H1-style hero; sections use H2/H3 — acceptable pattern.
- **Internal linking:** Service-area and training links present in body/footer; location landing pages exist in codebase.

---

## Schema & structured data (~10% weight) — score ~55

- **ShootingRange** (site layout): `url` / `@id` on `lowcountryguns.com` ([`app/(site)/layout.tsx`](app/(site)/layout.tsx)).
- **GunStore** (homepage): `url` / `image` on `lcguns.com` ([`app/(site)/page.tsx`](app/(site)/page.tsx)).
- **LocalBusiness-style** JSON-LD on select location pages — good pattern when URLs align with canonical.

**Recommendation:** One graph, one `@id`, `sameAs` for GBP/Facebook/Instagram only, consistent `url` with production canonical.

---

## Performance & CWV (~10% weight) — score ~72 (lab not run)

- Static prerender + CDN cache hit — positive.
- Hero **video** with `preload="none"` + poster — sensible for LCP tradeoffs; still validate **LCP** (poster vs first paint) in PageSpeed **on mobile**.
- Third-party widgets (e.g. Eventbrite) — monitor **INP** on training pages.

*CrUX / Lighthouse was not run in this pass (no `scripts/google_auth.py` / CI artifact).*

---

## Images (~5% weight) — score ~70

- `next/image` and descriptive `alt` on key homepage tiles (code review).
- **OG image** resolves via absolute `https://lcguns.com/images/og-image.jpg` while `og:url` says `lowcountryguns.com` — inconsistent social debugging.

---

## AI search readiness / GEO (~10% weight) — score ~48

- No **`/llms.txt`** in repo.
- **Citability:** Strong factual blocks (hours, address, pricing) help; split URLs hurt unambiguous citation.

---

## Local SEO (contextual)

- NAP consistent in on-page copy: **98 Purrysburg Rd, Hardeeville, SC**, **843-784-5474**.
- **GBP alignment:** Ensure GBP primary category and hours match schema `openingHoursSpecification` (Friday 10–19 matches footer copy on live scrape).

---

## Security / headers (spot check)

- **HSTS** present on Vercel deployment.
- **No** `Content-Security-Policy` in sample response — optional hardening for YMYL-adjacent sites.

---

## Scoring weights (from skill)

| Category | Weight | Est. subscore |
|----------|--------|----------------|
| Technical SEO | 22% | 62 |
| Content quality | 23% | 82 |
| On-page SEO | 20% | 58 |
| Schema | 10% | 55 |
| Performance (CWV) | 10% | 72 |
| AI readiness | 10% | 48 |
| Images | 5% | 70 |

**Blended ≈ 64/100** — pulled down primarily by **URL / schema fragmentation** and **preview indexability** considerations, not by thin copy.

---

## Optional next steps (tooling)

- Run **Lighthouse / PageSpeed Insights** mobile on homepage + `/training` + one location page; attach scores to a future revision of this file.
- If Google APIs are configured locally, add `scripts/google_auth.py` per skill and enrich with **CrUX + GSC**.

---

## PDF

The skill’s `scripts/google_report.py --type full` is **not present** in this repository. If you add that script (or an external report generator), a PDF can be produced from this markdown.
