import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Users, Heart, Shield, CheckCircle, Clock, MapPin, ChevronLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Woman's Basic Beginner Class | Women's Firearms Training Savannah & Beaufort",
  description: "A comfortable and welcoming firearms safety course for women in Hardeeville, SC. Serving Savannah, GA and Beaufort, SC. Learn safety, handling, and marksmanship."
};

export default function WomansBasicClass() {
  return (
    <div className="flex flex-col bg-white text-[var(--color-foreground)] selection:bg-[var(--color-primary-base)] selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-black">
        {/* Full container image background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
          <Image 
            src="/images/legacy/DSC1526.webp" 
            alt="Woman's Basic Beginner Class Firearms Training" 
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
            <Heart className="w-3 h-3 text-pink-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-200">Welcoming & Empowering</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
            <span className="text-white">Basic</span> <span className="text-gradient-light brightness-125">Foundations</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed max-w-2xl font-medium">
            Designed specifically for women. Gain confidence and independence in a supportive, ego-free environment.
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
              <div className="max-w-3xl">
                <h2 className="text-4xl font-black text-[var(--color-foreground)] mb-8 tracking-tight">The Best Women&apos;s Beginner Firearms Class in the Lowcountry</h2>
                <div className="space-y-6 text-[var(--color-muted-fg)] text-lg leading-relaxed font-medium">
                  <p>
                    Our Woman’s Beginner Firearms Course is designed specifically for women who are new to firearms. We provide a supportive and educational environment to help you gain the skills you need. This is the top-rated **women&apos;s shooting class in Savannah** and **Beaufort**.
                  </p>
                  <p>
                    Whether you’re looking to learn for personal protection or just want to gain a new skill, this course is perfect for you. Safety is our top priority—we emphasize the importance of handling firearms responsibly and provide you with the knowledge to do so with complete confidence.
                  </p>
                  <p>
                    Join a community of like-minded women and learn at your own pace. Our instructors are patient and experienced in addressing the specific questions and concerns that beginner female shooters often have.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                   { icon: Shield, title: "Safety Fundamentals", desc: "Learn the core rules of firearm safety to ensure you and your loved ones are always protected." },
                   { icon: Users, title: "Basic Operation", desc: "Hands-on experience with different firearms, including pistols and rifles, in a controlled setting." },
                   { icon: CheckCircle, title: "Hands-On Practice", desc: "Live-fire practice under close supervision to build muscle memory and confidence." },
                   { icon: Shield, title: "Legal Clarity", desc: "Clear, no-nonsense guidance on the legal aspects of firearm ownership and home defense." }
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
                      <p className="text-[var(--color-foreground)] font-black text-lg">2-3 Hour Intensive</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-card-border)] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)] mb-1">Location</p>
                      <p className="text-[var(--color-foreground)] font-black text-lg">Hardeeville, SC Center</p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-card-border)] to-transparent w-full" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted-fg-light)] mb-4">What&apos;s Included</p>
                    <ul className="text-sm text-[var(--color-muted-fg)] space-y-4 font-medium">
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Safe, supportive environment</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Firearms & safety gear provided</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Certified female-friendly instructors</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[var(--color-primary-base)]" /> Small class sizes</li>
                    </ul>
                  </div>
                  <Link href="tel:8437845474" className="block pt-4">
                    <Button className="w-full h-14 rounded-2xl text-lg font-black group shadow-lg shadow-[var(--color-primary-base)]/20">
                      Sign Up Today <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
