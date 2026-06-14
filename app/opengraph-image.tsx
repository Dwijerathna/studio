import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const alt = "Dinitha — Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
              fontSize: 24,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: brand.muted,
            }}
          >
            Systems Engineer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              letterSpacing: -4,
              color: brand.foreground,
            }}
          >
            Dinitha
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.5,
              color: brand.subtle,
              maxWidth: 880,
            }}
          >
            Full-stack web apps, Python automation, and backend systems —
            built to solve real problems.
          </div>
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
          {"> STATUS: AVAILABLE FOR Q3 ENGAGEMENTS"}
        </div>
      </div>
    ),
    { ...size },
  );
}
