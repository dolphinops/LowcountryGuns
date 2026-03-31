import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Target, DollarSign, ShieldCheck, MapPin, Phone, Clock } from 'lucide-react';



/* ─── Quick-fact data ─── */
const quickFacts = [
  {
    icon: <Target className="w-10 h-10 mx-auto text-white" />,
    title: 'Open to the Public',
    body: 'Walk-ins always welcome. No membership required, no time limits on your lane.',
  },
  {
    icon: <DollarSign className="w-10 h-10 mx-auto text-white" />,
    title: '$22 Per Visit',
    body: 'Hero discount ($17) for active Military, Law Enforcement & First Responders.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 mx-auto text-white" />,
    title: 'Safety First',
    body: 'Range Safety Officers on duty at all times. Mandatory safety briefing for first-time shooters.',
  },
];

/* ─── Review data ─── */
const reviews = [
  {
    name: 'Jessica Gordon',
    text: 'Great range, everyone was friendly and very helpful. Definitely going again.',
    stars: 5,
  },
  {
    name: 'Kredible Gamer',
    text: 'The staff are amazing and so helpful. They are knowledgeable about many types of firearms. Their range is very big and has 10 lanes so there rarely is a wait.',
    stars: 5,
  },
  {
    name: 'Ken C',
    text: 'First time visiting Lowcountry Guns & Range. Great facility and inventory! Worked with Noah. Very informative and friendly. I highly recommend this place!',
    stars: 5,
  },
];

