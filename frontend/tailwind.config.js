/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#152420",       // near-black text, deep teal cast
        forest: "#1F5C4E",    // primary — trust, growth
        forestDark: "#123A31",
        gold: "#D9A441",      // accent — warmth, hope
        goldSoft: "#F0D9A6",
        sand: "#F2F4EE",      // page background — warm, pale sage-cream
        surface: "#FBFAF5",   // card background
        line: "#E3E2D6",      // hairline borders
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(21, 36, 32, 0.18)",
        card: "0 4px 20px -6px rgba(21, 36, 32, 0.12)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(18px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 0.9s step-start infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
