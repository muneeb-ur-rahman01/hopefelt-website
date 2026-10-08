import { notFound } from "next/navigation";
import { getInvolvedPages } from "@/data/get-involved";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(getInvolvedPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = getInvolvedPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function GetInvolvedDetailPage({ params }) {
  const page = getInvolvedPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
