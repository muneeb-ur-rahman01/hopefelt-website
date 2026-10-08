import { notFound } from "next/navigation";
import { sdgPages } from "@/data/sdgs";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(sdgPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = sdgPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function SdgDetailPage({ params }) {
  const page = sdgPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
