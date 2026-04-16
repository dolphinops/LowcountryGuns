'use client';

import { MapPin, Phone, FileText } from 'lucide-react';
import Link from 'next/link';
import { DirectionsMapModal } from '@/components/DirectionsMapModal';

export function MobileActions() {
  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[340px] animate-fade-in-up">
      <div className="bg-[#0a0a0b]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1.5 flex items-center justify-between gap-1.5 overflow-hidden">
        <DirectionsMapModal
          variant="ghost"
          size="sm"
          aria-label="Directions"
          className="flex-1 !h-auto min-h-[72px] flex-col gap-1 rounded-xl border border-white/5 bg-white/5 py-3 !px-2 !text-white hover:!bg-white/10 hover:!text-white active:scale-95"
        >
          <MapPin className="h-4 w-4 text-[var(--color-primary-base)]" aria-hidden />
          <span className="text-[9px] font-black uppercase tracking-widest text-white/90">Directions</span>
        </DirectionsMapModal>

        <a 
          href="tel:8437845474"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded-xl bg-[var(--color-primary-base)] hover:bg-[var(--color-primary-hover)] transition-all shadow-[0_0_20px_rgba(103,155,168,0.2)] active:scale-95"
        >
          <Phone className="w-4 h-4 text-white" />
          <span className="text-[9px] font-black uppercase tracking-widest text-white">Call Now</span>
        </a>

        <Link 
          href="/waiver"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 active:scale-95"
        >
          <FileText className="w-4 h-4 text-teal-400" />
          <span className="text-[9px] font-black uppercase tracking-widest text-white/90">Waiver</span>
        </Link>

      </div>
    </div>
  );
}
