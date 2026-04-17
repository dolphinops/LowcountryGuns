import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Use of Force Training | Lowcountry Guns & Range",
  description: "Understand the legal, moral, and tactical realities of using force in self-defense. Covers SC law, situational awareness, and scenario-based training."
};

export default function UseOfForce() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <Link href="/training" className="text-sm text-[var(--color-primary-base)] hover:underline">&larr; Back to all Training</Link>

      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Use of Force Training
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          Know when, how, and why — the legal, moral, and tactical realities of using force in self-defense.
        </p>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-xl mb-4">
        <Image src="/images/legacy/DSC1390.webp" alt="Use of Force Training" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <BentoCard title="Course Overview">
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Our Use of Force course goes far beyond marksmanship. It&apos;s designed for concealed carriers and armed citizens who want a deeper understanding of what happens before, during, and after a critical incident involving force.
            </p>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              You&apos;ll explore the legal framework governing the use of deadly force in South Carolina, learn how to assess threats through situational awareness, and apply your judgment under pressure in realistic scenario-based exercises.
            </p>
          </BentoCard>

          <BentoCard title="Course Curriculum" className="bg-[var(--color-card-border)]/20">
            <ul className="space-y-6 mt-4">
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Legals</span>
                <span className="text-[var(--color-muted-fg)]">In-depth review of South Carolina self-defense law, Castle Doctrine, Stand Your Ground, duty to retreat, and the legal aftermath of a defensive shooting.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Awareness</span>
                <span className="text-[var(--color-muted-fg)]">Cooper&apos;s Color Code, pre-incident indicators, de-escalation techniques, and how to read environments for potential threats before they materialize.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Scenario Training</span>
                <span className="text-[var(--color-muted-fg)]">Force-on-force exercises using realistic scenarios to pressure-test your decision-making and shooting skills under stress.</span>
              </li>
            </ul>
          </BentoCard>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <BentoCard title="Course Details" className="border-[var(--color-primary-base)]/50">
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Duration</span>
                <span className="font-medium text-[var(--color-foreground)]">4 Hours</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Prerequisites</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">CWP or equivalent<br/>experience recommended</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">What to Bring</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Handgun, 100 rounds<br/>Eye/Ear Protection</span>
              </div>

              <Link href="tel:8437845474" className="mt-4">
                <Button className="w-full">Call to Register</Button>
              </Link>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
