export type Service = {
  id: string;
  index: string;
  category: string;
  title: string;
  /** Plain one-liner for the homepage. */
  summary: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    id: "seo",
    index: "01",
    category: "Diagnostics",
    title: "Local SEO Audits",
    summary:
      "Automated checks across your business listings — find citation errors, profile gaps, and ranking issues without manual spreadsheets.",
    description:
      "Automated checks across your business listings — find citation errors, profile gaps, and ranking issues without manual spreadsheets.",
    capabilities: [
      "Citation Consistency",
      "GBP Integrity",
      "Metadata Review",
      "Written Report with Fixes",
    ],
  },
  {
    id: "systems",
    index: "02",
    category: "Engineering",
    title: "Full-Stack Development",
    summary:
      "Web applications with React, Node.js, and Python — from the interface your users see to the backend that powers it.",
    description:
      "Web applications with React, Node.js, and Python — from the interface your users see to the backend that powers it.",
    capabilities: [
      "React / Next.js",
      "Node.js / FastAPI",
      "Authentication",
      "Automation Pipelines",
    ],
  },
  {
    id: "backend",
    index: "03",
    category: "Architecture",
    title: "Backend & API Design",
    summary:
      "Reliable server-side systems, secure APIs, and database architecture for apps that need to handle real users and real data.",
    description:
      "Reliable server-side systems, secure APIs, and database architecture for apps that need to handle real users and real data.",
    capabilities: [
      "REST API Design",
      "Database Modeling",
      "Auth & Security",
      "Deployment",
    ],
  },
];
