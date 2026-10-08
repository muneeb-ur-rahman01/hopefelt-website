import Link from "next/link";

const areas = [
  ["Health & Medical Support", "/our-work/health-medical-support"],
  ["Health Education & Awareness", "/our-work/health-education-awareness"],
  ["Community Development", "/our-work/community-development"],
  ["Climate & Environment", "/our-work/climate-environment"],
  ["Social Support & Learning", "/our-work/social-support-learning"],
  ["Research & Evidence", "/our-work/research-evidence"],
  ["Digital Health", "/digital-health"],
  ["Technology & Digital Innovation", "/technology"],
  ["Entrepreneurship & Business", "/business-hub"],
  ["Training & Capacity Development", "/training"],
  ["Marketing & Communications", "/communications"],
  ["Mass Media & Public Awareness", "/communications/mass-media"],
];

export default function ExploreSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            What We Do
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
            From community needs to practical solutions.
          </h2>

          <p className="mt-5 leading-8 text-ink/65">
            Our work brings together programs, evidence, innovation,
            technology, entrepreneurship, communication and partnerships.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {areas.map(([title, href], index) => (
            <Link
              key={title}
              href={href}
              className="group rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:bg-sand hover:shadow-card"
            >
              <span className="text-xs font-semibold text-forest/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 font-display text-xl font-semibold text-ink group-hover:text-forest">
                {title}
              </h3>

              <span className="mt-6 inline-flex text-sm font-semibold text-forest">
                Explore →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}