import { Button } from '@/components/ui/Button';
import EventbriteWidget from '@/components/EventbriteWidget';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Users, Shield, CheckCircle, MapPin, Clock, Phone, Star, ArrowRight, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: "Your First Experience | Certified Safety Training in Hardeeville, SC",
  description: "New to indoor training? Start with a personalized 1-on-1 session with our certified instructors. Walk-ins welcome. Climate-controlled facility near Hilton Head & Savannah.",
  openGraph: {
    title: "Your First Experience | Personalized Safety Training",
    description: "Start your journey with expert, 1-on-1 certified instruction in our state-of-the-art climate-controlled facility. Walk-ins welcome.",
    type: "website",
  },
};

/* ─── DATA ─── */

const trustSignals = [
  { 
    icon: Shield, 
    title: "Certified Instructors", 
    description: "Every instructor is professionally certified with years of real-world experience." 
  },
  { 
    icon: Users, 
    title: "1-on-1 Attention", 
    description: "Your own dedicated instructor — zero distractions, complete focus on your development." 
  },
  { 
    icon: Star, 
    title: "Beginner-Friendly", 
    description: "No experience needed. We start from the very basics and move at your pace." 
  },
  { 
    icon: CheckCircle, 
    title: "All Equipment Provided", 
    description: "Everything you need is right here. Just bring a valid photo ID and we'll handle the rest." 
  },
];

const steps = [
  { 
    number: "01", 
    title: "Book Your Session", 
    description: "Reserve your 1-on-1 session below — pick a date and time that works for you." 
  },
  { 
    number: "02", 
    title: "Meet Your Instructor", 
    description: "Arrive at our facility and get paired with a certified instructor who'll walk you through everything." 
  },
  { 
    number: "03", 
    title: "Learn With Confidence", 
    description: "Fundamentals, safety protocols, and hands-on practice — all at your own pace." 
  },
];

const faqs = [
  { 
    q: "I've never done this before. Is that okay?", 
    a: "Absolutely. Our 1-on-1 sessions are designed specifically for complete beginners. Your instructor will cover every fundamental from the ground up — no prior experience needed." 
  },
  { 
    q: "What do I need to bring?", 
    a: "Just a valid photo ID. We provide all necessary equipment including eye and ear protection. Wear closed-toed shoes and a crew-neck shirt." 
  },
  { 
    q: "How long is a session?", 
    a: "Sessions are booked in hourly blocks. Most first-timers do a single hour, which is plenty of time for a thorough introduction." 
  },
  { 
    q: "Can I bring a friend or family member?", 
    a: "Of course! We welcome groups. Each person will receive individual attention from your instructor." 
  },
  { 
    q: "Where are you located?", 
    a: "We're at 98 Purrysburg Rd in Hardeeville, SC — right off I-95, between Savannah and Hilton Head. Easy access from Bluffton, Beaufort, and Pooler too." 
  },
];

