import Link from "next/link";

// Hierarchy Data Structure
const hierarchyData = {
  founder: {
    name: "AFRAH SADIA",
    role: "Founder & CEO",
    image: "/images/Team/Afrah.jpg",
    color: "bg-teal-600 text-white",
    ringColor: "border-emerald-600",
  },
  coFounder: {
    name: "ALISHBA NOOR",
    role: "Co-Founder & COO",
    image: "/images/Team/Alishba.jpg",
    color: "bg-teal-600 text-white",
    ringColor: "border-teal-600",
  },
  departments: [
    {
      name: "USAMA BIN ZAHID",
      role: "Sales | Marketing",
      image: "/images/Team/usama.jpg",
     color: "bg-cyan-600 text-white",
      ringColor: "border-lime-500",
    },
    {
      name: "MUHAMMAD RIZWAN",
      role: "Operational Team",
      image: "/images/Team/Rizwan.jpg",
      color: "bg-cyan-600 text-white",
      ringColor: "border-teal-500",
    },
    {
      name: "SHARJEEL",
      role: "Social Media Manager",
      image: "/images/Team/Sharjeel.jpg",
    color: "bg-cyan-600 text-white",
      ringColor: "border-emerald-500",
    },
    // {
    //   name: "Muhammad Muneeb Ur Rahman Shahzad",
    //   role: "Head of Development Department (HOD)",
    //   image:
    //     "/images/Team/Muneeb.jpeg",
    //   color: "bg-cyan-600 text-white",
    //   ringColor: "border-cyan-600",
    // },
  ],
};

export default function TeamHierarchy() {
  const leaders = [
    hierarchyData.founder,
    hierarchyData.coFounder,
  ];

  return (
    <section className="overflow-hidden bg-slate-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-6 lg:px-12">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
          <span className="mb-3 inline-block rounded-full bg-forest px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs sm:tracking-[0.2em]">
            Organizational Structure
          </span>

          <h2 className="font-display text-2xl font-semibold text-[#0d3749] sm:text-3xl md:text-4xl">
            TEAM HIERARCHY
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink/65 sm:text-base sm:leading-7 italic">
            "Leadership and departmental command structure driving our
            mission forward".
          </p>
        </div>

        {/* HIERARCHY TREE */}
        <div className="relative mx-auto max-w-7xl">

          {/* LEADERSHIP */}
          <div className="relative">

            {/* Desktop connector */}
            <div className="absolute left-1/2 top-full hidden h-10 w-0.5 -translate-x-1/2 bg-forest/30 md:block" />

            <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:gap-6 lg:gap-10">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="flex w-full max-w-md items-center gap-3 rounded-3xl border border-line bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-5 sm:p-4 md:max-w-none"
                >
                  {/* AVATAR */}
                  <div
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 ${leader.ringColor} bg-white shadow-sm sm:h-24 sm:w-24 lg:h-28 lg:w-28`}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* DETAILS */}
                  <div
                    className={`min-w-0 flex-1 rounded-2xl ${leader.color} px-3 py-4 shadow-sm sm:px-5 sm:py-5`}
                  >
                    <h3 className="break-words font-display text-xs font-bold leading-snug tracking-wide sm:text-sm lg:text-base">
                      {leader.name}
                    </h3>

                    <p className="mt-1 text-[11px] font-medium opacity-95 sm:text-xs">
                      {leader.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONNECTOR BETWEEN LEADERSHIP AND DEPARTMENTS */}
          <div className="relative mx-auto mt-8 mb-8 hidden h-10 w-[75%] md:block">
            {/* Horizontal branch */}
            <div className="absolute left-1/4 right-1/4 top-0 h-0.5 bg-forest/30" />

            {/* Left branch */}
            <div className="absolute left-1/4 top-0 h-10 w-0.5 bg-forest/30" />

            {/* Right branch */}
            <div className="absolute right-1/4 top-0 h-10 w-0.5 bg-forest/30" />

            {/* Center branch */}
            <div className="absolute left-1/2 -top-10 h-10 w-0.5 -translate-x-1/2 bg-forest/30" />
          </div>

          {/* MOBILE SECTION LABEL */}
          <div className="mb-8 mt-10 text-center md:mt-0">
            <span className="inline-flex rounded-full border border-forest/15 bg-[#0d3749] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
              Departmental Team
            </span>
          </div>

          {/* DEPARTMENT CARDS */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6">

            {hierarchyData.departments.map((dept, idx) => (
              <div
                key={dept.name}
                className="relative flex min-w-0 flex-col items-center pt-12"
              >
                {/* Desktop connector */}
                <div className="absolute -top-8 left-1/2 hidden h-8 w-0.5 -translate-x-1/2 bg-forest/30 lg:block" />

                {/* DEPARTMENT CARD */}
                <div className="flex h-full w-full flex-col items-center rounded-3xl border border-line bg-white px-4 pb-5 pt-0 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-3 lg:px-4">

                  {/* AVATAR */}
                  <div
                    className={`relative -mt-12 h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 ${dept.ringColor} bg-white shadow-md sm:h-24 sm:w-24 lg:h-28 lg:w-28`}
                  >
                    <img
                      src={dept.image}
                      alt={dept.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* DETAILS BADGE */}
                  <div
                    className={`mt-4 flex min-h-[100px] w-full flex-col items-center justify-center rounded-2xl px-3 py-4 ${dept.color} shadow-sm`}
                  >
                    <h3 className="break-words font-display text-xs font-bold leading-5 tracking-wide sm:text-[11px] md:text-xs">
                      {dept.name}
                    </h3>

                    <p className="mt-2 text-[11px] font-medium leading-5 opacity-95 sm:text-xs">
                      {dept.role}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
