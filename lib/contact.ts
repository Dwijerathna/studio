export type SocialLink = {
  id: "github" | "linkedin" | "whatsapp";
  label: string;
  href: string;
};

/**
 * Public contact channels. Env vars override these defaults in deployment.
 */
const defaultContact = {
  github: "https://github.com/Dwijerathna",
  linkedin: "https://www.linkedin.com/in/dinitha-wijerathna-6a8626266/",
  phone: "+94 0778264843",
} as const;

/** E.164 digits for wa.me — strips formatting and local trunk 0 after +94. */
export function toWhatsAppDigits(phone: string): string {
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("940")) {
    digits = `94${digits.slice(3)}`;
  }
  return digits;
}

export function getWhatsAppHref(phone: string): string {
  return `https://wa.me/${toWhatsAppDigits(phone)}`;
}

const phone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? defaultContact.phone;

export const contactPhone = phone;
export const whatsAppHref =
  process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? getWhatsAppHref(phone);

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: process.env.NEXT_PUBLIC_CONTACT_GITHUB ?? defaultContact.github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN ?? defaultContact.linkedin,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: whatsAppHref,
  },
];

export const engagementLinks = [
  { href: "/brief", label: "Capability Brief" },
  { href: "/demo", label: "Audit Demo" },
  { href: "/contact", label: "Contact" },
] as const;
