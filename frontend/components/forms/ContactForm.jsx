"use client";

import { useState } from "react";
import Link from "next/link";
import { submitContactForm } from "@/lib/api";

/* ---------- Icon paths ---------- */

const USERS =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";
const CHART =
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z";
const HEART =
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
const DOC =
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
const MONITOR =
  "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";
const MEGAPHONE =
  "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z";
const BULB =
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";
const PIN =
  "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z";
const CALENDAR =
  "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z";
const CAP =
  "M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z";
const GEAR =
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z";
const MAIL =
  "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";
const CALL =
  "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z";
const CLOCK = "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
const CHAT =
  "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z";
const PULSE = "M3 12h4l3-7 4 14 3-7h4";
const COINS =
  "M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2zm0 0v8m0 0c-1.657 0-3-.895-3-2m3 2c1.657 0 3-.895 3-2M5 6v12c0 1.105 3.134 2 7 2s7-.895 7-2V6";
const CHECK_CIRCLE = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";

/* ---------- Static content ---------- */

const contactInfo = [
  {
    title: "Email",
    lines: ["hopefeltfoundation@gmail.com"],
    note: "We usually respond within 1–2 working days.",
    href: "mailto:hopefeltfoundation@gmail.com",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-700",
    icon: MAIL,
  },
  {
    title: "Phone / WhatsApp",
    lines: ["+92 (371) 0137556"],
    note: "Mon – Fri, 9:00 AM – 5:00 PM",
    href: "tel:+923710137556",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-700",
    icon: CALL,
  },
  {
    title: "Office",
    lines: ["Green Town, Karachi, Pakistan"],
    note: "Visit by appointment.",
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-700",
    icon: PIN,
  },
  {
    title: "Office Hours",
    lines: ["Mon – Fri, 9:00 AM – 5:00 PM", "Saturday & Sunday: Closed"],
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-700",
    icon: CLOCK,
  },
];

const enquiryTypes = [
  {
    title: "General Enquiries",
    desc: "General questions about Hopefelt Foundation, its programmes and activities.",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-600",
    icon: CHAT,
  },
  {
    title: "Partnership Enquiries",
    desc: "Institutional collaborations, MOUs and partnership opportunities.",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-700",
    icon: USERS,
  },
  {
    title: "Project Proposals",
    desc: "Propose a community or public health project.",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    icon: DOC,
  },
  {
    title: "Research Enquiries",
    desc: "Research collaboration, data requests and academic partnerships.",
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-700",
    icon: CHART,
  },
  {
    title: "Volunteer Enquiries",
    desc: "Join our team or volunteer with us.",
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-600",
    icon: USERS,
  },
  {
    title: "Events Enquiries",
    desc: "Conferences, webinars, workshops and community events.",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    icon: CALENDAR,
  },
  {
    title: "Media Enquiries",
    desc: "Press, interviews, media coverage and communications.",
    bg: "from-blue-50",
    wrap: "bg-blue-100 text-blue-700",
    icon: MEGAPHONE,
  },
  {
    title: "Digital Marketing Enquiries",
    desc: "Digital campaigns, content and communication services.",
    bg: "from-sky-50",
    wrap: "bg-cyan-100 text-cyan-700",
    icon: MONITOR,
  },
  {
    title: "Technology Enquiries",
    desc: "Software, technology solutions and innovation collaboration.",
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-700",
    icon: GEAR,
  },
  {
    title: "Digital Health Enquiries",
    desc: "Digital health projects, tools and programmes.",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-700",
    icon: PULSE,
  },
  {
    title: "Entrepreneurship & Business Enquiries",
    desc: "Startups, enterprise support and business collaboration.",
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-600",
    icon: BULB,
  },
  {
    title: "Training Enquiries",
    desc: "Internships, training and learning opportunities.",
    bg: "from-blue-50",
    wrap: "bg-blue-100 text-blue-700",
    icon: CAP,
  },
  {
    title: "Sponsorship Enquiries",
    desc: "Sponsor a programme, event or initiative.",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    icon: COINS,
  },
  {
    title: "Donation Enquiries",
    desc: "Financial or in-kind contributions.",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    icon: HEART,
  },
];

