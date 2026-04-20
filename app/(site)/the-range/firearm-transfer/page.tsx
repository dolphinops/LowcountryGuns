import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FirearmTransferForm } from './FirearmTransferForm';

export const metadata: Metadata = {
  title: 'Firearm transfer request | The Range | Lowcountry Guns',
  description:
    'Submit a firearm transfer request to Lowcountry Guns & Range. Your details are emailed to our team at info@lcguns.com.',
};

export default function FirearmTransferPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-white/5 bg-black pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center animate-fade-up">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)]">
            The Range
          </p>
          <h1 className="text-balance text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Firearm <span className="text-gradient-light brightness-125">transfer</span> request
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Tell us about the firearm and how to reach you. We route the completed form to our inbox so we can coordinate your transfer.
          </p>
          <Link
            href="/firearm-transfers"
            className="mt-8 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[var(--color-primary-base)] transition-colors hover:text-white"
          >
            Transfer fees &amp; policies <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <div className="gradient-divider" />

      <section className="bg-gradient-section py-16 md:py-24">
        <div className="content-container">
          <FirearmTransferForm />
        </div>
      </section>
    </div>
  );
}
