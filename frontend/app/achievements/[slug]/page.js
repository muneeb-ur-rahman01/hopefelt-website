import { notFound } from "next/navigation";
import { achievementPages } from "@/data/achievements";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(achievementPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = achievementPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function AchievementDetailPage({ params }) {
  const page = achievementPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
