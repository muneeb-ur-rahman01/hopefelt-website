import Link from "next/link";

const linkColumns = [
  {
    heading: "Get to Know Us",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Partners", href: "/about/partners" },
      { label: "Achievements", href: "/achievements" },
      { label: "Impact", href: "/impact" },
    ],
  },
  {
    heading: "Our Work",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Campaigns & Initiatives", href: "/campaigns-initiatives" },
      { label: "Research & Knowledge", href: "/research" },
      { label: "Technology & Digital Health", href: "/technology" },
      { label: "Communications & Media", href: "/communications" },
      { label: "SDGs & Global Alignment", href: "/sdgs" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Training & Experience", href: "/training" },
      { label: "Events", href: "/events" },
      { label: "Get Involved", href: "/get-involved" },
      { label: "Donate", href: "/donate" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1C2VfTnSSL/",
    bg: "bg-blue-600",
    path: "M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V10H7v3h2.9v8",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/hopefelt_foundation?vrfl=NjZwYTVzaHkxdHYz/",
    bg: "bg-pink-600",
    path: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm5.5-1.5h.01",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hopefelt-foundation/",
    bg: "bg-sky-700",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923710137556",
    bg: "bg-green-600",
    path: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
  },
  {
    label: "Email",
    href: "mailto:hopefeltfoundation@gmail.com",
    bg: "bg-red-500",
    path: "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm18 2l-10 7L2 6",
  },
];

function Icon({ d, className = "h-6 w-6", stroke = 1.8 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-forestDark text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 md:px-8 lg:grid-cols-5">
        {/* FOUNDATION INFO */}
        <div className="max-w-sm lg:col-span-2">
          <Link
            href="/"
            className="inline-block font-display text-xl font-semibold transition-colors hover:text-gold"
          >
            Hopefelt Foundation
          </Link>

          <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-white/70">
            Building hope and creating meaningful impact, one community at a
            time.
          </p>

          <p className="mt-6 font-body text-xs font-semibold uppercase tracking-wider text-white/50">
            Contact Us
          </p>

          <a
            href="mailto:hopefeltfoundation@gmail.com"
            className="mt-2 block font-body text-sm text-white/80 transition-colors hover:text-gold"
          >
            hopefeltfoundation@gmail.com
          </a>

          <a
            href="tel:+923710137556"
            className="mt-1 block font-body text-sm text-white/80 transition-colors hover:text-gold"
          >
            +92 (371) 0137556
          </a>
        </div>

        {/* FOOTER NAVIGATION */}
        {linkColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="font-body text-xs font-semibold uppercase tracking-wider text-white/50">
              {col.heading}
            </p>

            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-white/80">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* SOCIAL & CONTACT SECTION */}
      <div className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <section className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-forest px-6 py-8 shadow-[0_10px_40px_rgba(15,70,45,0.12)] lg:flex-row lg:px-10">
          {/* HEADING */}
          <div className="shrink-0 text-center lg:text-left">
            <h2 className="text-2xl font-extrabold leading-tight text-white">
              Let&apos;s Connect
              <br />
              With Us
            </h2>

            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-emerald-700 to-lime-400 lg:mx-0" />
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {socials.map((s) => {
              const isExternal = s.href.startsWith("http");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={s.label}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    className={`${s.bg} flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg`}
                  >
                    <Icon d={s.path} className="h-6 w-6" />
                  </span>

                  <span className="text-xs text-white transition-colors">
                    {s.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* CALL NOW */}
          <a
            href="tel:+923710137556"
            className="group flex items-center gap-4 rounded-2xl p-2 transition-colors "
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0d3749] text-white shadow-md transition duration-300 ">
              <Icon
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                className="h-6 w-6"
              />
            </span>

            <span>
              <span className="block text-sm text-white">
                Call Now
              </span>

              <span className="block text-base text-white sm:text-lg">
                +92 (371) 0137556
              </span>
            </span>
          </a>
        </section>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 px-5 py-5 text-center font-body text-xs text-white md:px-8">
        © {new Date().getFullYear()} Hopefelt Foundation. All rights reserved.
      </div>
    </footer>
  );
}