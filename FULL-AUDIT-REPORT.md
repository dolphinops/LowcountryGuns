# Full SEO Audit — Lowcountry Guns & Range

## Audit scope (canonical domain)

| | |
|--|--|
| **Hostname audited** | **`lcguns.com`** (production) |
| **Primary origin** | **`https://lcguns.com`** — all sitemap `<loc>` URLs, live fetches, and recommendations assume this apex host unless stated otherwise. |
| **Out of scope** | Preview URLs (`*.vercel.app`), localhost, and any domain that is not `lcguns.com` / `www.lcguns.com` — those are only noted where middleware affects indexing. |
| **`www.lcguns.com`** | Redirects to apex **`https://lcguns.com`** (308); audit historical notes may still compare both hosts. |

**Property audited:** `https://lcguns.com/`  
**Audit date:** 2026-04-22  
**Method:** Live HTTP fetch against **`https://lcguns.com`** (homepage, `robots.txt`, `sitemap.xml`, `llms.txt`), HEAD crawl of all sitemap URLs (37) on **`lcguns.com`**, response headers, and static review of `app/` routes and metadata.  
**Note:** The workspace does not include `scripts/fetch_page.py` / `scripts/google_auth.py` from the audit skill template, so CrUX, GSC indexation, GA4, Lighthouse lab scores, and Playwright screenshots were **not** pulled automatically.

---

## Executive summary

| Metric | Value |
|--------|--------|
| **SEO health score (estimated)** | **79 / 100** |
| **Business type** | **Local brick-and-mortar** — indoor shooting range + pro shop + training (Hardeeville, SC; regional draw Savannah / Hilton Head / Beaufort). |
| **Sitemap URLs checked** | 37 — all returned **HTTP 200** |
| **robots.txt** | Allows `/`; disallows `/api/`, `/_next/`, `/static/`; declares sitemap |

### Top 5 issues (severity)

1. **High — Host consolidation:** *Mitigated in app (2026):* **`www.lcguns.com`** now **308-redirects** to **`https://lcguns.com`**. Re-verify in production after deploy; keep **GSC** on the apex property.
2. **High — Canonical signals:** *Mitigated in app (2026):* apex responses add an HTTP **`Link` `rel="canonical"`** header; some routes also use **`metadata.alternates.canonical`**. Re-fetch headers / HTML after deploy; finish **GSC** URL Inspection pass.
3. **Medium — Security headers:** Strong **HSTS** present; no **Content-Security-Policy**, **X-Frame-Options**, or **Permissions-Policy** in sampled responses (Vercel + `next.config` only add Referrer-Policy and X-DNS-Prefetch-Control).
4. **Medium — Performance evidence:** No CrUX / PageSpeed run in this audit. Homepage payload is large (~168KB HTML) with rich media; validate **LCP / INP / CLS** in production (especially hero video and third-party analytics).
5. **Low — `humans.txt`:** Returns **404** (optional; no SEO penalty).

### Top 5 quick wins

1. Submit / refresh **`https://lcguns.com/sitemap.xml`** in Google Search Console (already valid XML and discoverable from `robots.txt`).
2. After deploy, confirm **308 www → apex** and **`Link: rel="canonical"`** in response headers; run **GSC URL Inspection** on key URLs.
3. Keep **`llms.txt`** updated when major services change — it is already well structured for AI crawlers.
4. Ensure **`NEXT_PUBLIC_SITE_URL`** on Vercel matches the GSC property (e.g. `https://lcguns.com`) so sitemap and metadata stay aligned.
5. Add **PageSpeed Insights** or **CrUX** checks to CI or a quarterly calendar (field data drives the Performance score).

---

## Category scores (0–100) and weights

