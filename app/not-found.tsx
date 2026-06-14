import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 pb-32 pt-20 md:pt-24">
      <div className="mx-auto max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          404
        </p>
        <h1 className="mt-6 text-3xl font-light tracking-tight text-foreground md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          That page doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center border border-slate/40 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-slate hover:bg-slate"
          >
            Go home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
          >
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
