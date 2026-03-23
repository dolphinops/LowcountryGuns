import { BentoCard } from '@/components/ui/BentoCard';
import Image from 'next/image';
import { Landmark, Target, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Lowcountry Guns & Range",
  description: "Learn about Lowcountry Guns & Range, continuing the tradition of Palmetto Indoor Range."
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-[url('/images/C5376FBA-E5A2-4F53-9618-428D1DD50446.webp')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-3 delay-1 animate-fade-up">Our Story</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 delay-2 animate-fade-up">
            <span className="text-gradient-light">About Us</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mx-auto max-w-2xl delay-3 animate-fade-up">
            South Carolina&apos;s Premier Indoor Gun Range, committed to providing a safe, family-friendly, and state-of-the-art environment for all shooters.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── MAIN CONTENT ─── */}
      <section className="section-spacing bg-gradient-brand text-white pb-10">
        <div className="content-container">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            <BentoCard className="flex flex-col border-white/20 transition-colors glow-hover pt-8 pb-6 px-8 bg-white/10 backdrop-blur-sm shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] pointer-events-none" />
              <div className="flex items-center gap-4 mb-6 relative">
                <div className="p-3 rounded-full bg-white/20 text-white">
                  <Landmark className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Passing the Torch</h3>
              </div>
              <p className="text-zinc-100 leading-relaxed text-lg relative">
                With great appreciation, we are honored to carry on the tradition left by Edward Soto of Palmetto Indoor Range (Previous Ownership). Lowcountry Guns & Range continues the legacy, elevating the standard for indoor shooting in the region.
              </p>
            </BentoCard>

            <BentoCard className="flex flex-col border-white/20 transition-colors glow-hover pt-8 pb-6 px-8 bg-white/10 backdrop-blur-sm shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] pointer-events-none" />
              <div className="flex items-center gap-4 mb-6 relative">
                <div className="p-3 rounded-full bg-white/20 text-white">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Facility</h3>
              </div>
              <ul className="space-y-4 text-white font-medium relative">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5" /> 10 State-of-the-art shooting bays</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5" /> Fully integrated Pro Shop</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5" /> Dedicated, certified safety officers</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5" /> Open 7 days a week</li>
              </ul>
            </BentoCard>

          </div>
        </div>
      </section>

      {/* ─── IMAGE GALLERY ─── */}
      <section className="section-spacing bg-gradient-dark text-white pt-10">
        <div className="content-container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[3/2] md:col-span-2 rounded-xl overflow-hidden shadow-lg border border-white/10 group">
              <Image src="/images/legacy/DSC02433.webp" alt="Inside Lowcountry Guns and Range facility" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                <Image src="/images/legacy/DSC1670.webp" alt="Shooter at Lowcountry Guns" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                <Image src="/images/legacy/DSC02296.webp" alt="Indoor shooting range bay" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />
    </div>
  );
}
