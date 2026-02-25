import { cn } from "@/lib/cn";

type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  ariaLabel: string;
  className?: string;
  innerClassName?: string;
};

export function SectionWrapper({
  children,
  id,
  ariaLabel,
  className,
  innerClassName,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("px-6 py-[--spacing-4xl] md:py-[--spacing-5xl]", className)}
    >
      <div className={cn("mx-auto max-w-[1200px]", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
