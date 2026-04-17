import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Shield, CheckCircle, Clock, MapPin, Scale, ChevronLeft } from 'lucide-react';
import EventbriteWidget from '@/components/EventbriteWidget';

export const metadata: Metadata = {
  title: "Concealed Weapon Permit (CWP) Classes | Savannah, GA & Beaufort, SC",
  description: "Official SC SLED-approved Concealed Weapon Permit (CWP) certification. Serving Hardeeville, Savannah, and Beaufort. Learn gun laws, safety, and qualification."
};

export default function ConcealWeaponPermit() {
  return (
    <div className="flex flex-col bg-white text-[var(--color-foreground)] selection:bg-[var(--color-primary-base)] selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-black">
        {/* Full container image background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
          <Image 
            src="/images/IMG_8173.webp" 
            alt="Concealed Weapon Permit (CWP) Training Course" 
            fill 
            priority
            className="object-cover opacity-60 brightness-[0.5] scale-[1.1] hover:scale-105 transition-transform duration-[10s] ease-out" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/50 z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up max-w-5xl mx-auto">
          <Link href="/training" className="flex w-fit items-center gap-2 text-sm text-zinc-400 hover:text-[var(--color-primary-light)] transition-colors mb-12 group drop-shadow-sm font-bold">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to all Training
          </Link>
          
          <div className="flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <Shield className="w-3 h-3 text-[var(--color-primary-base)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-200">Official SC SLED Certification</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
            <span className="text-white">CWP</span> <span className="text-gradient-light brightness-125">Certification</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed max-w-2xl font-medium">
            South Carolina SLED-approved training. Everything you need to legally and responsibly carry a concealed weapon in the Lowcountry.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-24 bg-gradient-section relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary-base)]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="content-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-16">
              <div className="max-w-3xl text-balance">
                <h2 className="text-4xl font-black text-[var(--color-foreground)] mb-8 tracking-tight">CWP Classes for Savannah, Beaufort & Beyond</h2>
                <div className="space-y-6 text-[var(--color-muted-fg)] text-lg leading-relaxed font-medium">
                  <p>
                    Our South Carolina Conceal Weapon Permit (CWP) course meets all state-mandated requirements for carrying a concealed handgun. This comprehensive class ensures you are legally, morally, and tactically prepared for self-defense.
                  </p>
                  <p>
                    Located in Hardeeville, we are the premier choice for residents in Savannah, GA, Beaufort, SC, and Bluffton. We bridge the gap between basic shooting skills and a deep understanding of the legal responsibilities that come with carrying a firearm.
                  </p>
                  <p>
                    From classroom instruction on SC gun laws to live-fire qualification on our state-of-the-art range, our instructors provide the highest level of CWP training in the region.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Scale, title: "SC Carry Laws", desc: "Detailed breakdown of where carrying is prohibited and the legal standards for self-defense in South Carolina." },
                  { icon: Shield, title: "Safe Storage", desc: "Responsible storage techniques for the home and vehicle to ensure maximum safety for your family." },
                  { icon: CheckCircle, title: "Marksmanship Fundamentals", desc: "Precision instruction on grip, stance, and sight alignment required for high-accuracy qualification." },
                  { icon: Clock, title: "Live-Fire Qualification", desc: "Mandatory 50-round qualification and comprehensive written test included in the course." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white border border-[var(--color-card-border)] shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary-base)]/5 hover:border-[var(--color-primary-base)]/30 transition-all duration-500 group">
                    <div className="p-3 w-fit rounded-2xl bg-[var(--color-surface)] border border-[var(--color-card-border)] mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-[var(--color-primary-base)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">{item.title}</h3>
                    <p className="text-[var(--color-muted-fg)] text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5 flex flex-col gap-8">
              <div className="sticky top-32 p-8 md:p-10 rounded-3xl bg-white border border-[var(--color-card-border)] shadow-2xl shadow-zinc-200/50">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-card-border)] text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary-dark)] mb-6">
                  Course Details
                </div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-card-border)] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)] mb-1">Duration</p>
                      <p className="text-[var(--color-foreground)] font-black text-lg">8 Hours (Full Day)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-card-border)] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)] mb-1">Location</p>
                      <p className="text-[var(--color-foreground)] font-black text-lg">Hardeeville, SC Range</p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-card-border)] to-transparent w-full" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)] mb-4">Requirements</p>
                    <ul className="text-sm text-[var(--color-muted-fg)] space-y-4 font-medium">
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-500" /> Must be 21+ years of age</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-500" /> Valid State ID (SC, GA, etc.)</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-500" /> Handgun & 50 rounds ammo</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-500" /> Eye & Ear protection</li>
                    </ul>
                  </div>
                  <div className="border-t border-[var(--color-card-border)] pt-8">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)]">
                      Book this class
                    </p>
                    <EventbriteWidget eventId="1680544276169" height={500} />
                    <p className="mt-4 text-center text-xs font-medium text-[var(--color-muted-fg)]">
                      Trouble with the widget?{' '}
                      <a href="tel:8437845474" className="font-semibold text-[var(--color-primary-base)] underline-offset-2 hover:underline">
                        Call the Pro Shop
                      </a>
                      {' '}— 843-784-5474
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />
    </div>
  );
}
