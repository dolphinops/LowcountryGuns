import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActions } from "@/components/layout/MobileActions";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Local SEO Schema — main site only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ShootingRange",
            "name": "Lowcountry Guns & Range",
            "image": "https://lowcountryguns.com/images/legacy/Logo-2.webp",
            "@id": "https://lowcountryguns.com",
            "url": "https://lowcountryguns.com",
            "telephone": "843-784-5474",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "98 Purrysburg Rd",
              "addressLocality": "Hardeeville",
              "addressRegion": "SC",
              "postalCode": "29927",
              "addressCountry": "US"
            },
            "areaServed": [
              { "@type": "City", "name": "Hardeeville" },
              { "@type": "City", "name": "Savannah" },
              { "@type": "City", "name": "Beaufort" },
              { "@type": "City", "name": "Hilton Head Island" },
              { "@type": "City", "name": "Bluffton" },
              { "@type": "City", "name": "Pooler" }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 32.2280209,
              "longitude": -81.1278143
            },
            "description": "Lowcountry Guns & Range is the premier climate-controlled 25-yard indoor shooting range in Hardeeville, SC. Located just 1 minute off I-95 at Exit 5, we serve Savannah, GA, Hilton Head, and Beaufort. Features EPA-standard ventilation and 170+ rental firearms.",
            "priceRange": "$$",
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"], "opens": "10:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:00", "closes": "19:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "12:00", "closes": "18:00" }
            ]
          })
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
