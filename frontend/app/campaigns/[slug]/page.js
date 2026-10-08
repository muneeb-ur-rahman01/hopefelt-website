import { notFound } from "next/navigation";
import { campaignPages } from "@/data/campaigns";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(campaignPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = campaignPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function CampaignDetailPage({ params }) {
  const page = campaignPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
