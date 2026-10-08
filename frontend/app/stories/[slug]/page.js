import { notFound } from "next/navigation";
import { storyPages } from "@/data/stories";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(storyPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = storyPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default function StoryDetailPage({ params }) {
  const page = storyPages[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
