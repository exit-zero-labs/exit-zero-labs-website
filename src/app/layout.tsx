import type { Metadata, Viewport } from "next";
import {
  JetBrains_Mono,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import { CursorTrail } from "@/components/cursor-trail";
import { SplashScreen } from "@/components/splash-screen";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exit Zero Labs — Ship clean. Build forward.",
  description:
    "Indie software, made with care. Makers of Kinnections and Geo Spot. Built by Exit Zero Labs.",
  openGraph: {
    title: "Exit Zero Labs — Ship clean. Build forward.",
    description:
      "Indie software, made with care. Makers of Kinnections and Geo Spot.",
    siteName: "Exit Zero Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exit Zero Labs — Ship clean. Build forward.",
    description:
      "Indie software, made with care. Makers of Kinnections and Geo Spot.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SplashScreen />
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
