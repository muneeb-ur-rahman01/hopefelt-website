import { notFound } from "next/navigation";
import { researchPages } from "@/data/research";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(researchPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = researchPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function ResearchDetailPage({ params }) {
  const page = researchPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
