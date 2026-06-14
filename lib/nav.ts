export type NavLink = {
  href: string;
  label: string;
  /** Pathname this link is considered "active" for (primary nav highlight). */
  match: string;
};

/** Single source of truth for primary navigation — consumed by Navigation and Footer. */
export const navLinks: NavLink[] = [
  { href: "/#projects", label: "Projects", match: "/" },
  { href: "/#services", label: "Services", match: "/" },
  { href: "/log", label: "Case Studies", match: "/log" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/contact", label: "Contact", match: "/initiate" },
];
