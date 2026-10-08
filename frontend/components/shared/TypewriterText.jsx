"use client";

import { useEffect, useState } from "react";

/**
 * Reveals `text` one character at a time, like a typewriter. Runs once on
 * mount (the hero mounts once per page load, which is the trigger the brief
 * asks for). Respects prefers-reduced-motion by showing the full text
 * immediately.
 */
export default function TypewriterText({ text, speed = 28, className = "" }) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisibleChars(text.length);
      setDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleChars(i);
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text.slice(0, visibleChars)}
        <span
          className={`ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-gold ${
            done ? "animate-blink" : "opacity-100"
          }`}
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
