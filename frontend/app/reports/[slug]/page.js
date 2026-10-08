import { notFound } from "next/navigation";
import { reportPages } from "@/data/reports";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(reportPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = reportPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function ReportDetailPage({ params }) {
  const page = reportPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
