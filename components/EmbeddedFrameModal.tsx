'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, type ButtonProps } from '@/components/ui/Button';
import { X, ExternalLink } from 'lucide-react';

export type EmbeddedFrameModalProps = Omit<ButtonProps, 'type'> & {
  children: React.ReactNode;
  /** iframe src (https or same-origin path) */
  src: string;
  dialogTitle: string;
  subtitle?: string;
  /** Opens in new tab (defaults to `src` for external pages) */
  newTabHref?: string;
  newTabLabel?: string;
  /** Shown above the footer link */
  footerHint?: string;
};

export function EmbeddedFrameModal({
  children,
  onClick,
  src,
  dialogTitle,
  subtitle,
  newTabHref,
  newTabLabel = 'Open in new tab',
  footerHint = 'If the page does not load correctly inside this window, use the button below.',
  ...buttonProps
}: EmbeddedFrameModalProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const tabUrl = newTabHref ?? src;

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
        className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-6"
        role="presentation"
      >
        <button
          type="button"
          aria-label="Close dialog"
          className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={close}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative z-[201] flex max-h-[100dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-[var(--color-card-border)] bg-white shadow-2xl sm:max-h-[92vh] sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[var(--color-card-border)] px-4 py-3 sm:px-6">
            <div className="min-w-0 pr-2">
              <h2 id={titleId} className="truncate text-lg font-bold text-[var(--color-foreground)]">
                {dialogTitle}
              </h2>
              {subtitle ? (
                <p className="text-sm text-[var(--color-muted-fg)]">{subtitle}</p>
              ) : null}
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
          <div className="relative min-h-[65dvh] w-full flex-1 bg-zinc-100 sm:min-h-[min(72vh,640px)]">
            <iframe
              title={dialogTitle}
              src={src}
              className="absolute inset-0 h-full w-full border-0"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex shrink-0 flex-col gap-3 border-t border-[var(--color-card-border)] bg-[var(--color-background)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs text-[var(--color-muted-fg)] sm:max-w-md">{footerHint}</p>
            <a
              href={tabUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-card-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary-base)]/40 hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-base)]"
            >
              {newTabLabel}
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
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
