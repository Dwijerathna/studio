import { ImageResponse } from "next/og";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectDescription,
} from "@/data/projects";
import { brand } from "@/lib/brand";

export const alt = "Project Spec Sheet — Dinitha Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

function truncate(value: string, max: number): string {
  if (value.length <= max) return value;
  return `${value.slice(0, max).trimEnd()}…`;
}

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const category = project?.category ?? "Studio";
  const title = project?.title ?? "Spec Sheet";
  const directive = project ? getProjectDescription(project) : "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: brand.background,
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: brand.muted,
            }}
          >
            {category}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: brand.indigo,
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: brand.subtle,
              }}
            >
              Studio
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: brand.foreground,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          {directive ? (
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.5,
                color: brand.subtle,
                maxWidth: 920,
              }}
            >
              {truncate(directive, 150)}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: `1px solid ${brand.line}`,
            paddingTop: 32,
            fontSize: 20,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: brand.faint,
          }}
        >
          {"> SYSTEM ARCHITECTURE"}
        </div>
      </div>
    ),
    { ...size },
  );
}
