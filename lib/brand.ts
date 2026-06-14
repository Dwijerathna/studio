/**
 * Single source of truth for brand colors used *outside* the Tailwind/CSS
 * pipeline — OG image generation (next/og), inline SVG, and Framer Motion.
 * Keep these values in sync with the tokens in `app/globals.css` (@theme).
 *
 * In JSX/CSS prefer the Tailwind tokens (bg-background, text-foreground,
 * bg-indigo, border-slate, …). Reach for this object only where utility
 * classes cannot apply (server-rendered inline styles, SVG attributes).
 */
export const brand = {
  background: "#08090A",
  surface: "#141619",
  foreground: "#E2E8F0",
  steel: "#2E4360",
  steelHover: "#3B5578",
  indigo: "#4F46E5",
  /** Foreground rendered at reduced presence — text hierarchy in OG layouts. */
  muted: "#94A3B8",
  subtle: "#64748B",
  faint: "#475569",
  /** Hairline divider on dark surfaces. */
  line: "#1F2937",
} as const;
