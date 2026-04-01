import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Shield, Target, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shooting Range Near Hilton Head Island, SC | Lowcountry Guns & Range",
  description: "Elite indoor shooting destination near Hilton Head Island and Bluffton, SC. Experience 25-yard rifle-rated lanes, 170+ rentals, and 100% climate controlled comfort."
};

export default function HiltonHeadLanding() {
  return (
    <div className="flex flex-col">
      {/* City-Specific Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-black border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <Image src="/images/IMG_8205.webp" alt="Shooting Range Hilton Head SC" fill className="object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>
        
        <div className="relative z-10 content-container text-center max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)] mb-4">A Short Drive from HHI & Bluffton</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Elite Indoor <br/> <span className="text-gradient-light font-black tracking-tight">Shooting Near Hilton Head</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed font-medium">
            Escape the outdoor heat and enjoy 25-yard rifle-rated lanes in a professional, safety-first environment. Premium comfort meets elite practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary">Get Directions from HHI</Button>
            </a>
            <Link href="/memberships">
              <Button size="lg" variant="outline" className="text-white border-white/20">Become a Member</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Localized Value Props */}
      <section className="section-spacing bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BentoCard title="Bluffton’s Range of Choice">
              <Clock className="w-8 h-8 text-[var(--color-primary-base)] mb-4" />
              <p className="text-[var(--color-muted-fg)]">
                Located right off I-95 at Exit 5, we are the convenient choice for Bluffton residents looking for a world-class indoor shooting experience.
              </p>
            </BentoCard>
            <BentoCard title="Health & Safety Focus">
              <Shield className="w-8 h-8 text-[var(--color-primary-base)] mb-4" />
              <p className="text-[var(--color-muted-fg)]">
                 Our facility utilizes high-tech EPA-standard ventilation systems that exceed all regulations. Lead-free air and 70° year-round.
              </p>
            </BentoCard>
            <BentoCard title="Rifle & Pistol Lanes">
              <Target className="w-8 h-8 text-[var(--color-primary-base)] mb-4" />
              <p className="text-[var(--color-muted-fg)]">
                Offering 10 lanes with 25-yard distances, capable of handling everything from .22LR to heavy rifle calibers.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Maps & Call to action */}
      <section className="section-spacing bg-zinc-50 border-t border-[var(--color-card-border)]">
        <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">Perfect for Island Residents & Visitors</h2>
            <p className="text-lg text-[var(--color-muted-fg)] mb-8 leading-relaxed">
              Whether you're an island local or just visiting on vacation, we are the area's premier destination for firearms fun and tactical training. Our Range Safety Officers are always on duty.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                <ChevronRight className="w-5 h-5 text-[var(--color-primary-base)]" /> Open 7 days a week
              </li>
              <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                <ChevronRight className="w-5 h-5 text-[var(--color-primary-base)]" /> Specialized Training & CCW Classes
              </li>
              <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                <ChevronRight className="w-5 h-5 text-[var(--color-primary-base)]" /> No waiting lists, no time limits
              </li>
            </ul>
             <a 
              href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="primary" className="w-full sm:w-auto">Get Directions to Exit 5</Button>
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
