import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { principles } from "@/data/principles";
import { aboutGraph } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dinitha Damnidu Wijerathna — Systems Engineer building web apps, Python automation, and backend systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-32 pt-20 md:px-12 md:pt-24 lg:px-16">
      <JsonLd data={aboutGraph()} />
      <div className="mx-auto max-w-3xl">
        <header className="mb-16 md:mb-24">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            About
          </p>
          <h1 className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Who I am &amp; how I build
          </h1>
          <p className="mt-8 text-base leading-relaxed tracking-wide text-foreground/80 md:text-lg">
            I&apos;m{" "}
            <span className="text-foreground">
              Dinitha Damnidu Wijerathna
            </span>
            , a Systems Engineer and student. This site is my public project
            vault — web apps, automation tools, and backend work — along with
            the standards I hold myself to when building software for clients
            and personal projects.
          </p>
        </header>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            What I Prioritize
          </h2>
          <ul className="mt-10 space-y-12">
            {principles.map((principle) => (
              <li key={principle.id} className="border-l border-slate/30 pl-5">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  {principle.title}
                </p>
                <p className="text-base leading-relaxed tracking-wide text-foreground/80 md:text-lg">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-20 font-mono text-[10px] uppercase tracking-widest text-foreground/25 md:mt-28">
          Built to last. Updated as I learn.
        </p>
      </div>
    </main>
  );
}
