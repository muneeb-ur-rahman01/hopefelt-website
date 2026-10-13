import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Echo for Equity Foundation",
    logo: "/images/partners/echo-equity.png",
  },
  {
    name: "Foundation Fighting Poverty (FFP)",
    logo: "/images/partners/ffp.png",
  },
  {
    name: "Hammad Foundation",
    logo: "/images/partners/hammad-foundation.png",
  },
  {
    name: "Fatima Farhat Foundation",
    logo: "/images/partners/fatima-farhat.png",
  },
  {
    name: "Badlo Apna Karachi",
    logo: "/images/partners/badlo-apna-karachi.png",
  },
  {
    name: "Bahria University",
    logo: "/images/partners/bahria-university.png",
  },
  {
    name: "University of Karachi",
    logo: "/images/partners/university-of-karachi.png",
  },
  {
    name: "Suno Sunao Zindagi",
    logo: "/images/partners/suno-sunao-zindagi.png",
  },
  {
    name: "STEM Connect",
    logo: "/images/partners/stem-connect.png",
  },
  {
    name: "Juvenile Evolution Pakistan",
    logo: "/images/partners/juvenile-evolution.png",
  },
  {
    name: "Ocean Busters",
    logo: "/images/partners/ocean-busters.png",
  },
];

const rehabilitationPartners = [
  {
    name: "Sunshine Rehabilitation Center",
    logo: "/images/partners/sunshine-rehabilitation.png",
  },
  {
    name: "Right Track Rehabilitation Center",
    logo: "/images/partners/right-track.png",
  },
  {
    name: "Lifesaver Rehabilitation Center",
    logo: "/images/partners/lifesaver-rehabilitation.png",
  },
];

const educationalPartners = [
  { name: "Schools", logo: "" },
  { name: "Colleges", logo: "" },
  { name: "Universities", logo: "" },
  { name: "Educational Institutions", logo: "" },
];

const childWelfarePartners = [
  { name: "Orphanage Homes", logo: "" },
  { name: "Child Welfare Organizations", logo: "" },
  { name: "Residential Care Institutions", logo: "" },
];

function getInitials(name) {
  return name
    .split(" ")
    .filter((word) => !["and", "&", "the"].includes(word.toLowerCase()))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function PartnerCard({ partner }) {
  return (
    <div className="group flex min-h-[116px] items-center gap-4 rounded-2xl border border-[#0d3749]/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4a6741]/40 hover:shadow-lg sm:p-5">
      {/* Circular Logo */}
      <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#0d3749]/10 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#4a6741]/40 group-hover:shadow-md">
        {partner.logo ? (
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            fill
            sizes="68px"
            className="rounded-full object-contain p-2"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0d3749]/5 text-sm font-bold tracking-wide text-[#0d3749] transition-colors duration-300 group-hover:bg-[#4a6741] group-hover:text-white">
            {getInitials(partner.name)}
          </span>
        )}
      </div>

      {/* Partner Name */}
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold leading-relaxed text-[#0d3749] transition-colors duration-300 group-hover:text-[#4a6741] sm:text-base">
          {partner.name}
        </h4>

        <div className="mt-2 h-1 w-8 rounded-full bg-[#4a6741]/30 transition-all duration-300 group-hover:w-12 group-hover:bg-[#4a6741]" />
      </div>

      {/* Decorative Arrow */}
      <span
        className="shrink-0 text-lg text-[#4a6741] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        aria-hidden="true"
      >
        →
      </span>
    </div>
  );
}

function PartnerGroup({ label, title, description, items }) {
  return (
    <div className="mt-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          {label}
        </p>

        <h3 className="mt-3 font-display text-2xl font-semibold text-forest sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-ink/65">{description}</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">
        {/* Main Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Partnerships & Collaborations
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest sm:text-5xl">
            Building a Network of Change.
          </h2>

          <p className="mt-5 leading-8 text-ink/65">
            Hopefelt Foundation works to build meaningful partnerships
            across organizations, healthcare, rehabilitation, education,
            and community welfare. This section highlights our
            collaborators, institutional partnerships, rehabilitation
            centers, educational institutions, and child welfare
            organizations, with room to expand as our network grows.
          </p>
        </div>

        {/* Partners & Collaborators */}
        <PartnerGroup
          label="Our Network"
          title="Our Partners & Collaborators"
          description="We value collaboration with organizations and institutions working across community development, education, health, research, and social impact."
          items={partners}
        />

        {/* Rehabilitation Partners */}
        <PartnerGroup
          label="Rehabilitation"
          title="Supporting Recovery, Restoring Hope."
          description="Through collaboration with rehabilitation centers, Hopefelt Foundation aims to strengthen community connections and support initiatives focused on recovery, well-being, and access to relevant services."
          items={rehabilitationPartners}
        />

        {/* Educational Partners */}
        <PartnerGroup
          label="Education & Learning"
          title="Connecting Education With Opportunity."
          description="Hopefelt Foundation aims to collaborate with educational institutions to create opportunities for learning, research, student engagement, awareness, and community development."
          items={educationalPartners}
        />

        {/* Child Welfare Partners */}
        <PartnerGroup
          label="Child Welfare"
          title="Creating Opportunities for Every Child."
          description="Hopefelt Foundation seeks to collaborate with orphanages, child welfare organizations, and care institutions to support initiatives that promote well-being, learning, and meaningful opportunities for children."
          items={childWelfarePartners}
        />

        {/* Call to Action */}
        <div className="mt-16 rounded-3xl border border-[#0d3749]/10 bg-white p-8 text-center shadow-sm sm:p-10">
          <h3 className="font-display text-2xl font-semibold text-[#0d3749] sm:text-3xl">
            Let&apos;s Create Meaningful Change Together.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-ink/65">
            Join Hopefelt Foundation in building partnerships that
            create opportunities, strengthen communities, and drive
            sustainable impact.
          </p>

          <Link
            href="/about/partners"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0d3749] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#4a6741]"
          >
            Explore Our Partnerships
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}