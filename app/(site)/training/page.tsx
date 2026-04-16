import { Button } from '@/components/ui/Button';
import EventbriteWidget from '@/components/EventbriteWidget';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Shield, Users, Church, Target, ChevronRight, Lock, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: "Training | Lowcountry Guns & Range",
  description: "From beginner to advanced — certified instruction, CWP classes, and a subscription training program coming soon."
};

/* ─── DATA ─── */

const allCourses = [
  {
    title: "Woman's Basic Beginner Class",
    subtitle: "Safety & Foundations",
    description: "A comfortable, welcoming environment for women to learn firearm safety and handling fundamentals.",
    icon: Users,
    href: "/contact",
    span: "md:col-span-7",
    color: "from-pink-500/10 to-rose-500/10",
    bullets: ["Safety First", "Hands-on", "Empowering"]
  },
  {
    title: "CWP Certification",
    subtitle: "Concealed Weapon Permit",
    description: "SC-approved training for carrying a concealed weapon. Covers laws, storage, and practical shooting.",
    icon: Shield,
    href: "/conceal-weapon-permit",
    span: "md:col-span-5",
    color: "from-blue-500/10 to-cyan-500/10",
    bullets: ["Legal", "Practical", "Official"]
  },
  {
    title: "Church Safety Team",
    subtitle: "Protecting Your Community",
    description: "Equip your house of worship security team with threat assessment and emergency response skills.",
    icon: Church,
    href: "/contact",
    span: "md:col-span-4",
    color: "from-indigo-500/10 to-purple-500/10",
    bullets: ["Security", "Response", "Teamwork"]
  },
  {
    title: "Defensive Pistol",
    subtitle: "Advanced Combat Skills",
    description: "Master rapid handling, reloading under stress, and improving your tactical accuracy.",
    icon: Target,
    href: "/pistol-courses",
    span: "md:col-span-8",
    color: "from-red-500/10 to-orange-600/10",
    bullets: ["Speed", "Accuracy", "Stress"]
  },
  {
    title: "Private Instruction",
    subtitle: "1-on-1 Personalized Coaching",
    description: "One-on-one sessions with Master Instructors to master specific skills or a new firearm.",
    icon: Users,
    href: "/private-firearm-instruction",
    span: "md:col-span-4",
    color: "from-emerald-500/10 to-teal-500/10",
    bullets: ["Tailored", "Expert", "Focused"]
  },
  {
    title: "Defensive Carbine",
    subtitle: "Modern Rifle Skills",
    description: "Run your rifle with confidence. Master zeroing, sling transitions, and tactical accuracy under pressure.",
    icon: Target,
    href: "/contact",
    span: "md:col-span-12 lg:col-span-6",
    color: "from-amber-600/10 to-orange-700/10",
    bullets: ["Rifle", "Zeroing", "Tactics"]
  }
];

const subscriptionLevels = [
  {
    level: 1,
    title: "Fundamentals",
    bullets: ["Accuracy", "Precision", "Magazine changes"],
  },
  {
    level: 2,
    title: "Intermediate",
    bullets: ["Drawing from the holster", "Malfunctions"],
  },
  {
    level: 3,
    title: "Advanced Movement",
    bullets: ["One-handed shooting", "Movement"],
  },
  {
    level: 4,
    title: "Low Light & Cover",
    bullets: ["Barricades", "Illumination devices", "Concealment"],
  },
  {
    level: 5,
    title: "Elite",
    bullets: ["Advanced practical application"],
  },
];

const bookableWidgets = [
  {
    id: 'book-private-instruction',
    title: '1 on 1 Instruction',
    eventId: '1680552550919',
    height: 500,
    courseHref: '/private-firearm-instruction',
  },
  {
    id: 'book-cwp',
    title: 'Conceal Weapon Permit',
    eventId: '1680544276169',
    height: 500,
    courseHref: '/conceal-weapon-permit',
  },
  {
    id: 'book-defensive-pistol',
    title: 'Defensive Pistol',
    eventId: '1985594956967',
    height: 625,
    courseHref: '/pistol-courses',
  },
] as const;

