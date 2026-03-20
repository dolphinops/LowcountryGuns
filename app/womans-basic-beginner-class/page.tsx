import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Woman's Basic Beginner Class | Lowcountry Guns & Range",
  description: "Designed to provide a comfortable and welcoming environment for women to learn the fundamentals of firearm safety and handling."
};

export default function WomansBasicClass() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <Link href="/training" className="text-sm text-[var(--color-primary-base)] hover:underline">&larr; Back to all Training</Link>
      
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Woman&apos;s Basic Beginner Class
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)]">
          Are you interested in learning how to handle firearms safely and confidently?
        </p>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-xl mb-4">
        <Image src="/images/course-womans-basic.png" alt="Woman's Basic Beginner Class" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <BentoCard title="Welcome to Our Course">
             <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Our Woman’s Beginner Firearms Course is designed specifically for women who are new to firearms. We provide a supportive and educational environment to help you gain the skills you need.
            </p>
            <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
              Our course covers all the basics of firearms safety and operation. Whether you’re looking to learn for personal protection or just want to gain a new skill, this course is perfect for you. Safety is our top priority. We emphasize the importance of handling firearms responsibly and provide you with the knowledge to do so.
            </p>
          </BentoCard>

          <BentoCard title="Course Curriculum" className="bg-[var(--color-card-border)]/20">
            <ul className="space-y-6 mt-4">
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Firearms Safety Rules</span>
                <span className="text-[var(--color-muted-fg)]">Learn the fundamental rules of firearm safety to ensure you and those around you are always protected.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Basic Firearms Operation</span>
                <span className="text-[var(--color-muted-fg)]">Get hands-on experience with different types of firearms, including pistols and rifles.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Hands-On Practice</span>
                <span className="text-[var(--color-muted-fg)]">Practice what you’ve learned in a controlled and supervised environment.</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-bold text-[var(--color-foreground)]">Legal Considerations</span>
                <span className="text-[var(--color-muted-fg)]">Understand the legal aspects of firearm ownership and use.</span>
              </li>
            </ul>
          </BentoCard>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <BentoCard title="Course Details" className="border-[var(--color-primary-base)]/50">
             <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Duration</span>
                <span className="font-medium text-[var(--color-foreground)]">TBD</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Schedule</span>
                <span className="font-medium text-[var(--color-foreground)]">TBD</span>
              </div>
              <div className="flex justify-between border-b border-[var(--color-card-border)] pb-2 text-sm">
                <span className="text-[var(--color-muted-fg)]">Equipment Provided</span>
                <span className="font-medium text-[var(--color-foreground)] text-right">Firearms & Safety Gear</span>
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
