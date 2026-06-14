import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { brand } from "@/lib/brand";
import { demoGraph } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Audit Demo",
  description:
    "A sample Local SEO audit report showing automated diagnostics and a site health score.",
};

type Diagnostic = {
  status: "Pass" | "Secure" | "Warning" | "Issue";
  target: string;
  detail: string;
};

const diagnostics: Diagnostic[] = [
  { status: "Pass", target: "Metadata Structure", detail: "Title and description within recommended length" },
  { status: "Secure", target: "Authentication Flow", detail: "JWT validation and rate limiting active" },
  { status: "Pass", target: "Citation Consistency", detail: "NAP aligned across 11 directories" },
  { status: "Secure", target: "Transport Layer", detail: "TLS 1.3 enforced, HSTS present" },
  { status: "Pass", target: "Structured Data", detail: "Valid JSON-LD detected" },
  { status: "Warning", target: "Image Compression", detail: "3 assets exceed 200KB budget" },
  { status: "Issue", target: "Render-Blocking Assets", detail: "1 synchronous script in critical path" },
  { status: "Pass", target: "Mobile Viewport", detail: "Responsive breakpoints validated" },
];

const statusTone: Record<Diagnostic["status"], string> = {
  Pass: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  Secure: "text-indigo border-indigo/30 bg-indigo/5",
  Warning: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  Issue: "text-red-400 border-red-400/30 bg-red-400/5",
};

const HEALTH_SCORE = 94;
const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DASH_OFFSET = CIRCUMFERENCE * (1 - HEALTH_SCORE / 100);

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-32 pt-20 md:px-12 md:pt-24 lg:px-16">
      <JsonLd data={demoGraph()} />
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Sample report
          </p>
          <h1 className="mt-6 text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Local SEO audit demo
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Example output from the automated SEO diagnostic tool. This is
            representative data — not a live scan of your site.
          </p>
        </header>

        <div className="overflow-hidden rounded-sm border border-slate/20 bg-surface">
          <div className="flex items-center justify-between border-b border-slate/20 px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              Sample scan
            </span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-status-ping rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-foreground/60">Complete</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-slate/20 md:grid-cols-[auto_1fr]">
            <div className="flex flex-col items-center justify-center gap-6 bg-surface p-10">
              <div className="relative flex h-40 w-40 items-center justify-center">
                <svg
                  viewBox="0 0 120 120"
                  className="h-full w-full -rotate-90"
                  aria-hidden
                >
                  <circle
                    cx="60"
                    cy="60"
                    r={RADIUS}
                    fill="none"
                    stroke={brand.line}
                    strokeWidth="8"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r={RADIUS}
                    fill="none"
                    stroke={brand.indigo}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={DASH_OFFSET}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-mono text-4xl font-light text-foreground">
                    {HEALTH_SCORE}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    / 100
                  </span>
                </div>
              </div>
              <p className="text-sm text-foreground/60">Health score</p>
            </div>

            <div className="bg-surface p-6 md:p-8">
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-foreground/50">
                Findings
              </p>
              <ul className="flex flex-col">
                {diagnostics.map((item) => (
                  <li
                    key={item.target}
                    className="flex flex-col gap-2 border-b border-slate/10 py-3 last:border-b-0 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <span
                      className={`inline-flex w-fit shrink-0 items-center rounded-sm border px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${statusTone[item.status]}`}
                    >
                      {item.status}
                    </span>
                    <span className="text-sm font-medium text-foreground sm:w-48">
                      {item.target}
                    </span>
                    <span className="text-sm text-foreground/60">
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-foreground/50">
          6 passed · 2 secure · 2 need attention
        </p>
      </div>
    </main>
  );
}
