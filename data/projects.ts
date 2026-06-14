export type ProjectDirective = {
  label: string;
  body: string;
};

export type ProjectCategory =
  | "Infrastructure"
  | "Automation"
  | "Cryptography"
  | "Digital Identity";

/** Lifecycle state for vault entries — drives filtering/sorting as the archive grows. */
export type ProjectStatus = "active" | "archived";

export type Project = {
  id: string;
  slug: string;
  title: string;
  version: string;
  year: string;
  status: ProjectStatus;
  category: ProjectCategory;
  techStack: string[];
  summary: string;
  directives: ProjectDirective[];
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "savoria-restaurant-management-system",
    title: "Savoria Restaurant Management System",
    version: "V2.4.1",
    year: "2025",
    status: "active",
    category: "Infrastructure",
    techStack: ["FASTAPI", "REACT", "WEBSOCKETS"],
    summary:
      "A full-stack reservation management system engineered to eliminate manual booking workflows for high-end dining operations.",
    directives: [
      {
        label: "Overview",
        body: "Engineered a full-stack reservation management system eliminating manual booking workflows for high-end dining operations.",
      },
      {
        label: "How it works",
        body: "React/Tailwind frontend interfacing with a Python FastAPI backend persisting to SQLite via SQLAlchemy ORM. Real-time admin notifications delivered through a Node.js/Socket.io event layer. JWT-authenticated admin panel with rate-limited endpoints and automated SMTP email pipelines.",
      },
      {
        label: "Why it matters",
        body: "Eliminates phone-based reservation overhead while providing operators a real-time dashboard to confirm, reject and audit bookings — reducing response latency to sub-second notification delivery.",
      },
    ],
  },
  {
    id: "2",
    slug: "crypto-price-dashboard",
    title: "Crypto Price Dashboard",
    version: "V0.8.4",
    year: "2024",
    status: "archived",
    category: "Automation",
    techStack: ["NODE.JS", "COINGECKO API"],
    summary:
      "A real-time cryptocurrency market monitoring terminal with threshold-based alerting and ANSI-formatted output.",
    directives: [
      {
        label: "Overview",
        body: "Built a real-time cryptocurrency market monitoring terminal with threshold-based alerting.",
      },
      {
        label: "How it works",
        body: "Node.js polling engine consuming the CoinGecko REST API with configurable alert thresholds and ANSI-formatted terminal output.",
      },
      {
        label: "Why it matters",
        body: "Provides traders and analysts a lightweight, dependency-minimal tool for continuous market surveillance without browser overhead.",
      },
    ],
  },
  {
    id: "3",
    slug: "dlt-cryptographic-core",
    title: "DLT Cryptographic Core",
    version: "V1.0.0",
    year: "2024",
    status: "archived",
    category: "Cryptography",
    techStack: ["PYTHON", "SHA-256"],
    summary:
      "A cryptographically sound blockchain implemented from first principles to validate distributed ledger concepts with native proof-of-work consensus.",
    directives: [
      {
        label: "Overview",
        body: "Implemented a cryptographically sound blockchain from first principles to validate distributed ledger concepts.",
      },
      {
        label: "How it works",
        body: "Python implementation featuring SHA-256 hashing, immutable chain construction and Proof of Work consensus mechanism.",
      },
      {
        label: "Why it matters",
        body: "Demonstrates deep understanding of decentralized ledger architecture — directly applicable to fintech audit trail systems and supply chain verification platforms.",
      },
    ],
  },
  {
    id: "4",
    slug: "interactive-archival-interface",
    title: "Interactive Archival Interface",
    version: "V2.0.0",
    year: "2025",
    status: "active",
    category: "Digital Identity",
    techStack: ["NEXT.JS", "TAILWIND", "NETLIFY"],
    summary:
      "A deployed, interactive interface designed to serve as a centralized digital identity and professional engineering archive.",
    directives: [
      {
        label: "Overview",
        body: "Engineered a statically generated professional archive presenting a luxury-catalog browsing experience over a curated project index — a centralized digital identity and engineering vault.",
      },
      {
        label: "How it works",
        body: "Next.js static generation deployed on Netlify edge infrastructure, with dynamic spec sheets, cinematic motion design, and a token-driven design system tuned for sub-100ms global delivery.",
      },
      {
        label: "Why it matters",
        body: "Serves as a durable identity and proof-of-work surface — optimized for portfolio presentation, consulting authority, and long-term archival use.",
      },
    ],
  },
  {
    id: "5",
    slug: "seo-janitor-automation",
    title: "SEO Janitor Automation",
    version: "V1.0.4",
    year: "2025",
    status: "active",
    category: "Automation",
    techStack: ["PYTHON", "CLI"],
    summary:
      "A proprietary Python automation architecture engineered to systematically extract, process, and evaluate Local SEO metrics — providing instantaneous, data-backed technical diagnostics for commercial clients.",
    directives: [
      {
        label: "Overview",
        body: "Engineered a proprietary Python automation architecture designed to systematically extract, process, and evaluate Local SEO metrics. This system bypasses manual auditing constraints, providing instantaneous, data-backed technical diagnostics for commercial clients.",
      },
      {
        label: "Data collection",
        body: "Utilizes advanced Python scraping architectures to aggregate local citation consistency, Google Business Profile integrity, and on-page metadata anomalies at scale without triggering rate limits.",
      },
      {
        label: "Analysis",
        body: "Raw metrics are funneled through a custom evaluation matrix. Database retrieval architectures were optimized utilizing precise subqueries rather than standard, resource-heavy joins, ensuring lean and rapid execution of data processing.",
      },
      {
        label: "Report output",
        body: "The processed data is automatically compiled into a high-value, actionable audit payload, establishing immediate consulting authority.",
      },
    ],
  },
  {
    id: "6",
    slug: "safeguard-architecture",
    title: "Safeguard Architecture",
    version: "V2.1.0",
    year: "2025",
    status: "active",
    category: "Infrastructure",
    techStack: ["NODE.JS", "FLUTTER"],
    summary:
      "A secure, multi-tier full-stack application integrating Node.js and Flutter, engineered for high-concurrency data handling and hardened user authentication.",
    directives: [
      {
        label: "Overview",
        body: "Developed a secure, multi-tier full-stack application integrating Node.js and Flutter, engineered for high-concurrency data handling and hardened user authentication.",
      },
      {
        label: "Architecture",
        body: "Constructed a decoupled backend utilizing Node.js for robust API routing, paired with a high-performance Flutter frontend for seamless, cross-platform state management.",
      },
      {
        label: "Security",
        body: "Implements rigid data sanitization and JWT-based authentication workflows to ensure absolute integrity of user information and transmission payloads.",
      },
      {
        label: "Use cases",
        body: "Designed for enterprise-grade deployment where data sovereignty and system uptime are mission-critical requirements.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

/**
 * Canonical short description for a project — used by metadata, JSON-LD, and
 * OG images so the fallback logic lives in exactly one place.
 */
export function getProjectDescription(project: Project): string {
  return project.summary;
}
