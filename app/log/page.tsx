import type { Metadata } from "next";
import Link from "next/link";
import { getLogEntries } from "@/lib/log";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Write-ups on engineering projects — SEO audits, full-stack apps, and backend systems.",
};

export default function LogPage() {
  const entries = getLogEntries();

  return (
    <main className="min-h-screen bg-background px-6 pb-32 pt-20 md:px-12 md:pt-24 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16 md:mb-24">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Case Studies
          </p>
          <h1 className="mt-6 text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Project write-ups
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-foreground/80 md:text-lg">
            Notes on real projects — what the problem was, what I built, and
            what changed for the client.
          </p>
        </header>

        {entries.length === 0 ? (
          <p className="text-base text-foreground/60">No entries yet.</p>
        ) : (
          <ol className="border-y border-slate/20">
            {entries.map((entry) => (
              <li
                key={entry.slug}
                className="flex flex-col gap-3 border-b border-slate/20 py-8 last:border-b-0 md:flex-row md:items-baseline md:gap-10"
              >
                <div className="flex shrink-0 items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-foreground/50 md:w-48">
                  <span>{entry.date}</span>
                  <span className="text-slate/70">{entry.timestamp}</span>
                </div>
                <div>
                  {entry.projectSlug ? (
                    <Link
                      href={`/projects/${entry.projectSlug}`}
                      className="text-base font-medium text-foreground transition-colors duration-300 hover:text-foreground/80"
                    >
                      {entry.title}
                    </Link>
                  ) : (
                    <h2 className="text-base font-medium text-foreground">
                      {entry.title}
                    </h2>
                  )}
                  {entry.summary ? (
                    <p className="mt-3 text-base leading-relaxed text-foreground/70">
                      {entry.summary}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </main>
  );
}
