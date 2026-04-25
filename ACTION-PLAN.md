# SEO Action Plan — Lowcountry Guns & Range

Prioritized from **Critical** → **Low**. Effort: **S** small / **M** medium / **L** large.

## Scope — `lcguns.com`

This plan applies to the **production** site at **`https://lcguns.com`** (hostname **`lcguns.com`**). Configure **Google Search Console**, **`NEXT_PUBLIC_SITE_URL`**, and sitemap submission for **`https://lcguns.com`** (not Vercel preview URLs or other domains). Items that mention **`www.lcguns.com`** are about consolidating traffic **onto your chosen `lcguns.com` property** (apex vs www).

---

## Critical (fix immediately if applicable)

| # | Action | Rationale | Effort |
|---|--------|-----------|--------|
| — | *None identified in this audit.* | Sitemap URLs return 200; robots allows indexing of public pages. | — |

---

## High (within ~1 week)

**Done in repo (deploy to verify):**

- **#1 — Apex host:** `middleware.ts` issues **308** from **`www.lcguns.com`** → **`https://lcguns.com`** (same path and query string). `lib/site.ts` treats only **`lcguns.com`** as indexable (www is not a parallel indexable host).
- **#2 — Canonical:** Apex HTML routes get an HTTP **`Link: <…>; rel="canonical"`** header built from **`getCanonicalSiteOrigin()`** + pathname (query stripped). Key pages that already export **`alternates.canonical`** keep Next’s `<link rel="canonical">` as well; re-check response headers + View Source after deploy.

| # | Action | Rationale | Effort |
|---|--------|-----------|--------|
| ~~1~~ | ~~Host consolidation~~ | *Implemented — see above.* | — |
| ~~2~~ | ~~Canonical verification~~ | *Implemented — confirm in production.* | **S** |
| 3 | In **Google Search Console** for **`https://lcguns.com/`** (or Domain **`lcguns.com`**), confirm the property matches your preferred host; submit **`https://lcguns.com/sitemap.xml`**; use **URL Inspection** on `https://lcguns.com/` plus 2–3 template URLs. | Ensures discovery and surfaces coverage errors early for **lcguns.com**. | **S** |

---

## Medium (within ~1 month)

**Done in repo (deploy to pick up CSP header):**

- **#4 — CSP (report-only):** `next.config.ts` sends **`Content-Security-Policy-Report-Only`** from `lib/csp-report-only.ts` (permissive: GA/GTM, Vercel scripts, HubSpot, YouTube, Eventbrite, fonts, frames). Does **not** block assets; watch browser console / add a **`report-uri` / Reporting-API** endpoint later, then tighten directives.

| # | Action | Rationale | Effort |
|---|--------|-----------|--------|
| ~~4~~ | ~~CSP report-only~~ | *Implemented — refine after deploy.* | **L** |
| 5 | Run **PageSpeed Insights** (mobile + desktop) on **`https://lcguns.com/`**, **`https://lcguns.com/the-range`**, and one **`https://lcguns.com/blog/...`** URL; fix largest **LCP** and **INP** regressions. | Field CWV affects ranking and UX; hero + third parties are common bottlenecks. | **M** |
| 6 | **Schema QA:** Google Rich Results Test on homepage, one location page, one article after changes. | Catches JSON-LD syntax or policy issues before rollout. | **S** |
| 7 | **Content:** Refresh top 3 commercial pages (memberships, training, transfers) with clear **last updated** date where facts change (pricing, laws). | E-E-A-T and freshness for YMYL-adjacent topics. | **M** |

---

## Low (backlog)

**Done in repo:**

- **#9 — Smoke test:** Run **`npm run seo:smoke`** (or `SITE=https://lcguns.com npm run seo:smoke`) to verify robots, sitemap **200**, homepage **`nosniff`** + **`Link` canonical**, and **www → apex** redirect. Wire this into Vercel/GitHub **CI** when you want it on every deploy.

| # | Action | Rationale | Effort |
|---|--------|-----------|--------|
| 8 | Optional **`humans.txt`** if you want a human-readable credits/contact file (404 today — harmless). | Minor brand signal only. | **S** |
| ~~9~~ | ~~SEO smoke test~~ | *Script added — optional CI hook.* | **S** |
| 10 | When `scripts/google_report.py` is available, generate **PDF audit** for stakeholders. | Skill-recommended deliverable. | **S** (once scripted) |

---

## Success metrics (30–60 days)

- GSC: sitemap **“Success”**, decreasing **“Crawled — not indexed”** for important URLs (where applicable).
- Stable **CTR** and **average position** on branded + core local queries (GSC).
- **CWV** “Good” URLs in CrUX / PSI field where measured.
- No increase in **duplicate** / **alternate page with proper canonical** errors after host consolidation.

---

*Generated alongside `FULL-AUDIT-REPORT.md`.*
