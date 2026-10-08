export const services = [
  {
    slug: "community-development",
    name: "Community Development",
    summary:
      "Local infrastructure, clean water access, and neighborhood planning led by the communities themselves.",
    image: "https://picsum.photos/seed/hopefelt-svc-community/1200/800",
    body: [
      "We work with community councils to identify the infrastructure and resource gaps that matter most locally — from clean water access to shared community spaces.",
      "Every project is co-designed with residents and handed off to local ownership once complete, so improvements are maintained long-term rather than abandoned after launch.",
    ],
  },
  {
    slug: "education",
    name: "Education",
    summary:
      "Tutoring, scholarships, and school-supply programs that keep children learning and engaged.",
    image: "https://picsum.photos/seed/hopefelt-svc-education/1200/800",
    body: [
      "Our education programs cover after-school tutoring, scholarship support, and teacher training, targeted at the communities where access to quality schooling is hardest to come by.",
      "We partner with local schools rather than building parallel systems, strengthening what already exists instead of duplicating it.",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Mobile clinics, preventive care outreach, and health education for underserved neighborhoods.",
    image: "https://picsum.photos/seed/hopefelt-svc-healthcare/1200/800",
    body: [
      "Hopefelt runs mobile health clinics and preventive-care outreach in areas with limited access to regular medical services.",
      "Alongside direct care, we run community health education sessions so families can prevent common illnesses before they start.",
    ],
  },
  {
    slug: "women-youth-empowerment",
    name: "Women & Youth Empowerment",
    summary:
      "Skills training, mentorship, and micro-grants that help women and young people build independence.",
    image: "https://picsum.photos/seed/hopefelt-svc-empowerment/1200/800",
    body: [
      "We run vocational training, mentorship circles, and small-business micro-grants aimed at women and young people looking to build financial independence.",
      "Participants graduate with both a practical skill and an active local support network to lean on afterward.",
    ],
  },
  {
    slug: "social-support",
    name: "Social Support",
    summary:
      "Emergency relief, counseling referrals, and essential-needs assistance for families in crisis.",
    image: "https://picsum.photos/seed/hopefelt-svc-support/1200/800",
    body: [
      "For families facing sudden hardship, we coordinate emergency relief — food, shelter referrals, and essential supplies — alongside connections to longer-term counseling and support services.",
      "Our goal is to stabilize a household quickly, then connect them to the right ongoing program so the support doesn't stop at the emergency.",
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
