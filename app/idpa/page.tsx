import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IDPA Matches | Lowcountry Guns & Range",
  description: "Monthly International Defensive Pistol Association (IDPA) matches at Lowcountry Guns & Range."
};

export default function IDPA() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Monthly IDPA Matches
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          International Defensive Pistol Association
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
}
