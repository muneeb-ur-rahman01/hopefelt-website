
import Image from "next/image";

// Generic detail-page template shared by every section.
// Safely handles optional/missing page data so static generation
// does not crash when a field is undefined.

export default function SubPageTemplate({ page, extra }) {
  if (!page) {
    return null;
  }

  const body = Array.isArray(page.body) ? page.body : [];
  const tags = Array.isArray(page.tags) ? page.tags : [];
  const stats = Array.isArray(page.stats) ? page.stats : [];

  return (
    <article>
      {/* Hero */}
      <div className="relative h-72 w-full overflow-hidden md:h-96">
        {page.image && (
          <Image
            src={page.image}
            alt={page.title || "Hopefelt Foundation"}
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-10 text-center text-white">
          {page.eyebrow && (
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {page.eyebrow}
            </p>
          )}

          <h1 className="mt-2 font-display text-3xl font-semibold md:text-5xl">
            {page.title || "Hopefelt Foundation"}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-full border border-line bg-sand px-3 py-1 font-body text-xs font-medium text-forest"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Body */}
        {body.length > 0 &&
          body.map((paragraph, index) => (
            <p
              key={index}
              className="mb-5 font-body text-base leading-relaxed text-ink/80"
            >
              {paragraph}
            </p>
          ))}

        {/* Stats */}
        {stats.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={`${stat?.label || "stat"}-${index}`}
                className="rounded-xl2 border border-line bg-surface p-5 text-center shadow-card"
              >
                <p className="font-display text-2xl font-semibold text-forest">
                  {stat?.value ?? "—"}
                </p>

                <p className="mt-1 font-body text-xs text-ink/60">
                  {stat?.label ?? ""}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {page.cta?.href && (
          <a
            href={page.cta.href}
            className="mt-10 inline-flex rounded-full bg-forest px-6 py-3 font-body text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-forestDark hover:shadow-soft"
          >
            {page.cta.label || "Learn More"}
          </a>
        )}
      </div>

      {/* Optional extra content */}
      {extra}
    </article>
  );
}
