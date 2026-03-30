import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Users, Target, Shield, CheckCircle, Clock, MapPin, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: "Private Firearm Instruction | Lowcountry Guns & Range",
  description: "One-on-one sessions with our Master Instructors to help you master specific skills or become comfortable with a new firearm."
};

export default function PrivateInstruction() {
  return (
    <div className="flex flex-col bg-[#0a0a0b] text-white selection:bg-[var(--color-primary-base)] selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        {/* Full container image background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
          <Image 
            src="/images/IMG_1350.webp" 
            alt="Private Firearm Instruction" 
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
            <Star className="w-3 h-3 text-yellow-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Master Instructor Series</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
            <span className="text-white">Private</span> <span className="text-gradient">Coaching</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed max-w-2xl font-medium">
            Fast-track your progress with dedicated one-on-one coaching customized to your exact skill level and goals.
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
                <h2 className="text-3xl font-black text-white mb-6">Why Choose Private Instruction?</h2>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>
                    Group classes are excellent, but sometimes you need targeted, individualized attention to break through a plateau, learn a new platform, or build confidence at your own pace.
                  </p>
                  <p>
                    Our Master Instructors will assess your current abilities and design a custom training plan specifically for you. Whether you're a first-time shooter intimidated by crowded ranges, or an advanced shooter looking to shave fractions of a second off your draw stroke, private instruction is the most efficient way to improve.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Target className="w-8 h-8 text-[var(--color-primary-base)] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Diagnostics</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Identifying and correcting flinching, anticipation, or inconsistent groupings.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Star className="w-8 h-8 text-[var(--color-primary-base)] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Customized Training</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Perfecting specific skills like draw stroke, rapid fire, or transition between targets.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-[var(--color-primary-base)] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">New Firearm Prep</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Just bought a new gun? We'll teach you exactly how to operate, strip, and clean it.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-[var(--color-primary-base)] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">1-on-1 Focus</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Zero distractions. Full instructor attention on every single shot taken.</p>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 flex flex-col gap-8">
              <div className="sticky top-32 p-8 rounded-3xl bg-white/[0.01] border border-white/10 backdrop-blur-xl shadow-2xl">
                <h3 className="text-2xl font-black text-white mb-6">Booking Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Scheduling</p>
                      <p className="text-white font-bold">By Appointment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Expertise</p>
                      <p className="text-white font-bold">Master Instructor Tiers</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">How it Works</p>
                    <ul className="text-sm text-zinc-400 space-y-2 font-medium">
                      <li>• Hourly coaching blocks</li>
                      <li>• Specialized platform training</li>
                      <li>• Competitive & tactical tracks</li>
                      <li>• Professional range environment</li>
                    </ul>
                  </div>
                  <Link href="tel:8437845474">
                    <Button className="w-full h-14 rounded-2xl text-lg font-bold group">
                      Call to Book <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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
