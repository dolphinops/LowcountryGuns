'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send } from 'lucide-react';

function LineField({
  id,
  label,
  required,
}: {
  id: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-end sm:gap-3">
      <label
        htmlFor={id}
        className="shrink-0 text-sm font-semibold text-[var(--color-foreground)] sm:min-w-[7.5rem] sm:pb-1"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        required={required}
        autoComplete="off"
        className="min-h-11 w-full min-w-0 border-0 border-b border-[var(--color-foreground)] bg-transparent px-0 pb-1 text-sm font-medium text-[var(--color-foreground)] outline-none ring-0 transition-colors focus:border-[var(--color-primary-base)]"
      />
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
      countryOfManufacture: String(fd.get('countryOfManufacture') || '').trim(),
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
        <form onSubmit={handleSubmit} className="space-y-10">
          {formError ? (
            <p
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
              role="alert"
            >
              {formError}
            </p>
          ) : null}

          <section className="rounded-2xl border border-[var(--color-card-border)] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-lg font-bold text-[var(--color-foreground)]">Your contact information</h2>
            <p className="mt-1 text-sm text-[var(--color-muted-fg)]">
              We use this to confirm your transfer and reply by phone or email.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="name" className="text-sm font-bold text-[var(--color-muted-fg)]">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="h-12 w-full rounded-xl border border-[var(--color-card-border)] bg-[var(--color-surface)] px-4 text-sm font-medium outline-none transition-all focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-[var(--color-muted-fg)]">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="h-12 w-full rounded-xl border border-[var(--color-card-border)] bg-[var(--color-surface)] px-4 text-sm font-medium outline-none transition-all focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-[var(--color-muted-fg)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="h-12 w-full rounded-xl border border-[var(--color-card-border)] bg-[var(--color-surface)] px-4 text-sm font-medium outline-none transition-all focus:border-[var(--color-primary-base)] focus:ring-1 focus:ring-[var(--color-primary-base)]"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border-2 border-[var(--color-foreground)] bg-white p-6 md:p-8">
            <h2 className="border-b border-[var(--color-foreground)] pb-1 text-center text-sm font-bold uppercase tracking-wide text-[var(--color-foreground)] underline decoration-2 underline-offset-4">
              Description of firearm
            </h2>

            <div className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <LineField id="make" label="Make" required />
                <LineField id="typeOfAction" label="Type of action" required />
                <LineField id="model" label="Model" required />
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <LineField id="caliber" label="Caliber" required />
                <LineField id="barrelLength" label="Barrel length" required />
                <LineField id="finish" label="Finish" required />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <LineField id="serialNumber" label="Serial #" required />
                <LineField id="countryOfManufacture" label="Country of manufacture" required />
              </div>
              <div>
                <label
                  htmlFor="otherIdentifyingInfo"
                  className="mb-2 block text-sm font-semibold text-[var(--color-foreground)]"
                >
                  Other identifying information
                </label>
                <textarea
                  id="otherIdentifyingInfo"
                  name="otherIdentifyingInfo"
                  rows={3}
                  className="w-full resize-y border-0 border-b-2 border-[var(--color-foreground)] bg-transparent px-0 py-2 text-sm font-medium text-[var(--color-foreground)] outline-none transition-colors focus:border-[var(--color-primary-base)]"
                  placeholder="Optional notes, accessories, or distinguishing marks"
                />
              </div>
            </div>
          </section>

          <p className="text-center text-xs text-[var(--color-muted-fg)]">
            Submissions are delivered to{' '}
            <a href="mailto:info@lcguns.com" className="font-semibold text-[var(--color-primary-base)] hover:underline">
              info@lcguns.com
            </a>
            . This form does not replace required in-store paperwork or background checks.
          </p>

          <Button
            type="submit"
            variant="primary"
            className="flex h-14 w-full items-center justify-center gap-2 text-base shadow-lg shadow-[var(--color-primary-base)]/20"
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
