import type { MetadataRoute } from "next";
import { getCanonicalSiteOrigin } from "@/lib/site";

/**
 * Default: allow crawlers; block only `/api/`.
 * Set `ROBOTS_DISALLOW_AI_TRAINING=1` to disallow common AI training / dataset crawlers (optional; see technical SEO policy).
 */
export default function robots(): MetadataRoute.Robots {
  const origin = getCanonicalSiteOrigin();
  const sitemap = `${origin}/sitemap.xml`;
  const disallowApiOnly = ["/api/"];

  if (process.env.ROBOTS_DISALLOW_AI_TRAINING === "1") {
    return {
      rules: [
        { userAgent: "GPTBot", disallow: ["/"] },
        { userAgent: "ClaudeBot", disallow: ["/"] },
        { userAgent: "PerplexityBot", disallow: ["/"] },
        { userAgent: "Bytespider", disallow: ["/"] },
        { userAgent: "Google-Extended", disallow: ["/"] },
        { userAgent: "CCBot", disallow: ["/"] },
        { userAgent: "*", allow: "/", disallow: disallowApiOnly },
      ],
      sitemap,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: disallowApiOnly,
    },
    sitemap,
  };
}
