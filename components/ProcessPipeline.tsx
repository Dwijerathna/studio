type Step = {
  index: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    index: "01",
    title: "Understand the problem",
    description:
      "We clarify goals, constraints, and what success looks like — whether that's a new feature, an audit, or a full application.",
  },
  {
    index: "02",
    title: "Build and test",
    description:
      "I design, implement, and test the solution with clean code and sensible architecture — keeping you updated as work progresses.",
  },
  {
    index: "03",
    title: "Hand off and support",
    description:
      "You get working software, clear documentation, and a prioritized list of next steps so the project stays maintainable after delivery.",
  },
];

export default function ProcessPipeline() {
  return (
    <section className="border-t border-slate/20 px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Workflow
          </p>
          <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight text-foreground md:text-4xl">
            How I work
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70 md:text-lg md:leading-relaxed">
            A straightforward process from first conversation to delivered
            software.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((step) => (
            <li key={step.index} className="flex flex-col">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-slate/40 bg-background font-mono text-sm tabular-nums text-slate">
                {step.index}
              </div>

              <article className="flex h-full flex-col rounded-sm border border-slate/25 bg-surface p-7 md:p-8">
                <h3 className="text-xl font-light leading-snug text-foreground md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-foreground/75">
                  {step.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
