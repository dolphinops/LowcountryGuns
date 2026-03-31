import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Lowcountry Guns & Range",
  description: "Lowcountry Guns & Range Privacy Policy and Information Collection."
};

export default function PrivacyPolicy() {
  return (
    <div className="content-container py-12 md:py-24 flex flex-col gap-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-card-border)] pb-4">
        Privacy Policy
      </h1>

      <div className="flex flex-col gap-6 text-[var(--color-muted-fg)] text-sm leading-relaxed">
        <p>
          We are committed to protecting your privacy and want you to know what type of information we collect and what we do with it. If you have questions or concerns regarding our privacy statement or would like to be removed from any of our databases, contact us at:
        </p>
        <div className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] p-4 rounded-lg">
          <p className="font-semibold text-[var(--color-foreground)]">Lowcountry Guns and Range</p>
          <p>98 Purrysburg rd</p>
          <p>Hardeeville, SC 29927</p>
        </div>

        <h2 className="text-2xl font-bold text-[var(--color-foreground)] mt-6">Information Collection and Use</h2>
        
        <h3 className="text-lg font-semibold text-[var(--color-foreground)] mt-4">Account Registration and Ordering</h3>
        <p>We collect and retain the following information when you create an account to place an order with us:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Name</li>
          <li>Billing address</li>
          <li>Email address</li>
          <li>Phone numbers</li>
          <li>Demographic information such as postcode, preferences, and interests</li>
        </ul>

        <p className="mt-4">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Internal record keeping</li>
          <li>We may use the information to improve our products and services.</li>
          <li>We may periodically send promotional emails about new products or special offers.</li>
          <li>We may use the information to customize the website according to your interests.</li>
        </ul>

        <h3 className="text-lg font-semibold text-[var(--color-foreground)] mt-4">Third Parties</h3>
        <p>We use third parties to provide a variety of services and give them the following information:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Credit card processing company: Name, billing address, and credit card number and expiration date.</li>
          <li>Shipping company: Name, shipping address, phone number, package weight and order number(s).</li>
          <li>Vendors: Name, email address, phone number.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[var(--color-foreground)] mt-6">Additional Information</h2>
        
        <h3 className="text-lg font-semibold text-[var(--color-foreground)] mt-4">Legal Disclaimer</h3>
        <p>
          Although we make every effort to preserve user privacy, we may need to disclose personal information when required by law if we have a good-faith belief that such action is necessary to comply with a current judicial proceeding, a court order or a legal process served on Tactical Defensive Solutions LLC DBA / Lowcountry Guns and Range.
        </p>
      </div>
    </div>
  );
}
