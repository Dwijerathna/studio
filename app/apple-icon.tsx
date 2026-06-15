import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          backgroundColor: brand.background,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            backgroundColor: brand.indigo,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 600,
            fontFamily: "monospace",
            letterSpacing: 14,
            color: brand.foreground,
          }}
        >
          DDW
        </div>
      </div>
    ),
    { ...size },
  );
}
