import { LegalSidebar } from "@/components/legal/legal-sidebar";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zero">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Legal" }]} />

      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 pt-8 pb-20 md:flex-row md:gap-12 md:pt-12 md:pb-32">
        <aside className="w-full shrink-0 md:w-56">
          <LegalSidebar />
        </aside>
        {children}
      </div>
    </div>
  );
}
