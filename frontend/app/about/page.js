import Link from "next/link";
import Image from "next/image";
import AboutFull from "@/components/about/AboutFull";
import { aboutPages } from "@/data/about";

export const metadata = {
  title: "About",
  description: "Learn who Hopefelt Foundation is, our mission, vision, team, and impact.",
};

export default function AboutOverviewPage() {
  const entries = Object.entries(aboutPages);

  return (
    <>
      {/* Full About design — story, mission, vision, departments, roadmap, etc. */}
      <AboutFull />

      {/* Browse by topic — quick links into each individual About subpage */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Explore Further
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Browse by Topic</h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
            Dive deeper into any part of our story — mission, vision, values, team and more.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([slug, page]) => (
          <Link
            key={slug}
            href={`/about/${slug}`}
            className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-surface shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={page.image}
                alt={page.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="font-body text-xs font-semibold uppercase tracking-wide text-forest">
                {page.eyebrow}
              </p>
              <h2 className="mt-1 font-display text-lg font-semibold text-ink">{page.title}</h2>
            </div>
          </Link>
        ))}
        </div>
      </section>
    </>
  );
}
