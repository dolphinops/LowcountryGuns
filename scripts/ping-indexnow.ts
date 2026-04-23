/**
 * Submit URLs from the production sitemap to IndexNow (Bing, Yandex, Naver, etc.).
 *
 * Usage (from repo root):
 *   INDEXNOW_KEY=yourkey NEXT_PUBLIC_SITE_URL=https://lcguns.com npx tsx scripts/ping-indexnow.ts
 *
 * Requires the key file to be reachable at https://lcguns.com/{INDEXNOW_KEY}.txt (after deploy).
 */

import "dotenv/config";

const INDEXNOW_URL = "https://api.indexnow.org/IndexNow";
const BATCH = 10_000;

async function main() {
  const key = process.env.INDEXNOW_KEY?.trim();
  const site = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://lcguns.com";
  if (!key) {
    console.error("Missing INDEXNOW_KEY.");
    process.exit(1);
  }

  let origin: string;
  try {
    origin = new URL(site).origin;
  } catch {
    console.error("Invalid NEXT_PUBLIC_SITE_URL:", site);
    process.exit(1);
  }

  const host = new URL(origin).hostname;
  const keyLocation = `${origin}/${key}.txt`;
  const sitemapUrl = `${origin}/sitemap.xml`;

  const sm = await fetch(sitemapUrl);
  if (!sm.ok) {
    console.error("Failed to fetch sitemap:", sm.status, sitemapUrl);
    process.exit(1);
  }
  const xml = await sm.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => m[1].trim()).filter(Boolean);
  if (locs.length === 0) {
    console.error("No <loc> entries found in sitemap.");
    process.exit(1);
  }

  console.log("IndexNow:", { host, keyLocation, urls: locs.length });

  for (let i = 0; i < locs.length; i += BATCH) {
    const urlList = locs.slice(i, i + BATCH);
    const res = await fetch(INDEXNOW_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host, key, keyLocation, urlList }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("IndexNow API error:", res.status, body.slice(0, 500));
      process.exit(1);
    }
    console.log("Submitted batch", i / BATCH + 1, "size", urlList.length, "->", res.status);
  }

  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
