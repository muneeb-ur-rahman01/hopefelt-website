import Link from "next/link";

const partnerTypes = [
  "Health Organizations",
  "Universities",
  "NGOs",
  "Researchers",
  "Technology Organizations",
  "Businesses",
  "Entrepreneurs",
  "Media Organizations",
  "Community Organizations",
];

export default function PartnersSection() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Partners & Collaborators
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Stronger solutions through meaningful partnerships.
          </h2>

          <p className="mt-5 leading-8 text-ink/65">
            Hopefelt works with organizations, institutions, researchers,
            businesses, technology partners, entrepreneurs, media and
            communities to create practical and sustainable impact.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((partner) => (
            <div
              key={partner}
              className="flex min-h-24 items-center justify-center rounded-2xl border border-line bg-white p-5 text-center"
            >
              <span className="text-sm font-semibold text-ink">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/about/partners"
            className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white"
          >
            Our Partners & Collaborators
          </Link>
        </div>

      </div>
    </section>
  );
}