import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-card-border)] bg-[var(--color-background)] py-12 md:py-16 mt-auto">
      <div className="content-container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/legacy/Logo-2.webp" 
              alt="Lowcountry Guns & Range" 
              width={250} 
              height={84} 
              className="w-auto h-[4.5rem] opacity-90 transition-opacity hover:opacity-100"
            />
          </Link>
          <p className="text-sm text-[var(--color-muted-fg)] leading-relaxed">
            South Carolina&apos;s Premier Indoor Gun Range.<br/>
            Train. Improve. Belong.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-[var(--color-foreground)] uppercase tracking-wider">Explore</h3>
          <Link href="/the-range" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">The Range</Link>
          <Link href="/training" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">Training Courses</Link>
          <Link href="/memberships" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">Memberships</Link>
          <Link href="/shop" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">Online Shop (Soon)</Link>
          <Link href="/idpa" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">IDPA Matches</Link>
          <Link href="/private-partys" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">Private Parties</Link>
        </div>
        
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-[var(--color-foreground)] uppercase tracking-wider">Resources</h3>
          <Link href="/firearm-transfers" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">Firearm Transfers</Link>
          <Link href="/purchase-a-firearm" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">Purchase a Firearm</Link>
          <Link href="/faq" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">FAQ</Link>
          <Link href="/careers" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">Careers</Link>
          <Link href="/waiver" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">Waiver</Link>
        </div>
        
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-[var(--color-foreground)] uppercase tracking-wider">Contact</h3>
          <a href="tel:8437845474" className="text-sm text-[var(--color-muted-fg)] hover:text-[var(--color-primary-base)] transition-colors">843-784-5474</a>
          <p className="text-sm text-[var(--color-muted-fg)]">98 Purrysburg Rd<br/>Hardeeville, SC 29927</p>
          <Link href="/contact" className="text-sm text-[var(--color-primary-base)] font-bold hover:underline mt-2">Send Message</Link>
        </div>
        
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm text-[var(--color-foreground)] uppercase tracking-wider">Hours</h3>
          <p className="text-sm text-[var(--color-muted-fg)]">Mon-Thu: 10am - 6pm</p>
          <p className="text-sm text-[var(--color-muted-fg)]">Fri: 10am - 7pm</p>
          <p className="text-sm text-[var(--color-muted-fg)]">Sat: 10am - 6pm</p>
          <p className="text-sm text-[var(--color-muted-fg)]">Sun: 12pm - 6pm</p>
        </div>
      </div>
      
      <div className="content-container mt-12 pt-8 border-t border-[var(--color-card-border)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[var(--color-muted-fg)]">
          © {new Date().getFullYear()} Lowcountry Guns & Range. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy-policy-2" className="text-xs text-[var(--color-muted-fg)] hover:text-[var(--color-foreground)]">Privacy Policy</Link>
          <Link href="/waiver" className="text-xs text-[var(--color-muted-fg)] hover:text-[var(--color-foreground)]">Waiver</Link>
        </div>
      </div>
    </footer>
  );
}
