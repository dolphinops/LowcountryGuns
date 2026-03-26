import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Firearm Instruction | Lowcountry Guns & Range",
  description: "One-on-one sessions with our Master Instructors to help you master specific skills or become comfortable with a new firearm."
};

export default function PrivateInstruction() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <Link href="/training" className="text-sm text-[var(--color-primary-base)] hover:underline">&larr; Back to all Training</Link>
      
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Private Firearm Instruction
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          Fast-track your progress with dedicated one-on-one coaching customized to your exact skill level and goals.
        </p>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-xl mb-4">
        <Image src="/images/IMG_1350.webp" alt="Private Firearm Instruction" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <BentoCard title="Why Choose Private Instruction?">
             <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Group classes are excellent, but sometimes you need targeted, individualized attention to break through a plateau, learn a new platform, or build confidence at your own pace.
            </p>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Our Master Instructors will assess your current abilities and design a custom training plan specifically for you. Whether you're a first-time shooter intimidated by crowded ranges, or an advanced shooter looking to shave fractions of a second off your draw stroke, private instruction is the most efficient way to improve.
            </p>
          </BentoCard>

          <BentoCard title="What We Can Cover" className="bg-[var(--color-card-border)]/20">
            <ul className="space-y-6 mt-4">
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Basic Fundamentals</span>
                <span className="text-[var(--color-muted-fg)]">Perfecting grip, stance, sight picture, and trigger control without the pressure of a group setting.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">New Firearm Familiarization</span>
                <span className="text-[var(--color-muted-fg)]">Just bought a new gun? We'll teach you exactly how to operate, strip, and clean it.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Advanced Diagnostics</span>
                <span className="text-[var(--color-muted-fg)]">Diagnosing and correcting flinching, anticipation, or inconsistent groupings.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Skill-Specific Training</span>
                <span className="text-[var(--color-muted-fg)]">Focusing entirely on specific requests like drawing from concealment, rapid fire, or off-hand shooting.</span>
              </li>
            </ul>
          </BentoCard>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <BentoCard title="Session Details" className="border-[var(--color-primary-base)]/50">
             <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Duration</span>
                <span className="font-medium text-[var(--color-foreground)]">Hourly Blocks</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Availability</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">By Appointment</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Pricing</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Call for Rates</span>
              </div>
              
              <Link href="tel:8437845474" className="mt-4">
                 <Button className="w-full">Call to Book</Button>
              </Link>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
