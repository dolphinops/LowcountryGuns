import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Clock, Shield, Target, ChevronRight } from 'lucide-react';
import type { Metadata } from "next";
import { getCanonicalSiteOrigin } from "@/lib/site";

const SITE = getCanonicalSiteOrigin();
const PAGE_PATH = '/shooting-range-beaufort-sc';

export const metadata: Metadata = {
  title: 'Indoor Gun Range Near Beaufort, SC & Parris Island | Lowcountry Guns',
  description:
    'Premier indoor gun range and gun store near Beaufort, Port Royal, and Parris Island. 25-yard lanes, 170+ rentals, pro shop & transfers. Hardeeville, SC — I-95 Exit 5.',
  keywords: [
    'indoor gun range Beaufort SC',
    'shooting range near Parris Island',
    'gun range Port Royal SC',
    'indoor shooting range Beaufort County',
    'CWP class Beaufort area',
    'gun store Hardeeville SC',
    'firearm transfers Beaufort',
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: 'website',
    url: `${SITE}${PAGE_PATH}`,
    title: 'Indoor Gun Range Near Beaufort & Parris Island | Lowcountry Guns & Range',
    description:
      'Climate-controlled indoor range and retail — convenient for Beaufort, Port Royal, and military families via US-278 and I-95.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indoor Gun Range Near Beaufort, SC | Lowcountry Guns',
    description: 'Indoor lanes, rentals, and gun store. Short drive from Beaufort & Parris Island.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ShootingRange',
  '@id': `${SITE}${PAGE_PATH}#business`,
  name: 'Lowcountry Guns & Range',
  url: SITE,
  description:
    'Indoor shooting range and firearm retail serving Beaufort, Port Royal, Parris Island, and the northern Beaufort County area from Hardeeville, SC.',
  telephone: '+1-843-784-5474',
  image: `${SITE}/images/IMG_8194.webp`,
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
    { '@type': 'City', name: 'Beaufort', containedInPlace: { '@type': 'State', name: 'South Carolina' } },
    { '@type': 'City', name: 'Port Royal', containedInPlace: { '@type': 'State', name: 'South Carolina' } },
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '10:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '18:00' },
  ],
};

export default function BeaufortLanding() {
  return (
    <div className="flex flex-col">
      <Script id="jsonld-beaufort-local" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-white/5 bg-black pt-32 pb-24 md:pt-48 md:pb-36">
        <div className="absolute inset-0 opacity-40">
          <Image src="/images/IMG_8194.webp" alt="Indoor shooting range near Beaufort and Parris Island, South Carolina" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        <div className="relative z-10 content-container mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)]">Convenient to Beaufort &amp; Port Royal</p>
          <h1 className="mb-6 text-balance text-4xl font-black tracking-tight text-white md:text-6xl">
            Indoor gun range <span className="text-gradient-light">near Beaufort, SC</span>
          </h1>
          <p className="mb-10 text-lg font-medium leading-relaxed text-zinc-300 md:text-xl">
            The Lowcountry&apos;s most advanced indoor facility — huge rental selection, 25-yard lanes, and a stocked gun store. Short drive from Beaufort, Port Royal, and
            Parris Island.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary">
                Get Directions from Beaufort
              </Button>
            </a>
            <Link href="/gun-rentals">
              <Button size="lg" variant="outline" className="border-white/20 text-white">
                View Rental Firearms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BentoCard title="Quick access from US-278">
              <Clock className="mb-4 h-8 w-8 text-[var(--color-primary-base)]" />
              <p className="text-[var(--color-muted-fg)]">
                Minutes from Beaufort and Parris Island routes — Hardeeville at I-95 Exit 5 is a straightforward trip for range day or a pro-shop stop.
              </p>
            </BentoCard>
            <BentoCard title="Safety-first culture">
              <Shield className="mb-4 h-8 w-8 text-[var(--color-primary-base)]" />
              <p className="text-[var(--color-muted-fg)]">
                RSOs on every shift, structured briefings for new shooters, and a family-friendly approach to supervised range use.
              </p>
            </BentoCard>
            <BentoCard title="Retail + range together">
              <Target className="mb-4 h-8 w-8 text-[var(--color-primary-base)]" />
              <p className="text-[var(--color-muted-fg)]">
                Ammo, targets, eye and ear protection, and firearms — buy, rent, and shoot without bouncing between multiple locations.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-card-border)] bg-[var(--color-surface)] py-16 md:py-20">
        <div className="content-container mx-auto max-w-3xl text-center md:max-w-4xl md:text-left">
          <h2 className="mb-4 text-2xl font-black tracking-tight text-[var(--color-foreground)] text-balance md:text-3xl">
            Indoor gun range &amp; gun store for Beaufort &amp; the Sea Islands
          </h2>
          <p className="mb-6 text-base font-medium leading-relaxed text-[var(--color-muted-fg)] md:text-lg">
            Whether you&apos;re qualifying on a new carry gun, zeroing a rifle, or picking up transfers, you get a{' '}
            <strong className="text-[var(--color-foreground)]">licensed gun store</strong> and a <strong className="text-[var(--color-foreground)]">public indoor range</strong>{' '}
            in one campus. That matters for Beaufort County shooters who want professional staff and consistent bay conditions year-round.
          </p>
          <p className="mb-8 text-base font-medium leading-relaxed text-[var(--color-muted-fg)] md:text-lg">
            See <Link href="/firearm-transfers" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">firearm transfers</Link>,{' '}
            <Link href="/purchase-a-firearm" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">purchasing a firearm</Link>, and{' '}
            <Link href="/training" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">
              training options
            </Link>{' '}
            — or call <a href="tel:8437845474" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">843-784-5474</a>.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Link href="/the-range" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Range &amp; bays
            </Link>
            <Link href="/pro-shop" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Gun store
            </Link>
            <Link href="/gun-rentals" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Rentals
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
            <h2 className="mb-6 text-3xl font-bold text-balance text-[var(--color-foreground)]">Premium range standard for the Lowcountry</h2>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-muted-fg)]">
              No time limits on your lane fee, spacious facility flow, and a rental inventory deep enough for serious practice — not just a few loaner pistols.
            </p>
            <ul className="mb-10 space-y-4">
              <li className="flex items-center gap-3 font-medium text-[var(--color-foreground)]">
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-primary-base)]" /> Large-format indoor facility
              </li>
              <li className="flex items-center gap-3 font-medium text-[var(--color-foreground)]">
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-primary-base)]" /> 25-yard rifle-rated lanes
              </li>
              <li className="flex items-center gap-3 font-medium text-[var(--color-foreground)]">
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-primary-base)]" /> Walk-ins welcome daily
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
              title="Map: Lowcountry Guns indoor gun range — Hardeeville SC near Beaufort and Parris Island"
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
