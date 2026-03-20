import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Defensive Pistol Course | Lowcountry Guns & Range",
  description: "Advanced pistol handling, reloading under stress, and improving speed and accuracy."
};

export default function DefensivePistol() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <Link href="/training" className="text-sm text-[var(--color-primary-base)] hover:underline">&larr; Back to all Training</Link>
      
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Defensive Pistol Course
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          Elevate your self-defense capabilities. Learn to operate your firearm efficiently under stress and dynamic conditions.
        </p>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-xl mb-4">
        <Image src="/images/course-defensive-pistol.png" alt="Defensive Pistol Course" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <BentoCard title="Course Overview">
             <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Static marksmanship is only the first step in self-defense. Our Defensive Pistol Course is designed for shooters who want to move beyond the fundamentals and learn how to actually fight with a handgun.
            </p>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              This intensive class focuses on real-world applications: clearing malfunctions, reloading when it counts, and shooting multiple targets with varying cadences. We emphasize the balance of speed and accuracy required to survive a lethal encounter.
            </p>
          </BentoCard>

          <BentoCard title="Course Curriculum" className="bg-[var(--color-card-border)]/20">
            <ul className="space-y-6 mt-4">
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">The Draw Stroke</span>
                <span className="text-[var(--color-muted-fg)]">Building a fast, consistent, and safe presentation from concealment or an OWB defensive holster.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Recoil Management & Cadence</span>
                <span className="text-[var(--color-muted-fg)]">Applying proper grip pressure to track your sights during rapid fire and multiple target transitions.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Malfunction Clearances</span>
                <span className="text-[var(--color-muted-fg)]">Quickly diagnosing and clearing Type 1, Type 2, and Type 3 malfunctions under time pressure.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Positional & One-Handed Shooting</span>
                <span className="text-[var(--color-muted-fg)]">Shooting effectively from unconventional positions and operating the firearm with only your strong or support hand.</span>
              </li>
            </ul>
          </BentoCard>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <BentoCard title="Course Details" className="border-[var(--color-primary-base)]/50">
             <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Duration</span>
                <span className="font-medium text-[var(--color-foreground)]">1-2 Days (Varies)</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Prerequisite</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">CWP or Solid<br/>Pistol Fundamentals</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">What to Bring</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Handgun, 350+ rds<br/>Quality Holster, 3 Mags</span>
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
