import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PrintBriefButton from "@/components/PrintBriefButton";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { briefGraph } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Capability Brief",
  description:
    "Core competencies, architectural philosophy, and project proof-of-work — a web-viewable capability brief.",
};

const philosophy = [
  {
    label: "Simplicity Over Cleverness",
    body: "Systems are engineered for clarity and maintainability. Simple, readable solutions outlast clever abstractions.",
  },
  {
    label: "Data Sovereignty",
    body: "Rigid sanitization, parameterized access, and hardened authentication treat data integrity as non-negotiable.",
  },
  {
    label: "Deterministic Pipelines",
    body: "Every workflow — from extraction to remediation — is reproducible, observable, and built to run without supervision.",
  },
];

export default function BriefPage() {
  return (
    <main className="brief-print min-h-screen bg-background px-6 pb-32 pt-20 md:px-12 md:pt-24 lg:px-16">
      <JsonLd data={briefGraph()} />
      <div className="mx-auto max-w-4xl">
        <header className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              Capability Brief
            </p>
            <h1 className="mt-6 text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Capability Brief
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed tracking-wide text-foreground/70">
              A clinical overview of competencies, philosophy, and delivered
              proof-of-work.
            </p>
          </div>
          <PrintBriefButton />
        </header>

        <section className="border-t border-slate/20 pt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Core Competencies
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-px bg-slate/20 sm:grid-cols-3">
            {services.map((service) => (
              <li key={service.id} className="bg-surface p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  {service.category}
                </p>
                <h3 className="mt-4 text-base font-light leading-snug tracking-tight text-foreground">
                  {service.title}
                </h3>
                <ul className="mt-6 flex flex-col gap-2">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-foreground/60"
                    >
                      <span aria-hidden className="text-slate/60">
                        &mdash;
                      </span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 border-t border-slate/20 pt-12 md:mt-28">
          <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Architectural Philosophy
          </h2>
          <ul className="mt-10 space-y-10">
            {philosophy.map((item) => (
              <li key={item.label} className="border-l border-slate/30 pl-5">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  [ {item.label} ]
                </p>
                <p className="max-w-2xl text-base leading-relaxed tracking-wide text-foreground/80 md:text-lg">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 border-t border-slate/20 pt-12 md:mt-28">
          <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Project Proof-of-Work
          </h2>
          <ul className="mt-10 border-y border-slate/20">
            {projects.map((project) => (
              <li
                key={project.id}
                className="flex flex-col gap-2 border-b border-slate/20 py-6 last:border-b-0 md:flex-row md:items-baseline md:gap-8"
              >
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-slate/70 md:w-32">
                  {project.version}
                </span>
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-widest text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed tracking-wide text-foreground/70">
                    {project.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