const nextSteps = [
  {
    num: "01",
    title: "Submit Your Enquiry",
    desc: "Fill in the form and provide the relevant details.",
    wrap: "bg-emerald-100 text-emerald-700",
    icon: DOC,
  },
  {
    num: "02",
    title: "We Review and Route It",
    desc: "Your enquiry is reviewed and sent to the appropriate team.",
    wrap: "bg-emerald-100 text-emerald-700",
    icon: USERS,
  },
  {
    num: "03",
    title: "Our Team Responds",
    desc: "We will get back to you through your preferred contact method.",
    wrap: "bg-amber-100 text-amber-600",
    icon: MAIL,
  },
  {
    num: "04",
    title: "Follow-Up if Needed",
    desc: "Our team may contact you for additional information.",
    wrap: "bg-emerald-100 text-emerald-700",
    icon: CHECK_CIRCLE,
  },
];

const responseMethods = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
];

/* ---------- Small helpers ---------- */

function Icon({ d, className = "h-6 w-6", stroke = 1.6 }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

function SectionTitle({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <h2 className="font-serif text-2xl font-extrabold text-[#1f4a2a] sm:text-3xl">
        {children}
      </h2>
      <span className="hidden h-0.5 w-10 rounded-full bg-[#1f4a2a] sm:block" />
    </div>
  );
}

function Field({ label, required, optional, children }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-800">
        {label}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
        {optional && (
          <span className="ml-1 font-normal text-slate-500">(optional)</span>
        )}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20";

/* ---------- Page ---------- */

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  enquiryType: "",
  subject: "",
  message: "",
  responseMethod: "email",
  consent: true,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const update = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.consent) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      // Your existing API expects: fullName, email, phone, enquiryType,
      // subject, message. The two extra design fields (organisation and
      // preferred response method) are appended to the message so they
      // reach your team without changing the backend.
      const methodLabel =
        responseMethods.find((m) => m.value === form.responseMethod)?.label ||
        "Email";
      const extras = [];
      if (form.organisation.trim()) {
        extras.push(`Organisation: ${form.organisation.trim()}`);
      }
      extras.push(`Preferred response method: ${methodLabel}`);

      await submitContactForm({
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        enquiryType: form.enquiryType,
        subject: form.subject.trim(),
        message: `${form.message.trim()}\n\n---\n${extras.join("\n")}`,
      });

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err?.message || "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[55%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[60%]">
          <img
            src="/images/contact/hero.jpg"
            alt="Hopefelt Foundation office building surrounded by greenery"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/20" />
        </div>

        <div className="relative mx-auto max-w-[100rem] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-slate-600"
          >
            <Link href="/" className="hover:text-emerald-800">Home</Link>
            <span>/</span>
            <span className="text-slate-800">Contact</span>
          </nav>

          <div className="mt-6 max-w-2xl">
            <h1 className="font-serif text-6xl font-black leading-[1.05] tracking-tight text-[#1f3a8a] sm:text-7xl">
              Contact Us
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              Questions about our programmes, partnership ideas, or want to
              volunteer? Send us an enquiry and our team will get back to you.
            </p>
          </div>

          {/* tagline */}
          <div className="pointer-events-none absolute right-12 top-10 hidden font-serif text-xl font-semibold leading-7 text-white drop-shadow-md xl:block">
            <p>People</p>
            <p>Knowledge</p>
            <p>Collaboration</p>
            <p>Action</p>
            <p>Healthier</p>
            <p>Communities</p>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-lime-300" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 pb-12 sm:px-8 lg:px-12">
        {/* ============ CONTACT INFO + FORM ============ */}
        <section className="grid gap-6 pt-8 lg:grid-cols-[0.9fr_1.5fr]">
          {/* Contact Information */}
          <div className="rounded-2xl border border-emerald-900/5 bg-white/80 p-6 shadow-sm">
            <SectionTitle>Contact Information</SectionTitle>
            <p className="mt-2 text-sm text-slate-600">
              Here are the best ways to reach us.
            </p>

            <div className="mt-5 space-y-3">
              {contactInfo.map((c) => {
                const Body = (
                  <>
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${c.wrap}`}
                    >
                      <Icon d={c.icon} className="h-7 w-7" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-serif text-sm font-extrabold text-emerald-950">
                        {c.title}
                      </h3>
                      {c.lines.map((l) => (
                        <p key={l} className="mt-0.5 text-sm text-slate-700">
                          {l}
                        </p>
                      ))}
                      {c.note && (
                        <p className="mt-1 text-xs text-slate-500">{c.note}</p>
                      )}
                    </div>
                  </>
                );
                const cls = `flex items-center gap-4 rounded-xl bg-gradient-to-r ${c.bg} to-white p-4 transition duration-300 hover:shadow-md`;
                return c.href ? (
                  <a key={c.title} href={c.href} className={cls}>
                    {Body}
                  </a>
                ) : (
                  <div key={c.title} className={cls}>
                    {Body}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Send an Enquiry */}
          <div
            id="enquiry-form-top"
            className="scroll-mt-24 rounded-2xl border border-emerald-900/5 bg-white/80 p-6 shadow-sm"
          >
            <SectionTitle>Send an Enquiry</SectionTitle>
            <p className="mt-2 text-sm text-slate-600">
              Fill in the form below and we&apos;ll route your enquiry to the
              right team.
            </p>

            <form onSubmit={handleSubmit} className="mt-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={update("fullName")}
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email Address" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="Enter your email address"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone / WhatsApp">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="Enter your phone number"
                    className={inputClass}
                  />
                </Field>
                <Field label="Organisation" optional>
                  <input
                    type="text"
                    value={form.organisation}
                    onChange={update("organisation")}
                    placeholder="Enter your organisation name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Enquiry Type" required>
                  <select
                    required
                    value={form.enquiryType}
                    onChange={update("enquiryType")}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    {enquiryTypes.map((t) => (
                      <option key={t.title} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Subject" required>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="Enter a subject"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Message" required>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your enquiry..."
                    className={`${inputClass} resize-y`}
                  />
                </Field>
              </div>

              {/* response method + consent + submit */}
              <div className="mt-5 grid gap-4 rounded-xl bg-emerald-50/70 p-4 md:grid-cols-[auto_1fr] md:items-center">
                <fieldset>
                  <legend className="text-xs font-bold text-emerald-950">
                    Preferred Response Method
                  </legend>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {responseMethods.map((m) => (
                      <label
                        key={m.value}
                        className="inline-flex cursor-pointer items-center gap-2 text-xs text-slate-700"
                      >
                        <input
                          type="radio"
                          name="responseMethod"
                          value={m.value}
                          checked={form.responseMethod === m.value}
                          onChange={update("responseMethod")}
                          className="h-4 w-4 accent-emerald-800"
                        />
                        {m.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="flex flex-col gap-3 md:border-l md:border-emerald-900/10 md:pl-5 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex max-w-xs cursor-pointer items-start gap-2 text-[11px] leading-4 text-slate-600">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={update("consent")}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-sky-600"
                    />
                    I agree that Hopefelt Foundation may use these details to
                    respond to my enquiry.
                  </label>

                  <button
                    type="submit"
                    disabled={status === "loading" || !form.consent}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f4a2a] px-7 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending…" : "Send Enquiry"}
                    <span>→</span>
                  </button>
                </div>
              </div>

              <div role="status" aria-live="polite">
                {status === "success" && (
                  <p className="mt-3 rounded-lg bg-emerald-100 px-4 py-2 text-sm text-emerald-900">
                    Thanks for reaching out — we&apos;ll get back to you
                    shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-3 rounded-lg bg-rose-100 px-4 py-2 text-sm text-rose-800">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* ============ CHOOSE THE RIGHT ENQUIRY TYPE ============ */}
        <section className="mt-12">
          <SectionTitle>Choose the Right Enquiry Type</SectionTitle>
          <p className="mt-2 text-sm text-slate-600">
            Select the category that best matches your enquiry. This helps us
            connect you with the right team and respond more effectively.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {enquiryTypes.map((t) => (
              <button
                key={t.title}
                type="button"
                onClick={() => {
                  setForm((f) => ({ ...f, enquiryType: t.title }));
                  document
                    .getElementById("enquiry-form-top")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group flex items-center gap-4 rounded-2xl border border-emerald-900/5 bg-gradient-to-r ${t.bg} to-white p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${t.wrap}`}
                >
                  <Icon d={t.icon} className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm font-extrabold leading-5 text-emerald-950">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-xs leading-4 text-slate-600">
                    {t.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ============ WHAT HAPPENS NEXT ============ */}
        <section className="mt-12 rounded-2xl border border-sky-900/5 bg-gradient-to-b from-sky-50 to-white p-6">
          <SectionTitle>What Happens Next?</SectionTitle>
          <p className="mt-2 text-sm text-slate-600">
            Your enquiry is important to us. Here&apos;s what happens after you
            submit the form.
          </p>

          <div className="mt-5 grid gap-4 rounded-xl bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((s, idx) => (
              <div key={s.num} className="flex items-start gap-3">
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${s.wrap}`}
                >
                  <Icon d={s.icon} className="h-7 w-7" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-2xl font-black leading-none text-emerald-900">
                    {s.num}
                  </p>
                  <h3 className="mt-1 text-sm font-extrabold leading-5 text-emerald-950">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {s.desc}
                  </p>
                </div>
                {idx < nextSteps.length - 1 && (
                  <span className="mt-6 hidden text-slate-500 lg:block">→</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}