/**
 * Permissive CSP in **report-only** mode: catches obvious regressions without blocking assets.
 * Tighten directives over time; add a reporting endpoint when you want violation telemetry.
 */
export const CSP_REPORT_ONLY = [
  "default-src 'self'",
  [
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "https://*.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://www.google.com",
    "https://www.gstatic.com",
    "https://js.hsforms.net",
    "https://*.hs-scripts.com",
    "https://www.youtube.com",
    "https://www.youtube-nocookie.com",
    "https://*.eventbrite.com",
    "https://www.eventbrite.com",
  ].join(" "),
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: https: blob:",
  "connect-src 'self' https: wss:",
  "frame-src 'self' https:",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https:",
].join("; ");
