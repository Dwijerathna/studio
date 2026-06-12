type CollectionItem = {
  id: string;
  title: string;
  version: string;
  category: string;
};

const collectionItems: CollectionItem[] = [
  {
    id: "seo-janitor",
    title: "SEO Janitor Automation",
    version: "v1.0.4",
    category: "Automation",
  },
  {
    id: "safeguard",
    title: "Safeguard Architecture",
    version: "v2.1.0",
    category: "Infrastructure",
  },
  {
    id: "signal-engine",
    title: "Signal Engine Platform",
    version: "v0.9.2",
    category: "Ecosystem",
  },
  {
    id: "nocturne-lens",
    title: "Nocturne Lens Suite",
    version: "v1.3.1",
    category: "Visual Media",
  },
];

export default function CollectionGrid() {
  return (
    <section
      id="ecosystems"
      className="border-t border-neutral-900 px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.4em] text-neutral-500">
              Current Season
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">
              The Collection
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed tracking-wide text-neutral-500">
            Engineered systems and visual artifacts, presented with the
            precision of a luxury catalog.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-px bg-neutral-900 sm:grid-cols-2 lg:grid-cols-4">
          {collectionItems.map((item) => (
            <li key={item.id}>
              <article className="group flex h-full min-h-[320px] flex-col justify-between bg-black p-8 transition-colors hover:bg-neutral-950">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-600">
                    {item.category}
                  </p>
                  <h3 className="mt-6 text-lg font-light leading-snug tracking-tight text-white transition-colors group-hover:text-neutral-200">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-12 flex items-end justify-between border-t border-neutral-900 pt-6">
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                    {item.version}
                  </span>
                  <span
                    aria-hidden
                    className="text-neutral-700 transition-colors group-hover:text-neutral-400"
                  >
                    →
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
