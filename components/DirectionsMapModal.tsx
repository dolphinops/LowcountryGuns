'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, type ButtonProps } from '@/components/ui/Button';
import { X, ExternalLink } from 'lucide-react';

const ADDRESS_LINE = '98 Purrysburg Rd, Hardeeville, SC 29927';

const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_LINE)}&z=15&hl=en&output=embed`;

const externalDirectionsUrl =
  'https://maps.google.com/maps?daddr=' + encodeURIComponent(ADDRESS_LINE);

export type DirectionsMapModalProps = Omit<ButtonProps, 'type'> & {
  children: React.ReactNode;
};

export function DirectionsMapModal({ children, onClick, ...buttonProps }: DirectionsMapModalProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  const modal =
    open && mounted ? (
      <div
        className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
        role="presentation"
      >
        <button
          type="button"
          aria-label="Close map"
          className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={close}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative z-[201] flex max-h-[100dvh] sm:max-h-[90vh] w-full sm:max-w-5xl flex-col overflow-hidden rounded-t-3xl sm:rounded-2xl border border-[var(--color-card-border)] bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[var(--color-card-border)] px-4 py-3 sm:px-6">
            <div>
              <h2 id={titleId} className="text-lg font-bold text-[var(--color-foreground)]">
                Directions
              </h2>
              <p className="text-sm text-[var(--color-muted-fg)]">{ADDRESS_LINE}</p>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={close}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-card-border)] text-[var(--color-muted-fg)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-base)]"
              aria-label="Close"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
          <div className="relative min-h-[55dvh] sm:min-h-[420px] w-full flex-1 bg-zinc-100">
            <iframe
              title={`Map: ${ADDRESS_LINE}`}
              src={embedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex shrink-0 flex-col gap-3 border-t border-[var(--color-card-border)] bg-[var(--color-background)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs text-[var(--color-muted-fg)] sm:max-w-md">
              Prefer the Google Maps app? Open turn-by-turn directions in a new tab.
            </p>
            <a
              href={externalDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-card-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-base)]"
            >
              Open in Google Maps
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    ) : null;

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setOpen(true);
  };

  return (
    <>
      <Button type="button" onClick={handleOpen} {...buttonProps}>
        {children}
      </Button>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
