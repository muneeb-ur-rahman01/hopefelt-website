import Link from "next/link";
import Card from "@/components/shared/Card";
import { reportPages, reusedFromResearch } from "@/data/reports";
import { researchPages } from "@/data/research";

export const metadata = {
  title: "Reports & Publications",
  description: "Hopefelt Foundation's annual reports, impact reports, research reports, abstracts, and publications.",
};

export default function ReportsOverviewPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          Documentation
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Reports & Publications</h1>
        <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
          Annual, impact, and research reports, plus our abstracts and publications library
          (shared with Research & Knowledge, not duplicated).
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(reportPages).map(([slug, page]) => (
          <Link key={slug} href={`/reports/${slug}`}>
            <Card title={page.title} description={page.summary} image={page.image} />
          </Link>
        ))}
        {reusedFromResearch.map((item) => {
          const page = researchPages[item.slug];
          return (
            <Link key={item.href} href={item.href}>
              <Card title={page.title} description={page.summary} image={page.image} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
