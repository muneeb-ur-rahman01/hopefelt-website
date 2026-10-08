import { notFound } from "next/navigation";
import { businessHubPages } from "@/data/business-hub";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(businessHubPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = businessHubPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function BusinessHubDetailPage({ params }) {
  const page = businessHubPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
