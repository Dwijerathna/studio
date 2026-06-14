"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project, ProjectDirective } from "@/data/projects";
import CTAButton from "@/components/CTAButton";
import TechBadges from "@/components/TechBadges";
import { fadeTransition, heroRevealTransition, staggerDelay } from "@/lib/motion";

type ProjectSpecSheetProps = {
  project: Project;
};

export default function ProjectSpecSheet({ project }: ProjectSpecSheetProps) {
  const reducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: fadeTransition,
    },
  };

  const headlineReveal = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: heroRevealTransition,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background px-6 pb-32 pt-20 md:px-12 md:pt-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp}>
          <Link
            href="/#projects"
            className="text-sm text-foreground/60 transition-colors duration-300 hover:text-foreground"
          >
            ← Back to projects
          </Link>
        </motion.div>

        <motion.h1
          variants={headlineReveal}
          className="mt-12 max-w-5xl text-4xl font-light leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {project.title}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50"
        >
          <span>{project.version}</span>
          <span className="text-slate/50">/</span>
          <span>{project.year}</span>
          <span className="text-slate/50">/</span>
          <span>{project.status}</span>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6">
          <TechBadges items={project.techStack} />
        </motion.div>

        {(project.liveUrl || project.repoUrl) && (
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                Live site ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                Source code ↗
              </a>
            )}
          </motion.div>
        )}

        <motion.section variants={fadeUp} className="mt-20 md:mt-28">
          <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Project details
          </h2>

          <ul className="mt-10 max-w-3xl space-y-10">
            {project.directives.map((directive: ProjectDirective, index: number) => (
              <motion.li
                key={directive.label}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4 + index * 0.12,
                  ease: "easeInOut",
                }}
                className="border-l border-slate/30 pl-5"
              >
                <p className="mb-3 text-sm font-medium text-foreground/75">
                  {directive.label}
                </p>
                <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                  {directive.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          variants={fadeUp}
          className="mt-24 max-w-3xl border-t border-slate/20 pt-16 md:mt-32"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                Contact
              </p>
              <h2 className="mt-4 text-2xl font-light leading-snug tracking-tight text-foreground md:text-3xl">
                Interested in something similar?
              </h2>
            </div>
            <CTAButton label="Get in touch" location="project-page" />
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
