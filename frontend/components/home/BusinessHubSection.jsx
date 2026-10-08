import Link from "next/link";

const areas = [
  "Entrepreneurship",
  "Startups",
  "Products & Services",
  "Business Development",
  "Technology Business",
  "Health Business",
  "Social Enterprise",
  "Mentorship",
  "Competitions",
  "Partnerships",
  "Sponsorship",
  "Business Stories",
];

export default function BusinessHubSection() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-black/20" />

      <div className="relative mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Hopefelt Business Hub
            </span>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Turning ideas into opportunities, products and impact.
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              The Business Hub connects entrepreneurship, startups,
              technology, health businesses, social enterprises, products,
              services, mentorship, competitions and partnerships.
            </p>

            <Link
              href="/business-hub"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-forest transition hover:-translate-y-0.5"
            >
              Explore Business Hub
            </Link>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area}
                  href="/business-hub"
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  {area}
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Business Flow
              </p>

              <p className="mt-4 font-display text-xl font-semibold leading-9">
                IDEA → RESEARCH → PRODUCT → TECHNOLOGY → BUSINESS MODEL →
                BRAND → MARKETING → MEDIA → MARKET → SCALE
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}