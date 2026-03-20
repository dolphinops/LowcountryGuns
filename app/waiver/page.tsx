import type { Metadata } from 'next';
import { WaiverForm } from './WaiverForm';

export const metadata: Metadata = {
  title: "Waiver | Lowcountry Guns & Range",
  description: "Sign your range waiver before arriving at Lowcountry Guns & Range."
};

export default function Waiver() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-3 delay-1 animate-fade-up">Required Document</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 delay-2 animate-fade-up">
            <span className="text-gradient-light">Range Waiver</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mx-auto max-w-2xl delay-3 animate-fade-up">
            Save time at the counter — complete your waiver online before you arrive. All shooters and spectators are required to sign.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── MAIN CONTENT ─── */}
      <section className="section-spacing bg-gradient-section">
        <div className="content-container flex flex-col items-center">
          
          <div className="w-full max-w-4xl gradient-border-card p-6 md:p-10 bg-[var(--color-background)]">
            <WaiverForm />
          </div>

        </div>
      </section>

      <div className="gradient-divider" />
    </div>
  );
}
