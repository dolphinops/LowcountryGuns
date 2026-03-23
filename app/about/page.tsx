import { BentoCard } from '@/components/ui/BentoCard';
import Image from 'next/image';
import { Target, CheckCircle, Star, User, Quote, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Lowcountry Guns & Range",
  description: "Meet the team and learn about Lowcountry Guns & Range, South Carolina's premier indoor shooting facility."
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

      {/* ─── TEAM INTRO & PROFILES ─── */}
      <section className="section-spacing bg-gradient-brand text-white pb-10 pt-16 md:pt-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        
        <div className="content-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">Meet the Team</h2>
            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed font-medium">
              At Lowcountry Guns & Range, our staff is the heart of what we do. From maintaining a 0% tolerance safety policy to welcoming first-time shooters like family, our team of expert instructors and safety officers are here to ensure you have an incredible and safe experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* 4 Team Member placeholders */}
            {[1, 2, 3, 4].map((i) => (
              <BentoCard key={i} className="flex flex-col border-white/20 pt-8 pb-8 px-6 bg-white/10 backdrop-blur-sm shadow-xl text-center group hover:bg-white/15 transition-all glow-hover">
                <div className="mx-auto mb-6 w-28 h-28 rounded-full bg-white/5 border border-white/20 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:border-[var(--color-primary-base)]/50 relative">
                  <User className="w-12 h-12 text-white/40" />
                  {/* Real Image Placeholder:
                  <Image src="..." alt="Team Member" fill className="object-cover" />
                  */}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Name Placeholder</h3>
                <p className="text-sm font-bold tracking-wide uppercase text-[var(--color-primary-base)] mb-4">Title Placeholder</p>
                <p className="text-zinc-200 text-sm leading-relaxed flex-grow">
                  Short description placeholder about their experience, background, and role at Lowcountry Guns & Range.
                </p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GOOGLE REVIEWS ─── */}
      <section className="section-spacing bg-white text-zinc-900 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-50 pointer-events-none" />
        
        <div className="content-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1.5 mb-6 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 fill-current drop-shadow-sm" />)}
            </div>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium">
              We pride ourselves on providing a premium, safe, and welcoming environment for shooters of all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Review 1 */}
            <BentoCard className="flex flex-col border border-zinc-200 bg-white shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl relative">
              <div className="absolute -top-4 -left-3 text-zinc-100">
                <Quote className="w-20 h-20 fill-current opacity-50" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-700 leading-relaxed text-lg italic flex-grow">
                  &quot;The staff here is amazing! They are so friendly and knowledgeable. I attended my first CWP class with Chris and he was so patient and explained everything perfectly.&quot;
                </p>
                <div className="mt-8 font-bold text-zinc-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold overflow-hidden">
                    <User className="w-5 h-5" />
                  </div>
                  Google Reviewer
                </div>
              </div>
            </BentoCard>

            {/* Review 2 */}
            <BentoCard className="flex flex-col border border-zinc-200 bg-white shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl relative">
              <div className="absolute -top-4 -left-3 text-zinc-100">
                <Quote className="w-20 h-20 fill-current opacity-50" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-700 leading-relaxed text-lg italic flex-grow">
                  &quot;Excellent indoor facility with top-notch safety. The range officers are attentive and make sure everyone feels secure. The modern automated targets were great!&quot;
                </p>
                <div className="mt-8 font-bold text-zinc-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold overflow-hidden">
                    <User className="w-5 h-5" />
                  </div>
                  Google Reviewer
                </div>
              </div>
            </BentoCard>

            {/* Review 3 */}
            <BentoCard className="flex flex-col border border-zinc-200 bg-white shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl relative">
              <div className="absolute -top-4 -left-3 text-zinc-100">
                <Quote className="w-20 h-20 fill-current opacity-50" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-700 leading-relaxed text-lg italic flex-grow">
                  &quot;Great selection of rentals and a very clean range. As a beginner, I was quite nervous, but the team here made me feel right at home instantly.&quot;
                </p>
                <div className="mt-8 font-bold text-zinc-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold overflow-hidden">
                    <User className="w-5 h-5" />
                  </div>
                  Google Reviewer
                </div>
              </div>
            </BentoCard>
          </div>

          <div className="text-center">
            <a 
              href="https://www.google.com/search?q=lowcountry+guns+and+range"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-primary-base)] text-zinc-900 font-bold text-lg rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg hover:shadow-xl"
            >
              Read More Google Reviews <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>



      <div className="gradient-divider" />
    </div>
  );
}
