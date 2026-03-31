import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lowcountry Guns & Range | SC & GA Premier Indoor Shooting Range",
  description: "Premier indoor gun range serving Hardeeville, Savannah, SC & GA Lowcountry. 10 state-of-the-art bays, rental firearms, and tactical training. Open to the public.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        {/* Local SEO Schema */}
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
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"], "opens": "10:00", "closes": "18:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:00", "closes": "19:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "12:00", "closes": "18:00" }
              ]
            })
          }}
        />
        <Header />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
