import Link from "next/link";
import {
  aboutHeaderData,
  focusFormula,
  founderVision,
  whyFutureGenerations,
  ripitalMarketingFocus, // or digitalMarketingFocus
  digitalMarketingFocus,
  completeImpactFramework,
  inclusionAndEquityData,
  partnersAndCollaboratorsData,
  roadmapTimeline,
  aboutPages,
  departmentPages,
} from "@/data/about";

export default function AboutFull() {
  return (
    <section className="bg-slate-50 text-ink py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">

        {/* ================= 1. HEADER & FORMULA BAR ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest">
            {aboutHeaderData.tagline}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest sm:text-5xl">
            {aboutHeaderData.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            {aboutHeaderData.description}
          </p>

          {/* Formula Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {focusFormula.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border ${
                    item.isResult
                      ? "bg-forest text-white border-forest shadow-md"
                      : "bg-white text-ink/90 border-line shadow-sm"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                {idx < focusFormula.length - 1 && (
                  <span className="text-sm font-bold text-ink/40">
                    {idx === focusFormula.length - 2 ? "=" : "+"}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= 2. OUR STORY, VISION, MISSION & VALUES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Our Story */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest font-bold mb-4">📖</div>
              <h3 className="text-xl font-bold text-forest mb-3">{aboutPages["who-we-are"].title}</h3>
              <p className="text-sm leading-7 text-ink/70">
                {aboutPages["who-we-are"].body[0]}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-medium text-forest space-y-1">
              <p>→ From awareness to action.</p>
              <p>→ From communities to impact.</p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest font-bold mb-4">👁️</div>
              <h3 className="text-xl font-bold text-forest mb-3">{aboutPages["our-vision"].title}</h3>
              <blockquote className="text-sm italic leading-7 text-ink/80 bg-sand/50 p-4 rounded-2xl border border-line">
                &ldquo;A future where every community thrives in health and dignity.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm leading-6 text-ink/70">
                {aboutPages["our-vision"].body[0].split(". ")[1]}
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest font-bold mb-4">🎯</div>
              <h3 className="text-xl font-bold text-forest mb-3">{aboutPages["our-mission"].title}</h3>
              <p className="text-sm leading-7 text-ink/70">
                {aboutPages["our-mission"].body[0]}
              </p>
            </div>
            <p className="mt-6 pt-4 border-t border-line text-xs font-semibold text-forest">
              Together, we turn ideas and evidence into action.
            </p>
          </div>

          {/* Our Values */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest font-bold mb-4">⭐</div>
            <h3 className="text-xl font-bold text-forest mb-4">{aboutPages["values"].title}</h3>
            <div className="grid grid-cols-2 gap-2">
              {aboutPages["values"].tags.map((val) => (
                <span key={val} className="text-xs font-medium bg-sand/60 px-3 py-1.5 rounded-xl border border-line text-ink/80">
                  • {val}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ================= 3. FOUNDER, WHY FUTURE GENERATIONS & DIGITAL MARKETING ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Founder's Vision */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-forest">Founder&apos;s Vision</span>
              <div className="flex items-center gap-4 my-4">
                <img src={founderVision.image} alt={founderVision.name} className="w-16 h-16 rounded-full object-cover border-2 border-forest" />
                <div>
                  <h4 className="font-bold text-lg text-forest">{founderVision.name}</h4>
                  <p className="text-xs text-ink/60">{founderVision.title}</p>
                </div>
              </div>
              <blockquote className="text-sm italic leading-relaxed text-ink/80 bg-sand/40 p-4 rounded-2xl border border-line">
                &ldquo;{founderVision.quote}&rdquo;
              </blockquote>
            </div>
            <div className="mt-6 text-right font-handwriting text-lg text-forest font-bold">
              {founderVision.name} —
            </div>
          </div>

          {/* Why Future Generations */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-forest">{whyFutureGenerations.eyebrow}</span>
              <h3 className="text-xl font-bold text-forest mt-1 mb-3">Building a Sustainable Tomorrow</h3>
              <p className="text-sm leading-7 text-ink/70 mb-6">
                {whyFutureGenerations.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {whyFutureGenerations.pillars.map((pillar) => (
                <div key={pillar.title} className="bg-sand/60 p-3 rounded-2xl border border-line text-center">
                  <span className="text-2xl">{pillar.icon}</span>
                  <p className="text-xs font-semibold text-forest mt-2">{pillar.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Marketing Linkages */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-forest">{digitalMarketingFocus.eyebrow}</span>
              <h3 className="text-xl font-bold text-forest mt-1 mb-3">Amplifying Real Impact</h3>
              <p className="text-sm leading-6 text-ink/70 mb-4">
                {digitalMarketingFocus.description}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-forest mb-2">Its Linkage With Our Work:</p>
              <div className="flex flex-wrap gap-1.5">
                {digitalMarketingFocus.linkages.map((link) => (
                  <span key={link} className="text-[11px] bg-sand px-2.5 py-1 rounded-lg border border-line text-ink/80 font-medium">
                    {link}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= 4. COMPLETE IMPACT FRAMEWORK ================= */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-line shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-forest">{completeImpactFramework.title}</h3>
            <p className="text-sm text-ink/70 mt-2">{completeImpactFramework.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {completeImpactFramework.steps.map((item) => (
              <div key={item.step} className="bg-sand/50 rounded-2xl p-4 border border-line flex flex-col justify-between text-center">
                <div>
                  <span className="inline-block w-8 h-8 rounded-full bg-forest text-white text-xs font-bold leading-8 mb-2 shadow">
                    {item.step}
                  </span>
                  <h4 className="font-bold text-sm text-forest">{item.title}</h4>
                  <p className="text-xs text-ink/70 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-forest text-white py-3 rounded-2xl text-sm font-semibold tracking-wide">
            {completeImpactFramework.footerBanner}
          </div>
        </div>

        {/* ================= 5. INCLUSION & EQUITY + DEPARTMENTS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Inclusion & Equity */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-forest mb-2">{inclusionAndEquityData.title}</h3>
              <p className="text-sm text-ink/70 mb-6">{inclusionAndEquityData.subtitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {inclusionAndEquityData.commitments.map((com) => (
                  <div key={com} className="flex items-center gap-2 text-xs font-medium text-ink/80 bg-sand/40 p-2.5 rounded-xl border border-line">
                    <span className="text-forest font-bold">✓</span> {com}
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="text-xs italic text-forest font-medium bg-forest/5 p-4 rounded-2xl border border-forest/10">
              {inclusionAndEquityData.quote}
            </blockquote>
          </div>

          {/* Departments Overview */}
          <div className="bg-white rounded-3xl p-8 border border-line shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-forest">Our Structure</span>
              <h3 className="text-2xl font-bold text-forest mt-1 mb-2">Our Departments</h3>
              <p className="text-sm text-ink/70 mb-6">Specialized teams working together with a shared purpose and Impact Framework.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-2">
                {Object.keys(departmentPages).map((key) => {
                  const dept = departmentPages[key];
                  return (
                    <div key={key} className="p-3 rounded-2xl bg-sand/50 border border-line flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-forest shrink-0"></span>
                      <span className="text-xs font-bold text-ink/90">{dept.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* ================= 6. PARTNERS & COLLABORATORS ================= */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-line shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-forest">{partnersAndCollaboratorsData.title}</h3>
            <p className="text-sm text-ink/70 mt-2">{partnersAndCollaboratorsData.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersAndCollaboratorsData.categories.map((cat) => (
              <div key={cat.title} className="bg-sand/40 p-6 rounded-2xl border border-line flex items-start gap-4">
                <span className="text-3xl p-2 bg-white rounded-xl shadow-sm border border-line">{cat.icon}</span>
                <div>
                  <h4 className="font-bold text-sm text-forest">{cat.title}</h4>
                  <p className="text-xs text-ink/70 mt-1 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 7. ROADMAP TIMELINE (2025 - 2030) ================= */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-line shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-forest">{roadmapTimeline.title}</h3>
            <p className="text-sm text-ink/70 mt-2">{roadmapTimeline.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {roadmapTimeline.stages.map((stage) => (
              <div key={stage.year} className="bg-sand/50 rounded-2xl p-5 border border-line flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white bg-forest inline-block px-3 py-1 rounded-full mb-3 shadow-sm">
                    {stage.year}
                  </div>
                  <h4 className="font-bold text-sm text-forest mb-3">{stage.title}</h4>
                  <ul className="space-y-2">
                    {stage.points.map((pt) => (
                      <li key={pt} className="text-xs text-ink/70 flex items-start gap-1.5">
                        <span className="text-forest font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about/who-we-are"
              className="inline-flex rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-forestDark shadow-md"
            >
              Explore Full About Details
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}