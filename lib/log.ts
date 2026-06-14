import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type LogEntry = {
  slug: string;
  title: string;
  date: string;
  timestamp: string;
  summary: string;
  projectSlug?: string;
};

const LOG_DIR = path.join(process.cwd(), "content", "log");

export function getLogEntries(): LogEntry[] {
  if (!fs.existsSync(LOG_DIR)) {
    return [];
  }

  const entries = fs
    .readdirSync(LOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(LOG_DIR, file), "utf8");
      const { data } = matter(raw);

      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? "Untitled Entry"),
        date: String(data.date ?? ""),
        timestamp: String(data.timestamp ?? ""),
        summary: String(data.summary ?? ""),
        projectSlug: data.projectSlug
          ? String(data.projectSlug)
          : undefined,
      } satisfies LogEntry;
    });

  return entries.sort((a, b) => (a.date < b.date ? 1 : -1));
}
