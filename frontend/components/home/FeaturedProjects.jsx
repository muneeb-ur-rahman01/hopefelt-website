import Link from "next/link";

const projects = [
  {
    title: "Health & Medical Support",
    category: "HEALTH",
    description: "Community-focused medical camps, screening and preventive health initiatives.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    pills: ["Medical Camps", "Screening", "Health Awareness"],
  },
  {
    title: "Community Development",
    category: "COMMUNITY",
    description: "Community outreach, engagement, mobilization and support for vulnerable communities.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
    pills: ["Awareness Sessions", "Community Engagement", "Support Programs"],
  },
  {
    title: "Digital Health Innovation",
    category: "DIGITAL HEALTH",
    description: "Digital solutions designed to improve access, information, screening and health-service coordination.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    pills: ["PHMIS", "Virtual Care", "Data Systems"],
  },
  {
    title: "Blood Donation Drives",
    category: "PARTNERSHIPS",
    description: "Collaborative blood donation campaigns to support hospitals and save lives.",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
    pills: ["Donor Mobilization", "Hospital Support", "Community Participation"],
  },
  {
    title: "Green Initiatives",
    category: "ENVIRONMENT & WELLBEING",
    description: "Tree plantation and environment-focused activities for healthier and safer communities.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    pills: ["Tree Plantation", "Environmental Awareness", "Community Participation"],
  },
  {
    title: "Capacity Building",
    category: "EDUCATION & TRAINING",
    description: "Training, workshops and skill development for communities, students and professionals.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    pills: ["Training Sessions", "Workshops", "Skill Development"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              FEATURED PROJECTS —
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-5xl leading-tight">
              Turning Ideas and Community Needs into Action.
            </h2>

            <p className="mt-4 leading-relaxed text-ink/65">
              Explore selected Hopefelt projects and see how our programmes, research, technology and partnerships connect to meaningful and measurable impact[cite: 8].
            </p>
          </div>

          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest/90"
            >
              View All Projects →
            </Link>
          </div>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-line bg-white flex flex-col justify-between shadow-sm transition hover:shadow-md"
            >
              <div>
                {/* Project Image */}
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                  }}
                />

                <div className="p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-forest">
                    {project.category}
                  </span>

                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-ink/65">
                    {project.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-line bg-surface/50 px-3 py-1 text-[11px] font-medium text-ink/80"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-line">
                  <Link
                    href="/projects"
                    className="inline-flex text-xs font-semibold text-forest hover:underline"
                  >
                    Explore Project →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}