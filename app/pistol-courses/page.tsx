import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Target, Zap, Shield, CheckCircle, Clock, MapPin, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Defensive Pistol Course | Lowcountry Guns & Range",
  description: "Advanced pistol handling, reloading under stress, and improving speed and accuracy."
};

export default function DefensivePistol() {
  return (
    <div className="flex flex-col bg-[#0a0a0b] text-white selection:bg-[var(--color-primary-base)] selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        {/* Full container image background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
          <Image 
            src="/images/legacy/DSC02457.webp" 
            alt="Defensive Pistol Course" 
            fill 
            priority
            className="object-cover opacity-40 brightness-[0.5] scale-[1.1] hover:scale-105 transition-transform duration-[10s] ease-out" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b] z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up max-w-5xl mx-auto">
          <Link href="/training" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-[var(--color-primary-base)] transition-colors mb-8 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to all Training
          </Link>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Zap className="w-3 h-3 text-yellow-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Advanced Combat Skills</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
            <span className="text-white">Defensive</span> <span className="text-gradient">Pistol</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed max-w-2xl font-medium">
            Master the art of winning a gunfight. Speed, accuracy, and tactical awareness under extreme pressure.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-24 bg-[#0a0a0b]">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-12">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-black text-white mb-6">Course Overview</h2>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>
                    Static marksmanship is only the first step in self-defense. Our Defensive Pistol Course is designed for shooters who want to move beyond the fundamentals and learn how to actually fight with a handgun.
                  </p>
                  <p>
                    This intensive class focuses on real-world applications: clearing malfunctions, reloading when it counts, and shooting multiple targets with varying cadences. We emphasize the balance of speed and accuracy required to survive a lethal encounter.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Target className="w-8 h-8 text-red-500 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Draw Stroke</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Fast, consistent, and safe presentation from concealment or OWB defensive holsters.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Zap className="w-8 h-8 text-yellow-500 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Recoil & Cadence</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Grip pressure and sight tracking during rapid-fire and target transitions.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <AlertTriangle className="w-8 h-8 text-orange-500 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Malfunctions</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Diagnosing and clearing Type 1, 2, and 3 jams under severe time pressure.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-blue-500 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Positional</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Operating effectively from cover and during one-handed engagement scenarios.</p>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 flex flex-col gap-8">
              <div className="sticky top-32 p-8 rounded-3xl bg-white/[0.01] border border-white/10 backdrop-blur-xl shadow-2xl">
                <h3 className="text-2xl font-black text-white mb-6">Course Log</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Duration</p>
                      <p className="text-white font-bold">1-2 Days (Intensive)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Prerequisite</p>
                      <p className="text-white font-bold">CWP or Experience</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Kit List</p>
                    <ul className="text-sm text-zinc-400 space-y-2 font-medium">
                      <li>• Handgun & 3+ Magazines</li>
                      <li>• Quality Holster & Belt</li>
                      <li>• 350+ rounds of ammunition</li>
                      <li>• Eye/Ear Protection</li>
                      <li>• Level 2 or 3 Retention Holster</li>
                    </ul>
                  </div>
                  <Link href="tel:8437845474">
                    <Button className="w-full h-14 rounded-2xl text-lg font-bold group">
                      Call to Register <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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
