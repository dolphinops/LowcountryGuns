import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const social = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/lowcountrygunsandrange/",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lowcountrygunsandrange/",
    Icon: Instagram,
  },
] as const;

const serviceAreas = [
  { label: "Savannah & Pooler, GA", href: "/shooting-range-savannah-ga" },
  { label: "Hilton Head & Bluffton, SC", href: "/shooting-range-hilton-head-sc" },
  { label: "Beaufort & Port Royal, SC", href: "/shooting-range-beaufort-sc" },
] as const;

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "group inline-flex items-center gap-1 text-sm font-medium text-[var(--color-foreground)]/75 transition-colors hover:text-[var(--color-foreground)]";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <span>{children}</span>
        <ArrowUpRight
          className="h-3.5 w-3.5 shrink-0 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          aria-hidden
        />
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-[var(--color-card-border)] bg-gradient-to-b from-[var(--color-background)] to-[var(--color-surface)]">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[var(--color-primary-base)]/[0.08] blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-[var(--color-secondary)]/[0.06] blur-3xl" aria-hidden />

      <div className="content-container relative py-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Brand + CTAs */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <Link href="/" className="inline-flex w-fit items-center gap-2 transition-opacity hover:opacity-95">
              <Image
                src="/images/legacy/Logo-2.webp"
                alt="Lowcountry Guns & Range"
                width={220}
                height={74}
                className="h-12 w-auto md:h-14"
              />
            </Link>
            <p className="max-w-md text-balance text-sm font-medium leading-relaxed text-[var(--color-muted-fg)]">
              South Carolina&apos;s premier indoor range and pro shop. Train. Improve. Belong.
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                href="tel:8437845474"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] px-4 text-sm font-semibold text-[var(--color-foreground)] shadow-sm transition-all hover:border-[var(--color-primary-base)]/40 hover:shadow-md"
              >
                <Phone className="h-4 w-4 text-[var(--color-primary-base)]" aria-hidden />
                843-784-5474
              </a>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] px-4 text-sm font-semibold text-white shadow-md transition-all hover:from-[var(--color-primary-base)] hover:to-[var(--color-primary-hover)]"
              >
                <Mail className="h-4 w-4 opacity-90" aria-hidden />
                Contact
              </Link>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-fg)]">
                Service areas
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="rounded-full border border-[var(--color-primary-base)]/20 bg-[var(--color-card-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--color-foreground)] transition-all hover:border-[var(--color-primary-base)]/50 hover:bg-[var(--color-background)]"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-muted-fg)] transition-all hover:border-[var(--color-primary-base)]/35 hover:text-[var(--color-primary-base)]"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore + Resources | Visit */}
          <div className="grid grid-cols-1 gap-8 lg:col-span-7 lg:grid-cols-[1fr_1.5fr] lg:items-stretch lg:gap-10">
            <div className="py-2">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-0">
                <nav className="flex flex-col gap-3" aria-labelledby="footer-explore-heading">
                  <p
                    id="footer-explore-heading"
                    className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-foreground)]"
                  >
                    Explore
                  </p>
                  <FooterLink href="/the-range">The Range</FooterLink>
                  <FooterLink href="/the-range/firearm-transfer">Firearm transfer request</FooterLink>
                  <FooterLink href="/training">Training</FooterLink>
                  <FooterLink href="/first-experience">Your First Experience</FooterLink>
                  <FooterLink href="/memberships">Memberships</FooterLink>
                  <FooterLink href="/shop">Online Store (soon)</FooterLink>
                  <FooterLink href="/idpa">IDPA Matches</FooterLink>
                  <FooterLink href="/private-partys">Private Parties</FooterLink>
                </nav>
                <nav className="flex flex-col gap-3 pt-6 sm:pt-0" aria-labelledby="footer-resources-heading">
                  <p
                    id="footer-resources-heading"
                    className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-foreground)]"
                  >
                    Resources
                  </p>
                  <FooterLink href="/firearm-transfers">Firearm Transfers</FooterLink>
                  <FooterLink href="/purchase-a-firearm">Purchase a Firearm</FooterLink>
                  <FooterLink href="/faq">FAQ</FooterLink>
                  <FooterLink href="/careers">Careers</FooterLink>
                  <FooterLink href="/waiver">Digital Waiver</FooterLink>
                  <FooterLink href="/team">Team</FooterLink>
                </nav>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-5 shadow-sm sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-base)]">
                Visit
              </p>

              <div className="mt-4 flex flex-col gap-6 md:mt-5">
                <div className="flex min-w-0 flex-col gap-4">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-base)]/10">
                      <MapPin className="h-4 w-4 text-[var(--color-primary-base)]" aria-hidden />
                    </div>
                    <div className="min-w-0 space-y-1.5 text-sm leading-relaxed text-[var(--color-muted-fg)]">
                      <p className="text-sm font-semibold tracking-tight text-[var(--color-foreground)]">
                        Hardeeville, SC
                      </p>
                      <p>98 Purrysburg Rd</p>
                      <p className="text-xs font-medium text-[var(--color-muted-fg)]">I-95 Exit 5</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=98+Purrysburg+Rd,+Hardeeville,+SC+29927"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 rounded-lg py-0.5 text-sm font-semibold text-[var(--color-primary-base)] transition-colors hover:text-[var(--color-primary-hover)] md:ps-[3.25rem]"
                  >
                    Directions
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                </div>

                <div className="flex flex-col gap-3 border-t border-[var(--color-card-border)] pt-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-base)]/10">
                      <Clock className="h-3.5 w-3.5 text-[var(--color-primary-base)]" aria-hidden />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-base)]">
                      Hours
                    </span>
                  </div>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm leading-relaxed text-[var(--color-muted-fg)]">
                    <dt className="font-medium text-[var(--color-foreground)]">Mon–Thu</dt>
                    <dd>10am–6pm</dd>
                    <dt className="font-medium text-[var(--color-foreground)]">Fri</dt>
                    <dd>10am–7pm</dd>
                    <dt className="font-medium text-[var(--color-foreground)]">Sat</dt>
                    <dd>10am–6pm</dd>
                    <dt className="font-medium text-[var(--color-foreground)]">Sun</dt>
                    <dd>12pm–6pm</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-card-border)] pt-8 md:flex-row md:gap-4">
          <p className="text-center text-xs text-[var(--color-muted-fg)] md:text-left">
            © {new Date().getFullYear()} Lowcountry Guns & Range. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs font-medium text-[var(--color-muted-fg)] transition-colors hover:text-[var(--color-foreground)]"
            >
              Privacy
            </Link>
            <Link
              href="/waiver"
              className="text-xs font-medium text-[var(--color-muted-fg)] transition-colors hover:text-[var(--color-foreground)]"
            >
              Waiver
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
