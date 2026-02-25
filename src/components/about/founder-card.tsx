import { cn } from "@/lib/cn";

type FounderCardProps = {
  name: string;
  jobTitle: string;
  bio: string;
  linkedIn?: string;
  className?: string;
};

export function FounderCard({
  name,
  jobTitle,
  bio,
  linkedIn,
  className,
}: FounderCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dusk bg-dusk/30 p-6 md:p-8",
        className,
      )}
    >
      <div className="flex items-start gap-6">
        {/* Photo placeholder */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zero">
          <span className="font-mono text-xs text-mist/60">photo</span>
        </div>

        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold text-white">
            {name}
          </h3>
          <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-mist/60">
            {jobTitle}
          </p>
        </div>
      </div>

      <p className="mt-5 font-body text-sm leading-relaxed text-mist">{bio}</p>

      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 font-body text-sm text-signal underline underline-offset-2 transition-colors hover:text-white"
        >
          LinkedIn →
        </a>
      )}
    </div>
  );
}
