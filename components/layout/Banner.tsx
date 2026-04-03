import { kv } from '@vercel/kv';
import { AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function Banner() {
  let message = '';
  
  try {
    // If KV is not configured, we just don't show the banner
    if (process.env.KV_REST_API_URL) {
      message = await kv.get<string>('motd_banner_message') || '';
    }
  } catch (error) {
    console.error('Error fetching banner message:', error);
  }

  // Hide banner if message is empty
  if (!message) return null;

  return (
    <div className="relative isolate z-[110] flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 animate-in fade-in slide-in-from-top-1 shadow-md">
      {/* Background decoration */}
      <div 
        className="absolute left-[max(-7rem,41%)] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" 
        aria-hidden="true"
      >
        <div 
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" 
          style={{
            clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mx-auto justify-center">
        <p className="text-sm/6 text-white font-bold tracking-tight">
          <strong className="font-black uppercase tracking-[0.1em] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-200" /> MISSION UPDATE:
          </strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline size-0.5 fill-current" aria-hidden="true">
            <circle cx="1" cy="1" r="1" />
          </svg>
          {message}
        </p>
        <Link
          href="/training"
          className="flex-none rounded-full bg-white/10 px-3.5 py-1 text-xs font-black text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-all uppercase tracking-widest hidden sm:flex items-center gap-2"
        >
          Details <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
