import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kinnections — Encrypted Relationship Mapper";
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
            background: "#F9731620",
            border: "1px solid #F9731640",
            borderRadius: "6px",
            padding: "4px 14px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#F97316",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Now Available
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
        <span style={{ color: "#F97316" }}>Kinnections</span>
      </div>
      <div
        style={{
          fontSize: "28px",
          color: "#FAFAF8",
          lineHeight: 1.3,
          maxWidth: "800px",
        }}
      >
        Know your people.
      </div>
      <div
        style={{
          fontSize: "20px",
          color: "#94A3B8",
          lineHeight: 1.5,
          maxWidth: "680px",
        }}
      >
        End-to-end encrypted, infinite-canvas relationship mapper. Your data
        stays on your device.
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
