import Link from "next/link";

const projects = [
  {
    title: "Research, Evidence & Innovation",
    category: "RESEARCH & INNOVATION",
    description:
      "Hopefelt advances research and innovation through public health, applied and community-based research, data analysis, and evidence generation. We create opportunities for research presentations, publications, competitions, and collaborations that translate knowledge into practical solutions for real-world challenges.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    pills: [
      "Public Health Research",
      "Evidence Generation",
      "Research Collaboration",
    ],
  },
  // {
  //   title: "Research to Market",
  //   category: "TECHNOLOGY & ENTREPRENEURSHIP",
  //   description:
  //     "We connect research with innovation, technology, entrepreneurship, and marketing to transform promising ideas into practical products, services, and scalable ventures.",
  //   image:
  //     "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  //   pills: [
  //     "Product Development",
  //     "Business Hub",
  //     "Market Launch",
  //   ],
  // },   
];

export default function FeaturedProjects() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">
        {/* Top Header Section */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
           <p className="inline-block rounded-full bg-forest px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Featured Projects
          </p>

            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#0d3749] sm:text-5xl">
              Ideas Into Action. Impact Into Reality.
            </h2>

            <p className="mt-4 leading-relaxed text-ink/65 italic">
              "Discover Hopefelt Foundation&apos;s initiatives across
              community health, research, technology, and innovation creating
              opportunities, addressing real-world challenges, and driving
              meaningful change"
            </p>
          </div>

          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest/90"
            >
              View All Projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                {/* Project Image */}
                <div
                  className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                  }}
                  role="img"
                  aria-label={project.title}
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

              {/* Compact Explore Link */}
              <div className="p-6 pt-0">
                <div className="border-t border-line pt-4">
                  <Link
                    href="/projects"
                    className="group/explore inline-flex items-center gap-2 rounded-md border border-[#0d3749]/30 px-3 py-2 text-xs font-semibold text-[#0d3749] transition-all duration-300 hover:border-[#4a6741] hover:bg-forest hover:text-white"
                  >
                    <span>Explore</span>
                    <span className="transition-transform duration-300 group-hover/explore:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Research to Market Process */}
    
      </div>
    </section>
  );
}


//     <div className="mt-16 overflow-hidden rounded-3xl border border-[#0d3749]/10 bg-white p-6 shadow-sm sm:p-10">
//   {/* Section Header */}
//   <div className="max-w-3xl">
//     <span className="inline-flex items-center rounded-full border border-[#4a6741]/20 bg-[#4a6741]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4a6741]">
//       Research to Market
//     </span>

//     <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#0d3749] sm:text-4xl">
//       From Research to Real-World Solutions.
//     </h3>

//     <p className="mt-4 leading-relaxed text-ink/65">
//       We connect research with innovation, technology,
//       entrepreneurship, and marketing to transform promising ideas
//       into practical products, services, and scalable ventures.
//     </p>
//   </div>

//   {/* Modern Process Chain */}
//   <div className="mt-10">
//     <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
//       {[
//         "Research",
//         "Discovery",
//         "Innovation",
//         "Technology",
//         "Product Development",
//         "Business Hub",
//         "Marketing & Media",
//         "Market Launch",
//         "Scale",
//       ].map((step, index) => (
//         <div key={step} className="relative flex">
//           <div className="group relative flex min-h-[112px] w-full items-start gap-3 overflow-hidden rounded-2xl border border-[#0d3749]/10 bg-[#0d3749]/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a6741]/40 hover:bg-[#4a6741]/[0.06] hover:shadow-md">
//             {/* Step Number */}
//             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0d3749] text-xs font-bold text-white transition-colors duration-300 group-hover:bg-[#4a6741]">
//               {String(index + 1).padStart(2, "0")}
//             </div>

//             {/* Step Content */}
//             <div className="min-w-0 pt-1">
//               <p className="text-sm font-semibold leading-snug text-[#0d3749]">
//                 {step}
//               </p>

//               <div className="mt-3 h-1 w-8 rounded-full bg-[#4a6741]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#4a6741]" />
//             </div>

//             {/* Desktop connector */}
//             {index < 8 && (
//               <span
//                 className="absolute -right-[9px] top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center text-lg font-semibold text-[#4a6741] xl:flex"
//                 aria-hidden="true"
//               >
//                 →
//               </span>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// // </div>