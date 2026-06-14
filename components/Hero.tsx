"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeTransition, heroRevealTransition, staggerDelay } from "@/lib/motion";

type HeroProps = {
  name: string;
};

export default function Hero({ name }: HeroProps) {
  const reducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
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
    <section className="px-6 pb-24 pt-20 md:px-12 md:pb-32 md:pt-24 lg:px-16">
      <motion.header
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-widest text-foreground/50"
        >
          Systems Engineer
        </motion.p>

        <motion.h1
          variants={headlineReveal}
          className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-base leading-relaxed text-foreground/80 md:text-lg"
        >
          I build full-stack web applications, Python automation, and backend
          systems — reliable software that solves real problems and stays easy
          to maintain.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <Link
            href="#projects"
            className="inline-flex items-center border border-slate/40 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-slate hover:bg-slate hover:text-foreground"
          >
            View projects
          </Link>
        </motion.div>
      </motion.header>
    </section>
  );
}