export default function Training() {
  return (
    <div className="flex flex-col bg-white text-[var(--color-foreground)] selection:bg-[var(--color-primary-base)] selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black z-[1]" />

        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-base)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary-base)]"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Education Center</span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8">
            <span className="text-white">Train</span> <span className="text-gradient-light brightness-125 drop-shadow-[0_0_30px_rgba(103,155,168,0.3)]">With Us</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed mx-auto max-w-2xl font-medium">
            No egos, just results. Certified instruction—doing it the right way, the first time.
          </p>
        </div>
      </section>

      {/* ─── BENTO GRID: OUR COURSES ─── */}
      <section className="py-24 relative overflow-hidden bg-gradient-section">
        <div className="content-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Explore Our <span className="text-gradient">Training Curriculum</span>
              </h2>
              <p className="text-[var(--color-muted-fg)] text-lg font-medium">
                Premier firearms instruction in Hardeeville, South Carolina. From absolute beginners to advanced tactical training.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {allCourses.map((course, index) => (
              <Link 
                key={index} 
                href={course.href}
                className={`group relative overflow-hidden rounded-3xl border border-[var(--color-card-border)] bg-white transition-all duration-500 hover:border-[var(--color-primary-base)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary-base)]/5 hover:-translate-y-1 ${course.span}`}
              >
                {/* Accent Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-card-border)] group-hover:scale-110 group-hover:border-[var(--color-primary-base)]/20 transition-all duration-500">
                      <course.icon className="w-6 h-6 text-[var(--color-primary-base)]" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-[var(--color-primary-base)] transition-all translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300" />
                  </div>
                  
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary-dark)] mb-2 opacity-70">{course.subtitle}</p>
                    <h3 className="text-2xl font-black text-[var(--color-foreground)] transition-colors mb-3 leading-tight">{course.title}</h3>
                    <p className="text-[var(--color-muted-fg)] text-sm leading-relaxed mb-6 line-clamp-2">{course.description}</p>
                  </div>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {course.bullets.map((bullet, bIdx) => (
                      <span key={bIdx} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-card-border)] text-[var(--color-muted-fg)]">
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-[50%] h-[50%] bg-[var(--color-primary-base)]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -left-1/4 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── EVENTBRITE BOOKING SECTION ─── */}
      <section id="book-sessions" className="scroll-mt-28 bg-white py-16 sm:py-20 md:py-24">
        <div className="content-container min-w-0">
          <div className="mb-10 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-[var(--color-foreground)] md:text-5xl">
              Book Your <span className="text-gradient">Session</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base font-medium italic text-[var(--color-muted-fg)] md:text-lg">
              Practice Becomes Permanent. Start with Expert Training.
            </p>
          </div>

          <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-8 md:gap-10">
            {bookableWidgets.map((w) => (
              <div
                key={w.id}
                id={w.id}
                className="scroll-mt-28 flex flex-col overflow-hidden rounded-3xl border border-[var(--color-card-border)] bg-zinc-50 shadow-sm"
              >
                <div className="flex flex-col gap-4 px-4 pb-4 pt-6 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:pb-2 sm:pt-8 md:px-8">
                  <h3 className="text-center text-lg font-bold text-[var(--color-primary-dark)] sm:text-left md:text-xl">
                    {w.title}
                  </h3>
                  <nav
                    aria-label={`${w.title} quick links`}
                    className="flex flex-wrap items-center justify-center gap-2 sm:justify-end"
                  >
                    <Link
                      href="/#training"
                      className="inline-flex h-11 min-w-[44px] items-center justify-center gap-2 rounded-full border border-[var(--color-card-border)] bg-white px-4 text-sm font-semibold text-[var(--color-foreground)] transition-all hover:border-[var(--color-primary-base)]/40 hover:bg-[var(--color-primary-base)]/5 hover:text-[var(--color-primary-base)]"
                    >
                      <Home className="h-4 w-4 shrink-0" aria-hidden />
                      Home
                    </Link>
                    <Link
                      href={w.courseHref}
                      className="inline-flex h-11 min-w-[44px] items-center justify-center gap-1 rounded-full border border-[var(--color-card-border)] bg-white px-4 text-sm font-semibold text-[var(--color-foreground)] transition-all hover:border-[var(--color-primary-base)]/40 hover:bg-[var(--color-primary-base)]/5 hover:text-[var(--color-primary-base)]"
                    >
                      Course page
                      <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  </nav>
                </div>
                <div className="min-w-0 border-t border-[var(--color-card-border)] bg-white px-2 pb-6 pt-2 sm:px-4 sm:pb-8 md:px-8">
                  <EventbriteWidget eventId={w.eventId} height={w.height} />
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] px-4 py-8 text-center shadow-sm sm:px-8">
              <p className="text-base font-medium text-[var(--color-foreground)]">
                Looking for another class, church team training, or carbine courses?
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted-fg)]">
                We will point you to the right instructor and schedule.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 min-w-[44px] items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] px-8 text-sm font-semibold text-white shadow-md transition-all hover:from-[var(--color-primary-base)] hover:to-[var(--color-primary-hover)]"
              >
                Contact the Pro Shop
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-[var(--color-muted-fg)] text-sm mb-8 font-medium">
              Having trouble with the booking widget? You can also book by calling the Pro Shop directly or visiting us in person.
            </p>
            <Link href="tel:8437845474">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-[var(--color-card-border)] hover:bg-zinc-50 hover:border-[var(--color-primary-base)] transition-all font-bold">
                Call the Pro Shop — 843-784-5474
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── SUBSCRIPTION TRAINING — COMING SOON ─── */}
      <section className="py-24 bg-gradient-section-reverse relative overflow-hidden">
        {/* Subtle radial glow background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 30%, var(--color-primary-base) 0%, transparent 70%)' }} />

        <div className="relative z-10 content-container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-[var(--color-primary-dark)] border border-[var(--color-card-border)] shadow-sm mb-6">
              <Lock size={12} className="text-[var(--color-primary-base)]" /> Coming Soon
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[var(--color-foreground)] mb-6">
              Subscription <span className="text-gradient">Training</span>
            </h2>
            <p className="text-[var(--color-muted-fg)] text-lg max-w-2xl mx-auto font-medium">
              A progressive, 5-level program designed to take you from fundamentals to elite-level practical application.
            </p>
          </div>

          {/* Vertical progression timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline spine */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary-base)] via-[var(--color-primary-base)]/20 to-transparent z-0" />

            <div className="flex flex-col gap-8">
              {subscriptionLevels.map((level) => (
                <div key={level.level} className="relative flex items-center gap-6 md:gap-10 group">
                  {/* Level indicator */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-[var(--color-card-border)] bg-white flex items-center justify-center shadow-xl transition-all duration-500 group-hover:border-[var(--color-primary-base)] group-hover:scale-110 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-base)]/5 to-transparent opacity-50" />
                    <div className="relative flex flex-col items-center">
                      <span className="text-[10px] uppercase tracking-tighter text-[var(--color-muted-fg-light)] font-bold mb-1">Level</span>
                      <span className="text-2xl md:text-3xl font-black text-[var(--color-primary-base)] leading-none">{level.level}</span>
                    </div>
                  </div>

                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block w-12 h-px bg-[var(--color-card-border)]" />

                  {/* Card */}
                  <div className="flex-1 bg-white border border-[var(--color-card-border)] rounded-3xl p-6 md:p-10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[var(--color-primary-base)]/5 group-hover:-translate-y-1 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h3 className="text-[var(--color-foreground)] font-black text-2xl tracking-tight mb-4">{level.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {level.bullets.map((b) => (
                            <span key={b} className="text-[10px] font-bold uppercase tracking-wider bg-zinc-50 px-4 py-2 rounded-xl border border-[var(--color-card-border)] text-[var(--color-muted-fg)]">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="h-12 w-12 rounded-full flex items-center justify-center bg-zinc-50 border border-[var(--color-card-border)] group-hover:text-[var(--color-primary-base)] group-hover:border-[var(--color-primary-base)]/30 transition-all">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-[var(--color-muted-fg-light)] text-sm italic font-medium">
              Pricing and enrollment details will be announced soon. Stay tuned for the ultimate training experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
