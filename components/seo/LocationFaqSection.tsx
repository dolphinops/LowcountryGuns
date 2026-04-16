import Script from "next/script";
import { Accordion } from "@/components/ui/Accordion";
import { buildFaqPageJsonLd, type FaqItem } from "@/lib/jsonld-faq";

type Props = {
  pathname: string;
  items: FaqItem[];
  kicker?: string;
  title: string;
  description?: string;
};

export function LocationFaqSection({
  pathname,
  items,
  kicker = "Planning a visit",
  title,
  description,
}: Props) {
  const scriptId = `jsonld-faq-${pathname.replace(/^\/+|\/+$/g, "").replace(/\//g, "-") || "page"}`;

  return (
    <section className="section-spacing border-t border-[var(--color-card-border)] bg-white">
      <Script
        id={scriptId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageJsonLd(items, pathname)),
        }}
      />
      <div className="content-container max-w-3xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-base)] md:text-sm">
          {kicker}
        </p>
        <h2 className="mb-4 text-balance text-2xl font-black tracking-tight text-[var(--color-foreground)] md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mb-8 text-base font-medium leading-relaxed text-[var(--color-muted-fg)] md:text-lg">
            {description}
          </p>
        ) : null}
        <Accordion items={items} />
      </div>
    </section>
  );
}
