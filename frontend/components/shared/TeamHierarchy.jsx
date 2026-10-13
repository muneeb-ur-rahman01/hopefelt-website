import Link from "next/link";

// Hierarchy Data Structure
const hierarchyData = {
  founder: {
    name: "AFRAH SADIA",
    role: "Founder & CEO",
    image: "/images/Afrah.jpg",
    color: "bg-emerald-600 text-white",
    ringColor: "border-emerald-600",
  },
  coFounder: {
    name: "ALISHBA NOOR",
    role: "Co-Founder & COO",
    image: "/images/Alishba.jpg",
    color: "bg-teal-600 text-white",
    ringColor: "border-teal-600",
  },
  departments: [
    {
      name: "USAMA BIN ZAHID",
      role: "Head of Research & Development",
      image: "/images/usama.jpg",
      color: "bg-lime-500 text-slate-900",
      ringColor: "border-lime-500",
    },
    {
      name: "MUHAMMAD RIZWAN",
      role: "Head of Field Operations",
      image: "/images/Rizwan.jpg",
      color: "bg-teal-500 text-white",
      ringColor: "border-teal-500",
    },
    {
      name: "SHARJEEL",
      role: "Head of Technology (IT)",
      image: "/images/Sharjeel.jpg",
      color: "bg-emerald-500 text-white",
      ringColor: "border-emerald-500",
    },
    {
      name: "Ayesha Noor",
      role: "Head of Communications",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      color: "bg-cyan-600 text-white",
      ringColor: "border-cyan-600",
    },
  ],
};

export default function TeamHierarchy() {
  return (
    <section className="bg-slate-50 py-24 overflow-x-auto">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12 min-w-[1000px]">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block rounded-full bg-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-forest mb-3">
            ORGANIZATIONAL STRUCTURE
          </span>
          <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
            Team Hierarchy
          </h2>
          <p className="mt-3 text-sm text-ink/65">
            Leadership and departmental command structure driving our mission forward.
          </p>
        </div>

        {/* Tree Container */}
        <div className="flex flex-col items-center relative">
          
          {/* --- TOP LEVEL: Founder & Co-Founder --- */}
          <div className="flex justify-center gap-20 mb-20 relative">
            {[hierarchyData.founder, hierarchyData.coFounder].map((leader, idx) => (
              <div key={idx} className="relative flex items-center bg-white rounded-full shadow-lg p-3 pr-10 border border-line min-w-[320px]">
                {/* Larger Circular Avatar */}
                <div className={`relative h-20 w-20 rounded-full overflow-hidden border-4 ${leader.ringColor} shrink-0 shadow-md bg-white`}>
                  <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                </div>
                {/* Info Card Badge */}
                <div className={`ml-5 px-6 py-3 rounded-2xl ${leader.color} shadow-md w-full`}>
                  <h3 className="font-display font-bold text-sm leading-tight tracking-wide">{leader.name}</h3>
                  <p className="text-xs opacity-95 mt-1 font-medium">{leader.role}</p>
                </div>
              </div>
            ))}

            {/* Vertical connector dropping down from top level */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-forest/30" />
          </div>

          {/* Horizontal Branching Line for Departments */}
          <div className="w-[78%] h-0.5 bg-forest/30 relative mb-16">
            {/* Center connector up */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-forest/30" />
          </div>

          {/* --- BOTTOM LEVEL: Department Heads --- */}
          <div className="grid grid-cols-4 gap-8 w-full max-w-7xl">
            {hierarchyData.departments.map((dept, idx) => (
              <div key={idx} className="relative flex flex-col items-center pt-8">
                {/* Vertical line connecting to horizontal bar */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-forest/30" />

                {/* Node Box */}
                <div className="relative bg-white rounded-3xl shadow-lg p-5 pt-14 border border-line text-center w-full flex flex-col items-center">
                  {/* Larger Circular Avatar overlapping top */}
                  <div className={`absolute -top-10 h-20 w-20 rounded-full overflow-hidden border-4 ${dept.ringColor} shadow-lg bg-white`}>
                    <img src={dept.image} alt={dept.name} className="h-full w-full object-cover" />
                  </div>

                  {/* Details Badge */}
                  <div className={`w-full mt-3 p-4 rounded-2xl ${dept.color} shadow-md text-center`}>
                    <h4 className="font-display font-bold text-xs leading-tight tracking-wide">{dept.name}</h4>
                    <p className="text-[11px] opacity-95 mt-1 font-medium">{dept.role}</p>
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