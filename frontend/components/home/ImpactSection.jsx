import Link from "next/link";
import {
  Users,
  HeartPulse,
  GraduationCap,
  FileSearch,
  MonitorCog,
  Settings,
  TrendingUp,
  Megaphone,
  Radio,
  FlaskConical,
  ClipboardList,
  ArrowRight,
  Handshake,
  CheckCircle2,
  Laptop,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const indicators = [
  {
    title: "People Reached",
    description:
      "Individuals directly and indirectly reached through our programs.",
    icon: Users,
    color: "green",
    value: "20K+",
  },
  {
    title: "Communities Engaged",
    description:
      "Communities actively engaged in our initiatives and awareness campaigns.",
    icon: Users,
    color: "blue",
    value: "25K+",
  },
  {
    title: "Projects Delivered",
    description:
      "Completed projects creating tangible, on-ground impact.",
    icon: ClipboardList,
    color: "green",
    value: "10+",
  },
  {
    title: "Campaigns",
    description: "Awareness and advocacy campaigns conducted.",
    icon: Megaphone,
    color: "blue",
    value: "5+",
  },
  {
    title: "Research Studies",
    description:
      "Research studies and assessments contributing to evidence-based solutions.",
    icon: FlaskConical,
    color: "blue",
    value: "7+",
  },
  {
    title: "People Trained",
    description:
      "Individuals trained to build stronger, healthier communities.",
    icon: GraduationCap,
    color: "green",
    value: "15+",
  },
  {
    title: "Digital Users",
    description:
      "Users benefiting from our digital health solutions and platforms.",
    icon: MonitorCog,
    color: "blue",
    value: "5k+",
  },
  {
    title: "Media Reach",
    description:
      "People reached through our media and online outreach efforts.",
    icon: ChartNoAxesColumnIncreasing,
    color: "green",
    value: "50k+",
  },
];

const impactAreas = [
  {
    title: "Health Impact",
    description:
      "Improving access to healthcare and promoting preventive care.",
    icon: HeartPulse,
  },
  {
    title: "Community Impact",
    description:
      "Empowering communities through awareness and engagement.",
    icon: Users,
  },
  {
    title: "Training Impact",
    description:
      "Building skills and capacity for healthier communities.",
    icon: GraduationCap,
  },
  {
    title: "Research Impact",
    description:
      "Generating evidence and insights for stronger public health solutions.",
    icon: FileSearch,
  },
  {
    title: "Digital Health Impact",
    description:
      "Leveraging technology for better health outcomes.",
    icon: MonitorCog,
  },
  {
    title: "Technology Impact",
    description:
      "Developing innovative solutions for real-world challenges.",
    icon: Settings,
  },
  {
    title: "Business Hub Impact",
    description:
      "Creating sustainable opportunities and collaborative ventures.",
    icon: TrendingUp,
  },
  {
    title: "Marketing Impact",
    description:
      "Amplifying our message for greater reach and participation.",
    icon: Megaphone,
  },
  {
    title: "Mass Media Impact",
    description:
      "Spreading awareness at scale for lasting change.",
    icon: Radio,
  },
];

const frameworkSteps = [
  {
    number: "01",
    title: "Programs & Initiatives",
    description:
      "Needs-driven public health programs and community activities.",
    icon: ClipboardList,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
  },
  {
    number: "02",
    title: "Technology & Innovation",
    description:
      "Digital tools, data solutions and AI-enabled approaches to enhance our work.",
    icon: Laptop,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
  },
  {
    number: "03",
    title: "Research & Development",
    description:
      "Evidence-based insights to design better and more effective solutions.",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80",
  },
  {
    number: "04",
    title: "Partnerships & Sustainability",
    description:
      "Strategic collaborations and sustainable models to scale our impact.",
    icon: Handshake,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80",
  },
  {
    number: "05",
    title: "Media & Outreach",
    description:
      "Awareness campaigns and stakeholder engagement for broader reach.",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80",
  },
  {
    number: "06",
    title: "Community Impact",
    description:
      "Creating healthier, stronger and more resilient communities.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80",
  },
];

const communityOutcomes = [
  "Healthier individuals",
  "Stronger communities",
  "Greater access to opportunities",
  "A more resilient future",
];

const cardClass =
  "group rounded-2xl border border-[#0d3749]/15 bg-white shadow-[0_4px_18px_rgba(13,55,73,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#4a6741]/50 hover:shadow-[0_12px_28px_rgba(13,55,73,0.11)]";

export default function ImpactSection() {
  return (
    <section className="overflow-hidden bg-[#fcfbf8] text-[#0d3749]">
      {/* HERO + KPI SECTION */}
      <div className="relative mx-auto max-w-[1600px] px-5 pb-12 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#4a6741]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-[#0d3749]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#4a6741]/60" />

          <p className="inline-block rounded-full bg-forest px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white">
            Impact
          </p>
            <span className="h-px w-12 bg-[#4a6741]/60" />
          </div>

          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#0d3749] sm:text-4xl lg:text-5xl">
            MEASURING THE CHANGE OUR WORK CREATES
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 italic ">
            Our impact is measured through verified data, meaningful
            outcomes and real stories from the communities and people
            we serve.
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="relative mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {indicators.map((item) => {
            const Icon = item.icon;
            const isBlue = item.color === "blue";

            return (
              <article
                key={item.title}
                className={`${cardClass} flex min-h-[166px] items-start gap-4 p-5 sm:p-6`}
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 ${
                    isBlue
                      ? "border-[#0d3749]/10 bg-[#0d3749]/[0.07] text-[#0d3749] group-hover:bg-[#0d3749] group-hover:text-white"
                      : "border-[#4a6741]/15 bg-[#4a6741]/10 text-[#4a6741] group-hover:bg-[#4a6741] group-hover:text-white"
                  }`}
                >
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-display text-4xl font-semibold leading-none text-[#0d3749]">
                    {item.value}
                  </p>

                  <h3 className="mt-2 text-sm font-bold leading-5 text-[#4a6741]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-[1.7] text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#4a6741]/10 text-[#4a6741] transition-all duration-300 group-hover:bg-[#4a6741] group-hover:text-white sm:flex">
                  <ArrowRight size={18} />
                </div>
              </article>
            );
          })}
        </div>

        {/* IMPACT AREAS */}
        {/* <div className="relative mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#4a6741]/50" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4a6741]">
                Our Impact
              </span>

              <span className="h-px w-10 bg-[#4a6741]/50" />
            </div>

            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#0d3749] sm:text-4xl">
              IMPACT ACROSS OUR ECOSYSTEM
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Advancing public health through integrated programs,
              innovation, research and community collaboration.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              const isGreen = index % 2 === 0;

              return (
                <article
                  key={area.title}
                  className={`${cardClass} flex min-h-[122px] items-center gap-4 p-4 sm:p-5`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 ${
                      isGreen
                        ? "border-[#4a6741]/15 bg-[#4a6741]/10 text-[#4a6741] group-hover:bg-[#4a6741] group-hover:text-white"
                        : "border-[#0d3749]/10 bg-[#0d3749]/[0.07] text-[#0d3749] group-hover:bg-[#0d3749] group-hover:text-white"
                    }`}
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-semibold text-[#0d3749]">
                      {area.title}
                    </h3>

                    <p className="mt-1 text-xs leading-[1.7] text-slate-600 sm:text-sm">
                      {area.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-[#4a6741] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </article>
              );
            })}
          </div>
        </div> */}

        {/* INTEGRATED IMPACT FRAMEWORK */}
        <div className="relative mt-16 overflow-hidden rounded-[28px] border border-[#0d3749]/15 bg-white px-4 py-8 shadow-[0_8px_30px_rgba(13,55,73,0.05)] sm:px-6 sm:py-10 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[#4a6741]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#0d3749]/[0.06] blur-3xl"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#4a6741]/60" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4a6741]">
                Our Impact Framework
              </span>

              <span className="h-px w-10 bg-[#4a6741]/60" />
            </div>

            <h2 className="font-display text-2xl font-semibold leading-tight text-[#0d3749] sm:text-3xl lg:text-4xl">
              AN INTEGRATED ECOSYSTEM FOR A HEALTHIER TOMORROW
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
              Our programs, people, technology and partnerships work
              together to create measurable and lasting community impact.
            </p>
          </div>

          {/* Framework Cards */}
          <div className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {frameworkSteps.map((step) => {
              const Icon = step.icon;
              const isCommunity = step.number === "06";

              return (
                <article
                  key={step.number}
                  className={`group relative overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isCommunity
                      ? "border-[#4a6741] bg-[#0d3749] text-white shadow-md shadow-[#0d3749]/10"
                      : "border-[#0d3749]/15 bg-white text-[#0d3749] shadow-sm hover:border-[#4a6741]/60"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-32 overflow-hidden sm:h-36">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d3749]/65 via-[#0d3749]/10 to-transparent" />

                    <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/40 bg-[#0d3749] text-white shadow-lg transition-colors duration-300 group-hover:bg-[#4a6741]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="absolute right-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/40 bg-white/95 px-2 text-xs font-bold text-[#0d3749] shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="px-4 pb-5 pt-5">
                    <h3
                      className={`font-display text-base font-semibold leading-5 ${
                        isCommunity ? "text-white" : "text-[#0d3749]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {isCommunity ? (
                      <ul className="mt-4 space-y-2">
                        {communityOutcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-xs leading-5 text-white/90"
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0 text-[#a8c69a]"
                            />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-xs leading-[1.7] text-slate-600">
                        {step.description}
                      </p>
                    )}

                    <div
                      className={`mt-4 h-1 rounded-full transition-all duration-300 group-hover:w-16 ${
                        isCommunity
                          ? "w-10 bg-[#a8c69a]"
                          : "w-10 bg-[#4a6741]/60"
                      }`}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM IMPACT BANNER */}
        <div className="relative mt-8 flex flex-col gap-5 overflow-hidden rounded-3xl border border-[#0d3749]/15 bg-white px-5 py-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:rounded-full lg:px-12 lg:py-7">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <div className="hidden shrink-0 text-[#4a6741] sm:block">
              <ChartNoAxesColumnIncreasing
                size={48}
                strokeWidth={1.8}
              />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4a6741] sm:text-xs sm:tracking-[0.22em]">
                Our Impact Is Guided By
              </p>

              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-[#0d3749] sm:text-3xl">
                Data. People. Progress.
              </h3>
            </div>
          </div>

          <div className="hidden h-12 w-px shrink-0 bg-[#0d3749]/15 lg:block" />

          <p className="w-full text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:max-w-xl lg:flex-1">
            We use data and real-world insights to design effective
            programs, improve outcomes and build healthier, more
            resilient communities.
          </p>

          <Link
            href="/impact"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full border border-[#0d3749] bg-[#0d3749] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:border-[#4a6741] hover:bg-[#4a6741] hover:shadow-md sm:w-auto sm:px-7 sm:py-4"
          >
            Explore Our Impact
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
