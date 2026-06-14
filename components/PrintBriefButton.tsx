"use client";

import { trackEvent } from "@/lib/analytics";

export default function PrintBriefButton() {
  function handlePrint() {
    trackEvent("download-brief", { method: "print" });
    window.print();
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="print-hidden inline-flex w-fit shrink-0 items-center gap-2 bg-slate px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-slate-hover"
    >
      Save as PDF
      <span aria-hidden>&darr;</span>
    </button>
  );
}
