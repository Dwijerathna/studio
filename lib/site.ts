/**
 * Single source of truth for the site's absolute base URL.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment (e.g. https://dinitha.dev).
 * Falls back to localhost for local development so nothing is hard-coded.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = "Dinitha — Systems Engineer";

/**
 * Bare domain Plausible attributes to (e.g. "dinitha.dev").
 * Derived from NEXT_PUBLIC_PLAUSIBLE_DOMAIN, falling back to the site host.
 */
export const plausibleDomain =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? new URL(siteUrl).host;

export const siteDescription =
  "Systems Engineer building full-stack web apps, Python automation, and backend systems — project vault and client work by Dinitha.";
