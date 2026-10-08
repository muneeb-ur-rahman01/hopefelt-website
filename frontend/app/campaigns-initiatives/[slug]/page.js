import { notFound } from "next/navigation";
import { campaignPages } from "@/data/campaigns";
import CampaignAreaTemplate from "@/components/campaigns/CampaignAreaTemplate";

export function generateStaticParams() {
  return Object.keys(campaignPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = campaignPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.tagline };
}

export default function CampaignAreaPage({ params }) {
  const page = campaignPages[params.slug];
  if (!page) notFound();
  return <CampaignAreaTemplate slug={params.slug} page={page} />;
}
