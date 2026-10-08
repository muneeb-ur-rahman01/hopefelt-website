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

export default function Footer() {
  return (
    <footer className="border-t border-line bg-forestDark text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 md:px-8 lg:grid-cols-5">
        <div className="max-w-sm lg:col-span-2">
          <p className="font-display text-xl font-semibold">Hopefelt Foundation</p>
          <p className="mt-2 font-body text-sm text-white/70">
            Building hope and creating meaningful impact, one community at a time.
          </p>
          <p className="mt-6 font-body text-xs font-semibold uppercase tracking-wider text-white/50">
            Contact Us
          </p>
          <p className="mt-2 font-body text-sm text-white/80">hopefeltfoundation@gmail.com</p>
          <p className="font-body text-sm text-white/80">+92 (371) 0137556</p>
        </div>

        {linkColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="font-body text-xs font-semibold uppercase tracking-wider text-white/50">
              {col.heading}
            </p>
            <ul className="mt-3 flex flex-col gap-2 font-body text-sm text-white/80">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center font-body text-xs text-white/50 md:px-8">
        © 2026 Hopefelt Foundation. All rights reserved.
      </div>
    </footer>
  );
}
