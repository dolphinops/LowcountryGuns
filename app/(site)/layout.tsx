import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Banner from "@/components/layout/Banner";
import { MobileActions } from "@/components/layout/MobileActions";
import { getShootingRangeJsonLd } from "@/lib/site";

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
          __html: JSON.stringify(getShootingRangeJsonLd()),
        }}
      />
      <Banner />
      <Header />
      {children}
      <Footer />
    </>
  );
}
