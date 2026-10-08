import { notFound } from "next/navigation";
import { impactPages } from "@/data/impact";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(impactPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = impactPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function ImpactDetailPage({ params }) {
  const page = impactPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
