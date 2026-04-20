'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, MapPin, FileText } from 'lucide-react';
import { MobileActions } from './MobileActions';
import { DirectionsMapModal } from '@/components/DirectionsMapModal';

interface SubLink {
  href: string;
  label: string;
}

interface NavLink {
  label: string;
  href?: string;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { 
    label: 'The Range', 
    href: '/the-range',
    subLinks: [
      { href: '/the-range', label: 'Range Overview' },
      { href: '/training', label: 'Training & Courses' },
      { href: '/first-experience', label: 'Your First Experience' },
      { href: '/memberships', label: 'Memberships' },
      { href: '/the-range/firearm-transfer', label: 'Firearm Transfer Request' },
    ]
  },
  { 
    label: 'Pro Shop', 
    href: '/pro-shop',
    subLinks: [
      { href: '/pro-shop', label: 'Shop Overview' },
      { href: '/shop', label: 'Online Store' },
      { href: '/gun-rentals', label: 'Gun Rentals' },
      { href: '/firearm-transfers', label: 'Firearm Transfers' },
    ]
  },
  { href: '/blog', label: 'Blog' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on path change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white border-b border-[var(--color-card-border)] shadow-md'
        }`}
      >
        {/* Gradient Top Bar */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 w-full bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary-base)] to-teal-400 transition-opacity duration-300 ${isTransparent ? 'opacity-0' : 'opacity-100'}`} />

        <div className="w-full max-w-[80rem] mx-auto px-6 flex h-24 items-center justify-between mt-1.5">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/legacy/Logo-2.webp"
              alt="Lowcountry Guns & Range"
              width={250}
              height={84}
              className="w-auto h-14 sm:h-[4.5rem] rounded transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-4 text-sm font-semibold" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                className="relative group py-2"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.subLinks ? (
                  <div className="flex items-center">
                    <Link
                      href={link.href!}
                      className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                        isTransparent
                          ? 'text-white/80 hover:text-white hover:bg-white/10'
                          : 'text-[var(--color-muted-fg)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className={`p-2 transition-all ${
                        isTransparent ? 'text-white/60 hover:text-white' : 'text-[var(--color-muted-fg)] hover:text-[var(--color-foreground)]'
                      }`}
                      aria-expanded={activeDropdown === link.label}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                ) : (
                  <Link
                    href={link.href!}
                    className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                      isTransparent
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-[var(--color-muted-fg)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${activeDropdown === link.label ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-white border border-[var(--color-card-border)] rounded-2xl shadow-xl overflow-hidden min-w-[220px]">
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.href}
                          href={sub.href}
                          className="block px-6 py-3.5 text-sm font-medium text-[var(--color-muted-fg)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)] transition-colors border-b border-[var(--color-card-border)] last:border-0"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/waiver" className="hidden lg:inline-flex">
              <Button
                size="md"
                variant="outline"
                className={`font-bold border-2 ${
                  isTransparent
                    ? 'text-white border-white/40 hover:bg-white/10 hover:border-white'
                    : 'text-[var(--color-foreground)] border-[var(--color-primary-base)]/30 hover:border-[var(--color-primary-base)] hover:bg-[var(--color-primary-base)]/5 shadow-sm'
                }`}
              >
                Sign Waiver
              </Button>
            </Link>

            <Link
              href="/waiver"
              className={`inline-flex lg:hidden items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 ${
                isTransparent
                  ? 'text-white border-white/30 hover:bg-white/15 hover:border-white/50'
                  : 'text-[var(--color-foreground)] border-[var(--color-card-border)] hover:bg-[var(--color-surface)] hover:border-[var(--color-foreground)]/20 shadow-sm'
              }`}
              title="Sign Waiver"
            >
              <FileText className="w-5 h-5" />
            </Link>

            <DirectionsMapModal
              variant="ghost"
              size="sm"
              aria-label="Directions"
              title="Directions"
              className={`inline-flex shrink-0 !h-10 !w-10 !min-w-0 !rounded-full !p-0 border shadow-sm transition-all duration-200 ${
                isTransparent
                  ? '!border-white/30 !text-white hover:!border-white/50 hover:!bg-white/15 hover:!text-white'
                  : '!border-[var(--color-card-border)] !text-[var(--color-foreground)] hover:!border-[var(--color-foreground)]/20 hover:!bg-[var(--color-surface)] hover:!text-[var(--color-foreground)]'
              }`}
            >
              <MapPin className="h-5 w-5 shrink-0" aria-hidden />
            </DirectionsMapModal>

            <Link href="/memberships" className="hidden sm:inline-flex">
              <Button size="md" variant="primary">Membership</Button>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg ${
                isTransparent ? 'hover:bg-white/10' : 'hover:bg-[var(--color-surface)]'
              }`}
            >
              {mobileOpen ? <X className={isTransparent ? 'text-white' : ''} /> : <Menu className={isTransparent ? 'text-white' : ''} />}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[90px] bg-white z-[90] overflow-y-auto pb-32">
            <nav className="px-6 py-8 flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col border-b border-[var(--color-card-border)] last:border-0 pb-3">
                  {link.subLinks ? (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <Link 
                          href={link.href!}
                          className="flex-1 py-4 px-2 text-xl font-black tracking-tight text-[var(--color-foreground)] uppercase hover:text-[var(--color-primary-base)] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          className="p-4"
                        >
                          <ChevronDown className={`w-6 h-6 text-[var(--color-primary-base)] transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeDropdown === link.label ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="flex flex-col bg-[var(--color-background)] rounded-xl border border-[var(--color-card-border)] mb-4">
                          {link.subLinks.map((sub) => (
                            <Link 
                              key={sub.href} 
                              href={sub.href}
                              className="py-4 px-6 text-base font-semibold text-[var(--color-foreground)] border-b border-[var(--color-card-border)] last:border-0 hover:bg-zinc-50"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href!}
                      className="py-5 px-2 text-xl font-black tracking-tight text-[var(--color-foreground)] uppercase hover:text-[var(--color-primary-base)] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <Link href="/memberships">
                  <Button className="w-full py-6 text-lg font-black uppercase tracking-widest" size="lg">Join Membership</Button>
                </Link>
                <div className="flex gap-4">
                  <Link href="/waiver" className="flex-1">
                    <Button className="w-full py-4 font-bold" variant="outline">Waiver</Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button className="w-full py-4 font-bold" variant="outline">Contact</Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
        {!mobileOpen && <MobileActions />}
      </header>

      {!isHome && <div className="h-24" />}
    </>
  );
}
