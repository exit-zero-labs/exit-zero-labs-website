import { cn } from "@/lib/cn";

type ScreenshotPlaceholderProps = {
  label?: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
};

export function ScreenshotPlaceholder({
  label = "screenshot",
  sublabel,
  aspectRatio = "aspect-[16/10]",
  className,
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border border-white/10 bg-zero",
        aspectRatio,
        className,
      )}
    >
      <div className="text-center">
        <span className="font-mono text-sm text-mist">[ {label} ]</span>
        {sublabel && (
          <p className="mt-2 font-mono text-xs text-mist/60">{sublabel}</p>
        )}
      </div>
    </div>
  );
}
