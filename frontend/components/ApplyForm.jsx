"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-800">
        {label}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const OPPORTUNITY_FIELDS = {
  volunteer: [
    { name: "interests", label: "Areas of Interest", placeholder: "e.g. Education, Community Work" },
    { name: "volunteerExperience", label: "Previous Volunteer Experience" },
  ],
  member: [
    { name: "education", label: "Education / Qualification" },
    { name: "profession", label: "Profession / Occupation" },
    { name: "membershipReason", label: "Why do you want to become a member?" },
  ],
  campaigner: [
    { name: "campaignInterest", label: "Campaigns of Interest" },
    { name: "communityExperience", label: "Community Engagement Experience" },
  ],
  "campaign-coordinator": [
    { name: "coordinationExperience", label: "Coordination Experience" },
    { name: "teamSize", label: "Team Management Experience" },
  ],
  "campus-representative": [
    { name: "institution", label: "School / College / University", required: true },
    { name: "department", label: "Department" },
  ],
  "director-team": [
    { name: "leadershipExperience", label: "Leadership Experience" },
    { name: "expertise", label: "Area of Expertise" },
  ],
  "executive-team": [
    { name: "executiveExperience", label: "Management / Executive Experience" },
    { name: "expertise", label: "Area of Expertise" },
  ],
  "project-team": [
    { name: "projectExperience", label: "Project Management Experience" },
    { name: "projectSkills", label: "Relevant Skills" },
  ],
  researcher: [
    { name: "researchArea", label: "Research Area", required: true },
    { name: "researchExperience", label: "Research Experience" },
  ],
  training: [
    { name: "trainingArea", label: "Training Area of Interest" },
    { name: "trainingExperience", label: "Previous Training Experience" },
  ],
  intern: [
    { name: "education", label: "Current Education" },
    { name: "internshipDuration", label: "Preferred Internship Duration" },
    { name: "internshipArea", label: "Preferred Department" },
  ],
  trainee: [
    { name: "education", label: "Education / Qualification" },
    { name: "trainingArea", label: "Area You Want to Learn" },
  ],
  collaborate: [
    { name: "collaborationType", label: "Type of Collaboration" },
    { name: "organisationWebsite", label: "Organisation Website" },
  ],
  donor: [
    { name: "donationInterest", label: "Donation Interest" },
    { name: "donationType", label: "Type of Contribution" },
  ],
  funder: [
    { name: "fundingArea", label: "Funding Area of Interest" },
    { name: "fundingOrganisation", label: "Funding Organisation" },
  ],
  "technology-team": [
    { name: "skills", label: "Technical Skills", required: true },
    { name: "portfolio", label: "Portfolio / GitHub URL" },
  ],
  "communications-media-team": [
    { name: "mediaSkills", label: "Media / Communication Skills" },
    { name: "portfolio", label: "Portfolio / Work Samples URL" },
  ],
  "digital-marketing-team": [
    { name: "marketingSkills", label: "Digital Marketing Skills" },
    { name: "platformExperience", label: "Platforms You Have Worked With" },
  ],
  "entrepreneur-innovation-team": [
    { name: "businessIdea", label: "Business / Innovation Idea" },
    { name: "entrepreneurExperience", label: "Entrepreneurial Experience" },
  ],
  partnerships: [
    { name: "partnershipType", label: "Proposed Partnership Type" },
    { name: "organisationWebsite", label: "Organisation Website" },
  ],
};

