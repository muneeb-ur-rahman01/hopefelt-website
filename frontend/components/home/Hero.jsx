"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const heroSlides = [
  { src: "/images/hero/hero.jpeg", label: "Our Team" },
  { src: "/images/hero/community.jpeg", label: "Community Engagement" },
  { src: "/images/hero/research.jpeg", label: "Research & Evidence" },
  { src: "/images/hero/action.jpeg", label: "Action on the Ground" },
];

const focusRing =
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3368A0]/30";

const SLIDE_MS = 5000;

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = heroSlides.length;

  useEffect(() => {
    // respect reduced-motion and pause while the visitor is hovering the carousel
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % total);
    }, SLIDE_MS);

    return () => clearInterval(interval);
  }, [paused, currentImage, total]);

  const go = (dir) => setCurrentImage((p) => (p + dir + total) % total);

  return (
    <section className="relative isolate overflow-hidden bg-white antialiased">
      <style>{`
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

        @keyframes hero-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .hero-progress { transform-origin: left; animation: hero-progress ${SLIDE_MS}ms linear forwards; }

        .hero-dots {
          background-image: radial-gradient(rgba(51,104,160,.16) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-rise { animation: none; opacity: 1; }
          .hero-progress { animation: none; transform: scaleX(1); }
        }
      `}</style>

      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#3368A0]/[0.07] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3368A0]/[0.08] blur-3xl" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-[#4a6741]/[0.06] blur-3xl" />
        {/* soft green panel behind the carousel to fill the right side */}
        <div className="absolute -right-20 top-0 hidden h-full w-[55%] bg-gradient-to-l from-[#4a6741]/[0.07] via-[#3368A0]/[0.04] to-transparent lg:block" />
      </div>

      <div className="relative mx-auto max-w-[110rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-16 xl:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
          {/* CONTENT */}
          <div>
            <h1 className="hero-rise hero-d1 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.025em] text-[#4a6741] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
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
            {/* offset frames behind the image */}
            <div className="pointer-events-none absolute -right-5 -top-5 -z-10 h-full w-full rounded-[2.25rem] border border-[#4a6741]/30" />
            <div className="pointer-events-none absolute -bottom-5 -right-2 -z-10 h-24 w-3/4 rounded-[2rem] bg-gradient-to-r from-[#4a6741]/20 to-[#3368A0]/20 blur-2xl" />

            <div className="w-full overflow-hidden rounded-[2.25rem] border border-[#3368A0]/15 bg-white p-3 shadow-[0_1px_2px_rgba(51,104,160,0.06),0_40px_90px_-25px_rgba(51,104,160,0.4)] sm:p-4">
              <div className="relative h-[340px] overflow-hidden rounded-[1.75rem] bg-[#e8eef5] sm:h-[460px] lg:h-[560px] xl:h-[640px]">
                {/* SLIDES */}
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.src}
                    aria-hidden={currentImage !== index}
                    className={`absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-[1400ms] ease-out ${
                      currentImage === index
                        ? "z-10 scale-100 opacity-100"
                        : "z-0 scale-110 opacity-0"
                    }`}
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          to top,
                          rgba(15, 35, 60, 0.72) 0%,
                          rgba(15, 35, 60, 0.18) 45%,
                          rgba(15, 35, 60, 0.05) 100%
                        ),
                        url('${slide.src}')
                      `,
                    }}
                  />
                ))}

                {/* inner hairline for a finished edge */}
                <div className="pointer-events-none absolute inset-0 z-20 rounded-[1.75rem] ring-1 ring-inset ring-white/25" />

                {/* TOP BAR: caption chip + counter */}
                <div className="absolute inset-x-5 top-5 z-30 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/25 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9fd37f]" />
                    {heroSlides[currentImage].label}
                  </span>
                  <span className="rounded-full bg-[#0f233c]/40 px-3.5 py-2 text-xs font-semibold tabular-nums tracking-widest text-white backdrop-blur-md">
                    0{currentImage + 1}
                    <span className="text-white/50"> / 0{total}</span>
                  </span>
                </div>

                {/* ARROWS */}
                <div className="absolute inset-x-4 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => go(-1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg text-white ring-1 ring-white/30 backdrop-blur-md transition hover:bg-white hover:text-[#0d3749] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => go(1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg text-white ring-1 ring-white/30 backdrop-blur-md transition hover:bg-white hover:text-[#0d3749] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    →
                  </button>
                </div>

                {/* BOTTOM: tagline + indicators */}
                <div className="absolute inset-x-0 bottom-0 z-30 px-6 pb-6 pt-16 sm:px-8">
                  <p className="max-w-sm font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                    Better Communities.{" "}
                    <span className="text-[#b9e08f]">Brighter Futures.</span>
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Show image ${index + 1}`}
                        aria-current={currentImage === index ? "true" : undefined}
                        onClick={() => setCurrentImage(index)}
                        className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        {index < currentImage && (
                          <span className="absolute inset-0 bg-white" />
                        )}
                        {index === currentImage && (
                          <span
                            key={`${currentImage}-${paused}`}
                            className="hero-progress absolute inset-0 bg-white"
                            style={paused ? { animationPlayState: "paused" } : undefined}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING FOCUS CARD */}
            <div className="absolute -bottom-7 -left-7 z-30 hidden overflow-hidden rounded-2xl border border-[#3368A0]/15 bg-white/95 py-4 pl-6 pr-6 shadow-[0_1px_2px_rgba(51,104,160,0.06),0_20px_45px_-15px_rgba(51,104,160,0.35)] backdrop-blur-xl sm:block">
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