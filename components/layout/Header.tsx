'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/the-range', label: 'The Range' },
  { href: '/gun-rentals', label: 'Gun Rentals' },
  { href: '/pro-shop', label: 'Pro Shop' },
  { href: '/training', label: 'Training' },
  { href: '/memberships', label: 'Memberships' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On homepage before scroll: transparent overlay. Otherwise: solid.
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md border-b border-[var(--color-card-border)] shadow-sm'
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
              className="w-auto h-[4.5rem] rounded transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors whitespace-nowrap ${
                  isTransparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-[var(--color-muted-fg)] hover:text-[var(--color-foreground)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Waiver icon — pen signature */}
            <Link
              href="/waiver"
              className={`hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 ${
                isTransparent
                  ? 'text-white border-white/30 hover:bg-white/15 hover:border-white/50'
                  : 'text-[var(--color-foreground)] border-[var(--color-card-border)] hover:bg-[var(--color-surface)] hover:border-[var(--color-foreground)]/20'
              }`}
              title="Sign Waiver"
              aria-label="Sign Waiver"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </Link>

            {/* Directions icon — navigation arrow */}
            <a
              href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 ${
                isTransparent
                  ? 'text-white border-white/30 hover:bg-white/15 hover:border-white/50'
                  : 'text-[var(--color-foreground)] border-[var(--color-card-border)] hover:bg-[var(--color-surface)] hover:border-[var(--color-foreground)]/20'
              }`}
              title="Get Directions"
              aria-label="Get Directions"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            </a>

            <Link href="/memberships" className="hidden sm:inline-flex">
              <Button
                size="md"
                variant={isTransparent ? 'secondary' : 'primary'}
              >
                Membership
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors ${
                isTransparent ? 'hover:bg-white/10' : 'hover:bg-[var(--color-surface)]'
              }`}
            >
              <span className={`block w-5 h-0.5 transition-all duration-200 ${isTransparent ? 'bg-white' : 'bg-[var(--color-foreground)]'} ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`block w-5 h-0.5 mt-1 transition-all duration-200 ${isTransparent ? 'bg-white' : 'bg-[var(--color-foreground)]'} ${mobileOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
              {!mobileOpen && <span className={`block w-5 h-0.5 mt-1 ${isTransparent ? 'bg-white' : 'bg-[var(--color-foreground)]'}`} />}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--color-card-border)] bg-[var(--color-background)]">
            <nav className="max-w-[80rem] mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 rounded-lg text-[var(--color-foreground)] font-medium hover:bg-[var(--color-surface)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/waiver"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-lg text-[var(--color-foreground)] font-medium hover:bg-[var(--color-surface)] transition-colors"
              >
                Sign Waiver
              </Link>
              <a
                href="https://maps.google.com/maps?daddr=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-lg text-[var(--color-foreground)] font-medium hover:bg-[var(--color-surface)] transition-colors"
              >
                Get Directions
              </a>
              <div className="pt-3 mt-2 border-t border-[var(--color-card-border)]">
                <Link href="/memberships" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full" size="md">Membership</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer — prevents content from hiding behind fixed header on non-home pages */}
      {!isHome && <div className="h-24" />}
    </>
  );
}
