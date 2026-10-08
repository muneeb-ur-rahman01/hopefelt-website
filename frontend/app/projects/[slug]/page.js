import { notFound } from "next/navigation";
import { projectPages } from "@/data/projects";
import ProjectAreaTemplate from "@/components/projects/ProjectAreaTemplate";

export function generateStaticParams() {
  return Object.keys(projectPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = projectPages[params.slug];
  if (!page) return {};
  return { title: page.title, description: page.tagline };
}

export default function ProjectDetailPage({ params }) {
  const page = projectPages[params.slug];
  if (!page) notFound();
  return <ProjectAreaTemplate slug={params.slug} page={page} />;
}
