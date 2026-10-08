export const reportPages = {
  "annual-reports": {
    title: "Annual Reports",
    summary: "Our full annual report, published each year for donors and the public.",
    eyebrow: "Reports · Annual",
    image: "https://picsum.photos/seed/hopefelt-rep-annual/1600/900",
    body: [
      "Our annual report covers program activity, financials, and impact results across every department for the full fiscal year.",
      "See Impact → Annual Impact for the summarized version of the same numbers.",
    ],
    cta: { label: "See Annual Impact Summary", href: "/impact/annual-impact" },
  },
  "impact-reports": {
    title: "Impact Reports",
    summary: "Standalone reports on the outcomes of a specific program or campaign.",
    eyebrow: "Reports · Impact",
    image: "https://picsum.photos/seed/hopefelt-rep-impact/1600/900",
    body: [
      "Impact reports go deeper than our annual report, focusing on the outcomes of a single program, campaign, or region over its full run.",
    ],
  },
  "research-reports": {
    title: "Research Reports",
    summary: "Full detailed write-ups of completed research studies.",
    eyebrow: "Reports · Research",
    image: "https://picsum.photos/seed/hopefelt-rep-research/1600/900",
    body: [
      "Research reports provide the full methodology, data, and findings behind a completed study — the long-form version of what's summarized in a Research Abstract.",
    ],
  },
  "entrepreneurship-innovation-reports": {
    title: "Entrepreneurship & Innovation Reports",
    summary: "Progress and outcome reports for ventures supported through the Business Hub.",
    eyebrow: "Reports · Entrepreneurship & Innovation",
    image: "https://picsum.photos/seed/hopefelt-rep-entrepreneurship/1600/900",
    body: [
      "These reports track ventures supported through the Business Hub — from early mentorship through launch and, where available, early business outcomes.",
    ],
    cta: { label: "See the Business Hub", href: "/business-hub" },
  },
};

// Research Abstracts and Publications are owned by data/research.js — this
// section links to those same items rather than storing a second copy.
export const reusedFromResearch = [
  { slug: "research-abstracts", href: "/research/research-abstracts", label: "Research Abstracts" },
  { slug: "publications", href: "/research/publications", label: "Publications" },
];
