import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Shield, Target, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shooting Range Near Savannah, GA | Lowcountry Guns & Range",
  description: "Looking for a premier indoor shooting range near Savannah, GA? Lowcountry Guns in Hardeeville is just 20 minutes from downtown Savannah and Pooler. 10 climate-controlled bays, 170+ rentals."
};

export default function SavannahLanding() {
  return (
    <div className="flex flex-col">
      {/* City-Specific Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-black border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <Image src="/images/IMG_9122.webp" alt="Shooting Range Savannah GA" fill className="object-cover rotate-90 scale-150" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>
        
        <div className="relative z-10 content-container text-center max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)] mb-4">Just 20 Minutes from Savannah</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            The Premier Indoor <br/> <span className="text-gradient-light">Shooting Range near Savannah</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed font-medium">
            Tired of outdoor humidity or cramped local ranges? High-end, climate-controlled shooting is just a short drive across the river in Hardeeville.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary">Get Directions from Savannah</Button>
            </a>
            <Link href="/waiver">
              <Button size="lg" variant="outline" className="text-white border-white/20">Sign Waiver Online</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Localized Value Props */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BentoCard title="Fast & Easy Access">
              <Clock className="w-8 h-8 text-[var(--color-primary-base)] mb-4" />
              <p className="text-[var(--color-muted-fg)]">
                Located immediately off I-95 at Exit 5. We are faster to get to than many ranges within Savannah's city limits for residents of Pooler and West Savannah.
              </p>
            </BentoCard>
            <BentoCard title="Climate Controlled">
              <Shield className="w-8 h-8 text-[var(--color-primary-base)] mb-4" />
              <p className="text-[var(--color-muted-fg)]">
                Escape the Georgia heat. Our facility is kept at a perfect 70° year-round with advanced filtration that exceeds EPA standards for your safety.
              </p>
            </BentoCard>
            <BentoCard title="170+ Options">
              <Target className="w-8 h-8 text-[var(--color-primary-base)] mb-4" />
              <p className="text-[var(--color-muted-fg)]">
                Savannah's largest selection of rental firearms. Try the latest from Glock, Sig Sauer, and Smith & Wesson before you buy.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Maps & Call to action */}
      <section className="section-spacing bg-zinc-50 border-t border-[var(--color-card-border)]">
        <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">Plan Your Visit from Savannah</h2>
            <p className="text-lg text-[var(--color-muted-fg)] mb-8 leading-relaxed">
              We are open 7 days a week for walk-ins and memberships. Savannah residents choose us for our 25-yard rifle-rated lanes and safety-first culture.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                <ChevronRight className="w-5 h-5 text-[var(--color-primary-base)]" /> No reservation required
              </li>
              <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                <ChevronRight className="w-5 h-5 text-[var(--color-primary-base)]" /> Full-service Pro Shop on-site
              </li>
              <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                <ChevronRight className="w-5 h-5 text-[var(--color-primary-base)]" /> Expert RSOs on duty at all times
              </li>
            </ul>
             <a 
              href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="primary" className="w-full sm:w-auto">Open in Google Maps</Button>
            </a>
          </div>
          <div className="aspect-video relative rounded-2xl overflow-hidden border border-[var(--color-card-border)] shadow-xl">
             <iframe
                src="https://maps.google.com/maps?q=98%20Purrysburg%20Rd%2C%20Hardeeville%2C%20SC%2029927&t=m&z=11&output=embed&iwloc=near"
                title="Lowcountry Guns Location"
                className="w-full h-full absolute inset-0 border-0"
              />
          </div>
        </div>
      </section>
    </div>
  );
}
