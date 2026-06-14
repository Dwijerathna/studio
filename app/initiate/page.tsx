import type { Metadata } from "next";
import InitiateForm from "@/components/InitiateForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a message about a project, freelance work, or engineering question.",
};

export default function InitiatePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pb-32 pt-20 md:px-12 md:pt-24 lg:px-16">
      <div className="w-full max-w-2xl">
        <header className="mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Contact
          </p>
          <h1 className="mt-6 text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Have a project in mind, need freelance help, or want to talk through
            a technical problem? Send a message and I&apos;ll reply as soon as I
            can.
          </p>
        </header>

        <InitiateForm />
      </div>
    </main>
  );
}
