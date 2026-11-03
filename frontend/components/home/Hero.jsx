"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const heroImages = [
  "/images/hero/hero.jpeg",
  "/images/hero/community.jpeg",
  "/images/hero/research.jpeg",
  "/images/hero/action.jpeg",
];

const focusRing =
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3368A0]/30";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // respect reduced-motion and pause while the visitor is hovering the carousel
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="relative isolate overflow-hidden bg-white antialiased">
      <style>{`
        /* one orchestrated moment: hero entrance */
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-rise { opacity: 0; animation: hero-rise .9s cubic-bezier(.2,.7,.2,1) forwards; }
        .hero-d1 { animation-delay: .05s; }
        .hero-d2 { animation-delay: .16s; }
        .hero-d3 { animation-delay: .28s; }
        .hero-d4 { animation-delay: .4s; }
        .hero-d5 { animation-delay: .52s; }

        .hero-dots {
          background-image: radial-gradient(rgba(51,104,160,.16) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-rise { animation: none; opacity: 1; }
        }
      `}</style>

      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#3368A0]/[0.07] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3368A0]/[0.08] blur-3xl" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-[#4a6741]/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          {/* CONTENT */}
          <div>
            {/* <span className="inline-flex rounded-full border border-[#3368A0]/20 bg-[#3368A0]/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#3368A0]">
              Hopefelt Foundation
            </span> */}

            <h1 className="hero-rise hero-d1 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.025em] text-[#4a6741] sm:text-5xl lg:text-[4.25rem]">
              Building Healthier Communities Through Knowledge, Action &
              Innovation
            </h1>

            

            <p className="hero-rise hero-d3 mt-7 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              Hopefelt Foundation is a community-driven organization working
              across health, education, community development, research,
              digital health, technology, entrepreneurship and innovation.
            </p>

            <p className="hero-rise hero-d3 mt-4 max-w-2xl text-base leading-8 text-slate-600">
              We turn community needs, evidence and ideas into practical
              action through programs, projects, research, technology,
              partnerships, business opportunities, communication and public
              awareness.
            </p>

            {/* ACTIONS: two primary, three secondary */}
            <div className="hero-rise hero-d4 mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/our-work"
                className={`group inline-flex items-center gap-2.5 rounded-full border border-[#0d3749] bg-gradient-to-b from-[#14506b] to-[#0d3749] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_30px_-10px_rgba(13,55,73,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#394F32] hover:from-[#4a6741] hover:to-[#394F32] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_36px_-10px_rgba(74,103,65,0.6)] ${focusRing}`}
              >
                Explore Our Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/donate"
                className={`group inline-flex items-center gap-2.5 rounded-full border border-[#394F32] bg-gradient-to-b from-[#56784b] to-[#4a6741] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_14px_30px_-10px_rgba(74,103,65,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#4a6741] hover:to-[#2F422A] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_18px_36px_-10px_rgba(74,103,65,0.8)] ${focusRing}`}
              >
                Donate
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="hero-rise hero-d5 mt-7 flex max-w-xl flex-wrap items-center gap-3 border-t border-[#3368A0]/10 pt-6">
              {[
                { href: "/projects", label: "Our Projects" },
                { href: "/get-involved", label: "Get Involved" },
                { href: "/business-hub", label: "Business Hub" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`inline-flex items-center rounded-full border border-[#0d3749]/20 bg-white/70 px-5 py-2.5 text-sm font-semibold text-[#0d3749] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#394F32] hover:bg-[#394F32] hover:text-white hover:shadow-md ${focusRing}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* AUTO IMAGE CAROUSEL */}
          <div
            className="hero-rise hero-d3 relative isolate w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Hopefelt Foundation highlights"
          >
            {/* offset frame behind the image */}
            <div className="pointer-events-none absolute -right-4 -top-4 -z-10 h-full w-full rounded-[2rem] border border-[#4a6741]/25" />

            <div className="w-full overflow-hidden rounded-[2rem] border border-[#3368A0]/15 bg-white p-3 shadow-[0_1px_2px_rgba(51,104,160,0.06),0_30px_70px_-20px_rgba(51,104,160,0.3)]">
              <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] bg-[#e8eef5] sm:h-[360px] lg:h-[440px]">
                {/* SLIDES */}
                {heroImages.map((image, index) => (
                  <div
                    key={image}
                    aria-hidden={currentImage !== index}
                    className={`absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-[1200ms] ease-out ${
                      currentImage === index
                        ? "z-10 scale-100 opacity-100"
                        : "z-0 scale-105 opacity-0"
                    }`}
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          to top,
                          rgba(15, 35, 60, 0.6) 0%,
                          rgba(15, 35, 60, 0.14) 50%,
                          rgba(15, 35, 60, 0.02) 100%
                        ),
                        url('${image}')
                      `,
                    }}
                  />
                ))}

                {/* inner hairline for a finished edge */}
                <div className="pointer-events-none absolute inset-0 z-20 rounded-[1.5rem] ring-1 ring-inset ring-white/20" />

                {/* CAROUSEL INDICATORS */}
                <div className="absolute bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#0f233c]/30 px-3 py-2 backdrop-blur-md">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Show image ${index + 1}`}
                      aria-current={currentImage === index ? "true" : undefined}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        currentImage === index
                          ? "w-7 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/90"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* FLOATING FOCUS CARD */}
            <div className="absolute -bottom-6 -left-6 z-30 hidden overflow-hidden rounded-2xl border border-[#3368A0]/15 bg-white/90 py-4 pl-6 pr-6 shadow-[0_1px_2px_rgba(51,104,160,0.06),0_20px_45px_-15px_rgba(51,104,160,0.3)] backdrop-blur-xl sm:block">
              <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#4a6741] to-[#3368A0]" />
              <p className="text-xs uppercase tracking-[0.15em] text-[#4a6741]">
                Our Focus
              </p>

              <p className="mt-1 font-display text-lg font-semibold tracking-tight text-[#3368A0]">
                Community → Research → Action
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}