export default function FirstExperience() {
  return (
    <div className="flex flex-col bg-[#0a0a0b] text-white selection:bg-[var(--color-primary-base)] selection:text-white">

      {/* ─── LOGO BAR ─── */}
      <div className="absolute top-0 left-0 right-0 z-20 py-5 md:py-6">
        <div className="content-container flex flex-col items-center gap-2">
          <Image 
            src="/images/legacy/Logo-2.webp" 
            alt="Lowcountry Guns & Range" 
            width={280} 
            height={94} 
            className="w-auto h-14 md:h-20 opacity-95"
            priority
          />
          <div className="flex items-center gap-2 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-base)]" />
            <span className="text-[11px] md:text-sm font-semibold tracking-widest uppercase">Hardeeville, South Carolina</span>
          </div>
        </div>
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/IMG_8198.webp" 
            alt="Professional indoor training facility" 
            fill 
            priority
            className="object-cover opacity-30 brightness-[0.4]" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b] z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0b_100%)] opacity-60 z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Walk-Ins Welcome</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.95]">
            <span className="text-white">Your First</span><br />
            <span className="text-gradient-light brightness-125 drop-shadow-[0_0_30px_rgba(103,155,168,0.3)]">Experience</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed mx-auto max-w-2xl font-medium mb-10">
            Personalized, 1-on-1 instruction with a certified professional. 
            No experience necessary — just bring yourself.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book">
              <Button size="lg" className="rounded-2xl px-10 py-6 text-lg font-bold shadow-2xl shadow-[var(--color-primary-base)]/20 group">
                Book Your Session <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=98+Purrysburg+Rd,+Hardeeville,+SC+29927" 
              target="_blank"
              rel="noopener noreferrer"
              id="hero-get-directions"
            >
              <Button variant="outline" size="lg" className="rounded-2xl px-10 py-6 text-lg border-white/10 text-white hover:bg-white/5 hover:border-[var(--color-primary-base)] transition-all group">
                <Navigation className="mr-2 w-5 h-5" /> Get Directions
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── WHY TRAIN WITH US ─── */}
      <section className="py-20 md:py-28 bg-[#0a0a0b] relative overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[50%] h-[50%] bg-[var(--color-primary-base)]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="content-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Why Train <span className="text-gradient">With Us</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Our state-of-the-art indoor facility and certified instructors make your first experience safe, comfortable, and confidence-building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trustSignals.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] p-8"
              >
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--color-primary-base)]/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-6 h-6 text-[var(--color-primary-base)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── MEET YOUR INSTRUCTOR ─── */}
      <section className="py-20 md:py-28 bg-[#050506] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-primary-base)]/5 to-transparent pointer-events-none" />
        
        <div className="content-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
              {/* Photo */}
              <div className="mx-auto md:mx-0">
                <div className="relative w-56 h-56 md:w-64 md:h-72 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                  <Image 
                    src="/images/team/jeremy-mangione.webp" 
                    alt="Jeremy Mangione — Lead Training Instructor" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Bio */}
              <div className="text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary-base)] mb-2">Meet Your Lead Instructor</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
                  Jeremy <span className="text-gradient">Mangione</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Jeremy is a 20-year Army veteran with service in elite units including the 75th Ranger Regiment and the U.S. Army Marksmanship Unit. A former Senior Instructor at the U.S. Army&apos;s advanced training programs, Jeremy has coached U.S. and NATO forces as well as the U.S. Secret Service. He brings world-class expertise to help students of all levels build confidence, precision, and safe habits from day one.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {["20-Year Army Veteran", "75th Ranger Regiment", "U.S. Army Marksmanship Unit", "NATO & Secret Service Trainer"].map((badge) => (
                    <span key={badge} className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-400">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 md:py-28 bg-[#050506]">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto">
              Three simple steps to your first session. We make it easy.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline spine */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary-base)] via-[var(--color-primary-base)]/40 to-transparent z-0" />

            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="relative flex items-center gap-6 md:gap-10 group">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:border-[var(--color-primary-base)] group-hover:scale-110 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-base)]/10 to-transparent opacity-50" />
                    <span className="relative text-2xl md:text-3xl font-black text-[var(--color-primary-base)] leading-none">{step.number}</span>
                  </div>

                  <div className="hidden md:block w-12 h-px bg-gradient-to-r from-[var(--color-primary-base)]/30 to-transparent" />

                  <div className="flex-1 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-10 transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/10 group-hover:-translate-y-1 shadow-2xl shadow-black/40">
                    <h3 className="text-white font-black text-xl md:text-2xl tracking-tight mb-3">{step.title}</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── BOOK YOUR SESSION (EVENTBRITE) ─── */}
      <section id="book" className="py-20 md:py-28 bg-[#0a0a0b] relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 30%, var(--color-primary-base) 0%, transparent 70%)' }} />
        
        <div className="content-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
              Book Your <span className="text-gradient">1-on-1 Session</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Select a date and time below. Your certified instructor will be ready for you.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-2xl">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[var(--color-primary-base)] mb-2">Private 1-on-1 Instruction</h3>
                <p className="text-zinc-500 text-sm">Personalized coaching tailored to your skill level</p>
              </div>
              <EventbriteWidget eventId="1680552550919" />
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-zinc-500 text-sm mb-6">
              Having trouble with booking? Call us directly and we'll get you set up.
            </p>
            <Link href="tel:8437845474">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-white/10 hover:bg-white/5 hover:border-[var(--color-primary-base)] transition-all">
                <Phone className="mr-2 w-5 h-5" /> Call — 843-784-5474
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-28 bg-[#050506]">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto">
              Everything new visitors want to know before their first session.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--color-primary-base)] transition-colors">{faq.q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── DIRECTIONS / MAP CTA ─── */}
      <section className="py-20 md:py-28 bg-[#0a0a0b] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-primary-base)]/5 to-transparent pointer-events-none" />
        
        <div className="content-container relative z-10">
          <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Map embed */}
              <div className="relative h-64 md:h-auto md:min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.2!2d-81.1278143!3d32.2280209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb8f1e1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2s98%20Purrysburg%20Rd%2C%20Hardeeville%2C%20SC%2029927!5e0!3m2!1sen!2sus!4v1234567890"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Facility Location - 98 Purrysburg Rd, Hardeeville, SC"
                ></iframe>
              </div>

              {/* Info panel */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6">
                  Visit Our <span className="text-gradient">Facility</span>
                </h2>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Address</p>
                      <p className="text-white font-semibold">98 Purrysburg Rd</p>
                      <p className="text-zinc-400 text-sm">Hardeeville, SC 29927</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Hours</p>
                      <p className="text-white font-semibold text-sm">Mon–Sat: 10am – 6pm</p>
                      <p className="text-white font-semibold text-sm">Friday: 10am – 7pm</p>
                      <p className="text-white font-semibold text-sm">Sunday: 12pm – 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--color-primary-base)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Phone</p>
                      <Link href="tel:8437845474" className="text-white font-semibold hover:text-[var(--color-primary-base)] transition-colors">
                        843-784-5474
                      </Link>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-get-directions"
                >
                  <Button size="lg" className="w-full rounded-2xl text-lg font-bold shadow-2xl shadow-[var(--color-primary-base)]/20 group">
                    <Navigation className="mr-2 w-5 h-5" /> Get Directions <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-zinc-600 text-sm mt-8">
            Right off I-95 — convenient from Hilton Head, Bluffton, Beaufort, Savannah, and Pooler.
          </p>
        </div>
      </section>

      {/* ─── MINIMAL BRANDED FOOTER ─── */}
      <footer className="py-10 bg-[#050506] border-t border-white/5">
        <div className="content-container flex flex-col items-center gap-4">
          <Image 
            src="/images/legacy/Logo-2.webp" 
            alt="Lowcountry Guns & Range" 
            width={200} 
            height={67} 
            className="w-auto h-12 md:h-16 opacity-70"
          />
          <p className="text-zinc-600 text-xs text-center">
            98 Purrysburg Rd, Hardeeville, SC 29927 · 843-784-5474
          </p>
          <p className="text-zinc-700 text-[10px]">
            © {new Date().getFullYear()} Lowcountry Guns & Range. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ─── Structured Data for Local Business (compliance-safe) ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Lowcountry Guns & Range",
            "description": "Professional safety training and certified 1-on-1 instruction in a state-of-the-art indoor facility.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "98 Purrysburg Rd",
              "addressLocality": "Hardeeville",
              "addressRegion": "SC",
              "postalCode": "29927",
              "addressCountry": "US"
            },
            "telephone": "843-784-5474",
            "url": "https://lcguns.com/first-experience",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 32.2280209,
              "longitude": -81.1278143
            },
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"], "opens": "10:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:00", "closes": "19:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "12:00", "closes": "18:00" }
            ]
          })
        }}
      />

      {/* ─── STICKY MOBILE CTA BAR ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#0a0a0b]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 safe-area-bottom">
          <div className="flex gap-3">
            <a href="#book" className="flex-1">
              <button className="w-full h-12 rounded-xl bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] text-white text-sm font-bold shadow-lg shadow-[var(--color-primary-base)]/20 active:scale-[0.97] transition-transform">
                Book Session
              </button>
            </a>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=98+Purrysburg+Rd,+Hardeeville,+SC+29927" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              id="mobile-get-directions"
            >
              <button className="w-full h-12 rounded-xl border-2 border-white/20 text-white text-sm font-bold bg-white/5 active:scale-[0.97] transition-transform flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                Directions
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom spacer for sticky mobile CTA */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
