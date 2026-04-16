import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Clock, Shield, Target, ChevronRight } from 'lucide-react';
import type { Metadata } from "next";
import { getCanonicalSiteOrigin } from "@/lib/site";

const SITE = getCanonicalSiteOrigin();
const PAGE_PATH = '/shooting-range-savannah-ga';

export const metadata: Metadata = {
  title: 'Indoor Gun Range & Shooting Range Near Savannah, GA | Lowcountry Guns',
  description:
    'Premier indoor gun range and gun store near Savannah, GA and Pooler — 20 minutes to Hardeeville, SC. 10 climate-controlled bays, 170+ rentals, CWP classes, pro shop. I-95 Exit 5.',
  keywords: [
    'indoor gun range Savannah GA',
    'shooting range near Savannah',
    'gun range Pooler GA',
    'indoor shooting range Chatham County',
    'CWP class near Savannah',
    'gun store Hardeeville SC',
    'firearms training Savannah area',
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: 'website',
    url: `${SITE}${PAGE_PATH}`,
    title: 'Indoor Gun Range Near Savannah, GA | Lowcountry Guns & Range',
    description:
      'Climate-controlled indoor range and full pro shop — short drive from Savannah and Pooler via I-95 Exit 5.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indoor Gun Range Near Savannah, GA | Lowcountry Guns',
    description: '10 bays, 170+ rentals, training & pro shop. Just off I-95 Exit 5 in Hardeeville.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ShootingRange',
  '@id': `${SITE}${PAGE_PATH}#business`,
  name: 'Lowcountry Guns & Range',
  url: SITE,
  description:
    'Indoor shooting range and firearm retail serving Savannah, Pooler, and the GA–SC Lowcountry from Hardeeville, SC.',
  telephone: '+1-843-784-5474',
  image: `${SITE}/images/IMG_9122.webp`,
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
    { '@type': 'City', name: 'Savannah', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    { '@type': 'City', name: 'Pooler', containedInPlace: { '@type': 'State', name: 'Georgia' } },
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '10:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '18:00' },
  ],
};

export default function SavannahLanding() {
  return (
    <div className="flex flex-col">
      <Script id="jsonld-savannah-local" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-white/5 bg-black pt-32 pb-24 md:pt-48 md:pb-36">
        <div className="absolute inset-0 opacity-40">
          <Image src="/images/IMG_9122.webp" alt="Indoor shooting bays at Lowcountry Guns near Savannah, Georgia" fill className="scale-150 rotate-90 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        <div className="relative z-10 content-container mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)]">Just 20 Minutes from Savannah</p>
          <h1 className="mb-6 text-balance text-4xl font-black tracking-tight text-white md:text-6xl">
            Indoor gun range &amp; shooting range <span className="text-gradient-light">near Savannah, GA</span>
          </h1>
          <p className="mb-10 text-lg font-medium leading-relaxed text-zinc-300 md:text-xl">
            Tired of outdoor humidity or cramped lanes? Climate-controlled shooting and a full-service gun store are a quick drive across the river in Hardeeville — I-95 Exit 5.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary">
                Get Directions from Savannah
              </Button>
            </a>
            <Link href="/waiver">
              <Button size="lg" variant="outline" className="border-white/20 text-white">
                Sign Waiver Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BentoCard title="Fast & Easy Access">
              <Clock className="mb-4 h-8 w-8 text-[var(--color-primary-base)]" />
              <p className="text-[var(--color-muted-fg)]">
                Immediately off I-95 at Exit 5. Many Savannah and Pooler shooters find us faster than in-city options — park, check in, and be on the lane in minutes.
              </p>
            </BentoCard>
            <BentoCard title="Climate Controlled">
              <Shield className="mb-4 h-8 w-8 text-[var(--color-primary-base)]" />
              <p className="text-[var(--color-muted-fg)]">
                Escape the Georgia heat. Our bays stay near 70° with ventilation engineered above typical indoor range standards.
              </p>
            </BentoCard>
            <BentoCard title="170+ Rental Firearms">
              <Target className="mb-4 h-8 w-8 text-[var(--color-primary-base)]" />
              <p className="text-[var(--color-muted-fg)]">
                Try handguns, rifles, and specialty platforms before you buy — one of the largest rental fleets in the region, with staff to help you choose safely.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-card-border)] bg-[var(--color-surface)] py-16 md:py-20">
        <div className="content-container mx-auto max-w-3xl text-center md:max-w-4xl md:text-left">
          <h2 className="mb-4 text-2xl font-black tracking-tight text-[var(--color-foreground)] text-balance md:text-3xl">
            Indoor gun range &amp; gun store for Savannah &amp; Pooler
          </h2>
          <p className="mb-6 text-base font-medium leading-relaxed text-[var(--color-muted-fg)] md:text-lg">
            Lowcountry Guns is both a <strong className="text-[var(--color-foreground)]">public indoor range</strong> and a{' '}
            <strong className="text-[var(--color-foreground)]">licensed firearm retailer</strong> — ammo, accessories, transfers, and expert staff on the same visit as your range
            session. Walk-ins welcome seven days a week; members get lane priority and perks.
          </p>
          <p className="mb-8 text-base font-medium leading-relaxed text-[var(--color-muted-fg)] md:text-lg">
            Planning a first visit from Savannah or Pooler? Sign your{' '}
            <Link href="/waiver" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">
              digital waiver
            </Link>{' '}
            ahead of time, browse{' '}
            <Link href="/training" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">
              training &amp; CWP
            </Link>
            , or call <a href="tel:8437845474" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">843-784-5474</a>.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Link href="/the-range" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Range lanes &amp; rules
            </Link>
            <Link href="/pro-shop" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Pro shop &amp; gun store
            </Link>
            <Link href="/gun-rentals" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-card-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:text-[var(--color-primary-base)]">
              Rental firearms
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
            <h2 className="mb-6 text-3xl font-bold text-balance text-[var(--color-foreground)]">Plan your visit from Savannah</h2>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-muted-fg)]">
              Open seven days for walk-ins and memberships. 25-yard rifle-rated lanes, RSOs on duty, and no arbitrary time limits on your session.
            </p>
            <ul className="mb-10 space-y-4">
              <li className="flex items-center gap-3 font-medium text-[var(--color-foreground)]">
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-primary-base)]" /> No reservation required
              </li>
              <li className="flex items-center gap-3 font-medium text-[var(--color-foreground)]">
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-primary-base)]" /> Full-service pro shop on-site
              </li>
              <li className="flex items-center gap-3 font-medium text-[var(--color-foreground)]">
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--color-primary-base)]" /> Expert RSOs on every shift
              </li>
            </ul>
            <a href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full sm:w-auto">
                Open in Google Maps
              </Button>
            </a>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-[var(--color-card-border)] shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=98%20Purrysburg%20Rd%2C%20Hardeeville%2C%20SC%2029927&t=m&z=11&output=embed&iwloc=near"
              title="Map: Lowcountry Guns indoor range — 98 Purrysburg Rd, Hardeeville, SC (near Savannah, GA)"
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
