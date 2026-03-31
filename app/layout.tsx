import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
