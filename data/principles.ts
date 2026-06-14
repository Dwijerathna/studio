export type Principle = {
  id: string;
  title: string;
  /** Short line for the homepage. */
  statement: string;
  /** Expanded version for the About page. */
  body: string;
};

export const principles: Principle[] = [
  {
    id: "backend-performance",
    title: "Backend & Performance",
    statement:
      "I structure apps and databases so they stay fast as data grows — without piling on complexity that slows everything down.",
    body: "When traffic or data volume increases, bad architecture shows up fast. I focus on efficient backend logic and sensible database access so performance stays predictable. The goal is software that scales with your needs, not one that needs a rewrite after six months.",
  },
  {
    id: "automation",
    title: "Automation",
    statement:
      "Repetitive work gets replaced with Python scripts — like my SEO Janitor, which audits business listings in minutes instead of hours by hand.",
    body: "If a task repeats, it can usually be automated. I build Python tools that gather data, run checks, and produce clear reports — for example, scanning local SEO consistency across directories and flagging issues automatically. Less manual work, fewer human errors, faster turnaround.",
  },
  {
    id: "maintainable-code",
    title: "Maintainable Code",
    statement:
      "Clear code beats clever code. I build in small, readable pieces that you — or the next developer — can actually understand and update.",
    body: "Software only you understand is a liability. I write straightforward functions, keep logic easy to follow, and avoid over-engineered abstractions. When something breaks or needs a new feature, you should not need a treasure map to fix it.",
  },
  {
    id: "security",
    title: "Security Fundamentals",
    statement:
      "User input is validated, database access stays safe, and secrets never live in the codebase. Security is built in from the start.",
    body: "Every project gets the basics done properly: sanitize inputs, use safe database queries, store API keys in environment variables, and treat authentication seriously. These are not optional extras — they are the foundation everything else sits on.",
  },
];
