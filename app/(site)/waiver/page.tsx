import type { Metadata } from 'next';

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
          
          <div className="w-full max-w-4xl gradient-border-card bg-[var(--color-background)] p-4 md:p-8">
            <p className="mb-4 text-center text-sm text-[var(--color-muted-fg)] md:text-left">
              The waiver loads below. On phones, scroll inside the frame if the form is taller than your screen.
            </p>
            <iframe
              title="Lowcountry Guns range waiver"
              src="/embed/waiver"
              className="block h-[min(78vh,820px)] min-h-[520px] w-full rounded-2xl border border-[var(--color-card-border)] bg-white shadow-sm md:min-h-[640px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      <div className="gradient-divider" />
    </div>
  );
}
