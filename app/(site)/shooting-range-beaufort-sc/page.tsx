import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Shield, Target, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shooting Range Near Beaufort, SC | Lowcountry Guns & Range",
  description: "Premier indoor shooting destination near Beaufort, SC. 25-yard rifle-rated lanes, 170+ rentals, and 100% climate controlled comfort. Serving Lowcountry shooters."
};

export default function BeaufortLanding() {
  return (
    <div className="flex flex-col">
      {/* City-Specific Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-black border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <Image src="/images/IMG_8194.webp" alt="Shooting Range Beaufort SC" fill className="object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>
        
        <div className="relative z-10 content-container text-center max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)] mb-4">Convenient to Beaufort & Northern Bluffton</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Premier Indoor <br/> <span className="text-gradient-light font-black tracking-tight">Shooting Near Beaufort</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed font-medium">
            Take the short drive to Hardeeville for the Lowcountry's most advanced indoor facility. Massive rental selection and 25-yard lanes ready for your next practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary">Get Directions from Beaufort</Button>
            </a>
            <Link href="/gun-rentals">
              <Button size="lg" variant="outline" className="text-white border-white/20">View Rental Firearms</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Localized Value Props */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BentoCard title="Quick Access via US-278">
              <Clock className="w-8 h-8 text-[var(--color-primary-base)] mb-4" />
              <p className="text-[var(--color-muted-fg)]">
                Located just minutes derived from Beaufort and Parris Island. We are the preferred indoor destination for Beaufort's shooting community.
              </p>
            </BentoCard>
            <BentoCard title="Safe & Family Friendly">
              <Shield className="w-8 h-8 text-[var(--color-primary-base)] mb-4" />
              <p className="text-[var(--color-muted-fg)]">
                Our RSOs are safety-first experts who ensure a comfortable environment for shooters of all experience levels.
              </p>
            </BentoCard>
            <BentoCard title="Everything on Site">
              <Target className="w-8 h-8 text-[var(--color-primary-base)] mb-4" />
              <p className="text-[var(--color-muted-fg)]">
                From ammo and targets to protective gear and firearms, our Pro Shop is a one-stop shop for range day.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Maps & Call to action */}
      <section className="section-spacing bg-zinc-50 border-t border-[var(--color-card-border)]">
        <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">Experience the Premium Range Standard</h2>
            <p className="text-lg text-[var(--color-muted-fg)] mb-8 leading-relaxed">
              Serving Beaufort and the surrounding Lowcountry. We pride ourselves on having no time limits and a huge variety of lanes and rental equipment.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                <ChevronRight className="w-5 h-5 text-[var(--color-primary-base)]" /> Specialized 5,000+ sq ft Facility
              </li>
              <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                <ChevronRight className="w-5 h-5 text-[var(--color-primary-base)]" /> 25-Yard High-Velocity Rifle Lanes
              </li>
              <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                <ChevronRight className="w-5 h-5 text-[var(--color-primary-base)]" /> Open for walk-ins daily
              </li>
            </ul>
             <a 
              href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="primary" className="w-full sm:w-auto">Directions to I-95 Exit 5</Button>
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
