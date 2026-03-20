import { BentoCard } from '@/components/ui/BentoCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Purchase a Firearm | Lowcountry Guns & Range",
  description: "Rules, laws, and policies for purchasing a firearm in South Carolina."
};

export default function Purchase() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-[url('/images/IMG_8194.webp')] bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-3 delay-1 animate-fade-up">Firearm Sales</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 delay-2 animate-fade-up">
            <span className="text-gradient-light">Purchase a Firearm</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mx-auto max-w-2xl delay-3 animate-fade-up">
            Handguns, Long guns, and Shotguns can be sold to all individuals after a simple background check at LCGUNS. We can only sell handguns to South Carolina residents.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      <section className="section-spacing bg-gradient-section">
        <div className="content-container flex flex-col gap-12">

      <BentoCard title="South Carolina Firearm Purchasing Rules">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-[var(--color-foreground)] text-lg border-b border-[var(--color-card-border)] pb-2">Age Requirements</h4>
            <p className="text-[var(--color-muted-fg)] text-sm">You must be at least 18 years old to purchase a firearm from a licensed dealer in South Carolina.</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-[var(--color-foreground)] text-lg border-b border-[var(--color-card-border)] pb-2">Background Checks</h4>
            <p className="text-[var(--color-muted-fg)] text-sm">You must pass a background check to purchase a firearm from a licensed dealer in South Carolina.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-[var(--color-foreground)] text-lg border-b border-[var(--color-card-border)] pb-2">Waiting Periods</h4>
            <p className="text-[var(--color-muted-fg)] text-sm">There is no waiting period to purchase a firearm from a licensed dealer in South Carolina.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-[var(--color-foreground)] text-lg border-b border-[var(--color-card-border)] pb-2">Out of State Purchases</h4>
            <p className="text-[var(--color-muted-fg)] text-sm">You can purchase a firearm out of state and bring it back to South Carolina if the sale meets all federal, state, and lawful requirements.</p>
          </div>
        </div>
      </BentoCard>

      <BentoCard title="SLED Regulations" className="bg-[var(--color-primary-base)]/5 border-[var(--color-primary-base)]/20 mt-4">
        <div className="flex flex-col gap-4 mt-4 text-sm text-[var(--color-muted-fg)]">
          <p>
            The South Carolina Law Enforcement Division (SLED) issues concealed weapons permits (CWPs) and regulates firearms in South Carolina. A CWP is valid for five years and must be renewed through SLED. SLED will issue a CWP if the background check and fingerprint review are favorable.
          </p>
          <p>
            The permitless carry law signed by the Governor on March 7, 2024, allows individuals 18 and older to carry a firearm openly or concealed without a permit. However, there are still many locations where firearms are prohibited, including schools, churches, law enforcement facilities, and courthouses.
          </p>
        </div>
      </BentoCard>
        </div>
      </section>
    </div>
  );
}
