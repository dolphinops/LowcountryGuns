import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lcguns.com'),
  title: {
    template: '%s | Lowcountry Guns & Range',
    default: 'Lowcountry Guns & Range | SC & GA Premier Indoor Shooting Range',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  description: "Premier indoor gun range serving Hardeeville, Savannah, SC & GA Lowcountry. 10 state-of-the-art bays, 170+ gun rentals, and expert firearms training. Open to the public 7 days a week.",
  keywords: ["gun store near me", "indoor gun range", "gun range hardeeville sc", "firearms training", "shooting range savannah ga", "CWP class sc"],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lowcountryguns.com',
    siteName: 'Lowcountry Guns & Range',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Lowcountry Guns & Range Indoor Shooting Bays',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lowcountry Guns & Range | SC & GA Premier Indoor Shooting Range',
    description: 'Premier indoor gun range serving Hardeeville, Savannah, SC & GA Lowcountry.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
