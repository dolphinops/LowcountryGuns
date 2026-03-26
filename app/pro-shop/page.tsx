import { BentoCard } from '@/components/ui/BentoCard';
import Image from 'next/image';
import { ShoppingBag, CheckCircle, ShieldAlert } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pro Shop | Lowcountry Guns & Range",
  description: "Everything you need right where you shoot. Firearms, ammunition, and accessories."
};

export default function ProShop() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-[url('/images/IMG_4507.webp')] bg-cover bg-center bg-no-repeat opacity-50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-3 delay-1 animate-fade-up">Retail Hub</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 delay-2 animate-fade-up drop-shadow-2xl">
            <span className="text-gradient-light brightness-125">The Pro Shop</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 leading-relaxed mx-auto max-w-2xl delay-3 animate-fade-up">
            Everything you need, right where you shoot. Handguns, long guns, ammunition, and tactical accessories seamlessly integrated with our range.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── MAIN CONTENT ─── */}
      <section className="section-spacing bg-gradient-section">
        <div className="content-container">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <BentoCard className="lg:col-span-2 border-[var(--color-card-border)] glow-hover p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[var(--color-primary-base)]/10">
                  <ShoppingBag className="w-8 h-8 text-[var(--color-primary-base)]" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Our Retail Experience</h2>
              </div>
              <div className="flex flex-col gap-6 text-[var(--color-muted-fg)] leading-relaxed text-lg">
                <p>
                  Our Pro Shop is designed to support every shooter — from first-time visitors to competitive and defensive experts. Whether you need reliable ammunition, top-tier safety gear, or your next everyday carry, our retail counter is built into our range. Get what you need, and test it immediately.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary-base)] to-transparent opacity-30" />
                <p>
                  We carry only range-approved, high-quality, and legally compliant firearms and accessories. All firearm purchases are processed through our fast, efficient in-house FFL system.
                </p>
              </div>
            </BentoCard>

            <BentoCard title="What We Carry" className="border-[var(--color-card-border)] hover:border-[var(--color-primary-base)] transition-colors">
              <ul className="space-y-4 text-sm text-[var(--color-foreground)] mt-4 font-medium">
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Handguns (Glock, FN, S&W)</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> AR-Style Rifles</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Hunting Rifles & Shotguns</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Suppressors & NFA Items</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Pre-Owned Firearms</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Safety & Range Gear</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Holsters & Optics</li>
              </ul>
            </BentoCard>
          </div>

          {/* ─── AMMUNITION & ACCESSORIES ─── */}
          <div className="mt-12 text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Range </span><span className="text-gradient">Ammunition</span>
            </h2>
            <p className="text-[var(--color-muted-fg)] mt-3">Ready to shoot right off the shelf.</p>
          </div>

          <div className="gradient-border-card overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {['9mm', '.380', '.40 S&W', '.45 ACP', '.223 / 5.56', '.22 LR', '12 Gauge Shotshells', 'Hunting Rounds'].map((ammo) => (
                  <div key={ammo} className="px-4 py-5 rounded-xl bg-[var(--color-background)] border border-[var(--color-card-border)] text-center shadow-sm">
                    <p className="text-lg font-bold text-[var(--color-foreground)]">{ammo}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-red-950/10 border border-red-900/30 rounded-xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600" />
                <div className="flex gap-4 items-start pl-2">
                  <ShieldAlert className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-red-500 font-bold mb-1">Ammunition Restrictions</h3>
                    <p className="text-sm text-[var(--color-foreground)]/80 leading-relaxed">
                      No steel core, armor-piercing, green tip, or tracer rounds allowed on the indoor range. Range ammo purchased in-store can be taken directly to the lane.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="section-spacing bg-gradient-dark text-white text-center pb-12">
        <div className="content-container">
          <h2 className="text-3xl font-extrabold mb-8 tracking-tight">
             Inside the <span className="text-gradient">Pro Shop</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10 group">
              <Image src="/images/legacy/DSC02534.webp" alt="Pro Shop interior with firearms on display" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10 group">
              <Image src="/images/legacy/DSC1396.webp" alt="Pro Shop display counter" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10 group">
              <Image src="/images/legacy/IMG_3575-scaled.jpg" alt="Rifle selection wall" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />
    </div>
  );
}
