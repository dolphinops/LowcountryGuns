import { BentoCard } from '@/components/ui/BentoCard';
import Image from 'next/image';
import { Route, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Range | Lowcountry Guns & Range",
  description: "Information about our 10 state-of-the-art indoor shooting bays, rules, and gun rentals."
};

export default function TheRange() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-black">
        {/* Force bg container to be 100vw to break out of any parent constraints */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
          <Image 
            src="/images/IMG_9122.webp" 
            alt="10-Bay Indoor Range" 
            fill 
            priority
            className="object-cover opacity-70 brightness-90 rotate-90 scale-[3]" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto drop-shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)] mb-4 animate-fade-up">Facility Info</p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 animate-fade-up">
            <span className="text-gradient-light brightness-125">10-Bay Indoor</span>
            <br />
            Shooting Range
          </h1>
          <p className="text-lg md:text-2xl text-zinc-100 leading-relaxed mx-auto max-w-2xl animate-fade-up font-medium">
            Experience the Lowcountry&apos;s premier indoor shooting facility. Open to the public 7 days a week with no reservations required.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />
      <section className="section-spacing bg-gradient-section text-[var(--color-foreground)] relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-primary-base)]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="content-container relative z-10">
          
          {/* Introductory Paragraphs with Glowing Cards style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="border border-[var(--color-card-border)] bg-white shadow-sm p-8 md:p-10 rounded-3xl flex flex-col justify-center hover:border-[var(--color-primary-base)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4 flex items-center gap-3">
                <Route className="w-8 h-8 text-[var(--color-primary-base)]" /> Unique Split Layout
              </h2>
              <p className="text-[var(--color-muted-fg)] leading-relaxed text-lg">
                Unique to our range, the bays are separated by a solid concrete wall with 5 lanes on each side. This reduces noise and provides a more focused, personalized environment.
              </p>
            </div>
            <div className="border border-[var(--color-card-border)] bg-white shadow-sm p-8 md:p-10 rounded-3xl flex flex-col justify-center hover:border-[var(--color-primary-base)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4 flex items-center gap-3">
                <Clock className="w-8 h-8 text-[var(--color-primary-base)]" /> Always Welcome
              </h2>
              <p className="text-[var(--color-muted-fg)] leading-relaxed text-lg font-medium">
                Walk-ins are always welcome. We pride ourselves on having <strong className="text-gradient">no time limits</strong> on lane use. Shoot at your own pace.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Range </span><span className="text-gradient">Rules & Info</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BentoCard title="General Info & Pricing" className="lg:col-span-1 border-[var(--color-card-border)] bg-white shadow-sm hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <ul className="space-y-4 text-sm text-[var(--color-muted-fg)] mt-4">
                <li className="flex flex-col gap-1 pb-3 border-b border-[var(--color-card-border)] last:border-0">
                  <span className="font-bold text-[var(--color-foreground)] text-lg">Pricing</span>
                  <span>$22.00 per person / per visit (No time limit!)</span>
                </li>
                <li className="flex flex-col gap-1 pb-3 border-b border-[var(--color-card-border)] last:border-0">
                  <span className="font-bold text-[var(--color-primary-base)] text-lg">Hero Discount</span>
                  <span className="text-[var(--color-muted-fg)]">$17 unlimited time for Active Military, Law Enforcement & First Responders.</span>
                </li>
                <li className="flex flex-col gap-1 pb-3 border-b border-[var(--color-card-border)] last:border-0">
                  <span className="font-bold text-[var(--color-foreground)] text-lg">Ammunition</span>
                  <span>Brass case and lead core ammo only. No steel core or armor piercing rounds.</span>
                </li>
              </ul>
            </BentoCard>

            <BentoCard title="Who Can Use The Range" className="lg:col-span-2 border-[var(--color-card-border)] bg-white shadow-sm hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-[var(--color-muted-fg)] mt-4 list-disc pl-4 font-medium">
                <li>Open to the public</li>
                <li>Walk-ins welcome — no reservation required</li>
                <li>Out-of-state shooters are welcome</li>
                <li>Valid photo ID required</li>
                <li>No special permit needed</li>
              </ul>
              <div className="mt-8 border-l-4 border-[var(--color-primary-base)] pl-4 py-3 bg-[var(--color-primary-base)]/5 rounded-r-xl">
                <p className="text-sm text-[var(--color-primary-dark)] font-bold">
                  First-time shooters are highly encouraged and will receive a mandatory safety briefing from a Range Safety Officer before shooting.
                </p>
              </div>
            </BentoCard>

            <BentoCard title="Safety & Supervision" className="lg:col-span-1 border-[var(--color-card-border)] bg-white shadow-sm hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <ul className="space-y-3 text-sm text-[var(--color-muted-fg)] mt-4 list-disc pl-4 mb-4">
                <li>Range Safety Officers are on duty at all times</li>
                <li>All shooters must follow RSO instructions immediately</li>
                <li>Zero tolerance for unsafe handling or impaired behavior</li>
              </ul>
              <p className="text-xs italic text-[var(--color-muted-fg-light)] bg-zinc-50 p-4 rounded-xl mt-auto">
                Anyone under the influence of alcohol or drugs will be asked to leave without refund.
              </p>
            </BentoCard>

            <BentoCard title="Firearms on the Range" className="lg:col-span-2 border-[var(--color-card-border)] bg-white shadow-sm hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[var(--color-muted-fg)] mt-4 list-disc pl-4">
                <li>Personal firearms are allowed</li>
                <li>All firearms must be unloaded and cased when entering</li>
                <li>Magazines must be empty during transport</li>
                <li>Firearms must have proper sights</li>
                <li>Long guns must have a stock or brace</li>
                <li>Rifles must be fired supported (bench rest, bipod, etc.)</li>
                <li>Targets must be engaged center mass only</li>
              </ul>
            </BentoCard>

            <BentoCard title="Caliber & Ammunition Rules" className="lg:col-span-1 border-[var(--color-card-border)] bg-white shadow-sm hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <ul className="space-y-3 text-sm text-[var(--color-muted-fg)] mt-4 list-disc pl-4 mb-4">
                <li>Maximum caliber: .30-06</li>
                <li>Ammunition must be brass-cased and lead core</li>
              </ul>
              <p className="text-xs italic text-[var(--color-muted-fg-light)] bg-zinc-50 p-4 rounded-xl mt-auto">
                All ammunition is subject to inspection by range staff.
              </p>
            </BentoCard>

            <BentoCard title="Rate of Fire & Style" className="lg:col-span-1 border-[var(--color-card-border)] bg-white shadow-sm hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <ul className="space-y-3 text-sm text-[var(--color-muted-fg)] mt-4 list-disc pl-4 mb-4">
                <li>Conditional rapid fire is allowed for handgun calibers only</li>
                <li>Shooter must maintain control and remain on target</li>
                <li>Drawing from a holster is not permitted generally</li>
              </ul>
              <p className="text-xs italic text-[var(--color-muted-fg-light)] bg-zinc-50 p-4 rounded-xl mt-auto">
                Holster draw is available only through approval and training course completion.
              </p>
            </BentoCard>

            <BentoCard title="Suppressors & NFA Items" className="lg:col-span-1 border-[var(--color-card-border)] bg-white shadow-sm hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <ul className="space-y-3 text-sm text-[var(--color-muted-fg)] mt-4 list-disc pl-4 mb-4">
                <li>Suppressors are allowed with valid proof of ownership (tax stamp)</li>
                <li>Personal machine guns, binary triggers, and FRT devices are not permitted on the range</li>
              </ul>
              <div className="mt-auto pt-4 border-t border-[var(--color-card-border)]">
                <p className="text-sm font-bold text-[var(--color-primary-base)] flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> We are a Class 3 Dealer
                </p>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── FACILITY GALLERY ─── */}
      <section className="section-spacing bg-white text-[var(--color-foreground)]">
        <div className="content-container">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-2">Visual Tour</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Facility </span><span className="text-gradient">Gallery</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover shadow-xl">
              <Image 
                src="/images/IMG_9122.webp" 
                alt="Shooters practicing in the indoor shooting bays" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 rotate-90 scale-[1.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover mt-0 sm:mt-12 md:mt-8 shadow-xl">
              <Image 
                src="/images/legacy/DSC02296.webp" 
                alt="Indoor range bay with modern lane system" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover shadow-xl">
              <Image 
                src="/images/IMG_2502.webp" 
                alt="Two people coaching in an indoor range bay" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 rotate-90 scale-[1.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover shadow-xl">
              <Image 
                src="/images/legacy/DSC1390.webp" 
                alt="Range interior showing shooting lanes" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover mt-0 sm:mt-12 md:mt-8 shadow-xl">
              <Image 
                src="/images/legacy/DSC02326.webp" 
                alt="Facility common area and seating" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover shadow-xl">
              <Image 
                src="/images/legacy/DSC1668.webp" 
                alt="Lowcountry Guns exterior and entrance" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover mt-0 sm:mt-12 md:mt-8 shadow-xl">
              <Image 
                src="/images/legacy/DSC02433.webp" 
                alt="Range target retrieval system" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover shadow-xl">
              <Image 
                src="/images/legacy/DSC02450.webp" 
                alt="Shooting lane perspective" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover mt-0 sm:mt-12 md:mt-8 shadow-xl">
              <Image 
                src="/images/legacy/DSC02457.webp" 
                alt="Tactical practice in the bay" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 group glow-hover shadow-xl">
              <Image 
                src="/images/legacy/DSC1670.webp" 
                alt="Indoor range bay environment" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
