import { getCanonicalSiteOrigin } from "@/lib/site";

export type FaqItem = { question: string; answer: string };

/** FAQPage JSON-LD — only emit for Q&A that is visible on the same page. */
export function buildFaqPageJsonLd(items: FaqItem[], pathname: string): Record<string, unknown> {
  const origin = getCanonicalSiteOrigin();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${origin}${path}`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
