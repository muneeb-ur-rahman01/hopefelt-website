"use client";

/*
 * Optional generic page for every "Apply Now" link: /get-involved/<slug>
 * Put at: app/get-involved/[slug]/page.jsx
 * (If you already have dedicated pages per opportunity, just drop <ApplyForm slug="..." />
 *  into them instead — static routes take priority over this dynamic one.)
 */

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ApplyForm from "@/components/ApplyForm";
import { useApp } from "@/context/AppContext";

// Opportunity-specific questions (sent inside `details`). Must match the backend's
// `requiredDetails` in config/opportunities.js.
const EXTRA_FIELDS = {
  "campus-representative": [{ name: "institution", label: "School / College / University", required: true }],
  researcher: [{ name: "researchArea", label: "Research area" }],
  "technology-team": [{ name: "skills", label: "Main technical skills" }],
};

export default function ApplyPage() {
  const { slug } = useParams();
  const { opportunities, loadOpportunities } = useApp();

  useEffect(() => {
    if (!opportunities) loadOpportunities().catch(() => {});
  }, [opportunities, loadOpportunities]);

  const opp = opportunities?.find((o) => o.slug === slug);

  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <nav aria-label="Breadcrumb" className="flex gap-2 text-xs text-slate-600">
        <Link href="/" className="hover:text-emerald-800">Home</Link>/
        <Link href="/get-involved" className="hover:text-emerald-800">Get Involved</Link>/
        <span className="text-slate-800">{opp?.title || slug}</span>
      </nav>

      {opportunities && !opp ? (
        <p className="mt-8 text-slate-700">This opportunity does not exist.</p>
      ) : (
        <>
          <h1 className="mt-6 font-serif text-4xl font-black text-[#0d3749]">{opp?.title || "Apply"}</h1>
          <p className="mt-2 text-sm text-slate-600">Fill in the form and our team will get back to you.</p>
          <div className="mt-6">
            <ApplyForm slug={slug} title={opp?.title || slug} extraFields={EXTRA_FIELDS[slug] || []} />
          </div>
        </>
      )}
    </section>
  );
}
