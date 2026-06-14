"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { fadeTransition, staggerDelay } from "@/lib/motion";

export default function CapabilitiesStrip() {
  return (
    <section
      id="services"
      className="scroll-mt-16 border-t border-slate/20 px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight text-foreground md:text-4xl">
            What I can help with
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70 md:text-lg md:leading-relaxed">
            SEO audits, full-stack web apps, and backend systems — the kind of
            work clients hire me for.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.li
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                ...fadeTransition,
                duration: 0.8,
                delay: Math.min(index, 2) * staggerDelay,
                ease: "easeInOut",
              }}
            >
              <article className="flex h-full flex-col rounded-sm border border-slate/25 bg-surface p-8 md:p-9">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm tabular-nums text-slate/70">
                    {service.index}
                  </span>
                  <span className="rounded-sm bg-foreground/5 px-2 py-1 text-xs text-foreground/55">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-light leading-snug text-foreground md:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-foreground/75">
                  {service.summary}
                </p>

                <ul className="mt-8 space-y-2.5 border-t border-slate/20 pt-6">
                  {service.capabilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/65"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
