
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

  const body = Array.isArray(page.body) ? page.body : [];

  return {
    title: page.title,
    description:
      body[0] ||
      page.summary ||
      "Learn more about Hopefelt Foundation.",
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
