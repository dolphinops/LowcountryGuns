'use client';

import { MapPin, Phone, FileText } from 'lucide-react';
import Link from 'next/link';

export function MobileActions() {
  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm animate-fade-in-up">
      <div className="bg-[#0a0a0b]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2.5 flex items-center justify-between gap-2 overflow-hidden">
        
        <a 
          href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 active:scale-95"
        >
          <MapPin className="w-5 h-5 text-[var(--color-primary-base)]" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/90">Directions</span>
        </a>

        <a 
          href="tel:8437845474"
          className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3.5 rounded-2xl bg-[var(--color-primary-base)] hover:bg-[var(--color-primary-hover)] transition-all shadow-[0_0_20px_rgba(103,155,168,0.3)] active:scale-95"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">Call Now</span>
        </a>

        <Link 
          href="/waiver"
          className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 active:scale-95"
        >
          <FileText className="w-5 h-5 text-teal-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/90">Waiver</span>
        </Link>

      </div>
    </div>
  );
}
