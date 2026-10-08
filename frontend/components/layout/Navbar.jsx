
"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { mainNav, contactNav } from "@/data/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [mobileChildExpanded, setMobileChildExpanded] = useState(null);

  const navRows = [];

  for (let i = 0; i < mainNav.length; i += 9) {
    navRows.push(mainNav.slice(i, i + 9));
  }

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setMobileChildExpanded(null);
  };

  const renderDesktopItem = (item) => (
    <li
      key={item.label}
      className="group relative flex justify-center"
    >
      <Link
        href={item.href}
        className="
          flex w-full min-h-[52px]
          items-center justify-center
          gap-1
          rounded-xl
          px-3 py-2
          font-body
          text-[13px]
          font-medium
          tracking-[0.01em]
          text-black
          transition-all
          duration-200
          hover:bg-stone-100
          hover:text-blue-600
        "
        aria-haspopup={item.dropdown ? "true" : undefined}
      >
        <span>{item.label}</span>

        {item.dropdown && (
          <svg
            width="9"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            aria-hidden="true"
            className="
              mt-0.5
              shrink-0
              transition-transform
              duration-200
              group-hover:translate-y-0.5
            "
          >
            <path
              d="M1 1l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Link>

      {item.dropdown && (
        <div
          className="
            invisible
            absolute
            left-1/2
            top-[calc(100%-2px)]
            z-50
            w-80
            -translate-x-1/2
            -translate-y-2
            origin-top
            rounded-2xl
            border
            border-black/10
            bg-stone-50
            p-2
            opacity-0
            shadow-lg
            transition-all
            duration-200
            group-hover:visible
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          {item.dropdown.map((sub) =>
            sub.children ? (
              <div
                key={sub.href}
                className="group/sub relative"
              >
                <Link
                  href={sub.href}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4 py-3
                    font-body
                    text-sm
                    font-medium
                    text-black
                    transition-colors
                    hover:bg-stone-100
                    hover:text-blue-600
                  "
                >
                  <span>{sub.label}</span>

                  <svg
                    width="8"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <div
                  className="
                    invisible
                    absolute
                    left-[calc(100%+8px)]
                    top-0
                    z-50
                    w-72
                    -translate-x-2
                    rounded-2xl
                    border
                    border-black/10
                    bg-stone-50
                    p-2
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-200
                    group-hover/sub:visible
                    group-hover/sub:translate-x-0
                    group-hover/sub:opacity-100
                  "
                >
                  {sub.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="
                        block
                        rounded-xl
                        px-4 py-3
                        font-body
                        text-sm
                        font-medium
                        text-black
                        transition-colors
                        hover:bg-stone-100
                        hover:text-blue-600
                      "
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={sub.href}
                href={sub.href}
                className="
                  block
                  rounded-xl
                  px-4 py-3
                  font-body
                  text-sm
                  font-medium
                  text-black
                  transition-colors
                  hover:bg-stone-100
                  hover:text-blue-600
                "
              >
                {sub.label}
              </Link>
            )
          )}
        </div>
      )}
    </li>
  );

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-black/10
        bg-stone-50
      "
    >
      <div
        className="
          mx-auto
          max-w-[100rem]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            LOGO + CONTACT
        ====================================================== */}

        <div
          className="
            flex
            min-h-[82px]
            items-center
            justify-between
            gap-4
          "
        >
          <Link
            href="/"
            className="
              group
              flex
              min-w-0
              items-center
              gap-3
            "
            onClick={closeMobileMenu}
          >
            <div
              className="
                relative
                h-14
                w-14
                shrink-0
                overflow-hidden
                rounded-full
                bg-white
              "
            >
              <Image
                src="/images/logo.png"
                alt="Hopefelt Foundation logo"
                fill
                priority
                sizes="56px"
                className="
                  object-contain
                  p-1
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>

            <span className="min-w-0">
              <span
                className="
                  block
                  truncate
                  font-display
                  text-lg
                  font-semibold
                  tracking-tight
                  text-[#3368A0]
                  sm:text-xl
                "
              >
                Hopefelt Foundation
              </span>

              <span
                className="
                  hidden
                  font-body
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-black
                  sm:block
                "
              >
                A Public Health Society
              </span>
            </span>
          </Link>

          {/* Desktop Contact */}
          <Link
            href={contactNav.href}
            className="
              group
              hidden
              shrink-0
              items-center
              gap-2
              rounded-full
              bg-[#3368A0]
              px-6 py-3
              font-body
              text-sm
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#66A3BF]
              hover:shadow-lg
              lg:flex
            "
            onClick={closeMobileMenu}
          >
            <span>{contactNav.label}</span>

            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              aria-hidden="true"
              className="
                transition-transform
                duration-200
                group-hover:translate-x-0.5
              "
            >
              <path
                d="M2.5 6.5h8M7.5 3.5l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div
          className="
            hidden
            border-t
            border-black/10
            lg:block
          "
        >
          <nav aria-label="Primary navigation">
            {navRows.map((row, rowIndex) => (
              <ul
                key={rowIndex}
                className="
                  grid
                  grid-cols-9
                  gap-1
                  border-b
                  border-black/5
                  py-2
                  last:border-b-0
                "
              >
                {row.map(renderDesktopItem)}
              </ul>
            ))}
          </nav>
        </div>

        {/* =====================================================
            MOBILE MENU BAR
        ====================================================== */}

        <div
          className="
            flex
            min-h-[58px]
            items-center
            justify-between
            border-t
            border-black/10
            lg:hidden
          "
        >
          {/* Navigation text disappears when menu opens */}
          {/* <span
            className={`
              font-body
              text-sm
              font-medium
              text-black/60
              transition-opacity
              duration-200
              ${
                mobileOpen
                  ? "pointer-events-none opacity-0"
                  : "opacity-100"
              }
            `}
          >
            Navigation
          </span> */}

          {/* When menu is open, keep the left side clean */}
          {mobileOpen && <span />}

          <button
            type="button"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-black/15
              bg-white
              text-black
              transition-all
              duration-200
              hover:bg-stone-100
              hover:text-blue-600
            "
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((value) => !value);

              if (mobileOpen) {
                setMobileExpanded(null);
                setMobileChildExpanded(null);
              }
            }}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-black transition-all duration-200 ${
                  mobileOpen
                    ? "top-2 rotate-45"
                    : "top-0"
                }`}
              />

              <span
                className={`absolute left-0 top-2 h-0.5 w-5 bg-black transition-opacity duration-200 ${
                  mobileOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 h-0.5 w-5 bg-black transition-all duration-200 ${
                  mobileOpen
                    ? "top-2 -rotate-45"
                    : "top-4"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* =======================================================
          MOBILE MENU
      ======================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-black/10
          bg-stone-50
          transition-[max-height,opacity]
          duration-300
          lg:hidden
          ${
            mobileOpen
              ? "max-h-[80vh] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col gap-1 px-5 py-5">
            {mainNav.map((item) => (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="
                      flex-1
                      rounded-lg
                      px-2 py-3
                      font-body
                      text-sm
                      font-medium
                      text-black
                      transition-colors
                      hover:bg-stone-100
                      hover:text-blue-600
                    "
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={
                        mobileExpanded === item.label
                      }
                      className="
                        rounded-lg
                        p-3
                        text-black
                        transition-colors
                        hover:bg-stone-100
                        hover:text-blue-600
                      "
                      onClick={() =>
                        setMobileExpanded((value) => {
                          const next =
                            value === item.label
                              ? null
                              : item.label;

                          setMobileChildExpanded(null);

                          return next;
                        })
                      }
                    >
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 10 6"
                        fill="none"
                        className={`transition-transform duration-200 ${
                          mobileExpanded === item.label
                            ? "rotate-180"
                            : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {item.dropdown && (
                  <div
                    className={`overflow-hidden pl-4 transition-[max-height] duration-200 ${
                      mobileExpanded === item.label
                        ? "max-h-[3000px]"
                        : "max-h-0"
                    }`}
                  >
                    {item.dropdown.map((sub) =>
                      sub.children ? (
                        <div key={sub.href}>
                          <div className="flex items-center justify-between">
                            <Link
                              href={sub.href}
                              className="
                                block
                                flex-1
                                rounded-lg
                                px-2 py-2.5
                                font-body
                                text-sm
                                text-black/80
                                transition-colors
                                hover:bg-stone-100
                                hover:text-blue-600
                              "
                              onClick={closeMobileMenu}
                            >
                              {sub.label}
                            </Link>

                            <button
                              type="button"
                              aria-label={`Toggle ${sub.label} submenu`}
                              aria-expanded={
                                mobileChildExpanded ===
                                sub.label
                              }
                              className="
                                rounded-lg
                                p-2.5
                                text-black
                                transition-colors
                                hover:bg-stone-100
                                hover:text-blue-600
                              "
                              onClick={() =>
                                setMobileChildExpanded(
                                  (value) =>
                                    value === sub.label
                                      ? null
                                      : sub.label
                                )
                              }
                            >
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 6"
                                fill="none"
                                className={`transition-transform duration-200 ${
                                  mobileChildExpanded ===
                                  sub.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                                aria-hidden="true"
                              >
                                <path
                                  d="M1 1l4 4 4-4"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>

                          <div
                            className={`overflow-hidden pl-4 transition-[max-height] duration-200 ${
                              mobileChildExpanded ===
                              sub.label
                                ? "max-h-[1000px]"
                                : "max-h-0"
                            }`}
                          >
                            {sub.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="
                                  block
                                  rounded-lg
                                  px-2 py-2
                                  font-body
                                  text-sm
                                  text-black/60
                                  transition-colors
                                  hover:bg-stone-100
                                  hover:text-blue-600
                                "
                                onClick={closeMobileMenu}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="
                            block
                            rounded-lg
                            px-2 py-2.5
                            font-body
                            text-sm
                            text-black/80
                            transition-colors
                            hover:bg-stone-100
                            hover:text-blue-600
                          "
                          onClick={closeMobileMenu}
                        >
                          {sub.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </li>
            ))}

            {/* =================================================
                MOBILE CONTACT BUTTON
            ================================================== */}

            <li className="mt-4 border-t border-black/10 pt-5">
              <Link
                href={contactNav.href}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#3368A0]
                  px-5
                  py-3.5
                  font-body
                  text-sm
                  font-semibold
                  text-white
                  shadow-md
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#66A3BF]
                  hover:shadow-lg
                  active:scale-[0.99]
                "
                onClick={closeMobileMenu}
              >
                <span>{contactNav.label}</span>

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                  "
                >
                  <path
                    d="M2.5 6.5h8M7.5 3.5l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
