"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import TechBadges from "@/components/TechBadges";
import {
  fadeTransition,
  hoverFocusTransition,
  slateAccent,
  staggerDelay,
} from "@/lib/motion";

const sortedProjects = [...projects].sort((a, b) => {
  if (a.status === b.status) return 0;
  return a.status === "archived" ? 1 : -1;
});

export default function CollectionGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-16 border-t border-slate/20 px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-foreground/50">
              Projects
            </p>
            <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Selected work
            </h2>
          </div>
          <p className="max-w-xs text-base leading-relaxed text-foreground/70">
            Web apps, automation tools, and backend systems I&apos;ve designed
            and built.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-px bg-slate/20 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project, index) => (
            <motion.li
              key={project.id}
              className="h-full"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                ...fadeTransition,
                duration: 1,
                delay: Math.min(index, 3) * staggerDelay,
                ease: "easeInOut",
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="flex h-full flex-col"
              >
                <motion.article
                  className="group flex h-full flex-col border border-transparent bg-surface p-8"
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { scale: 1.02, borderColor: slateAccent }
                  }
                  transition={hoverFocusTransition}
                >
                  <div className="flex flex-grow flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                        {project.category}
                      </p>
                      {project.status === "archived" ? (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                          Archived
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-6 text-lg font-light leading-snug tracking-tight text-foreground transition-colors duration-500 ease-in-out group-hover:text-foreground/90">
                      {project.title}
                    </h3>

                    <p className="mt-6 flex-grow text-sm leading-relaxed text-foreground/70">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-auto flex w-full flex-wrap items-center gap-2 border-t border-slate/20 pt-6 transition-colors duration-500 ease-in-out group-hover:border-slate/40">
                    <TechBadges items={project.techStack} />
                    <span
                      aria-hidden
                      className="ml-auto text-slate/40 transition-colors duration-500 ease-in-out group-hover:text-slate"
                    >
                      →
                    </span>
                  </div>
                </motion.article>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
