import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Info, Crosshair, ShieldAlert } from 'lucide-react';
import type { Metadata } from 'next';
import rentalGuns from '../../data/rental-guns.json';

export const metadata: Metadata = {
  title: "Gun Rentals | Lowcountry Guns & Range",
  description: "Selection of hand guns, long guns and machine guns for RENT in the South East."
};

// Group the guns by category
const groupedGuns = rentalGuns.reduce((acc, gun) => {
  if (!acc[gun.category]) acc[gun.category] = [];
  acc[gun.category].push(gun);
  return acc;
}, {} as Record<string, typeof rentalGuns>);

export default function Rentals() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-[url('/images/IMG_1361.webp')] bg-cover bg-center bg-no-repeat opacity-90 rotate-90 scale-[1.75]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/90 via-[#0a0a0b]/20 to-transparent z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-3 delay-1 animate-fade-up">Equipment Center</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 delay-2 animate-fade-up drop-shadow-2xl">
            <span className="text-gradient-light brightness-125">Rental Gun</span>
            <br />
            Program
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 leading-relaxed mx-auto max-w-3xl delay-3 animate-fade-up">
            The largest selection of handguns, long guns, and machine guns for rent in the South East. Try before you buy, or experience the thrill of full-auto.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── OVERVIEW & PRICING ─── */}
      <section className="section-spacing bg-gradient-section">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Try It Before You Buy It</h2>
              <p className="text-lg text-[var(--color-muted-fg)] leading-relaxed">
                Whether you&apos;re a first-time shooter looking for the right fit, or a pro looking to test the latest models, Lowcountry Guns has the most popular carry and target guns available. Our inventory is constantly evolving.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="gradient-border-card p-5 rounded-xl bg-[var(--color-card-bg)] text-center flex flex-col items-center justify-center">
                  <Target className="w-6 h-6 text-[var(--color-primary-base)] mb-2" />
                  <p className="text-[var(--color-muted-fg)] text-sm font-medium uppercase tracking-wider mb-1">Handguns</p>
                  <p className="text-2xl font-bold text-[var(--color-foreground)]">$15.00+</p>
                  <p className="text-xs text-[var(--color-muted-fg-light)] mt-1">per gun + ammo</p>
                </div>
                <div className="gradient-border-card p-5 rounded-xl bg-[var(--color-card-bg)] text-center flex flex-col items-center justify-center">
                  <Info className="w-6 h-6 text-[var(--color-primary-base)] mb-2" />
                  <p className="text-[var(--color-muted-fg)] text-sm font-medium uppercase tracking-wider mb-1">Suppressed</p>
                  <p className="text-2xl font-bold text-[var(--color-foreground)]">$25.00</p>
                  <p className="text-xs text-[var(--color-muted-fg-light)] mt-1">per gun + ammo</p>
                </div>
                <div className="gradient-border-card p-5 rounded-xl bg-[var(--color-card-bg)] text-center flex flex-col items-center justify-center">
                  <Crosshair className="w-6 h-6 text-[var(--color-primary-base)] mb-2" />
                  <p className="text-[var(--color-muted-fg)] text-sm font-medium uppercase tracking-wider mb-1">Long Guns (.22LR)</p>
                  <p className="text-2xl font-bold text-[var(--color-foreground)]">$20.00</p>
                  <p className="text-xs text-[var(--color-muted-fg-light)] mt-1">per gun + ammo</p>
                </div>
                <div className="gradient-border-card p-5 rounded-xl bg-gradient-brand text-center border-none flex flex-col items-center justify-center shadow-md">
                  <ShieldAlert className="w-6 h-6 text-white mb-2" />
                  <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">Machine Guns</p>
                  <p className="text-2xl font-bold text-white">$45.00</p>
                  <p className="text-xs text-white/70 mt-1">per gun + ammo</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-square sm:aspect-auto sm:min-h-[300px] rounded-2xl overflow-hidden group glow-hover">
                <Image 
                  src="/images/legacy/advanced-competition-pistol.webp" 
                  alt="Advanced Competition Pistol" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/60 to-transparent" />
              </div>
              <div className="relative aspect-square sm:aspect-auto sm:h-full rounded-2xl overflow-hidden group glow-hover">
                <Image 
                  src="/images/legacy/DSC1687.webp" 
                  alt="Gun Rental Selection" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/60 to-transparent" />
              </div>
            </div>
          </div>

          {/* ─── INVENTORY LISTS ─── */}
          <div className="text-center mb-10 pt-10 border-t border-[var(--color-card-border)]">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Current </span><span className="text-gradient">Inventory</span>
            </h2>
            <p className="text-[var(--color-muted-fg)] mt-3">Over 170 firearms available. Updated regularly.</p>
          </div>

          <div className="flex flex-col gap-16 max-w-5xl mx-auto">
            {Object.entries(groupedGuns).map(([category, guns]) => (
              <div key={category} className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)]">{category}</h3>
                  <div className="h-px bg-gradient-to-r from-[var(--color-primary-base)] to-transparent flex-1 opacity-30" />
                </div>
                <div className="gradient-border-card overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-[var(--color-background)] border-b border-[var(--color-card-border)]">
                          <th className="p-4 font-semibold text-[var(--color-foreground)] w-1/4">Manufacturer</th>
                          <th className="p-4 font-semibold text-[var(--color-foreground)] w-1/4">Model</th>
                          <th className="p-4 font-semibold text-[var(--color-foreground)] w-1/4">Caliber</th>
                          <th className="p-4 font-semibold text-[var(--color-foreground)] w-1/4">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-[var(--color-muted-fg)] text-sm md:text-base">
                        {guns.map((gun, i) => (
                          <tr key={i} className="hover:bg-[var(--color-primary-base)]/5 transition-colors border-b border-[var(--color-card-border)] last:border-0">
                            <td className="p-4">{gun.manufacturer}</td>
                            <td className="p-4 font-medium text-[var(--color-foreground)]">{gun.model}</td>
                            <td className="p-4">{gun.caliber}</td>
                            <td className="p-4 text-[var(--color-primary-base)] font-medium">{gun.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-20 bg-gradient-section-reverse">
        <div className="content-container max-w-4xl mx-auto text-center">
          <BentoCard className="p-10 md:p-14 border-[var(--color-primary-base)]/30 glow-hover">
            <h3 className="text-3xl font-extrabold text-[var(--color-foreground)] mb-4">Looking for something specific?</h3>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Our massive rental wall offers unparalleled variety. Whether you want to test out a specific concealed carry piece before buying or just want to have an unforgettable time with friends—we&apos;ve got what you&apos;re looking for.
            </p>
            <Link href="tel:8437845474">
              <Button size="lg" className="rounded-full shadow-lg">Call the Pro Shop — 843-784-5474</Button>
            </Link>
          </BentoCard>
        </div>
      </section>
    </div>
  );
}
