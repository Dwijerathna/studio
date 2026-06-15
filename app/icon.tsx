import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: brand.background,
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "monospace",
            letterSpacing: -1,
            color: brand.indigo,
          }}
        >
          D
        </div>
      </div>
    ),
    { ...size },
  );
}
