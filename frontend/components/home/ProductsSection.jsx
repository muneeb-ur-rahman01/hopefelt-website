import Link from "next/link";
import Image from "next/image";
import worksphereImage from "../../public/images/worksphere.jpeg";

const products = [
  {
    name: "Work Sphere",
    type: "Productivity & Operations",
    description:
      "An integrated platform to manage projects, teams, communication and operations — designed for organizations creating real-world impact.",
    tagline: (
      <>
        Organize<br />
        Collaborate<br />
        Create Impact
      </>
    ),
    image: worksphereImage,
    pills: ["Project Management", "Team Collaboration", "Reporting & Insights"],
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  // Aap mazeed products yahan add kar sakte hain
];

const workflowSteps = [
  {
    name: "Problem",
    icon: (
      <svg className="h-3.5 w-3.5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    name: "Solution",
    icon: (
      <svg className="h-3.5 w-3.5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    name: "Features",
    icon: (
      <svg className="h-3.5 w-3.5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    name: "Users",
    icon: (
      <svg className="h-3.5 w-3.5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: "Impact",
    icon: (
      <svg className="h-3.5 w-3.5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              OUR PRODUCTS —
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-5xl leading-tight">
             INNOVATION THAT DRIVE<br />
              Solutions That Matter.
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-ink/65">
              Explore our digital products designed to streamline operations, strengthen public health systems, and make essential services more accessible through technology and innovation.
            </p>

            <div className="mt-6">
              <Link
                href="/technology/products"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest/90"
              >
                Explore Our Products →
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:items-end justify-between gap-4">
            <div className="text-xs font-semibold tracking-[0.15em] text-ink/50 space-y-1 lg:text-right">
              <div>TECHNOLOGY</div>
              <div>PEOPLE</div>
              <div>STRONGER COMMUNITIES</div>
            </div>

            <Link
              href="/technology/products"
              className="text-sm font-semibold text-forest hover:underline"
            >
              View All Products →
            </Link>
          </div>
        </div>

        {/* Products Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-3xl border border-line bg-surface overflow-hidden flex flex-col justify-between shadow-sm transition hover:shadow-md"
            >
              <div>
                {/* Preview Header: Left Tagline & Right Logo Image with proper contain fitting */}
                <div className="relative h-36 w-full bg-gradient-to-br from-emerald-50/80 via-forest/5 to-emerald-100/40 rounded-t-3xl overflow-hidden px-5 py-3 flex items-center justify-between border-b border-line gap-3">
                  <div className="font-display italic text-forest text-sm font-semibold leading-tight shrink-0 max-w-[42%]">
                    {product.tagline}
                  </div>

                  <div className="relative w-[58%] h-28 rounded-xl overflow-hidden shadow-sm border border-white/90 bg-white flex items-center justify-center p-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-forest/10">
                      {product.icon}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-forest">
                      {product.type}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-ink">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-ink/65 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-ink/80 shadow-2xs"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                {/* Workflow steps */}
                <div className="mt-4 border-t border-line pt-4 flex items-center justify-between text-[10px] text-ink/50">
                  {workflowSteps.map((step, idx) => (
                    <div key={step.name} className="flex items-center gap-1.5">
                      <div className="flex flex-col items-center text-center">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-forest/5 mb-0.5">
                          {step.icon}
                        </div>
                        <span className="font-medium text-[10px] text-ink/70">{step.name}</span>
                      </div>
                      {idx < workflowSteps.length - 1 && (
                        <span className="text-ink/30 text-[10px] mb-3">→</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-line">
                  <Link
                    href="https://work-sphere-self.vercel.app"
                    className="inline-flex text-xs font-semibold text-forest hover:underline"
                  >
                    Explore {product.name} →
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