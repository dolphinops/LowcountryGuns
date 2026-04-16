import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Clock, Shield, Target, ChevronRight } from 'lucide-react';
import type { Metadata } from "next";
import { getCanonicalSiteOrigin } from "@/lib/site";

const SITE = getCanonicalSiteOrigin();
const PAGE_PATH = '/shooting-range-hilton-head-sc';

export const metadata: Metadata = {
  title: 'Indoor Gun Range Near Hilton Head Island & Bluffton, SC | Lowcountry Guns',
  description:
    'Elite indoor gun range and gun store near Hilton Head Island and Bluffton, SC. 10 climate-controlled bays, 170+ rentals, memberships & training. I-95 Exit 5, Hardeeville.',
  keywords: [
    'indoor gun range Hilton Head SC',
    'shooting range near Bluffton SC',
    'indoor shooting range Beaufort County',
    'gun range Hilton Head Island',
    'CWP class Hilton Head area',
    'gun store Hardeeville SC',
    'firearms training Lowcountry SC',
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: 'website',
    url: `${SITE}${PAGE_PATH}`,
    title: 'Indoor Gun Range Near Hilton Head & Bluffton | Lowcountry Guns & Range',
    description:
      'Rifle-rated indoor lanes, huge rental fleet, and full pro shop — short drive from Hilton Head Island and Bluffton.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indoor Gun Range Near Hilton Head, SC | Lowcountry Guns',
    description: 'Climate-controlled range & gun store. I-95 Exit 5 in Hardeeville.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ShootingRange',
  '@id': `${SITE}${PAGE_PATH}#business`,
  name: 'Lowcountry Guns & Range',
  url: SITE,
  description:
    'Indoor shooting range and firearm retail serving Hilton Head Island, Bluffton, and the South Carolina Lowcountry from Hardeeville, SC.',
  telephone: '+1-843-784-5474',
  image: `${SITE}/images/IMG_8205.webp`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '98 Purrysburg Rd',
    addressLocality: 'Hardeeville',
    addressRegion: 'SC',
    postalCode: '29927',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.2280209,
    longitude: -81.1278143,
  },
  areaServed: [
    { '@type': 'City', name: 'Hilton Head Island', containedInPlace: { '@type': 'State', name: 'South Carolina' } },
    { '@type': 'City', name: 'Bluffton', containedInPlace: { '@type': 'State', name: 'South Carolina' } },
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '10:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '18:00' },
  ],
};

export default function HiltonHeadLanding() {
  return (
    <div className="flex flex-col">
      <Script id="jsonld-hilton-local" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-white/5 bg-black pt-32 pb-24 md:pt-48 md:pb-36">
        <div className="absolute inset-0 opacity-40">
          <Image src="/images/IMG_8205.webp" alt="Pro shop and indoor range near Hilton Head Island, South Carolina" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        <div className="relative z-10 content-container mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)]">A short drive from HHI &amp; Bluffton</p>
          <h1 className="mb-6 text-balance text-4xl font-black tracking-tight text-white md:text-6xl">
            Indoor gun range <span className="text-gradient-light">near Hilton Head Island, SC</span>
          </h1>
          <p className="mb-10 text-lg font-medium leading-relaxed text-zinc-300 md:text-xl">
            25-yard rifle-rated lanes, 170+ rentals, and a full gun store — premium comfort and safety-first staff, minutes from the bridges via I-95 Exit 5.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary">
                Get Directions from HHI
              </Button>
            </a>
            <Link href="/memberships">
              <Button size="lg" variant="outline" className="border-white/20 text-white">
                Become a Member
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BentoCard title="Bluffton &amp; HHI access">
              <Clock className="mb-4 h-8 w-8 text-[var(--color-primary-base)]" />
              <p className="text-[var(--color-muted-fg)]">
                Right off I-95 at Exit 5 in Hardeeville — an easy run for Bluffton families and Hilton Head visitors who want a serious indoor range without the heat.
              </p>
            </BentoCard>
            <BentoCard title="Ventilation &amp; comfort">
              <Shield className="mb-4 h-8 w-8 text-[var(--color-primary-base)]" />
              <p className="text-[var(--color-muted-fg)]">
                High-volume air filtration and steady bay temperatures keep sessions comfortable for locals and vacation shooters alike.
              </p>
            </BentoCard>
            <BentoCard title="Rifle &amp; pistol lanes">
              <Target className="mb-4 h-8 w-8 text-[var(--color-primary-base)]" />
              <p className="text-[var(--color-muted-fg)]">
                Ten lanes to 25 yards — practice defensive pistol, zero a rifle, or work with an instructor on your own goals.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-card-border)] bg-[var(--color-surface)] py-16 md:py-20">
        <div className="content-container mx-auto max-w-3xl text-center md:max-w-4xl md:text-left">
          <h2 className="mb-4 text-2xl font-black tracking-tight text-[var(--color-foreground)] text-balance md:text-3xl">
            Indoor gun range &amp; gun store for Hilton Head &amp; Bluffton
          </h2>
          <p className="mb-6 text-base font-medium leading-relaxed text-[var(--color-muted-fg)] md:text-lg">
            We operate as a <strong className="text-[var(--color-foreground)]">full-service gun store</strong> (firearms, ammo, accessories, transfers) and a{' '}
            <strong className="text-[var(--color-foreground)]">public indoor range</strong> with rentals and RSO coverage — ideal for island residents, Bluffton shooters, and
            seasonal visitors who want one stop for retail and range time.
          </p>
          <p className="mb-8 text-base font-medium leading-relaxed text-[var(--color-muted-fg)] md:text-lg">
            Explore{' '}
            <Link href="/memberships" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">
              memberships
            </Link>
            ,{' '}
            <Link href="/training" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">
              training
            </Link>
            , or{' '}
            <Link href="/gun-rentals" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">
              the rental wall
            </Link>{' '}
            before you arrive.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Link href="/the-range" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Range overview
            </Link>
            <Link href="/pro-shop" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Pro shop
            </Link>
            <Link href="/training" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Classes &amp; CWP
            </Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing border-t border-[var(--color-card-border)] bg-zinc-50">
        <div className="content-container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-balance text-[var(--color-foreground)]">Built for island residents &amp; visitors</h2>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-muted-fg)]">
              Walk-ins welcome daily. Range Safety Officers on duty; specialized classes and defensive training available for concealed carriers who want more than a basic
              qual.
            </p>
            <ul className="mb-10 space-y-4">
              <li className="flex items-center gap-3 font-medium text-[var(--color-foreground)]">
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-primary-base)]" /> Open 7 days a week
              </li>
              <li className="flex items-center gap-3 font-medium text-[var(--color-foreground)]">
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-primary-base)]" /> Training &amp; CWP pathways
              </li>
              <li className="flex items-center gap-3 font-medium text-[var(--color-foreground)]">
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-primary-base)]" /> No time limits on range fee
              </li>
            </ul>
            <a href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full sm:w-auto">
                Directions to I-95 Exit 5
              </Button>
            </a>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-[var(--color-card-border)] shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=98%20Purrysburg%20Rd%2C%20Hardeeville%2C%20SC%2029927&t=m&z=11&output=embed&iwloc=near"
              title="Map: Lowcountry Guns — indoor gun range Hardeeville SC near Hilton Head and Bluffton"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
