import Link from "next/link";

const indicators = [
  "People Reached",
  "Communities Engaged",
  "Projects Delivered",
  "Campaigns",
  "Research Studies",
  "People Trained",
  "Digital Users",
  "Media Reach",
];

const impactAreas = [
  "Health Impact",
  "Community Impact",
  "Training Impact",
  "Research Impact",
  "Digital Health Impact",
  "Technology Impact",
  "Business Hub Impact",
  "Marketing Impact",
  "Mass Media Impact",
];

export default function ImpactSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Impact
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Measuring the change our work creates.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-ink/65">
            Impact should be demonstrated through verified data, meaningful
            outcomes and stories from the communities and people we serve.
          </p>
        </div>

        {/* KPI CARDS */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((indicator) => (
            <div
              key={indicator}
              className="rounded-2xl border border-line bg-sand p-6"
            >
              <div className="h-9 w-20 rounded bg-white" />

              <p className="mt-4 text-sm font-semibold text-ink">
                {indicator}
              </p>

              <p className="mt-2 text-xs text-ink/40">
                Verified figure to be added
              </p>
            </div>
          ))}
        </div>

        {/* IMPACT AREAS */}

        <div className="mt-12">
          <h3 className="text-center font-display text-2xl font-semibold text-forest">
            Impact Across Our Ecosystem
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-line p-5 text-center text-sm font-semibold text-ink"
              >
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* FLOW */}

        <div className="mt-12 rounded-3xl bg-forest p-8 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Our Impact Flow
          </p>

          <p className="mt-4 font-display text-xl font-semibold leading-9 sm:text-2xl">
            Program → Technology → Business → Marketing → Media → Community /
            Market → Impact
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/impact"
            className="inline-flex rounded-full border border-forest px-6 py-3 text-sm font-semibold text-forest"
          >
            Explore Our Impact
          </Link>
        </div>

      </div>
    </section>
  );
}