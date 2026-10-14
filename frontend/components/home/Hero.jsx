"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const heroImages = [
  "/images/hero/hero.jpeg",
  "/images/hero/community.jpeg",
  "/images/hero/research.jpeg",
  "/images/hero/action.jpeg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#3368A0]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3368A0]/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">

          {/* CONTENT */}
          <div>
            {/* <span className="inline-flex rounded-full border border-[#3368A0]/20 bg-[#3368A0]/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#3368A0]">
              Hopefelt Foundation
            </span> */}

            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[#4a6741] sm:text-5xl lg:text-7xl">
              Building Healthier Communities Through Knowledge, Action &
              Innovation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 sm:text-lg">
              Hopefelt Foundation is a community-driven organization working
              across health, education, community development, research,
              digital health, technology, entrepreneurship and innovation.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8">
              We turn community needs, evidence and ideas into practical
              action through programs, projects, research, technology,
              partnerships, business opportunities, communication and public
              awareness.
            </p>

            {/* GLASSMORPHISM BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-3 rounded-[1.75rem] p-4 shadow-[0_12px_40px_rgba(74,103,65,0.12)] backdrop-blur-xl sm:p-5">
            <Link
              href="/our-work"
              className="group inline-flex items-center gap-2 rounded-full border border-[#4a6741]/40 bg-[#0d3749] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#394F32] hover:bg-[#394F32] hover:text-white hover:shadow-lg hover:shadow-[#4a6741]/25"
            >
              Explore Our Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-[#4a6741]/40 bg-[#0d3749] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#394F32] hover:bg-[#394F32] hover:text-white hover:shadow-md"
            >
              Our Projects
            </Link>

            <Link
              href="/get-involved"
              className="inline-flex items-center rounded-full border border-[#4a6741]/40 bg-[#0d3749] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#394F32] hover:bg-[#394F32] hover:text-white hover:shadow-md"
            >
              Get Involved
            </Link>

            <Link
              href="/business-hub"
              className="inline-flex items-center rounded-full border border-[#4a6741]/40 bg-[#0d3749] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#394F32] hover:bg-[#394F32] hover:text-white hover:shadow-md"
            >
              Business Hub
            </Link>

            <Link
              href="/donate"
              className="group inline-flex items-center gap-2 rounded-full border border-[#394F32] bg-[#0d3749] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#4a6741]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F422A] hover:text-white hover:shadow-lg hover:shadow-[#4a6741]/30"
            >
              Donate
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          </div>

          {/* AUTO IMAGE CAROUSEL */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-[#3368A0]/15 bg-white p-3 shadow-[0_20px_60px_rgba(51,104,160,0.15)]">
              <div className="relative min-h-[440px] overflow-hidden rounded-[1.5rem] sm:min-h-[520px]">

                {/* SLIDES */}
                {heroImages.map((image, index) => (
                  <div
                    key={image}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                      currentImage === index
                        ? "z-10 opacity-100"
                        : "z-0 opacity-0"
                    }`}
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          to top,
                          rgba(15, 35, 60, 0.55) 0%,
                          rgba(15, 35, 60, 0.12) 55%,
                          rgba(15, 35, 60, 0.02) 100%
                        ),
                        url('${image}')
                      `,
                    }}
                  />
                ))}

                {/* CAROUSEL INDICATORS */}
                <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Show image ${index + 1}`}
                      aria-current={
                        currentImage === index ? "true" : undefined
                      }
                      onClick={() => setCurrentImage(index)}
                      className={`h-2.5 rounded-full border border-white/70 transition-all duration-300 ${
                        currentImage === index
                          ? "w-7 bg-white"
                          : "w-2.5 bg-white/40 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>                
              </div>
            </div>

            {/* FLOATING FOCUS CARD */}
            <div className="absolute -bottom-5 -left-5 z-20 hidden rounded-2xl border border-[#3368A0]/15 bg-white/85 p-5 shadow-[0_12px_35px_rgba(51,104,160,0.12)] backdrop-blur-xl sm:block">
              <p className="text-xs uppercase tracking-[0.15em] text-[#4a6741]">
                Our Focus
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-[#3368A0]">
                Community → Research → Action
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
