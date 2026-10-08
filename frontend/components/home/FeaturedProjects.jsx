import Link from "next/link";

const projects = [
  {
    title: "Health & Medical Support",
    category: "Health",
    description:
      "Community-focused health activities, medical support, screening and preventive health initiatives.",
    image: "/images/projects/health-project.jpg",
  },
  {
    title: "Community Development",
    category: "Community",
    description:
      "Community outreach, engagement, mobilization and support for vulnerable communities.",
    image: "/images/projects/community-project.jpg",
  },
  {
    title: "Digital Health Innovation",
    category: "Digital Health",
    description:
      "Digital solutions designed to improve access, information, screening and health services.",
    image: "/images/projects/digital-health-project.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Featured Projects
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
              Turning ideas and community needs into action.
            </h2>

            <p className="mt-5 leading-8 text-ink/65">
              Explore selected Hopefelt projects and see how programs,
              research, technology, marketing and partnerships connect to
              measurable impact.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-sm font-semibold text-forest"
          >
            View All Projects →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-line bg-white"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${project.image}')`,
                }}
              />

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-forest">
                  {project.category}
                </span>

                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-ink/60">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 text-xs text-ink/50">
                  <span>Project</span>
                  <span>→</span>
                  <span>Technology</span>
                  <span>→</span>
                  <span>Marketing</span>
                  <span>→</span>
                  <span>Impact</span>
                </div>

                <Link
                  href="/projects"
                  className="mt-6 inline-flex text-sm font-semibold text-forest"
                >
                  Explore Project →
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}