/* ─── Gallery images ─── */
const galleryImages = [
  { src: '/images/89535FDA-30EB-4C6C-8BBF-9CEC9EDE8AF4.webp', alt: 'Lowcountry Guns Pro Shop Holsters', tall: true },
  { src: '/images/IMG_8205.webp', alt: 'Lowcountry Guns Pro Shop Display' },
  { src: '/images/IMG_8194.webp', alt: 'Lowcountry Guns Pro Shop Customers' },
  { src: '/images/C5376FBA-E5A2-4F53-9618-428D1DD50446.webp', alt: 'Lowcountry Guns Indoor Range Bay Rifle', tall: true },
  { src: '/images/IMG_2502.webp', alt: 'Two people coaching in the indoor range bay' },
  { src: '/images/legacy/DSC1395.webp', alt: 'Indoor range perspective' },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO (Video Background)
          ═══════════════════════════════════════════════════ */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[900px] flex items-end justify-center overflow-hidden bg-[#0a0a0b]">


        {/* Self-hosted background video */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none opacity-80">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-[#0a0a0b]/10 z-[2]" />

        {/* Hero content — positioned at bottom for cinematic feel */}
        <div className="relative z-10 content-container pb-16 md:pb-24 w-full max-w-5xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-2xl">
            Lowcountry&apos;s Premier
            <br />
            <span className="text-gradient-light brightness-125">Indoor Gun Range</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-4">
            Serving Hardeeville, Savannah, Hilton Head & Beaufort. 10 state-of-the-art shooting bays. Open 7 days a week.
          </p>
          <div className="flex items-center gap-2 text-zinc-400 font-medium mb-10 animate-fade-up delay-1">
             <MapPin className="w-5 h-5 text-[var(--color-primary-base)]" />
             <span>98 Purrysburg Rd, Hardeeville, SC 29927</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/the-range">
              <Button size="lg" variant="primary" className="rounded-full w-full sm:w-auto px-10 shadow-[0_0_20px_rgba(103,155,168,0.4)] hover:shadow-[0_0_30px_rgba(103,155,168,0.6)]">Visit The Range</Button>
            </Link>
            <a 
              href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline" className="rounded-full border-white/40 text-white hover:bg-white hover:text-[#0a0a0b] hover:border-white w-full px-10 backdrop-blur-sm">
                Get Directions <span className="ml-2 group-hover:translate-x-1 transition-transform">📍</span>
              </Button>
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400">★★★★★</span>
              <span className="text-zinc-300 font-medium">4.9 Rating</span>
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span>480+ Google Reviews</span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span>Open 7 Days</span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <a href="/waiver" className="text-[var(--color-primary-base)] hover:text-white font-medium transition-colors">Sign Waiver Prior to Visit →</a>
          </div>
        </div>
      </section>

      {/* ─── NEW SHOPPER BANNER — High visibility for older customers ─── */}
      <section className="bg-[var(--color-primary-base)] text-white py-6 md:py-8 shadow-inner overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />
        <div className="content-container flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex w-14 h-14 bg-white/20 rounded-full items-center justify-center shrink-0 border border-white/30 backdrop-blur-sm">
               <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
               <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">First Time Visiting?</h2>
               <p className="text-white/80 font-medium md:text-lg">Save 10 minutes at the counter by signing your waiver online.</p>
            </div>
          </div>
          <Link href="/waiver" className="w-full md:w-auto">
             <Button size="lg" className="bg-white text-[var(--color-primary-base)] hover:bg-zinc-100 hover:scale-105 transition-all font-black uppercase tracking-widest px-10 h-16 rounded-2xl w-full md:w-auto shadow-xl border-none">
                Sign Digital Waiver Now
             </Button>
          </Link>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — FACILITY SHOWCASE (Bento Layout)
          ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-gradient-section">
        <div className="content-container">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-2">Our Facility</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                <span className="text-[var(--color-foreground)]">World-Class </span><span className="text-gradient">Indoor Range</span>
              </h2>
            </div>
            <Link href="/the-range" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-foreground)] hover:text-[var(--color-primary-base)] transition-colors group">
              Explore The Range
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Bento grid: 1 large left + 2 stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Large feature card */}
            <div className="lg:col-span-3 relative aspect-[16/9] lg:aspect-auto lg:min-h-[460px] rounded-2xl overflow-hidden group cursor-pointer border border-[var(--color-card-border)]">
              <div className="absolute inset-0">
                <Image src="/images/IMG_9122.webp" alt="Shooters practicing in the indoor range bays at Lowcountry Guns" fill className="object-cover transition-transform duration-700 group-hover:scale-110 rotate-90 scale-[1.75]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">10 Indoor Bays</h3>
                <p className="text-zinc-300 text-sm max-w-sm">Climate-controlled, 75-foot rifle rated lanes with electronic target retrieval systems.</p>
              </div>
            </div>

            {/* Two stacked cards */}
            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-0 rounded-2xl overflow-hidden group cursor-pointer">
                <Image src="/images/IMG_8232.webp" alt="Pro Shop interior with extensive firearms selection" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Full-Service Pro Shop</h3>
                  <p className="text-zinc-300 text-sm">Firearms, ammo, and accessories.</p>
                </div>
              </div>

              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-0 rounded-2xl overflow-hidden group cursor-pointer">
                <Image src="/images/IMG_7892.webp" alt="Gun rental display case with pistols and rifles" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">170+ Rental Firearms</h3>
                  <p className="text-zinc-300 text-sm">Try before you buy — pistols, rifles, and full-auto.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile link */}
          <div className="mt-6 sm:hidden">
            <Link href="/the-range">
              <Button variant="outline" className="w-full">Explore The Range →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — QUICK FACTS (Icon-led)
          ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-gradient-section-reverse">
        <div className="content-container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-2">Visit Info</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Everything You </span><span className="text-gradient">Need to Know</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickFacts.map((fact) => (
              <div key={fact.title} className="bg-white border border-[var(--color-card-border)] shadow-sm rounded-2xl p-8 text-center flex flex-col items-center justify-center transform transition-transform hover:-translate-y-1 hover:border-[var(--color-primary-base)]/50">
                <div className="mb-4 bg-[var(--color-primary-base)]/10 p-4 rounded-full inline-flex">
                  {/* Clone icon to change color to primary */}
                  {require('react').cloneElement(fact.icon as React.ReactElement, { className: 'w-10 h-10 mx-auto text-[var(--color-primary-base)]' })}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">{fact.title}</h3>
                <p className="text-sm text-[var(--color-muted-fg)] leading-relaxed font-medium">{fact.body}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-5 mt-10">
            <Link href="/the-range">
              <Button variant="primary" size="md" className="shadow-lg">View Range Rules</Button>
            </Link>
            <Link href="/training">
              <Button variant="secondary" size="md" className="shadow-lg">Explore Training</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — VIDEO SHOWCASE
          ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-gradient-section">
        <div className="content-container max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-2">See Us In Action</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Watch Our </span><span className="text-gradient">Range Video</span>
            </h2>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-[var(--color-card-border)] glow-hover">
            <iframe
              src="https://www.youtube.com/embed/v13PTnNymuo?rel=0&controls=1"
              title="Lowcountry Guns and Range Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full absolute inset-0 border-0"
            />
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — GOOGLE REVIEWS (Custom Card Layout)
          ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-white text-[var(--color-foreground)] border-y border-[var(--color-card-border)] relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-primary-base)]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="content-container relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-2">Social Proof</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">What Our </span><span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-[var(--color-muted-fg)] mt-3 max-w-lg mx-auto font-medium">
              Rated 4.9★ across 480+ reviews. Real feedback from real shooters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <div key={review.name} className="bg-gray-50/50 border border-[var(--color-card-border)] backdrop-blur-sm shadow-sm rounded-2xl p-6 flex flex-col transform transition-transform hover:-translate-y-1 hover:border-[var(--color-primary-base)]/50">
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-[var(--color-muted-fg)] text-sm leading-relaxed flex-1 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-[var(--color-card-border)]">
                  <p className="text-sm font-bold text-[var(--color-foreground)]">{review.name}</p>
                  <p className="text-xs text-[var(--color-muted-fg-light)]">Google Review</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJ7zhrQgCa-4gRuZpctP8J2pY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary-base)] transition-colors inline-flex items-center gap-2 group"
            >
              See all reviews on Google
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Keep TrustIndex script for SEO/live data sync */}
          <Script src="https://cdn.trustindex.io/loader.js?ver=1" strategy="lazyOnload" id="trustindex-loader" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7 — PHOTO GALLERY (Masonry)
          ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-gradient-section">
        <div className="content-container">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-2">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Explore Our </span><span className="text-gradient">Facilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden group bg-zinc-900 border border-[var(--color-card-border)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-110
                    ${img.src.includes('C5376FBA') || img.src.includes('IMG_2502') ? 'rotate-90 scale-[1.6]' : ''}
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 8 — LOCATION CTA
          ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-gradient-section text-[var(--color-foreground)]">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-3">Visit Us</p>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                <span className="text-[var(--color-foreground)]">Come See Us </span><span className="text-gradient">Today</span>
              </h2>
              <div className="space-y-6 text-[var(--color-muted-fg)] text-lg leading-relaxed mb-10">
                <div className="flex items-start gap-5">
                  <div className="bg-[var(--color-primary-base)]/10 p-3 rounded-xl transform transition-transform hover:scale-110">
                    <MapPin className="w-6 h-6 text-[var(--color-primary-base)] shrink-0" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-foreground)] text-xl">98 Purrysburg Rd</p>
                    <p>Hardeeville, SC 29927</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-[var(--color-primary-base)]/10 p-3 rounded-xl transform transition-transform hover:scale-110">
                    <Phone className="w-6 h-6 text-[var(--color-primary-base)] shrink-0" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-foreground)] text-xl">843-784-5474</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-[var(--color-primary-base)]/10 p-3 rounded-xl transform transition-transform hover:scale-110">
                    <Clock className="w-6 h-6 text-[var(--color-primary-base)] shrink-0" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-foreground)] text-xl mb-2">Hours</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm font-medium">
                      <span>Mon–Thu</span> <span className="text-[var(--color-foreground)]">10am – 6pm</span>
                      <span>Fri</span> <span className="text-[var(--color-foreground)] text-primary-glow font-bold">10am – 7pm</span>
                      <span>Sat</span> <span className="text-[var(--color-foreground)]">10am – 6pm</span>
                      <span>Sun</span> <span className="text-[var(--color-foreground)]">12pm – 6pm</span>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="primary" className="rounded-full px-10 shadow-[0_10px_30px_rgba(103,155,168,0.3)] hover:shadow-[0_15px_40px_rgba(103,155,168,0.5)] transform hover:-translate-y-1 transition-all">Get Directions</Button>
              </a>
            </div>

            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-[var(--color-card-border)] shadow-xl transform transition-all hover:scale-[1.01] hover:shadow-2xl">
              <iframe
                src="https://maps.google.com/maps?q=98%20Purrysburg%20Rd%2C%20Hardeeville%2C%20SC%2029927&t=m&z=12&output=embed&iwloc=near"
                title="98 Purrysburg Rd, Hardeeville, SC 29927"
                aria-label="Google Maps showing Lowcountry Guns location"
                className="w-full h-full absolute inset-0 border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
