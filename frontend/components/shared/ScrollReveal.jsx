"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps any content and adds the `.reveal` -> `.is-visible` fade/slide-up
 * animation (defined in globals.css) once the element scrolls into view.
 * `delay` (ms) lets a grid of these stagger without extra markup.
 */
export default function ScrollReveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
