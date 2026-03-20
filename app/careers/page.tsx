import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Careers | Lowcountry Guns & Range",
  description: "Join the team at Lowcountry Guns & Range. Start your career in the firearms industry."
};

export default function Careers() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Careers at LCGUNS
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)] leading-relaxed">
          We are motivated to offer the safest and friendliest range experience in the Lowcountry! We are looking for passionate and committed people to bring to our team and continue to offer a world-class firearms experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <BentoCard title="Start Your Career">
           <p className="text-[var(--color-muted-fg)] leading-relaxed mt-4">
             Start your career in the firearms industry. Job offerings available to range officers, sales associates, gunsmiths/armorers, instructors, etc.
           </p>
           <p className="text-[var(--color-foreground)] font-semibold mt-4">
             Part-time & full-time positions available!
           </p>
           <Link href="tel:8437845474" className="block mt-6">
              <Button>Contact the Pro Shop</Button>
           </Link>
         </BentoCard>

         <BentoCard title="Featured Roles" className="bg-[var(--color-primary-base)]/5 border-[var(--color-primary-base)]/20">
           <ul className="space-y-3 text-[var(--color-foreground)] mt-4">
             <li className="flex items-center gap-2">✓ Safety / Range Officers</li>
             <li className="flex items-center gap-2">✓ Retail Sales Associates</li>
             <li className="flex items-center gap-2">✓ Certified Firearms Instructors</li>
             <li className="flex items-center gap-2">✓ Experienced Gunsmiths & Armorers</li>
           </ul>
         </BentoCard>
      </div>
    </div>
  );
}
