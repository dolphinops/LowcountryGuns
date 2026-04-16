# SEO Action Plan — Lowcountry Guns & Range

**Primary audit URL:** [https://lowcountry-guns.vercel.app/](https://lowcountry-guns.vercel.app/)  
**Intended production canonical (from codebase):** `https://lcguns.com` (`metadataBase`, sitemap `<loc>`)

Priority labels follow the seo-audit skill: **Critical** → **Low**.

---

## Critical

| # | Action | Rationale |
|---|--------|-----------|
| C1 | **Unify canonical origin** across `openGraph.url`, Twitter card absolute URLs, **all** JSON-LD `url` / `@id` / primary `image` URLs, and internal absolute links in schema. Prefer **`https://lcguns.com`** everywhere *or* explicitly document `lowcountryguns.com` as 301 → `lcguns.com` and stop emitting the alternate in metadata. | Eliminates split signals between **lcguns.com**, **lowcountryguns.com**, and **lowcountry-guns.vercel.app** (observed on live HTML). |
| C2 | **Single primary structured data** on the homepage: remove redundant overlapping `@type` (ShootingRange vs GunStore) or relate them with `@id` + `Department` pattern without conflicting `url`. | Reduces risk of incorrect / ambiguous rich result entity. |

---

## High

| # | Action | Rationale |
|---|--------|-----------|
| H1 | **Preview / staging:** If `*.vercel.app` must not rank, set **`robots` noindex** (Next `metadata` or `headers()` `X-Robots-Tag`) when `VERCEL_ENV !== 'production'` or when host is not `lcguns.com`. | Prevents duplicate indexing of deployment URLs. |
| H2 | **`metadataBase` from env:** e.g. `NEXT_PUBLIC_SITE_URL` for previews so OG images and canonicals resolve to the tab origin during QA. | Stops false negatives in social debuggers. |
| H3 | **Sitemap:** Add missing route **`/first-experience`** to [`app/sitemap.ts`](app/sitemap.ts). | Page is in primary nav but omitted from sitemap list. |

---

## Medium

| # | Action | Rationale |
|---|--------|-----------|
| M1 | Run **PageSpeed Insights** (mobile) on homepage, `/contact`, `/training`, one **shooting-range-*** URL; fix any **LCP** > 2.5s or **INP** regressions tied to video or third-party scripts. | Validates real-user metrics; not run in this audit pass. |
| M2 | **Location pages:** Ensure each has unique `meta title` / `description`, `alternates.canonical` (already on three shooting-range pages), and **FAQPage** JSON-LD only where content truly matches FAQ schema guidelines. | Extra local SERP surface without stuffing. |
| M3 | Consider **`/llms.txt`** at canonical host with concise facts + policy links. | GEO / AI citation hygiene. |

---

## Low

| # | Action | Rationale |
|---|--------|-----------|
| L1 | Add **security headers** (`Content-Security-Policy` report-only first) via `next.config` headers or Vercel config — tune for any inline scripts used by JSON-LD. | Defense in depth for public forms and embeds. |
| L2 | **Screenshots / visual regression** (desktop + mobile) for hero, training grid, and footer — store in `screenshots/` if you adopt the full skill pipeline with Playwright. | Catches typographic / CTA issues across breakpoints. |

---

## Verification checklist (after changes)

1. `curl -sS https://lcguns.com/ | grep -E 'og:url|canonical|application/ld\\+json'` — single domain in absolute URLs.  
2. Rich Results Test / Schema.org validator on homepage — one clear `LocalBusiness` / `ShootingRange` primary.  
3. `curl -sS https://lcguns.com/sitemap.xml | grep first-experience` — URL present when live on Next.  
4. Vercel preview response: `X-Robots-Tag: noindex` **or** confirm only production domain is publicly linked.

---

## Not in scope for this pass

- **Live WordPress** at `https://lcguns.com` (Kinsta / Rank Math) vs **Next** cutover — DNS/hosting migration is a **go-live** decision outside this file’s implementation list. When Next serves `lcguns.com`, re-run this audit against production.
