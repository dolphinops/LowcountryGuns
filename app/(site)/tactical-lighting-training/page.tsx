import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tactical Lighting Training | Lowcountry Guns & Range",
  description: "Learn low-light and no-light shooting techniques using handheld and weapon-mounted lights safely."
};

export default function TacticalLighting() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <Link href="/training" className="text-sm text-[var(--color-primary-base)] hover:underline">&larr; Back to all Training</Link>
      
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Tactical Lighting Training
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          Master the dark. Learn essential low-light and no-light shooting techniques with professional instructors.
        </p>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-xl mb-4">
        <Image src="/images/legacy/DSC1395.webp" alt="Tactical Lighting Training" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <BentoCard title="Course Overview">
             <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Most defensive encounters happen in compromised lighting environments. Our Tactical Lighting Training equips you with the skills to effectively identify threats, navigate environments, and engage targets with confidence in low-light conditions.
            </p>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              You will learn how to properly deploy both weapon-mounted and handheld lights, understanding the distinct advantages of each. This course goes beyond basic marksmanship to incorporate critical decision-making under stress and limited visibility.
            </p>
          </BentoCard>

          <BentoCard title="Course Curriculum" className="bg-[var(--color-card-border)]/20">
            <ul className="space-y-6 mt-4">
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Light Discipline</span>
                <span className="text-[var(--color-muted-fg)]">Knowing when and how to use light without compromising your own position.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Handheld vs Weapon-Mounted</span>
                <span className="text-[var(--color-muted-fg)]">Mastering techniques such as Harries, FBI, and Neck Index for handhelds, alongside weapon-mounted best practices.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Target Identification</span>
                <span className="text-[var(--color-muted-fg)]">Critically illuminating areas to properly separate threats from non-threats before engaging.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Live-Fire Scenarios</span>
                <span className="text-[var(--color-muted-fg)]">Running practical drills in dimmed bays to simulate real-world defensive settings.</span>
              </li>
            </ul>
          </BentoCard>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <BentoCard title="Course Details" className="border-[var(--color-primary-base)]/50">
             <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Duration</span>
                <span className="font-medium text-[var(--color-foreground)]">4 Hours</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Prerequisite</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Basic Pistol Knowledge</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">What to Bring</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Handgun, 150 rounds<br/>Tactical Flashlight</span>
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
