import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Memberships | Lowcountry Guns & Range",
  description: "Join the Lowcountry Guns family with our Premium, Premium+ and Family plans."
};

export default function Memberships() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-[url('/images/IMG_2502.webp')] bg-cover bg-center bg-no-repeat opacity-90 rotate-90 scale-[1.75]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/90 via-[#0a0a0b]/20 to-transparent z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-3 delay-1 animate-fade-up">Join The Community</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 delay-2 animate-fade-up drop-shadow-2xl">
            <span className="text-gradient-light brightness-125">Memberships</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 leading-relaxed mx-auto max-w-2xl delay-3 animate-fade-up">
            Train. Improve. Belong. Our membership tiers are designed for frequent shooters and families who demand the best facility in the Lowcountry.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── MAIN CONTENT ─── */}
      <section className="section-spacing bg-gradient-section">
        <div className="content-container">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Choose Your </span><span className="text-gradient">Tier</span>
            </h2>
            <p className="text-[var(--color-muted-fg)] mt-4 max-w-xl mx-auto">
              Select the plan that fits your shooting lifestyle. All memberships grant unlimited lane time with no hourly fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Premium */}
            <BentoCard className="flex flex-col border-[var(--color-card-border)] hover:border-[var(--color-primary-base)] transition-colors glow-hover pt-8 pb-6 px-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-1">Premium</h3>
                <p className="text-[var(--color-muted-fg)] text-sm">Unlimited Shooting</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold text-[var(--color-foreground)]">255</span>
                <span className="text-base text-[var(--color-muted-fg)] ml-1">Per Year</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-card-border)] to-transparent w-full mb-6" />
              <ul className="space-y-4 text-sm text-[var(--color-foreground)] flex-1 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 1 Membership (1 person)</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> Unlimited Shooting</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 50% off Handgun Rentals</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 1 Guest Pass Per Visit</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 1 Machine Gun Rental Per Year</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> $20 Gun Transfers</li>
              </ul>
              <Link href="https://app.hubspot.com/payments/mRKDNfFrsXmfP?referrer=PAYMENT_LINK" target="_blank" className="mt-auto block">
                <Button variant="outline" className="w-full h-12 hover:bg-gradient-to-r hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary-base)] hover:text-white hover:border-transparent transition-all">Select Premium</Button>
              </Link>
            </BentoCard>

            {/* Premium+ */}
            <BentoCard className="flex flex-col border-[var(--color-primary-base)] shadow-[0_0_20px_rgba(103,155,168,0.2)] relative transform md:-translate-y-4 bg-gradient-to-b from-[var(--color-card-bg)] to-[var(--color-primary-base)]/5 pt-8 pb-6 px-6">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-1">Premium+</h3>
                <p className="text-[var(--color-muted-fg)] text-sm">Unlimited Shooting +</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold text-[var(--color-foreground)]">345</span>
                <span className="text-base text-[var(--color-muted-fg)] ml-1">Per Year</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-primary-base)] to-transparent w-full opacity-50 mb-6" />
              <ul className="space-y-4 text-sm text-[var(--color-foreground)] flex-1 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 1 Membership (1 person)</li>
                <li className="flex items-center gap-3 font-medium text-[var(--color-primary-base)]"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> + Add One Member (Couples)</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> Unlimited Shooting</li>
                <li className="flex items-center gap-3 font-medium text-[var(--color-primary-base)]"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 1 Free Handgun Rental Per Visit</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 50% off additional Handgun Rentals</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 2 Guest Passes Per Visit</li>
                <li className="flex items-center gap-3 text-[var(--color-primary-base)] font-medium"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 1 Ultra Sonic Cleaning / Year</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 1 Machine Gun Rental Per Year</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> $20 Gun Transfers</li>
              </ul>
              <Link href="https://app.hubspot.com/payments/wdqP7c6R?referrer=PAYMENT_LINK" target="_blank" className="mt-auto block">
                <Button variant="primary" className="w-full h-12 text-base shadow-[0_4px_14px_rgba(103,155,168,0.4)]">Select Premium+</Button>
              </Link>
            </BentoCard>

            {/* Family Plan */}
            <BentoCard className="flex flex-col border-[var(--color-card-border)] hover:border-[var(--color-primary-base)] transition-colors glow-hover pt-8 pb-6 px-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-1">Family Plan</h3>
                <p className="text-[var(--color-muted-fg)] text-sm">Unlimited Shooting for your Loved Ones</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold text-[var(--color-foreground)]">595</span>
                <span className="text-base text-[var(--color-muted-fg)] ml-1">Per Year</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-card-border)] to-transparent w-full mb-6" />
              <ul className="space-y-4 text-sm text-[var(--color-foreground)] flex-1 mb-8">
                <li className="flex items-center gap-3 font-medium text-[var(--color-primary-base)]"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 4 Memberships (4 people)</li>
                <li className="flex items-center gap-3 text-[var(--color-primary-base)] font-medium"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 2 Free Handgun Rentals Per Visit</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 50% off additional Handgun Rentals</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> Unlimited Shooting</li>
                <li className="flex items-center gap-3 text-[var(--color-primary-base)] font-medium"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 2 Ultra Sonic Cleanings / Year</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 2 Guest Passes Per Visit</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> 1 Machine Gun Rental Per Year</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)] shrink-0" /> $20 Gun Transfers</li>
              </ul>
              <Link href="https://app.hubspot.com/payments/F4wS7bxpw9H7dM?referrer=PAYMENT_LINK" target="_blank" className="mt-auto block">
                <Button variant="outline" className="w-full h-12 hover:bg-gradient-to-r hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary-base)] hover:text-white hover:border-transparent transition-all">Select Family</Button>
              </Link>
            </BentoCard>

          </div>
        </div>
      </section>

      <div className="gradient-divider" />
    </div>
  );
}
