/**
 * Default production origin (DNS cutover target). Override with `NEXT_PUBLIC_SITE_URL` if needed.
 */
export const CANONICAL_SITE_ORIGIN = "https://lcguns.com" as const;

/** Use for sitemaps, metadataBase, and JSON-LD absolute URLs. */
export function getCanonicalSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return CANONICAL_SITE_ORIGIN;
  try {
    return new URL(raw).origin;
  } catch {
    return CANONICAL_SITE_ORIGIN;
  }
}

const INDEXABLE_HOSTS = new Set(["lcguns.com", "www.lcguns.com"]);

export function isCanonicalSiteHost(host: string | null | undefined): boolean {
  if (!host) return false;
  const h = host.split(":")[0]?.split(",")[0]?.trim().toLowerCase() ?? "";
  return INDEXABLE_HOSTS.has(h);
}

export function getShootingRangeJsonLd(): Record<string, unknown> {
  const base = getCanonicalSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "ShootingRange",
    name: "Lowcountry Guns & Range",
    image: `${base}/images/legacy/Logo-2.webp`,
    "@id": `${base}/#organization`,
    url: base,
    telephone: "843-784-5474",
    address: {
      "@type": "PostalAddress",
      streetAddress: "98 Purrysburg Rd",
      addressLocality: "Hardeeville",
      addressRegion: "SC",
      postalCode: "29927",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Hardeeville" },
      { "@type": "City", name: "Savannah" },
      { "@type": "City", name: "Beaufort" },
      { "@type": "City", name: "Hilton Head Island" },
      { "@type": "City", name: "Bluffton" },
      { "@type": "City", name: "Pooler" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.2280209,
      longitude: -81.1278143,
    },
    description:
      "Lowcountry Guns & Range is the premier climate-controlled 25-yard indoor shooting range in Hardeeville, SC. Located just 1 minute off I-95 at Exit 5, we serve Savannah, GA, Hilton Head, and Beaufort. Features EPA-standard ventilation and 170+ rental firearms.",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/lowcountrygunsandrange/",
      "https://www.instagram.com/lowcountrygunsandrange/",
    ],
  };
}
