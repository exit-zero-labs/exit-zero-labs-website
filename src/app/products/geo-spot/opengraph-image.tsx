import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Geo Spot — Geography & Culture Quiz App";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0A0F1E",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        gap: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            background: "#00D97E20",
            border: "1px solid #00D97E40",
            borderRadius: "6px",
            padding: "4px 14px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#00D97E",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Coming Soon
        </div>
        <span style={{ fontSize: "14px", color: "#94A3B8" }}>
          by Exit Zero Labs
        </span>
      </div>
      <div
        style={{
          fontSize: "64px",
          fontWeight: 700,
          color: "#FAFAF8",
          lineHeight: 1.1,
        }}
      >
        <span style={{ color: "#00D97E" }}>Geo Spot</span>
      </div>
      <div
        style={{
          fontSize: "28px",
          color: "#FAFAF8",
          lineHeight: 1.3,
          maxWidth: "800px",
        }}
      >
        The world is your playing field.
      </div>
      <div
        style={{
          fontSize: "20px",
          color: "#94A3B8",
          lineHeight: 1.5,
          maxWidth: "680px",
        }}
      >
        Geography, culture, sports, and news — in curated Packs. iOS & Android.
        Pin Point is free.
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
