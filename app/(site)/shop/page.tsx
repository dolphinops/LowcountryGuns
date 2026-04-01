import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ShoppingBag, Target, Shield, Package, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shop | Lowcountry Guns & Range",
  description: "Browse our premium firearms, ammunition, and shooting accessories. Our full online shop powered by Solidus One is coming soon."
};

const shopCategories = [
  {
    icon: <Target className="w-8 h-8 text-[var(--color-primary-base)]" />,
    title: "Ammunition",
    description: "Training rounds, self-defense ammo, and bulk selections for all calibers."
  },
  {
    icon: <Shield className="w-8 h-8 text-[var(--color-primary-base)]" />,
    title: "Firearms",
    description: "Handguns, rifles, and shotguns from top brands like Glock, Sig Sauer, and Smith & Wesson."
  },
  {
    icon: <Package className="w-8 h-8 text-[var(--color-primary-base)]" />,
    title: "Accessories",
    description: "Holsters, optics, tactical lighting, and range gear."
  }
];

export default function ShopPlaceholder() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-[url('/images/IMG_8205.webp')] bg-cover bg-center bg-no-repeat opacity-40 scale-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/95 via-[#0a0a0b]/40 to-transparent z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[var(--color-primary-base)]/20 border border-[var(--color-primary-base)]/30 rounded-full px-4 py-1.5 mb-6">
            <Clock className="w-4 h-4 text-[var(--color-primary-base)]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary-base)]">Coming Soon — Solidus One Integration</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl">
            Lowcountry <span className="text-gradient-light brightness-125">Shop</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 leading-relaxed mx-auto max-w-2xl">
            We are building a state-of-the-art e-commerce experience. Soon you&apos;ll be able to browse our full inventory of firearms, ammunition, and accessories from the comfort of your home.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <Link href="/contact">
                <Button size="lg" variant="primary" className="shadow-lg hover:shadow-xl px-10">Notify Me When Live</Button>
             </Link>
             <Link href="/pro-shop">
                <Button size="lg" variant="outline" className="px-10 text-white border-white/30 hover:bg-white/10">Browse Local Pro Shop</Button>
             </Link>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── CATEGORY PREVIEW ─── */}
      <section className="section-spacing bg-gradient-section">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              <span className="text-[var(--color-foreground)]">Browse Our </span><span className="text-gradient">Categories</span>
            </h2>
            <p className="text-[var(--color-muted-fg)] max-w-2xl mx-auto">
              Our online inventory will expand daily to include everything you need for the range and home defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {shopCategories.map((cat, idx) => (
              <BentoCard key={idx} className="p-8 border-[var(--color-card-border)] hover:border-[var(--color-primary-base)] transition-all group flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-2xl bg-[var(--color-surface)] group-hover:bg-[var(--color-primary-base)]/10 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
                <p className="text-[var(--color-muted-fg)] text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                <div className="mt-auto text-[var(--color-primary-base)] text-xs font-bold uppercase tracking-widest opacity-60">Coming Soon</div>
              </BentoCard>
            ))}
          </div>

          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-[var(--color-background)] border border-[var(--color-card-border)] shadow-sm max-w-4xl mx-auto text-center border-dashed">
            <ShoppingBag className="w-12 h-12 text-[var(--color-muted-fg)] mx-auto mb-6 opacity-40" />
            <h3 className="text-2xl font-bold mb-4">Why Wait? Visit our Pro Shop Today</h3>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mb-8 max-w-2xl mx-auto">
              While our online store is in development, our physical Pro Shop in Hardeeville is fully stocked with 170+ rental firearms and a massive selection of sporting goods.
            </p>
            <Link href="/pro-shop">
              <Button variant="primary" className="px-8 h-12 shadow-md">Get Shop Details</Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />
    </div>
  );
}
