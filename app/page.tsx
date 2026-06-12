import CollectionGrid from "@/components/CollectionGrid";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero name="Dinitha" />
        <CollectionGrid />
      </main>

      <footer
        id="initiate"
        className="border-t border-neutral-900 px-6 py-16 md:px-12 lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-neutral-500">
              Initiate
            </p>
            <p className="mt-3 text-sm tracking-wide text-neutral-400">
              Available for select collaborations and commissions.
            </p>
          </div>
          <a
            href="mailto:hello@example.com"
            className="inline-flex w-fit items-center border border-neutral-800 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-300 transition-colors hover:border-white hover:text-white"
          >
            Contact
          </a>
        </div>
      </footer>
    </>
  );
}
