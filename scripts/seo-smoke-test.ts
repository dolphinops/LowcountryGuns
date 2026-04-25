/**
 * CI-friendly checks for lcguns.com technical SEO baseline.
 * Usage: SITE=https://lcguns.com npx tsx scripts/seo-smoke-test.ts
 */

const SITE = (process.env.SITE || process.env.NEXT_PUBLIC_SITE_URL || "https://lcguns.com").replace(/\/$/, "");

async function mustOk(url: string, label: string): Promise<Response> {
  const res = await fetch(url, { redirect: "manual" });
  if (!res.ok && res.status !== 308 && res.status !== 301 && res.status !== 302) {
    console.error(`FAIL ${label}: ${url} -> ${res.status}`);
    process.exit(1);
  }
  return res;
}

async function main() {
  const origin = new URL(SITE).origin;

  const robots = await mustOk(`${origin}/robots.txt`, "robots.txt");
  const robotsText = await robots.text();
  if (!/Disallow:\s*\/api\/?/i.test(robotsText)) {
    console.error("FAIL robots.txt: expected Disallow: /api/");
    process.exit(1);
  }
  if (!robotsText.includes("Sitemap:")) {
    console.error("FAIL robots.txt: missing Sitemap line");
    process.exit(1);
  }

  await mustOk(`${origin}/sitemap.xml`, "sitemap.xml");

  const home = await mustOk(`${origin}/`, "homepage");
  const nosniff = home.headers.get("x-content-type-options");
  if (!nosniff || nosniff.toLowerCase() !== "nosniff") {
    console.error("FAIL homepage: missing X-Content-Type-Options: nosniff");
    process.exit(1);
  }
  const link = home.headers.get("link") || "";
  if (!link.includes("rel=\"canonical\"") && !link.includes("rel='canonical'")) {
    console.error("FAIL homepage: missing Link rel=canonical header");
    process.exit(1);
  }

  const wwwHost = new URL(origin);
  wwwHost.hostname = `www.${wwwHost.hostname.replace(/^www\./, "")}`;
  const wwwRes = await fetch(`${wwwHost.origin}/`, { redirect: "manual" });
  if (wwwRes.status !== 308 && wwwRes.status !== 301) {
    console.error(`FAIL www redirect: expected 308/301, got ${wwwRes.status}`);
    process.exit(1);
  }
  const loc = wwwRes.headers.get("location");
  if (!loc || !loc.includes("lcguns.com")) {
    console.error("FAIL www redirect: bad Location", loc);
    process.exit(1);
  }

  console.log("OK —", origin, "(robots, sitemap, home headers, www redirect)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
