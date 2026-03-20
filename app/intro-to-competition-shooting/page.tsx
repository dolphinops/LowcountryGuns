import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Intro to Competition Shooting | Lowcountry Guns & Range",
  description: "Step into the world of IDPA and USPSA. Learn range commands, scoring, drawing from a holster, and competitive movement."
};

export default function CompetitionShooting() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <Link href="/training" className="text-sm text-[var(--color-primary-base)] hover:underline">&larr; Back to all Training</Link>
      
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Intro to Competition Shooting
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          Ready to test your skills under the clock? Learn the rules, safety commands, and fundamentals of practical shooting sports.
        </p>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-xl mb-4">
        <Image src="/images/course-competition.png" alt="Intro to Competition Shooting" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <BentoCard title="Course Overview">
             <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Our Intro to Competition Shooting class safely bridges the gap between static range shooting and the dynamic world of action shooting sports like IDPA and USPSA. 
            </p>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              We focus heavily on the strict safety rules of competition, including range commands, safe muzzle angles (the 180 rule), and drawing from a holster. You'll also be introduced to scoring methods, stage planning, and moving efficiently between shooting positions.
            </p>
          </BentoCard>

          <BentoCard title="Course Curriculum" className="bg-[var(--color-card-border)]/20">
            <ul className="space-y-6 mt-4">
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Safety & Range Commands</span>
                <span className="text-[var(--color-muted-fg)]">Understanding Range Officer (RO) commands and maintaining the 180-degree safety rule.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Equipment Setup</span>
                <span className="text-[var(--color-muted-fg)]">Properly setting up your gun belt, holster, and magazine pouches for competition.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Drawing & Reloading</span>
                <span className="text-[var(--color-muted-fg)]">Safe and efficient holster draws, and performing slide-lock and tactical reloads under stress.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Scoring & Movement</span>
                <span className="text-[var(--color-muted-fg)]">Understanding Hit Factor scoring and how to move between shooting boxes smoothly.</span>
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
                <span className="font-medium text-[var(--color-foreground)] text-right">Solid Basic<br/>Pistol Skills</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">What to Bring</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">OWB Holster, Belt<br/>3 Mags, 150 rds</span>
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
