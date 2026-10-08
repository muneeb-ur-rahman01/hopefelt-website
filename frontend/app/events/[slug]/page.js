import { notFound } from "next/navigation";
import { eventPages } from "@/data/events";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(eventPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = eventPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function EventDetailPage({ params }) {
  const page = eventPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
