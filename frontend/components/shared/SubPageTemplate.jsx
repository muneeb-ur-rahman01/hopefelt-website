import Image from "next/image";

// Generic detail-page template shared by every section (About, Projects,
// Campaigns, Training, Events, Research, Technology, Impact, SDGs, Reports,
// Achievements, Stories, Get Involved, etc). Each section's [slug]/page.js
// looks up a page object from its own data file and renders it through this
// one component, so no new UI needs to be built per sub-section — only data.
//
// `page` shape: { title, eyebrow, image, body: string[], stats?, tags?, cta? }
// `extra` lets a specific route inject one-off content below the body
// (e.g. the About "Our Team" page rendering <TeamHierarchy />).
export default function SubPageTemplate({ page, extra }) {
  return (
    <article>
      <div className="relative h-72 w-full overflow-hidden md:h-96">
        <Image src={page.image} alt={page.title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-10 text-center text-white">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {page.eyebrow}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold md:text-5xl">{page.title}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        {page.tags && (
          <div className="mb-6 flex flex-wrap gap-2">
            {page.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-sand px-3 py-1 font-body text-xs font-medium text-forest"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {page.body.map((paragraph, i) => (
          <p key={i} className="mb-5 font-body text-base leading-relaxed text-ink/80">
            {paragraph}
          </p>
        ))}

        {page.stats && (
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {page.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl2 border border-line bg-surface p-5 text-center shadow-card">
                <p className="font-display text-2xl font-semibold text-forest">{stat.value}</p>
                <p className="mt-1 font-body text-xs text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {page.cta && (
          <a
            href={page.cta.href}
            className="mt-10 inline-flex rounded-full bg-forest px-6 py-3 font-body text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-forestDark hover:shadow-soft"
          >
            {page.cta.label}
          </a>
        )}
      </div>

      {extra}
    </article>
  );
}
