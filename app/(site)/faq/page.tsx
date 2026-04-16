import type { Metadata } from "next";
import Script from "next/script";
import { Accordion } from "@/components/ui/Accordion";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { buildFaqPageJsonLd } from "@/lib/jsonld-faq";

export const metadata: Metadata = {
  title: "FAQ | Lowcountry Guns & Range",
  description: "Frequently asked questions about range rules, age limits, and more."
};

const faqs = [
  {
    question: "What do I have to wear?",
    answer: "Close-toed shoes and crew neck shirts are required to go into the range. No flip-flops, sleeveless or lowcut tops."
  },
  {
    question: "Can my children shoot at your range?",
    answer: "Yes. All shooters under the age of 18 must be accompanied by a parent or legal guardian 21 or older. Calibers must be approved by the Range Officer."
  },
  {
    question: "How much does it cost to use the range?",
    answer: "$22.00 per person / per visit. There is no time limit!! We also offer annual memberships for those individuals and families who are frequent shooters."
  },
  {
    question: "Can I shoot an AR-15 at your range?",
    answer: "Yes, must be able to control recoil. No rapid fire. Rifle caliber firearms must be bench rested and on target at all times."
  },
  {
    question: "Can I shoot a Shotgun?",
    answer: "Yes, we only allow slugs and will check ammo before admission in the range. You must be able to control the firearm."
  },
  {
    question: "Is there firearms training available?",
    answer: "Yes, we do offer training for handguns and rifles as well as one on one training with a master instructor."
  }
];

export default function FAQ() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <Script
        id="jsonld-faq-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageJsonLd(faqs, "/faq")),
        }}
      />
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          Everything you need to know about visiting Lowcountry Guns & Range.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <BentoCard className="lg:col-span-2">
          <Accordion items={faqs} />
        </BentoCard>

        <BentoCard title="Still have questions?" className="bg-[var(--color-card-border)]/30">
          <div className="flex flex-col gap-4 pt-2">
            <p className="text-sm text-[var(--color-muted-fg)]">
              Can&apos;t find the answer you&apos;re looking for? Give us a call or visit the range and our staff will be happy to help.
            </p>
            <div className="text-sm">
              <span className="block font-medium text-[var(--color-foreground)]">Phone</span>
              <span className="text-[var(--color-muted-fg)]">843-784-5474</span>
            </div>
            <div className="text-sm">
              <span className="block font-medium text-[var(--color-foreground)]">Address</span>
              <span className="text-[var(--color-muted-fg)]">98 Purrysburg Rd<br/>Hardeeville, SC 29927</span>
            </div>
            <Link href="tel:8437845474" className="mt-4">
              <Button className="w-full">Call Now</Button>
            </Link>
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
