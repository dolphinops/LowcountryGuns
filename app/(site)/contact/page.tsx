'use client';

import { Button } from '@/components/ui/Button';
import { BentoCard } from '@/components/ui/BentoCard';
import { MapPin, Phone, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setFormStatus('submitting');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const subject = (fd.get('subject') as string) || 'General Inquiry';
    const payload = {
      name: String(fd.get('name') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      subject,
      message: String(fd.get('message') || '').trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setFormError(data.error || 'Something went wrong. Please try again or call us.');
        setFormStatus('idle');
        return;
      }

      setFormStatus('success');
      form.reset();
    } catch {
      setFormError('Network error. Check your connection and try again.');
      setFormStatus('idle');
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[var(--color-primary-base)]" />,
      title: "Visit Us",
      content: "98 Purrysburg Rd\nHardeeville, SC 29927",
      link: "https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
    },
    {
      icon: <Phone className="w-6 h-6 text-[var(--color-primary-base)]" />,
      title: "Call Us",
      content: "843-784-5474",
      link: "tel:8437845474"
    },
  ];

  const businessHours = [
    { days: "Mon - Thu", hours: "10:00 AM - 6:00 PM" },
    { days: "Friday", hours: "10:00 AM - 7:00 PM" },
    { days: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { days: "Sunday", hours: "12:00 PM - 6:00 PM" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent z-[1]" />
        
        <div className="relative z-10 content-container animate-fade-up text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-base)] mb-3">Connect With Us</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Get In <span className="text-gradient-light brightness-125">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mx-auto max-w-2xl">
            Located in Hardeeville, just minutes from Savannah, GA and Beaufort, SC. Our expert staff is here to help with firearms, training, or memberships.
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── CONTACT INFO CARDS ─── */}
      <section className="py-16 bg-gradient-section">
        <div className="content-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-16">
            {contactInfo.map((info, idx) => (
              <a 
                key={idx} 
                href={info.link} 
                className="group flex h-full min-h-0"
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <BentoCard className="min-h-0 w-full flex-1 p-8 border-[var(--color-card-border)] hover:border-[var(--color-primary-base)] transition-all group-hover:shadow-[0_10px_40px_rgba(103,155,168,0.1)]">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-xl bg-[var(--color-surface)] group-hover:bg-[var(--color-primary-base)]/10 transition-colors shrink-0 w-fit">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-muted-fg)] mb-1">{info.title}</h3>
                      <p className="text-lg font-bold text-[var(--color-foreground)] whitespace-pre-line leading-snug group-hover:text-[var(--color-primary-base)] transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </BentoCard>
              </a>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form Section */}
            <div className="flex-1 lg:max-w-xl">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[var(--color-card-border)]">
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-3 bg-[var(--color-primary-base)]/10 rounded-xl text-[var(--color-primary-base)]">
                      <MessageSquare className="w-5 h-5" />
                   </div>
                   <h2 className="text-2xl font-bold">Send a Message</h2>
                </div>

                {formStatus === 'success' ? (
                  <div className="py-20 text-center animate-fade-up">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-[var(--color-muted-fg)] mb-8">We&apos;ll get back to you within 24 business hours.</p>
                    <Button variant="outline" onClick={() => { setFormStatus('idle'); setFormError(null); }}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formError ? (
                      <p
                        className="text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                        role="alert"
                      >
                        {formError}
                      </p>
                    ) : null}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-[var(--color-muted-fg)] px-1">Full Name</label>
                        <input 
                          id="name"
                          name="name"
                          required
                          placeholder="John Doe"
                          autoComplete="name"
                          className="w-full h-14 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)] transition-all font-medium" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-[var(--color-muted-fg)] px-1">Phone Number</label>
                        <input 
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(843) 555-0123"
                          autoComplete="tel"
                          className="w-full h-14 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)] transition-all font-medium" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-[var(--color-muted-fg)] px-1">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        autoComplete="email"
                        className="w-full h-14 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)] transition-all font-medium" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-[var(--color-muted-fg)] px-1">How can we help?</label>
                      <select 
                        id="subject"
                        name="subject"
                        required
                        defaultValue="General Inquiry"
                        className="w-full h-14 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)] transition-all font-medium appearance-none cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Range Membership">Range Membership</option>
                        <option value="Training / Courses">Training / Courses</option>
                        <option value="FFL Transfers">FFL Transfers</option>
                        <option value="Private Parties">Private Parties</option>
                        <option value="Product Availability">Product Availability</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-[var(--color-muted-fg)] px-1">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us more about what you need..."
                        className="w-full bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)] transition-all font-medium resize-none" 
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full h-16 shadow-lg shadow-[var(--color-primary-base)]/20 text-lg flex items-center justify-center gap-2"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : (
                        <>
                          Send Message <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Hours & Map Section */}
            <div className="flex-1 space-y-8">
              {/* Business Hours */}
              <div className="bg-[var(--color-background)] border border-[var(--color-card-border)] rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-[var(--color-primary-base)]/10 rounded-xl text-[var(--color-primary-base)]">
                      <Clock className="w-5 h-5" />
                   </div>
                   <h2 className="text-2xl font-bold">Business Hours</h2>
                </div>
                <div className="space-y-4">
                  {businessHours.map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-[var(--color-card-border)] last:border-0">
                      <span className="font-bold text-[var(--color-foreground)]">{row.days}</span>
                      <span className="font-semibold text-[var(--color-primary-base)] bg-[var(--color-primary-base)]/5 px-4 py-1 rounded-lg">
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Embed Placeholder / Image Link */}
              <div className="relative group overflow-hidden rounded-3xl border border-[var(--color-card-border)] aspect-video bg-zinc-100 shadow-sm">
                 <iframe 
                    title="98 Purrysburg Rd, Hardeeville, SC 29927"
                    src={`https://www.google.com/maps?q=${encodeURIComponent('98 Purrysburg Rd, Hardeeville, SC 29927')}&z=15&hl=en&output=embed`}
                    className="absolute inset-0 w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
                 <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    <a 
                      href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[var(--color-foreground)] font-bold text-sm px-5 py-3 rounded-xl shadow-xl flex items-center gap-2 hover:bg-[var(--color-primary-base)] hover:text-white transition-all transform hover:scale-105"
                    >
                      <MapPin className="w-4 h-4" /> Get Directions
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="gradient-divider" />
    </div>
  );
}
