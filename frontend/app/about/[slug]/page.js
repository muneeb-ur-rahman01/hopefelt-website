import { notFound } from "next/navigation";
import { aboutPages } from "@/data/about";
import TeamHierarchy from "@/components/shared/TeamHierarchy";
import SubPageTemplate from "@/components/shared/SubPageTemplate";

export function generateStaticParams() {
  return Object.keys(aboutPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = aboutPages[params.slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.body[0],
  };
}

export default function AboutSubPage({ params }) {
  const page = aboutPages[params.slug];
  if (!page) notFound();

  return (
    <SubPageTemplate
      page={page}
      extra={
        params.slug === "our-team" ? (
          <div className="border-t border-line bg-sand">
            <TeamHierarchy />
          </div>
        ) : null
      }
    />
  );
}
