import type { MetadataRoute } from "next";
import { getCanonicalSiteOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const origin = getCanonicalSiteOrigin();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/static/"],
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
