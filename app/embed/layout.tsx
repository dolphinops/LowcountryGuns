import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/**
 * Minimal chrome for embedded pages (e.g. waiver inside an iframe on /waiver).
 * Avoids site Header/Footer from the (site) route group.
 */
export default function EmbedLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">{children}</div>;
}
