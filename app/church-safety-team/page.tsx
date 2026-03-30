import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Church Safety Team Training | Lowcountry Guns & Range",
  description: "Equip your house of worship security team with threat assessment, de-escalation, emergency response, and active-threat protocols."
};

export default function ChurchSafetyTeam() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <Link href="/training" className="text-sm text-[var(--color-primary-base)] hover:underline">&larr; Back to all Training</Link>

      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Church Safety Team Training
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          Protect your congregation. Practical, scenario-driven training for houses of worship security teams.
        </p>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-xl mb-4">
        <Image src="/images/legacy/DSC02534.webp" alt="Church Safety Team Training" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <BentoCard title="Course Overview">
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Our Church Safety Team (CST) program is designed specifically for volunteer security teams serving houses of worship. The course addresses the unique challenges of protecting a congregation in an open, welcoming environment.
            </p>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              You&apos;ll learn how to identify and assess potential threats, implement a coordinated security plan, de-escalate volatile situations, and respond decisively in emergencies — all while maintaining the warm, welcoming atmosphere your congregation expects.
            </p>
          </BentoCard>

          <BentoCard title="Course Curriculum" className="bg-[var(--color-card-border)]/20">
            <ul className="space-y-6 mt-4">
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Threat Assessment</span>
                <span className="text-[var(--color-muted-fg)]">Identifying behavioral indicators, conducting facility vulnerability assessments, and establishing security zones within your place of worship.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">De-Escalation & Communication</span>
                <span className="text-[var(--color-muted-fg)]">Verbal de-escalation tactics, team communication protocols, and managing disruptive individuals without force escalation.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Emergency Response</span>
                <span className="text-[var(--color-muted-fg)]">Active-threat response plans, evacuation procedures, medical emergency basics, and coordinating with local law enforcement.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Practical Exercises</span>
                <span className="text-[var(--color-muted-fg)]">Tabletop and live scenario-based drills tailored to your facility&apos;s specific layout and security needs.</span>
              </li>
            </ul>
          </BentoCard>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <BentoCard title="Course Details" className="border-[var(--color-primary-base)]/50">
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Duration</span>
                <span className="font-medium text-[var(--color-foreground)]">6 Hours</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Team Size</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">4–12 members<br/>per session</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Format</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Classroom +<br/>Practical Scenarios</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Customization</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Tailored to your<br/>facility&apos;s layout</span>
              </div>

              <Link href="tel:8437845474" className="mt-4">
                <Button className="w-full">Call to Schedule</Button>
              </Link>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
