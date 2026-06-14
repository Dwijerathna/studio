"use client";

import { fadeTransition, heroRevealTransition } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
  "https://formspree.io/f/mjgdazdz";

type Status = "idle" | "submitting" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const inputClasses =
  "w-full border-0 border-b border-slate/30 bg-transparent py-3 text-base text-foreground/90 placeholder:text-foreground/40 focus:border-foreground/70 focus:outline-none focus:ring-0 transition-colors duration-300 disabled:text-foreground/35 disabled:border-slate/15";

const labelClasses = "block text-sm font-medium text-foreground/75";

export default function InitiateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={fadeTransition}
          className="text-base leading-relaxed text-foreground/80"
        >
          <p className="text-lg text-foreground">Message sent.</p>
          <p className="mt-2 text-foreground/70">
            Thanks for reaching out — I&apos;ll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroRevealTransition}
          onSubmit={handleSubmit}
          className="w-full space-y-10"
        >
          <div className="space-y-2">
            <label htmlFor="name" className={labelClasses}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project, timeline, or question..."
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`${inputClasses} resize-none leading-relaxed`}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-slate/40 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-slate hover:bg-slate hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={fadeTransition}
                className="mt-4 text-sm text-red-500"
              >
                Something went wrong. Please try again in a moment.
              </motion.p>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