export default function ApplyForm({
  slug,
  title,
  extraFields = [],
}) {
  const { submitApplication, user } = useApp();

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const [form, setForm] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: "",
    city: "",
    country: "",
    organisation: "",
    availability: "",
    message: "",
    consent: true,
  });

  // Honeypot is deliberately kept separate from normal form data.
  const [website, setWebsite] = useState("");

  const [details, setDetails] = useState({});

  const opportunityFields = OPPORTUNITY_FIELDS[slug] || [];

  const fields = [
    ...opportunityFields,
    ...extraFields.filter(
      (field) =>
        !opportunityFields.some(
          (existing) => existing.name === field.name
        )
    ),
  ];

  const set = (key) => (e) => {
    setForm((previous) => ({
      ...previous,
      [key]:
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();

    if (!form.consent) {
      setError("Please accept the consent checkbox.");
      return;
    }

    if (website.trim()) {
      setError("Unable to submit your application.");
      return;
    }

    setStatus("loading");
    setError("");
    setFieldErrors({});

    try {
      const payload = {
        ...form,
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        opportunitySlug: slug,
        opportunityTitle: title,
        details,
        website: "",
      };

      // IMPORTANT: Send payload, not the original form object.
      await submitApplication(slug, payload);

      setStatus("success");
    } catch (err) {
      setStatus("error");

      setError(
        err.status === 409
          ? "You already have an open application for this opportunity."
          : err.message || "Unable to submit your application."
      );

      const errors = err.errors || err.data?.errors;

      if (Array.isArray(errors)) {
        setFieldErrors(
          Object.fromEntries(
            errors.map((item) => [
              item.field,
              item.message,
            ])
          )
        );
      }
    }
  }

  const showError = (name) =>
    fieldErrors[name] && (
      <p className="mt-1 text-xs text-rose-600">
        {fieldErrors[name]}
      </p>
    );

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl bg-emerald-100 px-6 py-6 text-emerald-900"
      >
        <h3 className="text-lg font-bold">
          Application Submitted Successfully!
        </h3>

        <p className="mt-2 text-sm">
          Thank you, {form.fullName}. Your application for{" "}
          <strong>{title}</strong> has been received.
          Our team will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      autoComplete="on"
      className="space-y-5 rounded-2xl border border-emerald-900/5 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="rounded-xl bg-emerald-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
          Applying For
        </p>
        <h2 className="mt-1 text-lg font-bold text-[#0d3749]">
          {title}
        </h2>
      </div>

      {/* Honeypot: hidden from genuine users and excluded from autofill. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="hopefelt-website-check">
          Leave this field empty
        </label>

        <input
          id="hopefelt-website-check"
          type="text"
          name="company_website_check"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
          readOnly
          onFocus={(e) => e.target.removeAttribute("readonly")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            required
            name="applicant_full_name"
            autoComplete="name"
            className={inputClass}
            value={form.fullName}
            placeholder="Your full name"
            onChange={set("fullName")}
          />
          {showError("fullName")}
        </Field>

        <Field label="Email Address" required>
          <input
            required
            type="email"
            name="applicant_email"
            autoComplete="email"
            className={inputClass}
            value={form.email}
            placeholder="you@example.com"
            onChange={set("email")}
          />
          {showError("email")}
        </Field>

        <Field label="Phone / WhatsApp">
          <input
            type="tel"
            name="applicant_phone"
            autoComplete="tel"
            className={inputClass}
            value={form.phone}
            onChange={set("phone")}
          />
          {showError("phone")}
        </Field>

        <Field label="Organisation">
          <input
            name="organisation"
            autoComplete="organization"
            className={inputClass}
            value={form.organisation}
            onChange={set("organisation")}
          />
        </Field>

        <Field label="City">
          <input
            name="city"
            autoComplete="address-level2"
            className={inputClass}
            value={form.city}
            onChange={set("city")}
          />
        </Field>

        <Field label="Country">
          <input
            name="country"
            autoComplete="country-name"
            className={inputClass}
            value={form.country}
            onChange={set("country")}
          />
        </Field>
      </div>

      {fields.length > 0 && (
        <div className="space-y-4 border-t border-slate-100 pt-5">
          <div>
            <h3 className="font-bold text-[#0d3749]">
              Additional Information
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Please provide information relevant to this opportunity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <Field
                key={field.name}
                label={field.label}
                required={field.required}
              >
                <input
                  required={Boolean(field.required)}
                  type={field.type || "text"}
                  className={inputClass}
                  placeholder={field.placeholder || ""}
                  value={details[field.name] ?? ""}
                  onChange={(e) =>
                    setDetails((previous) => ({
                      ...previous,
                      [field.name]: e.target.value,
                    }))
                  }
                />
                {showError(`details.${field.name}`)}
              </Field>
            ))}
          </div>
        </div>
      )}

      <Field label="Availability">
        <input
          className={inputClass}
          value={form.availability}
          placeholder="e.g. Weekends, 5 hours/week"
          onChange={set("availability")}
        />
      </Field>

      <Field label="Why do you want to join?" required>
        <textarea
          required
          rows={5}
          minLength={20}
          className={`${inputClass} resize-y`}
          value={form.message}
          placeholder="Tell us why you are interested in this opportunity..."
          onChange={set("message")}
        />
        {showError("message")}
      </Field>

      <label className="flex cursor-pointer items-start gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={set("consent")}
          className="mt-0.5 h-4 w-4 accent-emerald-800"
        />
        I agree that Hopefelt Foundation may use these details to process my application.
      </label>

      <div role="status" aria-live="polite">
        {status === "error" && (
          <p className="rounded-lg bg-rose-100 px-4 py-2 text-sm text-rose-800">
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading" || !form.consent}
        className="inline-flex items-center gap-2 rounded-full bg-[#1f4a2a] px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading"
          ? "Submitting..."
          : "Submit Application"}
        <span>→</span>
      </button>
    </form>
  );
}