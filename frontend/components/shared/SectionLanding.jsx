import Link from "next/link";
import Card from "@/components/shared/Card";

// Generic landing/overview page for a main section (Projects, Campaigns,
// Training, Events, Research, Technology, Impact, SDGs, Reports,
// Achievements, Stories, Get Involved, ...). Pass the section's data object
// (keyed by slug) and it renders the same card-grid layout the site already
// uses for About/Services, so every new section looks native to the site.
export default function SectionLanding({ eyebrow, title, intro, basePath, pages, children }) {
  const entries = Object.entries(pages);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">{title}</h1>
        <p className="mt-4 font-body text-base leading-relaxed text-ink/70">{intro}</p>
      </div>

      {children}

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([slug, page]) => (
          <Link key={slug} href={`${basePath}/${slug}`}>
            <Card title={page.title} description={page.summary || page.body?.[0]} image={page.image} />
          </Link>
        ))}
      </div>
    </section>
  );
}
