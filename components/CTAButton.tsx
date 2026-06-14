"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type CTAButtonProps = {
  label?: string;
  href?: string;
  className?: string;
  location?: string;
};

export default function CTAButton({
  label = "Let's Build",
  href = "/contact",
  className = "",
  location = "unknown",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent("contact-click", { location })}
      className={`inline-flex w-fit items-center gap-2 border border-slate/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-all duration-300 hover:border-slate hover:bg-slate hover:text-foreground ${className}`}
    >
      {label}
      <span aria-hidden>&rarr;</span>
    </Link>
  );
}
