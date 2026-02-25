type LegalContentProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalContent({
  title,
  lastUpdated,
  children,
}: LegalContentProps) {
  return (
    <article className="min-w-0 flex-1">
      <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
        {title}
      </h1>
      <p className="mt-2 font-mono text-xs text-mist/60">
        Last updated: {lastUpdated}
      </p>

      <div className="legal-prose mt-8 space-y-6 font-body text-base leading-relaxed text-mist [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_a]:text-signal [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-white [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-white [&_ul]:space-y-1">
        {children}
      </div>
    </article>
  );
}
