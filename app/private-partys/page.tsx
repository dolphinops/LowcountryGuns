import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Parties | Lowcountry Guns & Range",
  description: "Host your next private party, corporate event, or team-building activity at Lowcountry Guns & Range."
};

export default function PrivateParties() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Private Parties & Events
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)] leading-relaxed">
          Our state-of-the-art indoor gun range doubles as a versatile event space, perfect for hosting private parties, corporate events, or team-building activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BentoCard className="flex flex-col gap-4 justify-center">
          <p className="text-[var(--color-muted-fg)] leading-relaxed">
             With modern amenities, a safe and controlled environment, and trained professionals on-site, we provide a unique experience for guests of all skill levels. Whether you’re celebrating a special occasion or looking to engage in an exciting group activity, our facility offers tailored packages to ensure your event is both memorable and enjoyable.
          </p>
          <Link href="tel:8437845474" className="mt-4">
             <Button variant="primary">Call to Book Event</Button>
          </Link>
        </BentoCard>

        <BentoCard title="What is Included" className="bg-[var(--color-card-border)]/20">
          <ul className="space-y-3 text-[var(--color-foreground)] mt-4">
            <li className="flex items-center gap-2">✓ Use of entire side of range (5 Bays)</li>
            <li className="flex items-center gap-2">✓ Special access to low-light range available</li>
            <li className="flex items-center gap-2">✓ Complimentary range concierge</li>
            <li className="flex items-center gap-2">✓ Eye & Ear protection included</li>
            <li className="flex items-center gap-2">✓ Photos & Video encouraged</li>
            <li className="flex items-center gap-2">✓ Rental guns available</li>
          </ul>
        </BentoCard>
      </div>
    </div>
  );
}
