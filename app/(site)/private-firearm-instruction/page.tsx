import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Users, Target, Shield, CheckCircle, Clock, MapPin, Star, ChevronLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Private Firearm Instruction | 1-on-1 Shooting Lessons Savannah & Beaufort",
  description: "Personalized firearms training with Master Instructors. Custom shooting lessons for all skill levels in Hardeeville, SC. Serving Savannah, GA and Beaufort, SC."
};

export default function PrivateInstruction() {
  return (
    <div className="flex flex-col bg-white text-[var(--color-foreground)] selection:bg-[var(--color-primary-base)] selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-black">
        {/* Full container image background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
          <Image 
            src="/images/IMG_1350.webp" 
            alt="Private Firearm Instruction and Shooting Coaching" 
            fill 
            priority
            className="object-cover opacity-60 brightness-[0.5] scale-[1.1] hover:scale-105 transition-transform duration-[10s] ease-out" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up max-w-5xl mx-auto">
          <Link href="/training" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[var(--color-primary-light)] transition-colors mb-12 group drop-shadow-sm font-bold">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to all Training
          </Link>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <Star className="w-3 h-3 text-yellow-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-200">Master Instructor Series</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
            <span className="text-white">Private</span> <span className="text-gradient-light brightness-125">Coaching</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed max-w-2xl font-medium">
            Fast-track your progress with dedicated one-on-one coaching customized to your exact skill level and goals.
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
            <div className="lg:col-span-8 flex flex-col gap-16">
              <div className="max-w-3xl text-balance">
                <h2 className="text-4xl font-black text-[var(--color-foreground)] mb-8 tracking-tight">Personalized Shooting Lessons for All Skill Levels</h2>
                <div className="space-y-6 text-[var(--color-muted-fg)] text-lg leading-relaxed font-medium">
                  <p>
                    Group classes are excellent, but sometimes you need targeted, individualized attention to break through a plateau, learn a new platform, or build confidence at your own pace. This is the premier destination for **private shooting lessons in Savannah** and **Beaufort**.
                  </p>
                  <p>
                    Our Master Instructors will assess your current abilities and design a custom training plan specifically for you. Whether you&apos;re a first-time shooter intimidated by crowded ranges, or an advanced tactical shooter looking to shave fractions of a second off your draw stroke, private instruction is the most efficient way to improve.
                  </p>
                  <p>
                    Experience the full attention of a professional in a safe, controlled environment. Our private coaching is geared towards results, ensuring you leave each session with improved technique and greater confidence.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Skill Diagnostics", desc: "Identifying and correcting flinching, anticipation, or inconsistent groupings with immediate feedback." },
                  { icon: Star, title: "Customized Tracks", desc: "Perfecting specific skills like draw stroke, rapid fire, or transition between multiple targets." },
                  { icon: Shield, title: "New Platform Prep", desc: "Just bought a new gun? We'll teach you exactly how to operate, strip, and clean it properly." },
                  { icon: Users, title: "1-on-1 Focus", desc: "Zero distractions. Full instructor attention on every single shot taken to maximize your training time." }
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

            <aside className="lg:col-span-4 flex flex-col gap-8">
              <div className="sticky top-32 p-8 md:p-10 rounded-3xl bg-white border border-[var(--color-card-border)] shadow-2xl shadow-zinc-200/50">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-card-border)] text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary-dark)] mb-6">
                  Booking Info
                </div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-card-border)] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)] mb-1">Session Type</p>
                      <p className="text-[var(--color-foreground)] font-black text-lg">Hourly Custom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-card-border)] flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)] mb-1">Instruction</p>
                      <p className="text-[var(--color-foreground)] font-black text-lg">Master Instructor</p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-card-border)] to-transparent w-full" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)] mb-4">Why Book Private?</p>
                    <ul className="text-sm text-[var(--color-muted-fg)] space-y-4 font-medium">
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-500" /> Accelerated Learning</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-500" /> Safety-First Environment</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-500" /> Platform Specific Mastery</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-500" /> Flexible Scheduling</li>
                    </ul>
                  </div>
                  <Link href="tel:8437845474" className="block pt-4">
                    <Button className="w-full h-14 rounded-2xl text-lg font-black group shadow-lg shadow-[var(--color-primary-base)]/20">
                      Schedule With Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
