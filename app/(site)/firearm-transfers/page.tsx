import { BentoCard } from '@/components/ui/BentoCard';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Firearm Transfers | Lowcountry Guns & Range",
  description: "Learn about our firearm transfer policies and FFL fees at Lowcountry Guns & Range."
};

export default function FirearmTransfers() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
          Firearm Transfers
        </h1>
        <p className="text-lg text-[var(--color-muted-fg)] leading-relaxed">
          Streamlined firearm transfer process for firearms purchased from online merchants, private parties, and other venues.
        </p>
        <div className="pt-2">
          <Link
            href="/the-range/firearm-transfer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] px-8 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-[var(--color-primary-base)] hover:to-[var(--color-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-base)] focus-visible:ring-offset-2"
          >
            Start a transfer request
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <BentoCard title="Transfer Fees" className="lg:col-span-5 bg-[var(--color-primary-base)]/5 border-[var(--color-primary-base)]/20 flex flex-col">
          <div className="flex flex-col gap-6 mt-6">
            <div>
              <p className="text-2xl font-bold text-[var(--color-foreground)]">$45.00<span className="text-sm font-normal text-[var(--color-muted-fg)]">/firearm</span></p>
              <p className="text-[var(--color-primary-base)] text-sm font-medium mt-1">Range Members pay $20.00</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-foreground)]">$100.00<span className="text-sm font-normal text-[var(--color-muted-fg)]">/NFA Item</span></p>
              <p className="text-sm text-[var(--color-muted-fg)] mt-1">Class III items (Silencers, SBRs, Machineguns)</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard title="Transfer Policies" className="lg:col-span-7">
          <div className="flex flex-col gap-4 mt-4 space-y-2 text-sm text-[var(--color-muted-fg)]">
            <p>
              <strong className="text-[var(--color-foreground)] font-semibold">Identification:</strong> The firearm will only be transferred to the individual listed on the invoice provided with the shipment. <strong className="text-red-500">NO EXCEPTIONS</strong>.
            </p>
            <p>
              <strong className="text-[var(--color-foreground)] font-semibold">Storage & Pick Up:</strong> Shipments must be picked up within 30 days of Lowcountry Guns and Range notification. If not picked up, a $30.00 monthly storage fee will be charged to your in-store account. Lowcountry reserves the right to sell any transferred firearms & accessories not picked up after 90 days.
            </p>
            <p>
              <strong className="text-[var(--color-foreground)] font-semibold">Private Seller Shipments:</strong> If not purchasing from an FFL holder, the SELLER MUST include a copy of their driver’s license with the shipment. Omission causes delays and potential additional costs.
            </p>
            <p>
              <strong className="text-[var(--color-foreground)] font-semibold">Processing Times:</strong> We make every effort to process transfers of non-NFA firearms within 48 hours of receipt (not including weekends). Transfers of Class III/NFA items may take up to 72 hours.
            </p>
          </div>
        </BentoCard>

      </div>

      <div className="mt-8 rounded-2xl overflow-hidden shadow-xl border border-[var(--color-card-border)] relative aspect-[16/9]">
         <Image src="/images/legacy/DSC1396.webp" alt="Firearm transfer counter at Lowcountry Guns" fill sizes="100vw" className="object-cover" />
      </div>
    </div>
  );
}
