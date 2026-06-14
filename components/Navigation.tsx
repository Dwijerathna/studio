"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeTransition, staggerDelay } from "@/lib/motion";
import { navLinks } from "@/lib/nav";

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.3,
    },
  },
};

const navItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...fadeTransition, duration: 1.1 },
  },
};

const mobileMenu: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeInOut" as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: "easeInOut" as const },
  },
};

const mobileLinkItem: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: "easeInOut" as const },
  }),
};

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`site-header fixed inset-x-0 top-0 z-50${
          scrolled ? " site-header-scrolled" : ""
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16"
        >
          {/* Logo */}
          <motion.div variants={navItem} initial="hidden" animate="visible">
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Dinitha Damnidu Wijerathna — Home"
              className="font-mono text-base font-semibold uppercase tracking-[0.3em] text-foreground transition-colors duration-300 hover:text-indigo md:text-lg"
            >
              DDW
            </Link>
          </motion.div>

          {/* Desktop links */}
          <motion.ul
            variants={navContainer}
            initial="hidden"
            animate="visible"
            className="hidden items-center gap-6 md:flex md:gap-6 lg:gap-10"
          >
            {navLinks.map(({ href, label, match }) => {
              const isActive = pathname === match;
              return (
                <motion.li key={href} variants={navItem}>
                  <Link
                    href={href}
                    className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 hover:text-slate ${
                      isActive ? "text-slate" : "text-foreground/60"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Mobile toggle */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col items-end justify-center gap-[5px] p-2 md:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7, width: "20px" } : { rotate: 0, y: 0, width: "20px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block h-px w-5 origin-center bg-foreground/70"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="block h-px w-3 bg-foreground/40"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7, width: "20px" } : { rotate: 0, y: 0, width: "20px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block h-px w-5 origin-center bg-foreground/70"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`site-header-panel fixed inset-x-0 top-16 z-40 px-6 pb-8 pt-6 md:hidden${
              scrolled ? " site-header-panel-scrolled" : ""
            }`}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label, match }, i) => {
                const isActive = pathname === match;
                return (
                  <motion.li
                    key={href}
                    custom={i}
                    variants={mobileLinkItem}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className={`block py-3 font-mono text-xs uppercase tracking-widest transition-colors duration-300 hover:text-slate ${
                        isActive
                          ? "text-slate"
                          : "text-foreground/60"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
