"use client";

import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: "Echo for Equity Foundation", logo: "/images/partners/echoforequity.jpeg" },
  { name: "Foundation Fighting Poverty (FFP)", logo: "/images/partners/ffp.png" },
  { name: "Hammad Foundation", logo: "/images/partners/hammad.jpg" },
  { name: "Fatima Farhat Foundation", logo: "/images/partners/fatimafoundation.png" },
  { name: "Blessing Foundation", logo: "/images/partners/blessingfoundation.png" },
  { name: "Badlo Apna Karachi", logo: "/images/partners/badloapnakarachi.jpg" },
  { name: "Bahria University", logo: "/images/partners/BU logo.png" },
  { name: "University of Karachi", logo: "/images/partners/KU logo.png" },
  { name: "Suno Sunao Zindagi", logo: "/images/partners/sunosunaozindagi.png" },
  { name: "STEM Connect", logo: "/images/partners/stemconnect.png" },
  { name: "Juvenile Evolution Pakistan", logo: "/images/partners/juvenile.png" },
  { name: "Ocean Busters", logo: "/images/partners/ocean.jpeg" },
];

const rehabilitationPartners = [
  { name: "Sunshine Rehabilitation Center", logo: "/images/partners/sunshine.jpeg" },
  { name: "Right Track Rehabilitation Center", logo: "/images/partners/righttrack.jpeg" },
  { name: "Lifesaver Rehabilitation Center", logo: "/images/partners/lifesavior.jpg" },
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

function PartnerCard({ partner, logosOnly = false }) {
  if (logosOnly) {
    return (
      <div className="relative flex h-[110px] w-[180px] shrink-0 items-center justify-center sm:h-[120px] sm:w-[200px]">
        <div className="relative h-[100px] w-full sm:h-[110px]">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            fill
            sizes="200px"
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="group flex h-[112px] w-[270px] shrink-0 items-center gap-4 rounded-2xl border border-[#0d3749]/10 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4a6741]/50 hover:shadow-lg sm:h-[120px] sm:w-[300px] sm:px-5">
      <div className="relative flex h-[84px] w-[84px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#0d3749]/10 bg-white shadow-sm sm:h-[92px] sm:w-[92px]">
        {partner.logo ? (
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            fill
            sizes="92px"
            className="rounded-full object-contain p-1.5"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0d3749]/5 text-lg font-bold text-[#0d3749] transition-colors duration-300 group-hover:bg-[#4a6741] group-hover:text-white">
            {getInitials(partner.name)}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="line-clamp-3 text-sm font-semibold leading-5 text-[#0d3749] transition-colors duration-300 group-hover:text-[#4a6741] sm:text-[15px] sm:leading-[1.4]">
          {partner.name}
        </h4>

        <div className="mt-2 h-[3px] w-9 rounded-full bg-[#4a6741]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#4a6741]" />
      </div>

      <span
        aria-hidden="true"
        className="shrink-0 text-xl text-[#4a6741] transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </div>
  );
}

function PartnerMarquee({
  items,
  duration = 35,
  logosOnly = false,
}) {
  const copies = [0, 1, 2, 3];
  const displayItems = logosOnly
    ? items.filter((partner) => partner.logo)
    : items;

  if (displayItems.length === 0) return null;

  return (
    <div className="group/marquee relative mt-7 w-full overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#f8f5ed] to-transparent sm:w-16" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#f8f5ed] to-transparent sm:w-16" />

      <div
        className="partner-track flex w-max"
        style={{ "--duration": `${duration}s` }}
      >
        {copies.map((copy) => (
          <div
            key={copy}
            aria-hidden={copy !== 0 ? "true" : undefined}
            className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5"
          >
            {displayItems.map((partner, index) => (
              <PartnerCard
                key={`${partner.name}-${index}`}
                partner={partner}
                logosOnly={logosOnly}
              />
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .partner-track {
          animation: partner-marquee var(--duration) linear infinite;
          will-change: transform;
        }

        .group\\/marquee:hover .partner-track {
          animation-play-state: paused;
        }

        @keyframes partner-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-25%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-track {
            animation: none;
            transform: none;
            will-change: auto;
          }
        }
      `}</style>
    </div>
  );
}

function PartnerGroup({
  label,
  title,
  description,
  items,
  duration = 35,
  logosOnly = false,
}) {
  return (
    <div className="mt-14">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a6741]">
          {label}
        </p>

        <h3 className="mt-3 font-display text-2xl font-semibold text-[#0d3749] sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-[#0d3749]/70">
          {description}
        </p>
      </div>

      <PartnerMarquee
        items={items}
        duration={duration}
        logosOnly={logosOnly}
      />
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="overflow-hidden bg-[#f8f5ed] py-16 sm:py-20">
      <div className="mx-auto max-w-[100rem]">
        <header className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4a6741]">
            Partnerships & Collaborations
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#0d3749] sm:text-5xl">
            Building a Network of Change.
          </h2>

          <p className="mt-5 leading-8 text-[#0d3749]/70">
            Hopefelt Foundation works to build meaningful partnerships
            across organizations, healthcare, rehabilitation, education,
            and community welfare. Together, we aim to strengthen
            communities and create lasting, positive change.
          </p>
        </header>

        {/* Logos only: no card, name, or arrow */}
        <PartnerGroup
          label="Our Network"
          title="Our Partners & Collaborators"
          description="Organizations and institutions working across community development, education, health, research, and social impact."
          items={partners}
          duration={35}
          logosOnly
        />

        {/* Logos only: no card, name, or arrow */}
        <PartnerGroup
          label="Rehabilitation"
          title="Supporting Recovery, Restoring Hope."
          description="Building connections that support recovery, well-being, and access to rehabilitation services."
          items={rehabilitationPartners}
          duration={5}
          logosOnly
        />

        {/* Education remains unchanged */}
        <PartnerGroup
          label="Education & Learning"
          title="Connecting Education With Opportunity."
          description="Creating opportunities for learning, research, student engagement, awareness, and community development."
          items={educationalPartners}
          duration={5}
        />

        {/* Child Welfare remains unchanged */}
        <PartnerGroup
          label="Child Welfare"
          title="Creating Opportunities for Every Child."
          description="Working towards children's well-being, learning, care, and meaningful opportunities."
          items={childWelfarePartners}
          duration={5}
        />

        <div className="mx-5 mt-16 rounded-3xl border border-[#0d3749]/10 bg-white p-7 text-center shadow-sm sm:mx-8 sm:p-10 lg:mx-12">
          <h3 className="font-display text-2xl font-semibold text-[#0d3749] sm:text-3xl">
            Let's Create Meaningful Change Together.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#0d3749]/65">
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