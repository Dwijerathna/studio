import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SocialIcon from "@/components/SocialIcon";
import {
  contactPhone,
  engagementLinks,
  socialLinks,
  whatsAppHref,
} from "@/lib/contact";

const iconButtonClasses =
  "inline-flex h-11 w-11 items-center justify-center border border-slate/40 bg-surface/50 transition-colors duration-300 hover:border-slate hover:bg-surface";

export default function Footer() {
  const profileLinks = socialLinks.filter((link) => link.id !== "whatsapp");

  return (
    <footer className="border-t border-slate/20 px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              Contact
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed tracking-wide text-foreground/60">
              Reach out for engineering inquiries, collaborations, or consulting.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-3">
            <li>
              <CTAButton
                label="Contact"
                location="footer-contact"
                className="h-11 bg-surface/50 px-4 py-0"
              />
            </li>
            {profileLinks.map(({ id, label, href }) => (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${iconButtonClasses} ${
                    id === "linkedin"
                      ? "hover:border-[#0A66C2]/50"
                      : "hover:border-foreground/30"
                  }`}
                >
                  <SocialIcon id={id} />
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${contactPhone}`}
                className={`${iconButtonClasses} hover:border-[#25D366]/50`}
              >
                <SocialIcon id="whatsapp" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-16 border-t border-slate/20 pt-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            Engagement
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {engagementLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 transition-colors duration-300 hover:text-foreground/80"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-status-ping rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 animate-status-pulse rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm text-foreground/70">
              Available for work
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            Done by Dinitha the Great.
          </p>
        </div>
      </div>
    </footer>
  );
}
