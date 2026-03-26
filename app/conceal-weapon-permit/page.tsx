import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conceal Weapon Permit (CWP) | Lowcountry Guns & Range",
  description: "South Carolina approved training required for carrying a concealed weapon. Covers laws, storage, and practical shooting."
};

export default function ConcealWeaponPermit() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <Link href="/training" className="text-sm text-[var(--color-primary-base)] hover:underline">&larr; Back to all Training</Link>
      
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Conceal Weapon Permit (CWP)
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          Get your South Carolina CWP with comprehensive legal, safety, and practical handling training.
        </p>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-xl mb-4">
        <Image src="/images/IMG_8173.webp" alt="Conceal Weapon Permit Course" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <BentoCard title="Course Overview">
             <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Our Conceal Weapon Permit course meets all South Carolina state requirements for carrying a concealed handgun. This is a comprehensive class designed to ensure you are legally, morally, and tactically prepared to carry a concealed firearm.
            </p>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              We cover the crucial differences between simply knowing how to shoot and understanding the legal ramifications of using deadly force. You will leave this class with a thorough understanding of SC gun laws, situational awareness, and safe storage practices.
            </p>
          </BentoCard>

          <BentoCard title="Course Curriculum" className="bg-[var(--color-card-border)]/20">
            <ul className="space-y-6 mt-4">
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">South Carolina Gun Laws</span>
                <span className="text-[var(--color-muted-fg)]">In-depth discussion on where you can and cannot carry, and the legalities of self-defense.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Firearm Safety & Storage</span>
                <span className="text-[var(--color-muted-fg)]">Safe handling practices and responsible storage at home and in your vehicle.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Marksmanship Fundamentals</span>
                <span className="text-[var(--color-muted-fg)]">Grip, stance, sight alignment, and trigger control required for the shooting qualification.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Written Exam & Range Qualification</span>
                <span className="text-[var(--color-muted-fg)]">Mandatory 50-round shooting qualification and state-required written test.</span>
              </li>
            </ul>
          </BentoCard>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <BentoCard title="Course Details" className="border-[var(--color-primary-base)]/50">
             <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Duration</span>
                <span className="font-medium text-[var(--color-foreground)]">8 Hours</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Requirements</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Must be 21+<br/>Valid SC ID</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">What to Bring</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Handgun, 50 rounds<br/>Eye/Ear Protection</span>
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
