import { BentoCard } from '@/components/ui/BentoCard';
import Image from 'next/image';
import { Target, CheckCircle, Star, User, Quote, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Lowcountry Guns & Range",
  description: "Meet the team and learn about Lowcountry Guns & Range, South Carolina's premier indoor shooting facility."
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-black">
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto drop-shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary-base)] mb-4 animate-fade-up">Our Story</p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 animate-fade-up">
            <span className="text-gradient-light brightness-125">About Us</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-100 leading-relaxed mx-auto max-w-2xl animate-fade-up font-medium">
            The South Carolina Lowcountry&apos;s Premier Indoor Gun Range, serving Hardeeville, Savannah, Hilton Head, and Beaufort with a safe, state-of-the-art environment for all.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── TEAM INTRO & PROFILES ─── */}
      <section className="section-spacing bg-gradient-section text-[var(--color-foreground)] pb-10 pt-16 md:pt-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary-base)]/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        
        <div className="content-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[var(--color-foreground)]">Meet the Team</h2>
            <p className="text-lg md:text-xl text-[var(--color-muted-fg)] leading-relaxed font-medium">
              At Lowcountry Guns & Range, our staff is the heart of what we do. From maintaining a 0% tolerance safety policy to welcoming first-time shooters like family, our team of expert instructors and safety officers are here to ensure you have an incredible and safe experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto">
            {/* Real Staff Profiles with Summarized Bios */}
            {[
              { 
                name: "A.J. Rossi", 
                title: "NRA & SLED Instructor / Chief RSO", 
                img: "/images/team/aj-rossi.webp", 
                bio: "A.J. Rossi is an NRA Pistol Instructor, Chief Range Safety Officer, and SLED CWP Instructor with a lifelong passion for firearms. Following a successful career in the luxury automotive industry, he relocated to Bluffton, SC to help first-time shooters overcome intimidation. A.J. is dedicated to providing an unmatched firearms experience centered on building confidence and safety through patient, professional coaching."
              },
              { 
                name: "Chris Horkan", 
                title: "Lead Instructor & RSO", 
                img: "/images/team/chris-horkan.jpg", 
                bio: "Chris Horkan is a retired law enforcement veteran with a distinguished 32-year career. A former Operational Commander for SEMLEC SWAT and SRT team leader, Chris brings decades of elite tactical experience to Lowcountry Guns & Range. He is highly certified in firearms, defensive tactics, and tactical command, and currently serves as a lead instructor for O2X Human Performance."
              },
              { 
                name: "Jeremy Mangione", 
                title: "Training Developer & Instructor", 
                img: "/images/team/jeremy-mangione.webp", 
                bio: "Jeremy Mangione is a 20-year Army veteran with service in elite units like the 75th Ranger Regiment and the U.S. Army Marksmanship Unit. A world-class marksman and former U.S. Army Sniper School Senior Instructor, Jeremy has trained U.S. and NATO forces, as well as the U.S. Secret Service. He brings unmatched expertise to help shooters of all levels develop elite skill and safety."
              },
              { 
                name: "Noah Cacciatore", 
                title: "Firearms Specialist & Gunsmithing", 
                img: "/images/team/noah-cacciatore.webp", 
                bio: "Noah Cacciatore, a Georgia native and U.S. Marine Corps veteran, has been an avid shooter since age six. Having gained significant field experience as an assaultman, Noah is now enrolled in gunsmithing school to pursue his passion for the mechanical precision of firearms. His combination of tactical field experience and technical training makes him a valuable resource for our community."
              },
              { 
                name: "Carrie Lathan", 
                title: "Firearms Instructor & RSO", 
                img: "/images/team/carrie-lathan.webp", 
                bio: "Born and raised in Beaufort, SC, Carrie Lathan served in the U.S. Army as a small arms artillery repairer. Following her military service, she transitioned into the civilian sector as a Range Safety Officer and firearms instructor. Her deep technical knowledge of weapons maintenance and commitment to safety ensures a professional and supportive training environment for all shooters."
              }
            ].map((member, i) => (
              <BentoCard key={i} className={`flex flex-col border-[var(--color-card-border)] pt-10 pb-10 px-6 bg-white shadow-sm text-center group hover:border-[var(--color-primary-base)] transition-all duration-500 rounded-3xl overflow-hidden relative ${i >= 3 ? 'lg:translate-x-[50%] lg:max-w-md lg:mx-auto' : ''}`}>
                <div className="mx-auto mb-8 w-44 h-44 rounded-3xl bg-zinc-50 border border-[var(--color-card-border)] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-[var(--color-primary-base)] relative shadow-lg">
                  {/* Team Member Image */}
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-2">{member.name}</h3>
                <p className="text-xs font-black tracking-[0.2em] uppercase text-[var(--color-primary-base)] mb-5">{member.title}</p>
                <p className="text-[var(--color-muted-fg)] text-sm leading-relaxed flex-grow font-medium">
                  {member.bio}
                </p>
                <div className="mt-8 h-1 w-12 bg-[var(--color-primary-base)] mx-auto rounded-full opacity-60 group-hover:w-20 group-hover:opacity-100 transition-all" />
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GOOGLE REVIEWS ─── */}
      <section className="section-spacing bg-white text-[var(--color-foreground)] pt-20 pb-24 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--color-primary-base)]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="content-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-[var(--color-foreground)]">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1.5 mb-6 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 fill-current drop-shadow-sm" />)}
            </div>
            <p className="text-xl text-[var(--color-muted-fg)] max-w-2xl mx-auto font-medium leading-relaxed">
              We pride ourselves on providing a premium, safe, and welcoming environment for shooters of all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Review 1 */}
            <BentoCard className="flex flex-col border border-[var(--color-card-border)] bg-gray-50/50 backdrop-blur-xl shadow-sm p-8 hover:border-[var(--color-primary-base)]/50 hover:-translate-y-1 transition-all duration-500 rounded-3xl relative">
              <div className="absolute -top-4 -left-3 text-zinc-200/50">
                <Quote className="w-20 h-20 fill-current" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-[var(--color-muted-fg)] leading-relaxed text-lg italic flex-grow">
                  &quot;The staff here is amazing! They are so friendly and knowledgeable. I attended my first CWP class with Chris and he was so patient and explained everything perfectly.&quot;
                </p>
                <div className="mt-8 font-bold text-[var(--color-foreground)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold overflow-hidden border border-[var(--color-card-border)]">
                    <User className="w-5 h-5" />
                  </div>
                  Google Reviewer
                </div>
              </div>
            </BentoCard>

            {/* Review 2 */}
            <BentoCard className="flex flex-col border border-[var(--color-card-border)] bg-gray-50/50 backdrop-blur-xl shadow-sm p-8 hover:border-[var(--color-primary-base)]/50 hover:-translate-y-1 transition-all duration-500 rounded-3xl relative">
              <div className="absolute -top-4 -left-3 text-zinc-200/50">
                <Quote className="w-20 h-20 fill-current" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-[var(--color-muted-fg)] leading-relaxed text-lg italic flex-grow">
                  &quot;Excellent indoor facility with top-notch safety. The range officers are attentive and make sure everyone feels secure. The modern automated targets were great!&quot;
                </p>
                <div className="mt-8 font-bold text-[var(--color-foreground)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold overflow-hidden border border-[var(--color-card-border)]">
                    <User className="w-5 h-5" />
                  </div>
                  Google Reviewer
                </div>
              </div>
            </BentoCard>

            {/* Review 3 */}
            <BentoCard className="flex flex-col border border-[var(--color-card-border)] bg-gray-50/50 backdrop-blur-xl shadow-sm p-8 hover:border-[var(--color-primary-base)]/50 hover:-translate-y-1 transition-all duration-500 rounded-3xl relative">
              <div className="absolute -top-4 -left-3 text-zinc-200/50">
                <Quote className="w-20 h-20 fill-current" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-[var(--color-muted-fg)] leading-relaxed text-lg italic flex-grow">
                  &quot;Great selection of rentals and a very clean range. As a beginner, I was quite nervous, but the team here made me feel right at home instantly.&quot;
                </p>
                <div className="mt-8 font-bold text-[var(--color-foreground)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold overflow-hidden border border-[var(--color-card-border)]">
                    <User className="w-5 h-5" />
                  </div>
                  Google Reviewer
                </div>
              </div>
            </BentoCard>
          </div>

          <div className="text-center">
            <a 
              href="https://www.google.com/search?q=lowcountry+guns+and+range"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] text-white font-bold text-lg rounded-full hover:from-[var(--color-primary-base)] hover:to-[var(--color-primary-hover)] transition-all shadow-[0_0_30px_rgba(103,155,168,0.4)] hover:shadow-[0_0_40px_rgba(103,155,168,0.6)] group"
            >
              Read More Google Reviews <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>



      <div className="gradient-divider" />
    </div>
  );
}
