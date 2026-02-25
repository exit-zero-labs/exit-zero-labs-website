import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Exit Zero Labs",
    short_name: "Exit Zero",
    description:
      "Indie software, made with care. Makers of Kinnections and Geo Spot.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0F1E",
    theme_color: "#0A0F1E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
