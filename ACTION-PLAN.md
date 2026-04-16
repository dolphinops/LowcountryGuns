# SEO Action Plan — Lowcountry Guns & Range

**Production:** [https://lcguns.com/](https://lcguns.com/)  
**Preview:** [https://lowcountry-guns.vercel.app/](https://lowcountry-guns.vercel.app/) (noindex via `X-Robots-Tag`)

**Status (April 16, 2026 re-audit):** Items **C1, C2, H1, H3, M3** from the prior plan are **implemented** (canonical `lcguns.com`, single ShootingRange JSON-LD, middleware noindex on non-canonical hosts, `/first-experience` in sitemap, `public/llms.txt`). **H2** (`NEXT_PUBLIC_SITE_URL`) is documented in `.env.example` and optional on Vercel production.

---

## Medium (remaining)

| # | Action | Rationale |
|---|--------|-----------|
| M1 | Run **PageSpeed Insights** (mobile) on `/`, `/contact`, `/training`, one **shooting-range-*** URL; fix regressions (**LCP**, **INP**, **CLS**). | Field/lab data not captured in markdown audits. |
| M2 | **Done (Apr 2026):** **FAQPage** JSON-LD + visible accordions on `/`, `/faq`, and Savannah / Hilton Head / Beaufort shooting-range pages (`lib/jsonld-faq.ts`, `data/seo-location-faqs.ts`, `components/seo/LocationFaqSection.tsx`). | FAQ markup mirrors on-page Q&A. |

---

## Low

| # | Action | Rationale |
|---|--------|-----------|
| L1 | **Partial:** Global headers in `next.config.ts`: **Referrer-Policy: strict-origin-when-cross-origin**, **X-DNS-Prefetch-Control: on**. Full **Content-Security-Policy** (report-only or enforce) still optional — tune for Trustindex / Eventbrite / inline JSON-LD. | Safer defaults without breaking third parties. |
| L2 | **Playwright** screenshots (desktop + mobile) for hero, training, footer — optional `screenshots/` folder. | Visual QA for marketing. |

---

## Verification (current)

1. `curl -sSIL https://lcguns.com/ | grep -i x-robots` — expect **empty** (indexable production).  
2. `curl -sSIL https://lowcountry-guns.vercel.app/ | grep -i x-robots` — expect **`noindex, nofollow`**.  
3. `curl -sS https://lcguns.com/ | grep og:url` — expect **`https://lcguns.com`**.  
4. `curl -sS https://lcguns.com/sitemap.xml | grep first-experience` — expect **hit**.  
5. `curl -sSIL https://lcguns.com/llms.txt` — expect **200**.

---

## Historical note

The earlier plan referred to **WordPress on `lcguns.com`**; production now resolves to the **Next.js** deployment. If DNS or hosting changes again, re-run checks (1)–(5) above.
