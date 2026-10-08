import Link from "next/link";

const departments = [
  "Public Health Research & Development",
  "Community Outreach & Field Operations",
  "Monitoring, Evaluation, Accountability & Learning",
  "Partnerships, Advocacy & External Relations",
  "Resource Mobilization & Fundraising",
  "Administration, HR & Logistics",
  "IT, Technology & Digital Innovation",
  "Digital Health & Health Innovation",
  "Programs, Training & Capacity Development",
  "Communications, Marketing & Media",
  "Business Hub",
];

export default function TeamHierarchy() {
  return (
    <section className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          Our Organization
        </p>

        <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
          People and departments working together for impact.
        </h2>

        <p className="mt-5 leading-8 text-ink/65">
          Hopefelt brings together multidisciplinary teams across health,
          research, technology, digital health, training, communications,
          partnerships and business.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((department, index) => (
          <Link
            key={department}
            href="/about/our-departments"
            className="group rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:border-forest/20 hover:shadow-card"
          >
            <span className="text-xs font-semibold text-forest/50">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-3 font-display text-lg font-semibold text-ink transition group-hover:text-forest">
              {department}
            </h3>
          </Link>
        ))}
      </div>

    </section>
  );
}