"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./globe").then((m) => m.Globe), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-square w-full items-center justify-center">
      <span className="font-mono text-xs text-mist/40">loading globe...</span>
    </div>
  ),
});

export function GlobeLoader() {
  return <Globe />;
}
