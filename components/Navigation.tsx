import Link from "next/link";

const navLinks = [
  { href: "#ecosystems", label: "Ecosystems" },
  { href: "#visuals", label: "Visuals" },
  { href: "#initiate", label: "Initiate" },
] as const;

export default function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-900/80 bg-black/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16"
      >
        <Link
          href="/"
          className="text-xs font-medium uppercase tracking-[0.35em] text-white transition-opacity hover:opacity-60"
        >
          Studio
        </Link>

        <ul className="flex items-center gap-8 md:gap-12">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
