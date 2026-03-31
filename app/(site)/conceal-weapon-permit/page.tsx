import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Shield, CheckCircle, Clock, MapPin, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: "Conceal Weapon Permit (CWP) | Lowcountry Guns & Range",
  description: "South Carolina approved training required for carrying a concealed weapon. Covers laws, storage, and practical shooting."
};

export default function ConcealWeaponPermit() {
  return (
    <div className="flex flex-col bg-[#0a0a0b] text-white selection:bg-[var(--color-primary-base)] selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        {/* Full container image background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
          <Image 
            src="/images/IMG_8173.webp" 
            alt="Conceal Weapon Permit Course" 
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
            <Shield className="w-3 h-3 text-[var(--color-primary-base)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Official Certification</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
            <span className="text-white">CWP</span> <span className="text-gradient">Certification</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed max-w-2xl font-medium">
            South Carolina SLED-approved training. Everything you need to legally and responsibly carry a concealed weapon.
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
                    Our Conceal Weapon Permit course meets all South Carolina state requirements for carrying a concealed handgun. This is a comprehensive class designed to ensure you are legally, morally, and tactically prepared to carry a concealed firearm.
                  </p>
                  <p>
                    We cover the crucial differences between simply knowing how to shoot and understanding the legal ramifications of using deadly force. You will leave this class with a thorough understanding of SC gun laws, situational awareness, and safe storage practices.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Scale className="w-8 h-8 text-[var(--color-primary-base)] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">SC Gun Laws</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">In-depth discussion on where you can and cannot carry, and the legalities of self-defense.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-[var(--color-primary-base)] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Safety & Storage</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Safe handling practices and responsible storage at home and in your vehicle.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8 text-[var(--color-primary-base)] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Marksmanship</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Grip, stance, sight alignment, and trigger control required for qualification.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <Clock className="w-8 h-8 text-[var(--color-primary-base)] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Qualification</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Mandatory 50-round shooting qualification and state-required written test.</p>
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
                      <p className="text-white font-bold">8 Hours (Full Day)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Location</p>
                      <p className="text-white font-bold">Lowcountry Training Center</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Requirements</p>
                    <ul className="text-sm text-zinc-400 space-y-2 font-medium">
                      <li>• Must be 21+ years of age</li>
                      <li>• Valid SC ID/Driver's License</li>
                      <li>• Handgun & 50 rounds ammo</li>
                      <li>• Eye & Ear protection</li>
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
