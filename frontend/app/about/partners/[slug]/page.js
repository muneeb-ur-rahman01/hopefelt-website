import { notFound } from "next/navigation";
import { partnerCategories } from "@/data/partners";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(partnerCategories).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = partnerCategories[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.body[0] };
}

export default function PartnerCategoryPage({ params }) {
  const page = partnerCategories[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
