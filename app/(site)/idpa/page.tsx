import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IDPA Matches | Lowcountry Guns & Range",
  description: "Monthly International Defensive Pistol Association (IDPA) matches at Lowcountry Guns & Range."
};

export default function IDPA() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      {/* ─── HERO BANNER ─── */}
      <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
        <Image src="/images/legacy/DSC02461.jpg" alt="IDPA competitive shooting match at Lowcountry Guns" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Monthly IDPA Matches
          </h1>
          <p className="text-lg text-zinc-300 mt-2">
            International Defensive Pistol Association
          </p>
        </div>
      </div>

      {/* ─── CONTENT + PORTRAIT SIDEBAR ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Info Cards */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <BentoCard title="What is IDPA?" className="bg-[var(--color-primary-base)]/5 border-[var(--color-primary-base)]/20">
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              LCGUNs proudly hosts IDPA matches once per month, providing a safe, structured, and welcoming environment for shooters of all experience levels. Whether you are brand new to competitive shooting or looking to sharpen real-world defensive skills, IDPA is one of the most accessible and practical shooting sports available.
            </p>
            <div className="mt-6">
              <p className="font-semibold text-[var(--color-foreground)]">Schedule</p>
              <p className="text-[var(--color-muted-fg)]">Second Thursday each month at 5:30 pm</p>
            </div>
            <a href="https://practiscore.com/search/matches?query=Lowcountry%20Guns%20%26%20Range" target="_blank" rel="noopener noreferrer" className="block mt-6">
              <Button>Register for Match</Button>
            </a>
          </BentoCard>

          <BentoCard title="Equipment Requirements">
            <div className="mt-4 flex flex-col gap-6 text-sm">
              <div>
                <h4 className="font-bold text-[var(--color-foreground)] flex items-center gap-2">
                  <span className="text-[var(--color-primary-base)]">01.</span> Firearm
                </h4>
                <p className="text-[var(--color-muted-fg)] mt-1 ml-6">Centerfire handgun (9mm or larger). Common divisions include striker-fired, DA, and SA pistols.</p>
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-foreground)] flex items-center gap-2">
                  <span className="text-[var(--color-primary-base)]">02.</span> Holster & Mags
                </h4>
                <p className="text-[var(--color-muted-fg)] mt-1 ml-6">Strong-side belt holster (no shoulder/cross-draw). Minimum 3 magazines & pouches recommended.</p>
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-foreground)] flex items-center gap-2">
                  <span className="text-[var(--color-primary-base)]">03.</span> Ammunition
                </h4>
                <p className="text-[var(--color-muted-fg)] mt-1 ml-6">Approximately 100–150 rounds per match.</p>
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-foreground)] flex items-center gap-2">
                  <span className="text-[var(--color-primary-base)]">04.</span> Safety Gear
                </h4>
                <p className="text-[var(--color-muted-fg)] mt-1 ml-6">Eye and Ear protection are mandatory (we can provide if needed).</p>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Right: Portrait Action Shots Stack */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/legacy/DSC02457.webp" alt="IDPA competitor engaging targets" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
          </div>
          <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/legacy/DSC1526.webp" alt="Shooter in action at IDPA match" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
