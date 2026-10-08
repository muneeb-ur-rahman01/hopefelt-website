export const products = [
  {
    slug: "hope-baskets",
    name: "Hope Baskets",
    description:
      "Curated essential-goods baskets delivered to families facing food insecurity.",
    image: "https://picsum.photos/seed/hopefelt-prod-baskets/900/700",
    url: "https://example.com/hopefelt/hope-baskets",
  },
  {
    slug: "skill-kits",
    name: "Skill Kits",
    description:
      "Take-home vocational training kits used in our Women & Youth Empowerment workshops.",
    image: "https://picsum.photos/seed/hopefelt-prod-skillkits/900/700",
    url: "https://example.com/hopefelt/skill-kits",
  },
  {
    slug: "community-handbook",
    name: "Community Handbook",
    description:
      "A practical guide for local leaders on running grassroots development programs.",
    image: "https://picsum.photos/seed/hopefelt-prod-handbook/900/700",
    url: "https://example.com/hopefelt/community-handbook",
  },
  {
    slug: "care-packages",
    name: "Care Packages",
    description:
      "Hygiene and health essentials distributed through our mobile clinic outreach.",
    image: "https://picsum.photos/seed/hopefelt-prod-care/900/700",
    url: "https://example.com/hopefelt/care-packages",
  },
  {
    slug: "impact-merchandise",
    name: "Impact Merchandise",
    description:
      "Branded goods where proceeds go directly back into active Hopefelt programs.",
    image: "https://picsum.photos/seed/hopefelt-prod-merch/900/700",
    url: "https://example.com/hopefelt/impact-merchandise",
  },
];

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug);
