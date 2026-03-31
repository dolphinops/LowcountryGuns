import { BentoCard } from '@/components/ui/BentoCard';
import Image from 'next/image';
import { ShoppingBag, CheckCircle, ShieldAlert } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pro Shop & Sporting Goods Store | Hardeeville Shooting Range",
  description: "Lowcountry Guns is your premier Hardeeville sporting goods store, offering a massive selection of firearms, ammunition, and range gear. Shop where you shoot."
};

export default function ProShop() {
  return (
    <div className="flex flex-col bg-white text-[var(--color-foreground)] selection:bg-[var(--color-primary-base)] selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        {/* Full container image background - break out of any constraints */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
          <Image 
            src="/images/IMG_8222.webp" 
            alt="Lowcountry Guns Pro Shop Showroom" 
            fill 
            priority
            className="object-cover object-[center_35%] opacity-90 brightness-[0.7] scale-[1.1] hover:scale-105 transition-transform duration-[10s] ease-out" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-30 z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-base)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary-base)]"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Retail Excellence</span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8">
            <span className="text-white">Pro Shop</span> <br className="md:hidden" /> <span className="text-gradient-light brightness-125 drop-shadow-[0_0_30px_rgba(103,155,168,0.3)]">& Gear</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed mx-auto max-w-2xl font-medium">
            Everything you need, right where you shoot. Premier selection, expert advice.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── MAIN CONTENT ─── */}
      <section className="section-spacing bg-gradient-section relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary-base)]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="content-container relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <BentoCard className="lg:col-span-2 border-[var(--color-card-border)] bg-white shadow-sm p-8 md:p-10 hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-[var(--color-primary-base)]/10">
                  <ShoppingBag className="w-8 h-8 text-[var(--color-primary-base)]" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Our Retail Experience</h2>
              </div>
              <div className="flex flex-col gap-6 text-[var(--color-muted-fg)] leading-relaxed text-lg">
                <p>
                  As Hardeeville&apos;s premier sporting goods store, our Pro Shop is designed to support every shooter — from first-time visitors to competitive and defensive experts. Whether you need reliable ammunition, top-tier safety gear, or your next everyday carry, our retail experience is built right into our range.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary-base)] to-transparent opacity-20" />
                <p>
                  We carry only range-approved, high-quality, and legally compliant firearms and accessories. All firearm purchases are processed through our fast, efficient in-house FFL system.
                </p>
              </div>
            </BentoCard>

            <BentoCard title="What We Carry" className="border-[var(--color-card-border)] bg-white shadow-sm hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl">
              <ul className="space-y-4 text-sm text-[var(--color-muted-fg)] mt-4 font-medium">
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
          <div className="mt-20 text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Range </span><span className="text-gradient">Ammunition</span>
            </h2>
            <p className="text-[var(--color-muted-fg)] mt-4 text-lg">Ready to shoot right off the shelf.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {['9mm', '.380', '.40 S&W', '.45 ACP', '.223 / 5.56', '.22 LR', '12 Gauge Shotshells', 'Hunting Rounds'].map((ammo) => (
              <div key={ammo} className="px-4 py-6 rounded-2xl bg-white border border-[var(--color-card-border)] text-center shadow-sm hover:border-[var(--color-primary-base)] transition-all">
                <p className="text-lg font-bold text-[var(--color-foreground)] tracking-tight">{ammo}</p>
              </div>
            ))}
          </div>
          
          <div className="p-8 bg-red-50 border border-red-100 rounded-3xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500/60" />
            <div className="flex gap-5 items-start">
              <ShieldAlert className="w-7 h-7 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-red-900 font-bold mb-2 text-lg">Ammunition Restrictions</h3>
                <p className="text-red-800 leading-relaxed font-medium">
                  No steel core, armor-piercing, green tip, or tracer rounds allowed on the indoor range. Range ammo purchased in-store can be taken directly to the lane.
                </p>
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
