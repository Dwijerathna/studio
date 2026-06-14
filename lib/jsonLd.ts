import { getProjectDescription, type Project } from "@/data/projects";
import { services } from "@/data/services";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const ORG_ID = `${siteUrl}/#organization`;
const SERVICE_ID = `${siteUrl}/#professional-service`;
const WEBSITE_ID = `${siteUrl}/#website`;

type JsonLdNode = Record<string, unknown>;
type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
};

function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    founder: { "@type": "Person", name: "Dinitha" },
  };
}

function professionalServiceNode(): JsonLdNode {
  return {
    "@type": "ProfessionalService",
    "@id": SERVICE_ID,
    name: "Dinitha — Engineering & SEO Consultancy",
    url: siteUrl,
    description: siteDescription,
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
    serviceType: services.map((service) => service.title),
  };
}

function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteName,
    url: siteUrl,
    publisher: { "@id": ORG_ID },
  };
}

export function globalGraph(): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), professionalServiceNode(), websiteNode()],
  };
}

export function servicesGraph(): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#services`,
        name: "Services",
        url: `${siteUrl}/#services`,
        description:
          "Local SEO audits, full-stack web development, and backend API design.",
        provider: { "@id": ORG_ID },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Engineering & SEO Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
        description: service.summary,
              category: service.category,
            },
          })),
        },
      },
    ],
  };
}

export function demoGraph(): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${siteUrl}/demo#app`,
        name: "Simulated SEO Audit Report",
        url: `${siteUrl}/demo`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An interactive proof-of-concept demonstrating automated Local SEO diagnostics and technical health scoring.",
        provider: { "@id": ORG_ID },
        isAccessibleForFree: true,
      },
    ],
  };
}

export function briefGraph(): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/brief#brief`,
        name: "Capability Brief",
        url: `${siteUrl}/brief`,
        description:
          "A printable capability brief outlining core competencies and selected project work.",
        author: { "@id": ORG_ID },
      },
    ],
  };
}

export function aboutGraph(): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Dinitha Damnidu Wijerathna",
        url: `${siteUrl}/about`,
        jobTitle: "Systems Engineer",
        worksFor: { "@id": ORG_ID },
        knowsAbout: [
          "Systems Engineering",
          "Local SEO Auditing",
          "Python Automation",
          "Full-Stack Architecture",
          "Distributed Ledger Technology",
        ],
        description:
          "Independent Systems Engineer building web apps, Python automation, and backend systems.",
      },
    ],
  };
}

export function projectGraph(project: Project): JsonLdGraph {
  const description = getProjectDescription(project);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/projects/${project.slug}#software`,
        name: project.title,
        url: `${siteUrl}/projects/${project.slug}`,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description,
        softwareVersion: project.version,
        keywords: project.techStack.join(", "),
        author: { "@id": ORG_ID },
      },
    ],
  };
}
