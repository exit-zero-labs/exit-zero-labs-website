import { cn } from "@/lib/cn";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: readonly Feature[];
  className?: string;
};

export function FeatureGrid({ features, className }: FeatureGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)}>
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-lg border border-dusk bg-dusk/30 p-6 transition-colors hover:border-white/20"
        >
          <span className="text-2xl" aria-hidden="true">
            {feature.icon}
          </span>
          <h3 className="mt-3 font-display text-lg font-semibold text-white">
            {feature.title}
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-mist">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
