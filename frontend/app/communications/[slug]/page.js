import { notFound } from "next/navigation";
import { communicationsPages } from "@/data/communications";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(communicationsPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = communicationsPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function CommunicationsDetailPage({ params }) {
  const page = communicationsPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
