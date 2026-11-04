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

  const [lead, ...rest] = body;

  return (
    <article className="bg-surface">
      {/* ───────────── Hero ───────────── */}
      <header className="relative isolate h-[26rem] w-full overflow-hidden md:h-[34rem]">
        {page.image && (
          <Image
            src={page.image}
            alt={page.title || "Hopefelt Foundation"}
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover"
          />
        )}

        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/30 via-transparent to-transparent mix-blend-multiply" />

        {/* Soft glow accents */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-forest/30 blur-3xl" />

        <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col items-center justify-end px-6 pb-24 text-center text-white md:pb-28">
          {page.eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-gold backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {page.eyebrow}
            </span>
          )}

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight drop-shadow-lg md:text-6xl">
            {page.title || "Hopefelt Foundation"}
          </h1>

          {/* Gold divider */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <span className="h-2 w-2 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-10 rounded-t-[2.5rem] bg-surface md:h-14 md:rounded-t-[4rem]" />
      </header>

      {/* ───────────── Floating stats ───────────── */}
      {stats.length > 0 && (
        <section className="relative z-10 mx-auto -mt-20 max-w-5xl px-5 md:-mt-24 md:px-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-soft sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={`${stat?.label || "stat"}-${index}`}
                className="group relative bg-white p-6 text-center transition-colors duration-300 hover:bg-sand md:p-8"
              >
                <span className="absolute inset-x-8 top-0 h-0.5 origin-center scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />

                <p className="bg-gradient-to-br from-forest to-forestDark bg-clip-text font-display text-3xl font-semibold text-transparent md:text-4xl">
                  {stat?.value ?? "—"}
                </p>

                <p className="mt-2 font-body text-[11px] font-medium uppercase tracking-[0.16em] text-ink/55">
                  {stat?.label ?? ""}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ───────────── Content ───────────── */}
      <div
        className={`mx-auto max-w-3xl px-5 pb-20 md:px-8 ${
          stats.length > 0 ? "pt-16" : "pt-4"
        }`}
      >
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-10 flex flex-wrap justify-center gap-2.5">
            {tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-full border border-line bg-sand px-4 py-1.5 font-body text-xs font-medium tracking-wide text-forest transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-white hover:shadow-card"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Lead paragraph with drop cap */}
        {lead && (
          <p className="mb-8 font-body text-lg leading-[1.85] text-ink/90 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-forest md:text-xl">
            {lead}
          </p>
        )}

        {/* Remaining paragraphs */}
        {rest.map((paragraph, index) => (
          <p
            key={index}
            className="mb-6 font-body text-base leading-[1.9] text-ink/75 md:text-[17px]"
          >
            {paragraph}
          </p>
        ))}

        {/* CTA */}
        {page.cta?.href && (
          <div className="mt-14 flex justify-center">
            <a
              href={page.cta.href}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-forest to-forestDark px-8 py-4 font-body text-sm font-semibold tracking-wide text-white shadow-soft ring-1 ring-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:ring-gold"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">{page.cta.label || "Learn More"}</span>
              <svg
                className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Optional extra content */}
      {extra}
    </article>
  );
}