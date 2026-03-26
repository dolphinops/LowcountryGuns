import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/Button';
import EventbriteWidget from '@/components/EventbriteWidget';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Training | Lowcountry Guns & Range",
  description: "Certified friendly instruction, from basic beginner classes to private firearm instruction."
};

const courses = [
  {
    title: "Woman's Basic Beginner Class",
    description: "Designed to provide a comfortable and welcoming environment for women to learn the fundamentals of firearm safety and handling.",
    slug: "womans-basic-beginner-class",
  },
  {
    title: "Conceal Weapon Permit (CWP)",
    description: "South Carolina approved training required for carrying a concealed weapon. Covers laws, storage, and practical shooting.",
    slug: "conceal-weapon-permit",
  },
  {
    title: "Tactical Lighting Training",
    description: "Learn low-light and no-light shooting techniques using handheld and weapon-mounted lights safely.",
    slug: "tactical-lighting-training"
  },
  {
    title: "Intro to Competition Shooting",
    description: "Step into the world of IDPA and USPSA. Learn range commands, scoring, drawing from a holster, and competitive movement.",
    slug: "intro-to-competition-shooting"
  },
  {
    title: "Private Firearm Instruction",
    description: "One-on-one sessions with our Master Instructors to help you master specific skills or become comfortable with a new firearm.",
    slug: "private-firearm-instruction"
  },
  {
    title: "Defensive Pistol Course",
    description: "Advanced pistol handling, reloading under stress, and improving speed and accuracy.",
    slug: "pistol-courses",
  }
];

export default function Training() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-[url('/images/legacy/DSC1395.webp')] bg-cover bg-center bg-no-repeat opacity-45 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-3 delay-1 animate-fade-up">Education Center</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 delay-2 animate-fade-up drop-shadow-2xl">
            <span className="text-gradient-light brightness-125">Training &</span>
            <br />
            Instruction
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 leading-relaxed mx-auto max-w-2xl delay-3 animate-fade-up">
            No egos, just results. We&apos;ve got your back. Certified, friendly instruction—doing it the right way, the first time.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── EVENTBRITE WIDGETS SECTION ─── */}
      <section className="section-spacing bg-[var(--color-background)]">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-primary-base)]">
              Training Course Signup
            </h2>
            <p className="text-[var(--color-foreground)] font-bold italic mt-4 max-w-2xl mx-auto">
              Practice Becomes Permanent. Start with Expert Training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-center text-[var(--color-primary-base)]">1 on 1 Instruction</h3>
              <EventbriteWidget eventId="1680552550919" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-center text-[var(--color-primary-base)]">Conceal Weapon Permit</h3>
              <EventbriteWidget eventId="1680544276169" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-center text-[var(--color-primary-base)]">Defensive Pistol Course</h3>
              <EventbriteWidget eventId="1984139736363" />
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── MAIN CONTENT ─── */}
      <section className="section-spacing bg-gradient-section">
        <div className="content-container">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[var(--color-foreground)]">Explore Our </span><span className="text-gradient">Courses</span>
            </h2>
            <p className="text-[var(--color-muted-fg)] mt-4 max-w-2xl mx-auto">
              From absolute beginners to advanced tactical training, our certified instructors provide a safe, welcoming, and professional environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <BentoCard 
                key={course.slug} 
                className="bg-gradient-brand shadow-lg rounded-2xl p-8 flex flex-col transform transition-transform hover:-translate-y-1"
              >
                <div className="flex-1 flex flex-col mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-medium">{course.description}</p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/20">
                  <Link href={`/${course.slug}`}>
                    <Button variant="secondary" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </BentoCard>
            ))}
          </div>
          
        </div>
      </section>

      <div className="gradient-divider" />
    </div>
  );
}
