'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ClipboardList, Send, User } from 'lucide-react';

const inputClassName =
  'h-12 w-full rounded-xl border border-[var(--color-card-border)] bg-[var(--color-surface)] px-4 text-sm font-medium text-[var(--color-foreground)] outline-none transition-all placeholder:text-[var(--color-muted-fg)]/70 focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)]';

function FormField({
  id,
  label,
  hint,
  placeholder,
  required,
  type = 'text',
  inputMode,
  autoComplete,
}: {
  id: string;
  label: string;
  hint?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  autoComplete?: string;
}) {
  return (
    <div className="space-y-2">
      <div>
        <label htmlFor={id} className="text-sm font-bold text-[var(--color-muted-fg)]">
          {label}
          {required ? (
            <span className="ml-0.5 text-red-500" aria-hidden>
              *
            </span>
          ) : null}
        </label>
        {hint ? <p className="mt-1 text-xs leading-snug text-[var(--color-muted-fg)]">{hint}</p> : null}
      </div>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete ?? 'off'}
        className={inputClassName}
      />
    </div>
  );
}

function FieldGroup({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--color-card-border)] bg-[var(--color-surface)]/60 p-5 md:p-6">
      <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-foreground)]">{title}</h3>
      {description ? <p className="mt-1 text-xs text-[var(--color-muted-fg)]">{description}</p> : null}
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function FirearmTransferForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setFormStatus('submitting');
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get('name') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      make: String(fd.get('make') || '').trim(),
      typeOfAction: String(fd.get('typeOfAction') || '').trim(),
      model: String(fd.get('model') || '').trim(),
      caliber: String(fd.get('caliber') || '').trim(),
      barrelLength: String(fd.get('barrelLength') || '').trim(),
      finish: String(fd.get('finish') || '').trim(),
      serialNumber: String(fd.get('serialNumber') || '').trim(),
      dealerName: String(fd.get('dealerName') || '').trim(),
      orderNumber: String(fd.get('orderNumber') || '').trim(),
      otherIdentifyingInfo: String(fd.get('otherIdentifyingInfo') || '').trim(),
    };

    try {
      const res = await fetch('/api/firearm-transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const raw = await res.text();
      let data: { error?: string } = {};
      if (raw) {
        try {
          data = JSON.parse(raw) as { error?: string };
        } catch {
          /* non-JSON */
        }
      }

      if (!res.ok) {
        const fallback =
          res.status === 429
            ? 'Too many submissions from this network. Please wait a bit or call 843-784-5474.'
            : res.status === 503
              ? 'The form is not configured on the server yet. Please call 843-784-5474.'
              : 'Something went wrong. Please try again or call 843-784-5474.';
        setFormError(data.error || fallback);
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

  return (
    <div className="mx-auto max-w-3xl">
      {formStatus === 'success' ? (
        <div className="rounded-3xl border border-[var(--color-card-border)] bg-white p-10 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Send className="h-10 w-10" aria-hidden />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Request sent</h2>
          <p className="mt-2 text-[var(--color-muted-fg)]">
            Our team will follow up using the contact information you provided. If you need immediate help, call{' '}
            <a href="tel:8437845474" className="font-semibold text-[var(--color-primary-base)] hover:underline">
              843-784-5474
            </a>
            .
          </p>
          <Button variant="outline" className="mt-8" type="button" onClick={() => setFormStatus('idle')}>
            Submit another request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
          {formError ? (
            <p
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
              role="alert"
            >
              {formError}
            </p>
          ) : null}

          <section className="rounded-2xl border border-[var(--color-card-border)] bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-base)]/10 text-[var(--color-primary-base)]"
                aria-hidden
              >
                <User className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold text-[var(--color-foreground)]">Your contact information</h2>
                <p className="mt-1 text-sm text-[var(--color-muted-fg)]">
                  We&apos;ll use this to confirm your transfer and reach you if we have questions.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="name" className="text-sm font-bold text-[var(--color-muted-fg)]">
                  Full name<span className="ml-0.5 text-red-500" aria-hidden>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="As it appears on your ID"
                  className={inputClassName}
                />
              </div>
              <FormField
                id="phone"
                label="Phone"
                hint="Best number to reach you during business hours."
                placeholder="(843) 555-0100"
                required
                type="tel"
                autoComplete="tel"
              />
              <FormField
                id="email"
                label="Email"
                hint="We may send confirmations or follow-up questions here."
                placeholder="you@example.com"
                required
                type="email"
                autoComplete="email"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-[var(--color-card-border)] bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-base)]/10 text-[var(--color-primary-base)]"
                aria-hidden
              >
                <ClipboardList className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold text-[var(--color-foreground)]">Firearm you&apos;re transferring</h2>
                <p className="mt-1 text-sm text-[var(--color-muted-fg)]">
                  Enter what you know from your receipt, order email, or the seller&apos;s listing. Approximate values
                  are fine if something is unclear—our team can help fill gaps.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-8">
              <FieldGroup
                title="Make & model"
                description="Usually printed on the box or listed on your order."
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <FormField
                    id="make"
                    label="Make"
                    placeholder="e.g. Glock, Ruger"
                    hint="Manufacturer name."
                    required
                  />
                  <FormField
                    id="model"
                    label="Model"
                    placeholder="e.g. 19, PC Carbine"
                    hint="Model name or number."
                    required
                  />
                  <FormField
                    id="typeOfAction"
                    label="Type of action"
                    placeholder="e.g. Semi-auto pistol"
                    hint="Semi-auto, revolver, bolt-action, pump, etc."
                    required
                  />
                </div>
              </FieldGroup>

              <FieldGroup
                title="Specifications"
                description="Match the firearm you are transferring, not accessories."
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <FormField
                    id="caliber"
                    label="Caliber"
                    placeholder="e.g. 9mm, .223 Rem"
                    hint="As marked on the barrel or slide."
                    required
                  />
                  <FormField
                    id="barrelLength"
                    label="Barrel length"
                    placeholder='e.g. 4.5", 16 in'
                    hint="Barrel only, not overall length."
                    required
                  />
                  <FormField
                    id="finish"
                    label="Finish"
                    placeholder="e.g. Blued, stainless, FDE"
                    hint="Color or coating if listed."
                    required
                  />
                </div>
              </FieldGroup>

              <FieldGroup
                title="Serial, dealer & order"
                description="Helps us match your shipment when it arrives."
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <FormField
                    id="serialNumber"
                    label="Serial number"
                    placeholder="From frame or receiver"
                    hint="Letters and numbers only, no spaces if possible."
                    required
                  />
                  <FormField
                    id="dealerName"
                    label="Dealer name"
                    placeholder="Store or website name"
                    hint="Who you bought from or who is shipping."
                    required
                  />
                  <FormField
                    id="orderNumber"
                    label="Order number"
                    placeholder="Confirmation # or order ID"
                    hint="From your email receipt or account."
                    required
                  />
                </div>
              </FieldGroup>

              <div className="space-y-2">
                <label htmlFor="otherIdentifyingInfo" className="text-sm font-bold text-[var(--color-muted-fg)]">
                  Other identifying information
                </label>
                <p className="text-xs leading-snug text-[var(--color-muted-fg)]">
                  Optional: accessories included, color variants, or anything else that helps us identify this transfer.
                </p>
                <textarea
                  id="otherIdentifyingInfo"
                  name="otherIdentifyingInfo"
                  rows={4}
                  placeholder="e.g. Includes factory case and two magazines…"
                  className="min-h-[6.5rem] w-full resize-y rounded-xl border border-[var(--color-card-border)] bg-[var(--color-surface)] px-4 py-3 text-sm font-medium text-[var(--color-foreground)] outline-none transition-all placeholder:text-[var(--color-muted-fg)]/70 focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)]"
                />
              </div>
            </div>
          </section>

          <p className="text-center text-xs text-[var(--color-muted-fg)]">
            This form does not replace required in-store paperwork or background checks.
          </p>

          <Button
            type="submit"
            variant="primary"
            className="flex h-14 w-full min-h-[3.5rem] items-center justify-center gap-2 text-base shadow-lg shadow-[var(--color-primary-base)]/20 transition-all"
            disabled={formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? (
              'Sending…'
            ) : (
              <>
                Send transfer request <Send className="h-5 w-5" aria-hidden />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
