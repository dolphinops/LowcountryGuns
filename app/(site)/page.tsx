import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import Script from "next/script";
import { 
  Shield, 
  MapPin, 
  Clock, 
  Phone, 
  Target, 
  Award, 
  Users, 
  ChevronRight,
  DollarSign, 
  ShieldCheck
} from 'lucide-react';
import { Accordion } from '@/components/ui/Accordion';
import { YouTubeFacade } from '@/components/ui/YouTubeFacade';
import { DirectionsMapModal } from '@/components/DirectionsMapModal';


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

const facilityShowcaseTiles = [
  {
    title: '10 Indoor Bays',
    blurb: 'Climate-controlled, 75-foot rifle-rated lanes with electronic targets.',
    src: '/images/IMG_9122.webp',
    alt: 'Shooters practicing in the indoor range bays at Lowcountry Guns',
    imageClass:
      'object-cover transition-transform duration-700 group-hover:scale-110 rotate-90 scale-[1.75]',
  },
  {
    title: 'Full-Service Pro Shop',
    blurb: 'Firearms, ammo, accessories, and transfers.',
    src: '/images/facility-pro-shop-rifle-wall.png',
    alt: 'Pro shop rifle wall with modern sporting rifles, bolt-actions, and retail signage',
    imageClass: 'object-cover object-center transition-transform duration-700 group-hover:scale-105',
  },
  {
    title: '170+ Rental Firearms',
    blurb: 'Try before you buy — pistols, rifles, and full-auto.',
    src: '/images/facility-range-shooter-lane.png',
    alt: 'Shooter on an indoor range lane with eye and ear protection, aiming downrange toward a paper target',
    imageClass: 'object-cover object-center transition-transform duration-700 group-hover:scale-105',
  },
] as const;

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
  {
    src: '/images/gallery-instructor-youth-lane.png',
    alt: 'Instructor assisting a young shooter at the range, lane 2, with eye and ear protection',
  },
  { src: '/images/IMG_8205.webp', alt: 'Lowcountry Guns Pro Shop Display' },
  { src: '/images/IMG_8194.webp', alt: 'Lowcountry Guns Pro Shop Customers' },
  {
    src: '/images/gallery-arrival-walkway.png',
    alt: 'Guest walking toward Lowcountry Guns along the fenced entrance path, parking and trees in the background',
  },
  { src: '/images/IMG_2502.webp', alt: 'Two people coaching in the indoor range bay' },
  { src: '/images/legacy/DSC1395.webp', alt: 'Indoor range perspective' },
];
export default function Home() {
  return (
    <>
      <div className="flex flex-col">

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO (Video Background)
          ═══════════════════════════════════════════════════ */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[900px] flex items-end justify-center overflow-hidden bg-[#0a0a0b]">


        {/* Self-hosted background video with optimized poster and preload settings */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none opacity-80">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/hero-poster.jpg"
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
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-4xl leading-relaxed mb-4">
            <span className="block text-balance">
              Serving Hardeeville, Savannah, Hilton Head & Beaufort.
            </span>
            <span className="block text-balance">
              10 climate-controlled shooting bays · Open 7 days — 1 minute off I-95, Exit 5.
            </span>
          </p>
          <div className="flex items-center gap-2 text-zinc-400 font-medium mb-10 animate-fade-up delay-1">
             <MapPin className="w-5 h-5 text-[var(--color-primary-base)]" />
             <span>98 Purrysburg Rd, Hardeeville, SC 29927</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/the-range">
              <Button size="lg" variant="primary" className="rounded-full w-full sm:w-auto px-10 shadow-[0_0_20px_rgba(103,155,168,0.4)] hover:shadow-[0_0_30px_rgba(103,155,168,0.6)]">Visit The Range</Button>
            </Link>
            <div className="w-full sm:w-auto">
              <DirectionsMapModal
                size="lg"
                variant="outline"
                className="group w-full rounded-full border-white/40 px-10 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-[#0a0a0b] sm:w-auto"
              >
                Get Directions{' '}
                <span className="ml-2 transition-transform group-hover:translate-x-1">📍</span>
              </DirectionsMapModal>
            </div>
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
      <section className="bg-[var(--color-primary-base)] text-white py-4 md:py-5 shadow-inner overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />
        <div className="content-container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5 relative z-10">
          <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
            <div className="hidden sm:flex w-11 h-11 bg-white/20 rounded-full items-center justify-center shrink-0 border border-white/30 backdrop-blur-sm">
               <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
               <h2 className="text-lg md:text-xl font-black uppercase tracking-tight leading-tight">First Time Visiting?</h2>
               <p className="text-sm md:text-base text-white/80 font-medium leading-snug">Save 10 minutes at the counter by signing your waiver online.</p>
            </div>
          </div>
          <Link href="/waiver" className="w-full md:w-auto shrink-0">
             <Button size="md" className="bg-white text-[var(--color-primary-base)] hover:bg-zinc-100 transition-all font-black uppercase tracking-widest text-xs sm:text-sm h-11 px-6 sm:px-8 rounded-xl w-full md:w-auto shadow-lg border-none">
                Sign Digital Waiver Now
             </Button>
          </Link>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — FACILITY (compact: facts + gallery + CTAs)
          ═══════════════════════════════════════════════════ */}
      <section className="bg-gradient-section py-12 md:py-16 lg:py-20">
        <div className="content-container">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-base)] md:text-sm">
                Our facility
              </p>
              <h2 className="text-balance text-2xl font-extrabold tracking-tight text-[var(--color-foreground)] md:text-3xl lg:text-4xl">
                <span className="text-[var(--color-foreground)]">World-class </span>
                <span className="text-gradient">indoor range</span>
              </h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[var(--color-muted-fg)] md:text-base">
                Ten climate-controlled bays, full pro shop, and 170+ rentals. Walk-ins welcome — open 7 days, one minute off I-95 (Exit 5), Hardeeville.
              </p>
            </div>
            <Link
              href="/the-range"
              className="group inline-flex h-11 shrink-0 items-center justify-center gap-1 self-start rounded-full border border-[var(--color-card-border)] bg-white/80 px-5 text-sm font-semibold text-[var(--color-foreground)] shadow-sm backdrop-blur-sm transition-all hover:border-[var(--color-primary-base)]/40 hover:bg-white md:self-end"
            >
              Full range details
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>

          {/* At a glance — dense facts visitors scan first */}
          <div className="mb-8 grid gap-3 md:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.title}
                className="flex gap-4 rounded-xl border border-[var(--color-card-border)] bg-white p-4 shadow-sm transition-all hover:border-[var(--color-primary-base)]/35 md:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-base)]/10">
                  {require('react').cloneElement(fact.icon as React.ReactElement, {
                    className: 'h-5 w-5 shrink-0 text-[var(--color-primary-base)]',
                    'aria-hidden': true,
                  })}
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="text-sm font-bold text-[var(--color-foreground)] md:text-base">{fact.title}</h3>
                  <p className="mt-1 text-xs font-medium leading-snug text-[var(--color-muted-fg)] md:text-sm md:leading-relaxed">
                    {fact.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Equal photo tiles — faster scan than asymmetric bento */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {facilityShowcaseTiles.map((tile) => (
              <Link
                key={tile.title}
                href="/the-range"
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-card-border)] shadow-sm transition-all hover:border-[var(--color-primary-base)]/30 hover:shadow-md"
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className={tile.imageClass}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 md:p-5">
                  <h3 className="text-base font-bold text-white md:text-lg">{tile.title}</h3>
                  <p className="mt-0.5 text-xs text-zinc-300 md:text-sm">{tile.blurb}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mx-auto sm:max-w-xl sm:flex-row sm:justify-center">
            <Link href="/the-range" className="w-full sm:w-auto sm:flex-1">
              <Button variant="primary" size="md" className="h-12 w-full shadow-lg sm:min-w-[11rem]">
                Range rules and pricing
              </Button>
            </Link>
            <Link href="/training" className="w-full sm:w-auto sm:flex-1">
              <Button variant="outline" size="md" className="h-12 w-full border-[var(--color-card-border)] sm:min-w-[11rem]">
                Training and courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* ═══════════════════════════════════════════════════
          SECTION 3b — TRAINING HIGHLIGHTS
          ═══════════════════════════════════════════════════ */}
      <section
        id="training"
        className="section-spacing scroll-mt-28 bg-white border-y border-[var(--color-card-border)] text-[var(--color-foreground)]"
      >
        <div className="content-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 lg:mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-2">
                Training
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-balance leading-[1.08]">
                <span className="text-[var(--color-foreground)]">Build Skills With </span>
                <span className="text-gradient">Certified Instructors</span>
              </h2>
              <p className="mt-4 text-base text-[var(--color-muted-fg)] leading-relaxed font-medium">
                From first-time permits to advanced pistol work — structured classes and private coaching on our range.
              </p>
            </div>
            <Link
              href="/training"
              className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] px-6 text-sm font-semibold text-[var(--color-foreground)] transition-all hover:border-[var(--color-primary-base)]/40 hover:bg-[var(--color-primary-base)]/5 hover:text-[var(--color-primary-base)] md:self-end"
            >
              View all training
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
            <div className="group flex flex-col rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-primary-base)]/40 hover:shadow-[0_12px_40px_rgba(103,155,168,0.12)] md:p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-base)]/10 text-[var(--color-primary-base)] transition-colors group-hover:bg-[var(--color-primary-base)]/15">
                <Shield className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[var(--color-foreground)] text-balance">
                CWP Certification
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted-fg)]">
                South Carolina–approved concealed weapon permit training — law, safe storage, and live-fire qualification.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/training#book-cwp"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] text-center text-sm font-semibold text-white shadow-md transition-all hover:from-[var(--color-primary-base)] hover:to-[var(--color-primary-hover)]"
                >
                  Book online
                </Link>
                <Link
                  href="/conceal-weapon-permit"
                  className="inline-flex h-11 w-full items-center justify-center gap-1 text-sm font-semibold text-[var(--color-primary-base)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Course overview
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="group flex flex-col rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-primary-base)]/40 hover:shadow-[0_12px_40px_rgba(103,155,168,0.12)] md:p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-base)]/10 text-[var(--color-primary-base)] transition-colors group-hover:bg-[var(--color-primary-base)]/15">
                <Users className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[var(--color-foreground)] text-balance">
                One on One Training
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted-fg)]">
                Private instruction tailored to your goals — new gun owners, skill gaps, or prep for a specific course.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/training#book-private-instruction"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] text-center text-sm font-semibold text-white shadow-md transition-all hover:from-[var(--color-primary-base)] hover:to-[var(--color-primary-hover)]"
                >
                  Book online
                </Link>
                <Link
                  href="/private-firearm-instruction"
                  className="inline-flex h-11 w-full items-center justify-center gap-1 text-sm font-semibold text-[var(--color-primary-base)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Course overview
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="group flex flex-col rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-primary-base)]/40 hover:shadow-[0_12px_40px_rgba(103,155,168,0.12)] md:p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-base)]/10 text-[var(--color-primary-base)] transition-colors group-hover:bg-[var(--color-primary-base)]/15">
                <Target className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[var(--color-foreground)] text-balance">
                Defensive Pistol
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted-fg)]">
                Draw, reloads, and accuracy under pressure — practical pistol skills for serious concealed carriers.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/training#book-defensive-pistol"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] text-center text-sm font-semibold text-white shadow-md transition-all hover:from-[var(--color-primary-base)] hover:to-[var(--color-primary-hover)]"
                >
                  Book online
                </Link>
                <Link
                  href="/pistol-courses"
                  className="inline-flex h-11 w-full items-center justify-center gap-1 text-sm font-semibold text-[var(--color-primary-base)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Course overview
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center md:hidden">
            <Link href="/training" className="w-full max-w-md">
              <Button variant="primary" size="md" className="h-12 w-full shadow-lg">
                View all training
              </Button>
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
            <YouTubeFacade videoId="v13PTnNymuo" title="Lowcountry Guns and Range Video" />
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
                  className={`object-cover object-center transition-transform duration-700 group-hover:scale-110
                    ${img.src.includes('IMG_2502') ? 'rotate-90 scale-[1.6]' : ''}
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7.5 — ROBUST FAQ
          ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-white border-y border-[var(--color-card-border)]/50">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Got <span className="text-gradient">Questions?</span> We Have Answers.
            </h2>
            <p className="text-lg text-[var(--color-muted-fg)] leading-relaxed">
              Everything you need to know about visiting the Lowcountry's premier indoor shooting destination.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion items={[
              {
                question: "Do I need to make a reservation?",
                answer: "No! We are open 7 days a week for walk-ins. Just bring your photo ID and we'll get you on a lane as quickly as possible. Members enjoy priority lane access."
              },
              {
                question: "Is the range climate controlled?",
                answer: "Yes. Our facility is kept at a perfect 70° year-round. More importantly, we use an advanced EPA-standard ventilation system that circulates massive amounts of fresh, filtered air for your health and safety."
              },
              {
                question: "What is the longest lane distance?",
                answer: "Our range features 10 fully-equipped lanes with a maximum distance of 25 yards. All lanes are rifle-rated."
              },
              {
                question: "What is the dress code for the range?",
                answer: "For your safety, close-toed shoes and crew neck shirts are required. We do not allow flip-flops, tank tops, or low-cut shirts as they do not provide adequate protection from hot brass."
              },
              {
                question: "Can I rent firearms if I don't own one?",
                answer: "Absolutely. We have over 170 rental firearms available, including the latest models from major manufacturers. It's a great way to 'try before you buy'."
              },
              {
                question: "Can my children shoot at your range?",
                answer: "Yes. Shooters under 18 must be accompanied by a parent or legal guardian aged 21 or older. Our RSOs will ensure a safe and educational experience for the whole family."
              },
              {
                question: "What does it cost to use the range?",
                answer: "Range fees are $22.00 per person, per visit. Best of all, there is NO time limit on your session! We want you to take your time and practice safely."
              }
            ]} />
            
            <div className="mt-12 text-center">
              <Link href="/faq">
                <Button variant="outline" className="rounded-full">View All Frequently Asked Questions</Button>
              </Link>
            </div>
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
              <DirectionsMapModal
                size="lg"
                variant="primary"
                className="rounded-full px-10 shadow-[0_10px_30px_rgba(103,155,168,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(103,155,168,0.5)]"
              >
                Get Directions
              </DirectionsMapModal>
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
    </>
  );
}
