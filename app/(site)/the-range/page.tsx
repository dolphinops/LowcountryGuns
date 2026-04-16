import { BentoCard } from '@/components/ui/BentoCard';
import Image from 'next/image';
import Link from 'next/link';
import { Route, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Range | Serving Savannah, GA & Beaufort, SC",
  description: "Information about our 10-bay indoor shooting range, accessible from Savannah, GA and Beaufort, SC. Rules, gun rentals, and lane information."
};

type FacilityGalleryPhoto = {
  src: string;
  alt: string;
  /** Portrait / odd aspect sources: rotate + scale so `object-cover` fills the 5:4 tile without letterboxing. */
  imgClassName?: string;
};

const facilityGalleryPhotos: FacilityGalleryPhoto[] = [
  {
    src: "/images/IMG_9122.webp",
    alt: "Shooters practicing in the indoor shooting bays at Lowcountry Guns",
    imgClassName: "rotate-90 scale-[1.38]",
  },
  { src: "/images/legacy/DSC02296.webp", alt: "Indoor range bay with modern lane system and downrange lighting" },
  {
    src: "/images/IMG_2502.webp",
    alt: "Two people coaching in an indoor range bay",
    imgClassName: "rotate-90 scale-[1.28]",
  },
  { src: "/images/legacy/DSC1390.webp", alt: "Range interior showing shooting lanes and backstop" },
  { src: "/images/legacy/DSC02326.webp", alt: "Facility common area and seating near the range desk" },
  { src: "/images/legacy/DSC1668.webp", alt: "Lowcountry Guns exterior and entrance from the parking area" },
  { src: "/images/legacy/DSC02433.webp", alt: "Electronic target retrieval system on the firing line" },
  { src: "/images/legacy/DSC1670.webp", alt: "Wide view of the indoor range bay environment" },
];

export default function TheRange() {
  return (
    <div className="flex flex-col">
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-black border-b border-white/5">
        

        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto drop-shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)] mb-4 animate-fade-up">Facility Info</p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 animate-fade-up">
            <span className="text-gradient-light brightness-125">10-Bay Indoor</span>
            <br />
            Shooting Range
          </h1>
          <p className="text-lg md:text-2xl text-zinc-100 leading-relaxed mx-auto max-w-2xl animate-fade-up font-medium">
            The Lowcountry&apos;s premier climate-controlled indoor shooting facility, centrally located at I-95 Exit 5 for shooters from Hardeeville, Savannah, GA and Beaufort, SC.
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
              <div className="mt-8 flex flex-col gap-3 px-1">
                 <a 
                   href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-full py-3 px-6 bg-[var(--color-primary-base)] text-white text-center font-bold rounded-xl hover:bg-[var(--color-primary-hover)] transition-all transition-colors shadow-md flex items-center justify-center gap-2"
                 >
                   Get Directions <ChevronRight className="w-4 h-4" />
                 </a>
                 <Link 
                   href="/memberships"
                   className="w-full py-3 px-6 border border-[var(--color-card-border)] text-[var(--color-foreground)] text-center font-bold rounded-xl hover:bg-[var(--color-surface)] transition-all transition-colors"
                 >
                   View Memberships
                 </Link>
              </div>
            </BentoCard>

            <BentoCard title="Amenities & Comfort" className="lg:col-span-2 border-[var(--color-card-border)] bg-white shadow-sm hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-[var(--color-muted-fg)] mt-4 list-disc pl-4 font-medium">
                <li>100% Climate Controlled (70° Year-Round)</li>
                <li>Advanced EPA-Standard Ventilation</li>
                <li>Lead-Free Air Filtration System</li>
                <li>Bright, Modern LED Lighting</li>
                <li>Electronic Target Retrievers (Up to 25 Yards)</li>
                <li>Spacious 5,000+ sq ft Facility</li>
              </ul>
              <div className="mt-8 border-l-4 border-[var(--color-primary-base)] pl-4 py-3 bg-[var(--color-primary-base)]/5 rounded-r-xl">
                <p className="text-sm text-[var(--color-primary-dark)] font-bold">
                  Just 1 minute off I-95 at Exit 5. Easy access for Savannah and Hilton Head residents.
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

      {/* ─── Facility photos: even 2×4 grid, no stagger ─── */}
      <section className="border-y border-[var(--color-card-border)] bg-[var(--color-surface)] py-12 md:py-16">
        <div className="content-container">
          <div className="mb-6 md:mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-base)]">
              Facility photos
            </p>
            <h2 className="mt-1 text-balance text-2xl font-extrabold tracking-tight text-[var(--color-foreground)] md:text-3xl">
              Inside our bays, lanes, and arrival
            </h2>
            <p className="mt-2 max-w-2xl text-balance text-sm font-medium leading-relaxed text-[var(--color-muted-fg)] md:text-base">
              Eight photos: bays, retail floor, and building exterior.
            </p>
          </div>

          <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 sm:gap-3 lg:grid-cols-4">
            {facilityGalleryPhotos.map((photo) => (
              <li
                key={photo.src}
                className="relative aspect-[5/4] overflow-hidden rounded-lg border border-[var(--color-card-border)] bg-zinc-100 shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className={
                    photo.imgClassName
                      ? `object-cover object-center transition-transform duration-500 ${photo.imgClassName} hover:brightness-[1.04]`
                      : "object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
