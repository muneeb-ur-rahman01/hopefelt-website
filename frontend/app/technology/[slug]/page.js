import { notFound } from "next/navigation";
import { technologyPages } from "@/data/technology";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(technologyPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = technologyPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function TechnologyDetailPage({ params }) {
  const page = technologyPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
