import Link from "next/link";

type HeroProps = {
  name: string;
};

export default function Hero({ name }: HeroProps) {
  return (
    <section className="relative flex min-h-screen flex-col justify-end px-6 pb-24 pt-32 md:px-12 md:pb-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-neutral-500">
          Engineer &amp; Creator
        </p>

        <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {name}
        </h1>

        <p className="mt-8 max-w-md text-sm leading-relaxed tracking-wide text-neutral-400">
          Full-stack ecosystems, automated utilities, and visual media —
          curated as premium digital collections.
        </p>

        <div className="mt-12">
          <Link
            href="#ecosystems"
            className="inline-flex items-center border border-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-colors hover:bg-white hover:text-black"
          >
            View Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