| Category | Score | Notes |
|----------|-------|--------|
| Technical SEO (22%) | 76 | Crawl + index basics strong; host/canonical and header hardening gaps |
| Content quality (23%) | 82 | Clear local value prop, service pages, blog, FAQ; continue E-E-A-T depth on money pages |
| On-page SEO (20%) | 80 | Solid default metadata in `app/layout.tsx`; per-page titles need periodic review |
| Schema (10%) | 85 | `ShootingRange` in site layout; FAQ JSON-LD on home; local + article patterns on key routes |
| Performance / CWV (10%) | 70 | *Estimated* without field data; Next/Image and modern stack help |
| AI search readiness (10%) | 88 | **`/llms.txt` 200** with accurate NAP-style facts and policy links |
| Images (5%) | 82 | Descriptive `alt` patterns in homepage code; spot-check remaining pages |

**Weighted composite ≈ 79.**

---

## Technical SEO

| Item | Status |
|------|--------|
| **robots.txt** | OK — allows crawl; sitemap line present |
| **XML sitemap** | OK — 37 URLs; includes blog posts and `/the-range/firearm-transfer` |
| **HTTP status** | All sitemap URLs **200** on HEAD check |
| **Redirects** | `next.config.ts` has permanent redirects for legacy paths (`/about` → `/team`, etc.) |
| **Non-canonical hosts** | Middleware sets **noindex** for non-production hosts; **`www.lcguns.com`** **308** → apex **`lcguns.com`**; indexable host list is **apex only** |
| **Security headers** | HSTS present; consider CSP (report-only first), frame-ancestors, Permissions-Policy |

---

## Content & E-E-A-T

- Strong **local relevance** (address, hours, service cities, range rules) supports trust for a regulated category (firearms).
- **Blog** and **FAQ** support informational queries and citability.
- **Recommendation:** Add or refresh **author / bylines** and **last updated** signals on long-form guides where appropriate; keep medical/legal claims conservative and accurate.

---

## On-page SEO

- Root **title** and **meta description** present and keyword-aware (verified in fetched HTML).
- **Single H1** on homepage in source (`app/(site)/page.tsx`).
- **Recommendation:** Audit a sample of location/training pages for unique titles and meta descriptions (avoid boilerplate duplication).

---

## Schema / structured data

- **ShootingRange** (and related) via `getShootingRangeJsonLd()` in `app/(site)/layout.tsx`.
- **FAQPage** on homepage via `buildFaqPageJsonLd`.
- **Location-style** blocks on regional landing pages (e.g. Hilton Head, Savannah, Beaufort).
- **Blog:** Article-style JSON-LD in `app/(site)/blog/[slug]/page.tsx`.
- **Recommendation:** Run Rich Results Test on homepage + one blog URL after each major template change; avoid conflicting `@id` graphs if you add Organization sitewide.

---

## Performance (CWV)

- **Not measured** in this pass (no PSI/CrUX API).
- Homepage uses **video hero** (`HeroBackdrop`), many images (many via `next/image` — good), analytics scripts — validate **INP** after GA + Vercel Analytics deploy.

---

## AI search readiness (GEO)

- **`https://lcguns.com/llms.txt`** — **200**, clear summary, canonical URL, policies, contact — **excellent**.
- Internal linking from guides to **FAQ**, **waiver**, and **contact** supports bot traversal.

---

## Images

- Homepage facility/gallery blocks use **specific alts** (good for accessibility and image search).
- **Recommendation:** Periodic audit for decorative vs informative images and lazy-loading below the fold.

---

## Crawl scope

- **Domain:** All crawled URLs were **`https://lcguns.com/...`** from the live **`https://lcguns.com/sitemap.xml`**.
- **Pages exercised:** 37 (full sitemap for **lcguns.com**).
- **robots.txt:** Fetched from **`https://lcguns.com/robots.txt`** — did not block marketing paths used here.
- **Not in sitemap (expected):** `/admin`, `/api/*`, `/embed/*` — appropriate.

---

## Optional enrichments (when tooling exists)

- **`python scripts/google_auth.py --check`** → attach CrUX, GSC coverage, GA4 organic trends.
- **`scripts/fetch_page.py` + Playwright** → screenshots and mobile layout pass.
- **`scripts/google_report.py --type full`** → enterprise PDF export.

---

*End of report.*
