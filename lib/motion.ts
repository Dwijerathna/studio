import type { Transition } from "framer-motion";

/** Heavy, deliberate ease — no spring physics. */
export const premiumEase = [0.45, 0, 0.15, 1] as const;

export const fadeTransition: Transition = {
  duration: 0.9,
  ease: premiumEase,
};

export const heroRevealTransition: Transition = {
  duration: 1,
  ease: "easeInOut",
};

export const hoverFocusTransition: Transition = {
  duration: 0.4,
  ease: "easeInOut",
};

export const staggerDelay = 0.12;

export const slateAccent = "#2E4360";
