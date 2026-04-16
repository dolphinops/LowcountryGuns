# Full SEO Audit — Lowcountry Guns & Range (re-audit)

**Primary URL:** [https://lcguns.com/](https://lcguns.com/) — **Next.js on Vercel** (`server: Vercel`, prerendered HTML)  
**Preview URL (checks):** [https://lowcountry-guns.vercel.app/](https://lowcountry-guns.vercel.app/)  
**Re-audit date:** April 16, 2026  

> **Method:** Live `curl` against production and preview, `robots.txt` / `sitemap.xml` / `llms.txt`, HTML meta and JSON-LD spot checks. No `scripts/fetch_page.py` in repo; no Lighthouse/CrUX API in this pass.

---

## Executive summary

| Metric | Value |
|--------|--------|
| **SEO health score (estimated)** | **83 / 100** |
| **Business type** | Hybrid **local brick-and-mortar** (indoor shooting range + retail + training), strong service-area positioning |

### What improved since the last audit

1. **Canonical alignment:** Live HTML shows **`og:url`** = `https://lcguns.com` and **`og:image`** on the same host — no more `lowcountryguns.com` split in social tags.
2. **Structured data:** Homepage exposes a **single** primary **`ShootingRange`** graph (via shared `lib/site.ts`) with `@id` `https://lcguns.com/#organization`, `sameAs`, and consistent hours.
3. **Sitemap:** **`https://lcguns.com/first-experience`** appears in `sitemap.xml`.
4. **Preview / duplicate indexing:** **`X-Robots-Tag: noindex, nofollow`** on `lowcountry-guns.vercel.app`; **production `lcguns.com`** has **no** that header in spot check — intended split.
5. **GEO:** **`/llms.txt`** returns **200** with concise facts and policy links.
6. **Mobile hero:** Background **MP4 does not mount on small viewports** (`HeroBackdrop` client gate) — reduces cellular load and main-thread decode issues.

### Remaining opportunities (not blockers)

| Area | Note |
|------|------|
| **Lab / field CWV** | No PageSpeed or CrUX pull in this pass — score for Performance category stays conservative. |
| **Third parties** | Trustindex / Eventbrite — watch **INP** on training and homepage. |
| **CSP** | No `Content-Security-Policy` in headers — optional hardening. |
| **Location SERP extras** | FAQPage JSON-LD on location landings only if content truly qualifies. |

---

## Technical SEO (~22% weight) — score **88**

| Check | Result |
|--------|--------|
| **HTTP / TLS** | `200` on `/`; **HSTS** on Vercel (`strict-transport-security` with long `max-age`). |
| **Production host** | `lcguns.com` serves the **same** Next stack as the project (not legacy WordPress in this check). |
| **robots.txt** | Allow `/`, disallow `/api/`, `/_next/`, `/static/`; **Sitemap:** `https://lcguns.com/sitemap.xml`. |
| **Sitemap** | Valid urlset; **`/first-experience`** included among static routes. |
| **Preview** | `*.vercel.app` gets **`X-Robots-Tag: noindex, nofollow`** via middleware. |
| **Redirects** | `vercel.json` + `next.config.ts` retain legacy path 301s. |

---

## Content quality & E-E-A-T (~23% weight) — score **82**

- Homepage: clear offer, NAP, hours, pricing, training, FAQ, reviews — solid for local + regulated-adjacent niche.
- Blog: structured long-form in-repo; **BlogPosting** JSON-LD uses canonical origin.

---

## On-page SEO (~20% weight) — score **86**

- Title / description: strong, geo-specific defaults.
- **Open Graph:** `og:url` and image URLs align with **`https://lcguns.com`** on live fetch.
- Headings: single hero headline pattern; section H2/H3 structure is sensible.

---

## Schema & structured data (~10% weight) — score **82**

- Sitewide **ShootingRange** with stable **`@id`**, `url`, `sameAs`, `openingHoursSpecification` aligned with footer.
- Location pages keep dedicated JSON-LD with canonical **`SITE`** from `getCanonicalSiteOrigin()`.
- **GunStore** duplicate block removed from homepage (single primary entity).

---

## Performance & CWV (~10% weight) — score **78** (estimated)

- Static prerender + CDN — good baseline.
- **Mobile:** hero video deferred to **md+** only; poster `Image` with **priority** — materially better than autoplay MP4 on phones (still run PSI mobile to validate **LCP**).
- Third-party scripts remain the main INP risk — measure on `/training` and homepage.

---

## Images (~5% weight) — score **78**

- `next/image` + descriptive `alt` on key tiles (codebase pattern).
- OG image absolute URL matches canonical host on live HTML.

---

## AI search readiness / GEO (~10% weight) — score **78**

- **`https://lcguns.com/llms.txt`** and **`https://lowcountry-guns.vercel.app/llms.txt`** both **200** with structured summary and deep links.
- On-page copy remains citation-friendly (address, hours, pricing).

---

## Local SEO (contextual)

- NAP: **98 Purrysburg Rd, Hardeeville, SC 29927**, **843-784-5474** — consistent with schema.
- Keep **Google Business Profile** hours and primary category in sync with schema + footer.

---

## Security / headers (spot check)

- **HSTS** present.
- **CSP:** not set — backlog if you want defense-in-depth alongside JSON-LD and embeds.

---

## Scoring weights (seo-audit skill)

| Category | Weight | Subscore (this pass) |
|----------|--------|-------------------------|
| Technical SEO | 22% | 88 |
| Content quality | 23% | 82 |
| On-page SEO | 20% | 86 |
| Schema | 10% | 82 |
| Performance (CWV) | 10% | 78 |
| AI readiness | 10% | 78 |
| Images | 5% | 78 |

**Blended ≈ 83/100** — uplift driven by **canonical + schema consolidation**, **preview noindex**, **sitemap + llms.txt**, and **mobile hero behavior**. Residual gap is mostly **unmeasured CWV** and optional **CSP / FAQ schema** depth.

---

## Optional next steps

- Run **PageSpeed Insights** (mobile) on `/`, `/training`, `/shooting-range-savannah-ga`; log LCP / INP / CLS.
- **Google Search Console** after steady state: coverage, enhancements, `/sitemap.xml` submit.
- PDF pipeline: still no `scripts/google_report.py` in repo.
