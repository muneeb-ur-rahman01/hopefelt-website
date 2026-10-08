
// Primary website navigation for Hopefelt Foundation.
// Desktop navigation is rendered across multiple rows.
// Contact is intentionally kept as the CTA in the top row.

export const mainNav = [
  {
    label: "Home",
    href: "/",
  },

  // =========================================================
  // ABOUT US
  // =========================================================
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      {
        label: "Our Story",
        href: "/about/who-we-are",
      },
      {
        label: "Vision",
        href: "/about/our-vision",
      },
      {
        label: "Mission",
        href: "/about/our-mission",
      },
      {
        label: "Our Values",
        href: "/about/values",
      },
      {
        label: "Our Approach",
        href: "/about/our-approach",
      },
      {
        label: "Impact Framework",
        href: "/about/impact-framework",
      },
      {
        label: "Inclusion & Equity",
        href: "/about/inclusion-equity",
      },

      // -------------------------
      // OUR DEPARTMENTS
      // -------------------------
      {
        label: "Our Departments",
        href: "/about/our-departments",
        children: [
          {
            label: "Public Health Research & Development",
            href: "/about/our-departments/public-health-research-development",
          },
          {
            label: "Community Outreach & Field Operations",
            href: "/about/our-departments/community-outreach-field-operations",
          },
          {
            label: "Monitoring, Evaluation, Accountability & Learning",
            href: "/about/our-departments/monitoring-evaluation-accountability-learning",
          },
          {
            label: "Partnerships, Advocacy & External Relations",
            href: "/about/our-departments/partnerships-advocacy-external-relations",
          },
          {
            label: "Resource Mobilization & Fundraising",
            href: "/about/our-departments/resource-mobilization-fundraising",
          },
          {
            label: "Administration, HR & Logistics",
            href: "/about/our-departments/administration-hr-logistics",
          },
          {
            label: "IT, Technology & Digital Innovation",
            href: "/about/our-departments/it-technology-digital-innovation",
          },
          {
            label: "Digital Health & Health Innovation",
            href: "/about/our-departments/digital-health-health-innovation",
          },
          {
            label: "Programs, Training & Capacity Development",
            href: "/about/our-departments/programs-training-capacity-development",
          },
          {
            label: "Communications, Media & Digital Marketing",
            href: "/about/our-departments/communications-media-digital-marketing",
          },
        ],
      },

      // -------------------------
      // OUR TEAM
      // -------------------------
      {
        label: "Our Team",
        href: "/about/our-team",
        children: [
          {
            label: "Our Team",
            href: "/about/our-team",
          },
          {
            label: "Campaigners",
            href: "/about/campaigners",
          },
          {
            label: "Researchers & Experts",
            href: "/about/researchers-experts",
          },
          {
            label: "Technology & Innovation Team",
            href: "/about/technology-innovation-team",
          },
          {
            label: "Entrepreneurs & Social Innovators",
            href: "/about/entrepreneurs-social-innovators",
          },
        ],
      },

      {
        label: "Partners & Collaborators",
        href: "/about/partners",
      },
      {
        label: "Future Vision (2030–2050)",
        href: "/about/future-vision",
      },
    ],
  },

  // =========================================================
  // OUR WORK
  // =========================================================
 
{
  label: "Our Work",
  href: "/our-work",
  dropdown: [
    {
      label: "Health & Medical Support",
      href: "/our-work/health-medical-support",
      children: [
        {
          label: "Medical Outreach",
          href: "/our-work/health-medical-support/medical-outreach",
        },
        {
          label: "Medical Camps",
          href: "/our-work/health-medical-support/medical-camps",
        },
        {
          label: "Health Screening",
          href: "/our-work/health-medical-support/health-screening",
        },
        {
          label: "Preventive Health",
          href: "/our-work/health-medical-support/preventive-health",
        },
        {
          label: "Community Health Services",
          href: "/our-work/health-medical-support/community-health-services",
        },
      ],
    },

    {
      label: "Health Education & Awareness",
      href: "/our-work/health-education-awareness",
      children: [
        {
          label: "Health Education",
          href: "/our-work/health-education-awareness/health-education",
        },
        {
          label: "Health Promotion",
          href: "/our-work/health-education-awareness/health-promotion",
        },
        {
          label: "Disease Prevention",
          href: "/our-work/health-education-awareness/disease-prevention",
        },
        {
          label: "Community Awareness",
          href: "/our-work/health-education-awareness/community-awareness",
        },
        {
          label: "Public Awareness",
          href: "/our-work/health-education-awareness/public-awareness",
        },
      ],
    },

    {
      label: "Community Development & Outreach",
      href: "/our-work/community-development-outreach",
      children: [
        {
          label: "Community Outreach",
          href: "/our-work/community-development-outreach/community-outreach",
        },
        {
          label: "Community Engagement",
          href: "/our-work/community-development-outreach/community-engagement",
        },
        {
          label: "Community Mobilization",
          href: "/our-work/community-development-outreach/community-mobilization",
        },
        {
          label: "Community Development",
          href: "/our-work/community-development-outreach/community-development",
        },
        {
          label: "Vulnerable Community Support",
          href: "/our-work/community-development-outreach/vulnerable-community-support",
        },
        {
          label: "Community-Based Initiatives",
          href: "/our-work/community-development-outreach/community-based-initiatives",
        },
      ],
    },

    {
      label: "Climate, Environment & Community Resilience",
      href: "/our-work/climate-environment-resilience",
      children: [
        {
          label: "Climate & Health",
          href: "/our-work/climate-environment-resilience/climate-health",
        },
        {
          label: "Environmental Health",
          href: "/our-work/climate-environment-resilience/environmental-health",
        },
        {
          label: "Environmental Awareness",
          href: "/our-work/climate-environment-resilience/environmental-awareness",
        },
        {
          label: "Plantation Initiatives",
          href: "/our-work/climate-environment-resilience/plantation-initiatives",
        },
        {
          label: "Community Resilience",
          href: "/our-work/climate-environment-resilience/community-resilience",
        },
      ],
    },

    {
      label: "Social Support & Learning",
      href: "/our-work/social-support-learning",
      children: [
        {
          label: "Social Support",
          href: "/our-work/social-support-learning/social-support",
        },
        {
          label: "Educational Support",
          href: "/our-work/social-support-learning/educational-support",
        },
        {
          label: "Youth Development",
          href: "/our-work/social-support-learning/youth-development",
        },
        {
          label: "Learning Initiatives",
          href: "/our-work/social-support-learning/learning-initiatives",
        },
        {
          label: "Skills Development",
          href: "/our-work/social-support-learning/skills-development",
        },
      ],
    },

    {
      label: "Research, Evidence & Innovation",
      href: "/our-work/research-evidence-innovation",
      children: [
        {
          label: "Public Health Research",
          href: "/our-work/research-evidence-innovation/public-health-research",
        },
        {
          label: "Applied Research",
          href: "/our-work/research-evidence-innovation/applied-research",
        },
        {
          label: "Intervention Research",
          href: "/our-work/research-evidence-innovation/intervention-research",
        },
        {
          label: "Community-Based Research",
          href: "/our-work/research-evidence-innovation/community-based-research",
        },
        {
          label: "Evidence Generation",
          href: "/our-work/research-evidence-innovation/evidence-generation",
        },
        {
          label: "Research Data & Analysis",
          href: "/our-work/research-evidence-innovation/research-data-analysis",
        },
        {
          label: "Research Presentations",
          href: "/our-work/research-evidence-innovation/research-presentations",
        },
        {
          label: "Research Publications",
          href: "/our-work/research-evidence-innovation/research-publications",
        },
        {
          label: "Research Competitions",
          href: "/our-work/research-evidence-innovation/research-competitions",
        },
        {
          label: "Research Awards & Recognition",
          href: "/our-work/research-evidence-innovation/research-awards-recognition",
        },
        {
          label: "Research Collaborations",
          href: "/our-work/research-evidence-innovation/research-collaborations",
        },
        {
          label: "Research Funding",
          href: "/our-work/research-evidence-innovation/research-funding",
        },
        {
          label: "Research Sponsorship",
          href: "/our-work/research-evidence-innovation/research-sponsorship",
        },
        {
          label: "Research Innovation",
          href: "/our-work/research-evidence-innovation/research-innovation",
        },
      ],
    },

    {
      label: "Digital Health & Health Innovation",
      href: "/our-work/digital-health-health-innovation",
      children: [
        {
          label: "Digital Health Solutions",
          href: "/our-work/digital-health-health-innovation/digital-health-solutions",
        },
        {
          label: "Virtual Care",
          href: "/our-work/digital-health-health-innovation/virtual-care",
        },
        {
          label: "Telehealth",
          href: "/our-work/digital-health-health-innovation/telehealth",
        },
        {
          label: "Remote Care",
          href: "/our-work/digital-health-health-innovation/remote-care",
        },
        {
          label: "Digital Screening",
          href: "/our-work/digital-health-health-innovation/digital-screening",
        },
        {
          label: "Clinical Technology",
          href: "/our-work/digital-health-health-innovation/clinical-technology",
        },
        {
          label: "Health Information Systems",
          href: "/our-work/digital-health-health-innovation/health-information-systems",
        },
        {
          label: "Health Data & Analytics",
          href: "/our-work/digital-health-health-innovation/health-data-analytics",
        },
        {
          label: "Digital Health Research",
          href: "/our-work/digital-health-health-innovation/digital-health-research",
        },
        {
          label: "Digital Health Innovation",
          href: "/our-work/digital-health-health-innovation/digital-health-innovation",
        },
      ],
    },

    {
      label: "Technology & Digital Innovation",
      href: "/our-work/technology-digital-innovation",
      children: [
        {
          label: "Software Products",
          href: "/our-work/technology-digital-innovation/software-products",
        },
        {
          label: "Digital Platforms",
          href: "/our-work/technology-digital-innovation/digital-platforms",
        },
        {
          label: "SaaS Platforms",
          href: "/our-work/technology-digital-innovation/saas-platforms",
        },
        {
          label: "IT Solutions",
          href: "/our-work/technology-digital-innovation/it-solutions",
        },
        {
          label: "Software Development",
          href: "/our-work/technology-digital-innovation/software-development",
        },
        {
          label: "Technical Support",
          href: "/our-work/technology-digital-innovation/technical-support",
        },
        {
          label: "Data & Technology Systems",
          href: "/our-work/technology-digital-innovation/data-technology-systems",
        },
        {
          label: "Automation",
          href: "/our-work/technology-digital-innovation/automation",
        },
        {
          label: "AI-Enabled Solutions",
          href: "/our-work/technology-digital-innovation/ai-enabled-solutions",
        },
        {
          label: "Digital Transformation",
          href: "/our-work/technology-digital-innovation/digital-transformation",
        },
        {
          label: "Cybersecurity & Data Protection",
          href: "/our-work/technology-digital-innovation/cybersecurity-data-protection",
        },
        {
          label: "Technology for Communities",
          href: "/our-work/technology-digital-innovation/technology-for-communities",
        },
      ],
    },

    {
      label: "Entrepreneurship & Social Enterprise",
      href: "/our-work/entrepreneurship-social-enterprise",
      children: [
        {
          label: "Entrepreneurship Development",
          href: "/our-work/entrepreneurship-social-enterprise/entrepreneurship-development",
        },
        {
          label: "Youth Entrepreneurship",
          href: "/our-work/entrepreneurship-social-enterprise/youth-entrepreneurship",
        },
        {
          label: "Social Entrepreneurship",
          href: "/our-work/entrepreneurship-social-enterprise/social-entrepreneurship",
        },
        {
          label: "Health Entrepreneurship",
          href: "/our-work/entrepreneurship-social-enterprise/health-entrepreneurship",
        },
        {
          label: "Technology Entrepreneurship",
          href: "/our-work/entrepreneurship-social-enterprise/technology-entrepreneurship",
        },
        {
          label: "Innovation & Startup Ideas",
          href: "/our-work/entrepreneurship-social-enterprise/innovation-startup-ideas",
        },
        {
          label: "Entrepreneurial Skills",
          href: "/our-work/entrepreneurship-social-enterprise/entrepreneurial-skills",
        },
        {
          label: "Business & Enterprise Development",
          href: "/our-work/entrepreneurship-social-enterprise/business-enterprise-development",
        },
        {
          label: "Social Enterprise Models",
          href: "/our-work/entrepreneurship-social-enterprise/social-enterprise-models",
        },
        {
          label: "Innovation Challenges",
          href: "/our-work/entrepreneurship-social-enterprise/innovation-challenges",
        },
        {
          label: "Entrepreneurship Competitions",
          href: "/our-work/entrepreneurship-social-enterprise/entrepreneurship-competitions",
        },
        {
          label: "Startup & Business Mentorship",
          href: "/our-work/entrepreneurship-social-enterprise/startup-business-mentorship",
        },
        {
          label: "Entrepreneurship Partnerships",
          href: "/our-work/entrepreneurship-social-enterprise/entrepreneurship-partnerships",
        },
      ],
    },

    {
      label: "Communications, Media & Digital Marketing",
      href: "/our-work/communications-media-digital-marketing",
      children: [
        {
          label: "Digital Marketing",
          href: "/our-work/communications-media-digital-marketing/digital-marketing",
        },
        {
          label: "Social Media Management",
          href: "/our-work/communications-media-digital-marketing/social-media-management",
        },
        {
          label: "Mass Media",
          href: "/our-work/communications-media-digital-marketing/mass-media",
        },
        {
          label: "Community Awareness Through Media",
          href: "/our-work/communications-media-digital-marketing/community-awareness-through-media",
        },
        {
          label: "Health Awareness Through Mass Media",
          href: "/our-work/communications-media-digital-marketing/health-awareness-through-mass-media",
        },
        {
          label: "Public Awareness Campaigns",
          href: "/our-work/communications-media-digital-marketing/public-awareness-campaigns",
        },
        {
          label: "Project Communication",
          href: "/our-work/communications-media-digital-marketing/project-communication",
        },
        {
          label: "Campaign Communication",
          href: "/our-work/communications-media-digital-marketing/campaign-communication",
        },
        {
          label: "Product Communication",
          href: "/our-work/communications-media-digital-marketing/product-communication",
        },
        {
          label: "Content & Creative",
          href: "/our-work/communications-media-digital-marketing/content-creative",
        },
        {
          label: "Public Relations",
          href: "/our-work/communications-media-digital-marketing/public-relations",
        },
        {
          label: "Media Relations",
          href: "/our-work/communications-media-digital-marketing/media-relations",
        },
      ],
    },

    {
      label: "Future Goals & Long-Term Vision",
      href: "/our-work/future-goals",
      children: [
        {
          label: "2030 Goals",
          href: "/our-work/future-goals/2030-goals",
        },
        {
          label: "2040 Goals",
          href: "/our-work/future-goals/2040-goals",
        },
        {
          label: "2050 Goals",
          href: "/our-work/future-goals/2050-goals",
        },
      ],
    },
  ],
},


  // =========================================================
  // PROJECTS
  // =========================================================

{
  label: "Projects",
  href: "/projects",
  dropdown: [
    {
      label: "Health & Medical Projects",
      href: "/projects/health-medical",
    },
    {
      label: "Health Education Projects",
      href: "/projects/health-education",
    },
    {
      label: "Community Development Projects",
      href: "/projects/community-development",
    },
    {
      label: "Climate & Environment Projects",
      href: "/projects/climate-environment",
    },
    {
      label: "Social Support & Learning Projects",
      href: "/projects/social-support-learning",
    },
    {
      label: "Research & Evidence Projects",
      href: "/projects/research-evidence",
    },
    {
      label: "Digital Health Projects",
      href: "/projects/digital-health",
    },
    {
      label: "Technology Projects",
      href: "/projects/technology",
    },
    {
      label: "Entrepreneurship & Social Enterprise Projects",
      href: "/projects/entrepreneurship-social-enterprise",
    },
    {
      label: "Communications & Media Projects",
      href: "/projects/communications-media",
    },
    {
      label: "Special / Cross-Program Projects",
      href: "/projects/special-cross-program",
    },
  ],
},


  // =========================================================
  // CAMPAIGNS & INITIATIVES
  // =========================================================
{
  label: "Campaigns & Initiatives",
  href: "/campaigns-initiatives",
  dropdown: [
    {
      label: "Health Campaigns",
      href: "/campaigns-initiatives/health-campaigns",
    },
    {
      label: "Community Campaigns",
      href: "/campaigns-initiatives/community-campaigns",
    },
    {
      label: "Climate & Environmental Campaigns",
      href: "/campaigns-initiatives/climate-environmental-campaigns",
    },
    {
      label: "Digital Campaigns",
      href: "/campaigns-initiatives/digital-campaigns",
    },
    {
      label: "Mass Media Campaigns",
      href: "/campaigns-initiatives/mass-media-campaigns",
    },
    {
      label: "Fundraising Campaigns",
      href: "/campaigns-initiatives/fundraising-campaigns",
    },
    {
      label: "Technology & Product Campaigns",
      href: "/campaigns-initiatives/technology-product-campaigns",
    },
    {
      label: "Entrepreneurship & Innovation Initiatives",
      href: "/campaigns-initiatives/entrepreneurship-innovation-initiatives",
    },
    {
      label: "Youth Initiatives",
      href: "/campaigns-initiatives/youth-initiatives",
    },
    {
      label: "Volunteer Initiatives",
      href: "/campaigns-initiatives/volunteer-initiatives",
    },
    {
      label: "Special Initiatives",
      href: "/campaigns-initiatives/special-initiatives",
    },
  ],
},


  // =========================================================
  // TRAINING & CAPACITY DEVELOPMENT
  // =========================================================
//  {
//   label: "Training & Capacity Development",
//   href: "/training-capacity-development",
//   dropdown: [
//     {
//       label: "Training Programs",
//       href: "/training-capacity-development/training-programs",
//     },
//     {
//       label: "Workshops",
//       href: "/training-capacity-development/workshops",
//     },
//     {
//       label: "Capacity Building",
//       href: "/training-capacity-development/capacity-building",
//     },
//     {
//       label: "Professional Development",
//       href: "/training-capacity-development/professional-development",
//     },
//     {
//       label: "Internships",
//       href: "/training-capacity-development/internships",
//     },
//     {
//       label: "Hands-on Experience",
//       href: "/training-capacity-development/hands-on-experience",
//     },
//     {
//       label: "Field Experience",
//       href: "/training-capacity-development/field-experience",
//     },
//     {
//       label: "Volunteer Learning",
//       href: "/training-capacity-development/volunteer-learning",
//     },
//     {
//       label: "Research Training",
//       href: "/training-capacity-development/research-training",
//     },
//     {
//       label: "Research Methodology",
//       href: "/training-capacity-development/research-methodology",
//     },
//     {
//       label: "Digital Health Training",
//       href: "/training-capacity-development/digital-health-training",
//     },
//     {
//       label: "Technology Training",
//       href: "/training-capacity-development/technology-training",
//     },
//     {
//       label: "Software & Digital Skills",
//       href: "/training-capacity-development/software-digital-skills",
//     },
//     {
//       label: "Entrepreneurship Training",
//       href: "/training-capacity-development/entrepreneurship-training",
//     },
//     {
//       label: "Business & Enterprise Skills",
//       href: "/training-capacity-development/business-enterprise-skills",
//     },
//     {
//       label: "Startup & Innovation Training",
//       href: "/training-capacity-development/startup-innovation-training",
//     },
//     {
//       label: "Digital Marketing & Communication Training",
//       href: "/training-capacity-development/digital-marketing-communication-training",
//     },
//     {
//       label: "Training Partnerships",
//       href: "/training-capacity-development/training-partnerships",
//     },
//   ],
// },

  // =========================================================
  // EVENTS
  // =========================================================

{
  label: "Events",
  href: "/events",
  dropdown: [
    {
      label: "Conferences",
      href: "/events/conferences",
    },
    {
      label: "Webinars",
      href: "/events/webinars",
    },
    {
      label: "Community Events",
      href: "/events/community-events",
    },
    {
      label: "Awareness Events",
      href: "/events/awareness-events",
    },
    {
      label: "Fundraising Events",
      href: "/events/fundraising-events",
    },
    {
      label: "Organizational Events",
      href: "/events/organizational-events",
    },
    {
      label: "Workshops",
      href: "/events/workshops",
    },
    {
      label: "Campaign Events",
      href: "/events/campaign-events",
    },
    {
      label: "Media Events",
      href: "/events/media-events",
    },
    {
      label: "Research Events",
      href: "/events/research-events",
    },
    {
      label: "Research Competitions",
      href: "/events/research-competitions",
    },
    {
      label: "Technology & Innovation Events",
      href: "/events/technology-innovation-events",
    },
    {
      label: "Entrepreneurship Events",
      href: "/events/entrepreneurship-events",
    },
    {
      label: "Startup & Business Events",
      href: "/events/startup-business-events",
    },
    {
      label: "Product / Technology Launch Events",
      href: "/events/product-technology-launch-events",
    },
  ],
},

// ============================================================
// 8. RESEARCH, EVIDENCE & INNOVATION
// ============================================================

// {
//   label: "Research, Evidence & Innovation",
//   href: "/research-evidence-innovation",
//   dropdown: [
//     {
//       label: "Research Areas",
//       href: "/research-evidence-innovation/research-areas",
//     },
//     {
//       label: "Research Projects",
//       href: "/research-evidence-innovation/research-projects",
//     },
//     {
//       label: "Research Design & Methodology",
//       href: "/research-evidence-innovation/research-design-methodology",
//     },
//     {
//       label: "Applied Public Health Research",
//       href: "/research-evidence-innovation/applied-public-health-research",
//     },
//     {
//       label: "Intervention Research",
//       href: "/research-evidence-innovation/intervention-research",
//     },
//     {
//       label: "Community-Based Research",
//       href: "/research-evidence-innovation/community-based-research",
//     },
//     {
//       label: "Evidence Generation",
//       href: "/research-evidence-innovation/evidence-generation",
//     },
//     {
//       label: "Research Data & Analysis",
//       href: "/research-evidence-innovation/research-data-analysis",
//     },
//     {
//       label: "Research Abstracts",
//       href: "/research-evidence-innovation/research-abstracts",
//     },
//     {
//       label: "Research Presentations",
//       href: "/research-evidence-innovation/research-presentations",
//     },
//     {
//       label: "Research Competitions",
//       href: "/research-evidence-innovation/research-competitions",
//     },
//     {
//       label: "Research Awards & Recognition",
//       href: "/research-evidence-innovation/research-awards-recognition",
//     },
//     {
//       label: "Research Collaborations",
//       href: "/research-evidence-innovation/research-collaborations",
//     },
//     {
//       label: "Research Funding",
//       href: "/research-evidence-innovation/research-funding",
//     },
//     {
//       label: "Research Sponsorship",
//       href: "/research-evidence-innovation/research-sponsorship",
//     },
//     {
//       label: "Research Innovation",
//       href: "/research-evidence-innovation/research-innovation",
//     },
//     {
//       label: "Knowledge Resources",
//       href: "/research-evidence-innovation/knowledge-resources",
//     },
//     {
//       label: "Research Publications",
//       href: "/research-evidence-innovation/research-publications",
//     },
//   ],
// },

// ============================================================
// 9. DIGITAL HEALTH & HEALTH INNOVATION
// ============================================================

// {
//   label: "Digital Health & Health Innovation",
//   href: "/digital-health-health-innovation",
//   dropdown: [
//     {
//       label: "Digital Health Solutions",
//       href: "/digital-health-health-innovation/digital-health-solutions",
//     },
//     {
//       label: "Virtual Care",
//       href: "/digital-health-health-innovation/virtual-care",
//       children: [
//         {
//           label: "Virtual Clinic",
//           href: "/digital-health-health-innovation/virtual-care/virtual-clinic",
//         },
//         {
//           label: "Telehealth",
//           href: "/digital-health-health-innovation/virtual-care/telehealth",
//         },
//         {
//           label: "Remote Care",
//           href: "/digital-health-health-innovation/virtual-care/remote-care",
//         },
//       ],
//     },
//     {
//       label: "Digital Screening & Assessment",
//       href: "/digital-health-health-innovation/digital-screening-assessment",
//     },
//     {
//       label: "Clinical Technology",
//       href: "/digital-health-health-innovation/clinical-technology",
//     },
//     {
//       label: "Health Information Systems",
//       href: "/digital-health-health-innovation/health-information-systems",
//     },
//     {
//       label: "Health Data & Analytics",
//       href: "/digital-health-health-innovation/health-data-analytics",
//     },
//     {
//       label: "Digital Health Training",
//       href: "/digital-health-health-innovation/digital-health-training",
//     },
//     {
//       label: "Digital Health Research",
//       href: "/digital-health-health-innovation/digital-health-research",
//     },
//     {
//       label: "Digital Health Evaluation",
//       href: "/digital-health-health-innovation/digital-health-evaluation",
//     },
//     {
//       label: "Digital Health Innovation",
//       href: "/digital-health-health-innovation/digital-health-innovation",
//     },
//     {
//       label: "Health Technology Entrepreneurship",
//       href: "/digital-health-health-innovation/health-technology-entrepreneurship",
//     },
//   ],
// },

// ============================================================
// 10. TECHNOLOGY & DIGITAL INNOVATION
// ============================================================

// {
//   label: "Technology & Digital Innovation",
//   href: "/technology-digital-innovation",
//   dropdown: [
//     {
//       label: "Software Products",
//       href: "/technology-digital-innovation/software-products",
//       children: [
//         {
//           label: "Product 01",
//           href: "/technology-digital-innovation/software-products/product-01",
//         },
//         {
//           label: "Product 02",
//           href: "/technology-digital-innovation/software-products/product-02",
//         },
//         {
//           label: "Product 03",
//           href: "/technology-digital-innovation/software-products/product-03",
//         },
//         {
//           label: "Future Products",
//           href: "/technology-digital-innovation/software-products/future-products",
//         },
//       ],
//     },

//     {
//       label: "Digital Platforms",
//       href: "/technology-digital-innovation/digital-platforms",
//       children: [
//         {
//           label: "Web Platforms",
//           href: "/technology-digital-innovation/digital-platforms/web-platforms",
//         },
//         {
//           label: "Mobile Platforms",
//           href: "/technology-digital-innovation/digital-platforms/mobile-platforms",
//         },
//         {
//           label: "SaaS Platforms",
//           href: "/technology-digital-innovation/digital-platforms/saas-platforms",
//         },
//         {
//           label: "Community Platforms",
//           href: "/technology-digital-innovation/digital-platforms/community-platforms",
//         },
//       ],
//     },

//     {
//       label: "IT & Technology Solutions",
//       href: "/technology-digital-innovation/it-technology-solutions",
//       children: [
//         {
//           label: "Software Solutions",
//           href: "/technology-digital-innovation/it-technology-solutions/software-solutions",
//         },
//         {
//           label: "Business Technology Solutions",
//           href: "/technology-digital-innovation/it-technology-solutions/business-technology-solutions",
//         },
//         {
//           label: "Community Technology Solutions",
//           href: "/technology-digital-innovation/it-technology-solutions/community-technology-solutions",
//         },
//         {
//           label: "Digital Transformation",
//           href: "/technology-digital-innovation/it-technology-solutions/digital-transformation",
//         },
//       ],
//     },

//     {
//       label: "Technology Services",
//       href: "/technology-digital-innovation/technology-services",
//       children: [
//         {
//           label: "Software Development",
//           href: "/technology-digital-innovation/technology-services/software-development",
//         },
//         {
//           label: "Technical Support",
//           href: "/technology-digital-innovation/technology-services/technical-support",
//         },
//         {
//           label: "System Implementation",
//           href: "/technology-digital-innovation/technology-services/system-implementation",
//         },
//         {
//           label: "IT Support",
//           href: "/technology-digital-innovation/technology-services/it-support",
//         },
//         {
//           label: "Data Management",
//           href: "/technology-digital-innovation/technology-services/data-management",
//         },
//         {
//           label: "Automation",
//           href: "/technology-digital-innovation/technology-services/automation",
//         },
//         {
//           label: "Technical Consulting",
//           href: "/technology-digital-innovation/technology-services/technical-consulting",
//         },
//         {
//           label: "Digital Infrastructure",
//           href: "/technology-digital-innovation/technology-services/digital-infrastructure",
//         },
//       ],
//     },

//     {
//       label: "Data & Technology Systems",
//       href: "/technology-digital-innovation/data-technology-systems",
//     },

//     {
//       label: "Automation & Smart Systems",
//       href: "/technology-digital-innovation/automation-smart-systems",
//       children: [
//         {
//           label: "Workflow Automation",
//           href: "/technology-digital-innovation/automation-smart-systems/workflow-automation",
//         },
//         {
//           label: "Smart Systems",
//           href: "/technology-digital-innovation/automation-smart-systems/smart-systems",
//         },
//         {
//           label: "AI-Enabled Solutions",
//           href: "/technology-digital-innovation/automation-smart-systems/ai-enabled-solutions",
//         },
//         {
//           label: "Intelligent Automation",
//           href: "/technology-digital-innovation/automation-smart-systems/intelligent-automation",
//         },
//       ],
//     },

//     {
//       label: "IT Infrastructure & Security",
//       href: "/technology-digital-innovation/it-infrastructure-security",
//       children: [
//         {
//           label: "IT Infrastructure",
//           href: "/technology-digital-innovation/it-infrastructure-security/it-infrastructure",
//         },
//         {
//           label: "Cybersecurity",
//           href: "/technology-digital-innovation/it-infrastructure-security/cybersecurity",
//         },
//         {
//           label: "Data Protection",
//           href: "/technology-digital-innovation/it-infrastructure-security/data-protection",
//         },
//         {
//           label: "System Security",
//           href: "/technology-digital-innovation/it-infrastructure-security/system-security",
//         },
//       ],
//     },

//     {
//       label: "Technology for Communities",
//       href: "/technology-digital-innovation/technology-for-communities",
//       children: [
//         {
//           label: "Community Technology",
//           href: "/technology-digital-innovation/technology-for-communities/community-technology",
//         },
//         {
//           label: "Digital Access",
//           href: "/technology-digital-innovation/technology-for-communities/digital-access",
//         },
//         {
//           label: "Technology Education",
//           href: "/technology-digital-innovation/technology-for-communities/technology-education",
//         },
//         {
//           label: "Digital Inclusion",
//           href: "/technology-digital-innovation/technology-for-communities/digital-inclusion",
//         },
//       ],
//     },

//     {
//       label: "Technology Entrepreneurship & Innovation",
//       href: "/technology-digital-innovation/technology-entrepreneurship-innovation",
//       children: [
//         {
//           label: "Startup Technology",
//           href: "/technology-digital-innovation/technology-entrepreneurship-innovation/startup-technology",
//         },
//         {
//           label: "Digital Product Innovation",
//           href: "/technology-digital-innovation/technology-entrepreneurship-innovation/digital-product-innovation",
//         },
//         {
//           label: "Technology Business Models",
//           href: "/technology-digital-innovation/technology-entrepreneurship-innovation/technology-business-models",
//         },
//         {
//           label: "Innovation Development",
//           href: "/technology-digital-innovation/technology-entrepreneurship-innovation/innovation-development",
//         },
//       ],
//     },
//   ],
// },


// {
//   label: "Business Hub",
//   href: "/business-hub",
//   dropdown: [
//     {
//       label: "Entrepreneurship",
//       href: "/business-hub/entrepreneurship",
//     },
//     {
//       label: "Startups",
//       href: "/business-hub/startups",
//     },
//     {
//       label: "Products & Services",
//       href: "/business-hub/products-services",
//     },
//     {
//       label: "Business Development",
//       href: "/business-hub/business-development",
//     },
//     {
//       label: "Technology Business",
//       href: "/business-hub/technology-business",
//     },
//     {
//       label: "Health Business",
//       href: "/business-hub/health-business",
//     },
//     {
//       label: "Social Enterprise",
//       href: "/business-hub/social-enterprise",
//     },
//     {
//       label: "Mentorship",
//       href: "/business-hub/mentorship",
//     },
//     {
//       label: "Competitions",
//       href: "/business-hub/competitions",
//     },
//     {
//       label: "Partnerships",
//       href: "/business-hub/partnerships",
//     },
//     {
//       label: "Sponsorship",
//       href: "/business-hub/sponsorship",
//     },
//     {
//       label: "Business Stories",
//       href: "/business-hub/business-stories",
//     },
//   ],
// },

// ============================================================
// 11. COMMUNICATIONS, MEDIA & DIGITAL MARKETING
// ============================================================

// {
//   label: "Communications, Media & Digital Marketing",
//   href: "/communications-media-digital-marketing",
//   dropdown: [
//     {
//       label: "Digital Marketing",
//       href: "/communications-media-digital-marketing/digital-marketing",
//       children: [
//         {
//           label: "Digital Marketing Strategy",
//           href: "/communications-media-digital-marketing/digital-marketing/digital-marketing-strategy",
//         },
//         {
//           label: "Project Marketing",
//           href: "/communications-media-digital-marketing/digital-marketing/project-marketing",
//         },
//         {
//           label: "Campaign Marketing",
//           href: "/communications-media-digital-marketing/digital-marketing/campaign-marketing",
//         },
//         {
//           label: "Product Marketing",
//           href: "/communications-media-digital-marketing/digital-marketing/product-marketing",
//         },
//         {
//           label: "Digital Outreach",
//           href: "/communications-media-digital-marketing/digital-marketing/digital-outreach",
//         },
//         {
//           label: "Audience Engagement",
//           href: "/communications-media-digital-marketing/digital-marketing/audience-engagement",
//         },
//         {
//           label: "Marketing Analytics",
//           href: "/communications-media-digital-marketing/digital-marketing/marketing-analytics",
//         },
//       ],
//     },

//     {
//       label: "Social Media Management",
//       href: "/communications-media-digital-marketing/social-media-management",
//       children: [
//         {
//           label: "Social Media Strategy",
//           href: "/communications-media-digital-marketing/social-media-management/social-media-strategy",
//         },
//         {
//           label: "Content Calendar",
//           href: "/communications-media-digital-marketing/social-media-management/content-calendar",
//         },
//         {
//           label: "Platform Management",
//           href: "/communications-media-digital-marketing/social-media-management/platform-management",
//         },
//         {
//           label: "Community Management",
//           href: "/communications-media-digital-marketing/social-media-management/community-management",
//         },
//         {
//           label: "Social Media Campaigns",
//           href: "/communications-media-digital-marketing/social-media-management/social-media-campaigns",
//         },
//         {
//           label: "Social Analytics",
//           href: "/communications-media-digital-marketing/social-media-management/social-analytics",
//         },
//       ],
//     },

//     {
//       label: "Mass Media",
//       href: "/communications-media-digital-marketing/mass-media",
//       children: [
//         {
//           label: "Television",
//           href: "/communications-media-digital-marketing/mass-media/television",
//         },
//         {
//           label: "Podcast",
//           href: "/communications-media-digital-marketing/mass-media/radio",
//         },
//         {
//           label: "Newspapers",
//           href: "/communications-media-digital-marketing/mass-media/newspapers",
//         },
//         {
//           label: "Online Media",
//           href: "/communications-media-digital-marketing/mass-media/online-media",
//         },
//         {
//           label: "Media Partnerships",
//           href: "/communications-media-digital-marketing/mass-media/media-partnerships",
//         },
//         {
//           label: "Interviews",
//           href: "/communications-media-digital-marketing/mass-media/interviews",
//         },
//         {
//           label: "Media Coverage",
//           href: "/communications-media-digital-marketing/mass-media/media-coverage",
//         },
//       ],
//     },

//     {
//       label: "Community Awareness Through Media",
//       href: "/communications-media-digital-marketing/community-awareness-through-media",
//       children: [
//         {
//           label: "Health Awareness Through Mass Media",
//           href: "/communications-media-digital-marketing/community-awareness-through-media/health-awareness-through-mass-media",
//         },
//         {
//           label: "Public Health Communication",
//           href: "/communications-media-digital-marketing/community-awareness-through-media/public-health-communication",
//         },
//         {
//           label: "Community Awareness Campaigns",
//           href: "/communications-media-digital-marketing/community-awareness-through-media/community-awareness-campaigns",
//         },
//         {
//           label: "Television Awareness",
//           href: "/communications-media-digital-marketing/community-awareness-through-media/television-awareness",
//         },
//         {
//           label: "podcast Awareness",
//           href: "/communications-media-digital-marketing/community-awareness-through-media/radio-awareness",
//         },
//         {
//           label: "Newspaper Awareness",
//           href: "/communications-media-digital-marketing/community-awareness-through-media/newspaper-awareness",
//         },
//         {
//           label: "Online Awareness",
//           href: "/communications-media-digital-marketing/community-awareness-through-media/online-awareness",
//         },
//         {
//           label: "Integrated Media Campaigns",
//           href: "/communications-media-digital-marketing/community-awareness-through-media/integrated-media-campaigns",
//         },
//       ],
//     },

//     {
//       label: "Campaign Communication",
//       href: "/communications-media-digital-marketing/campaign-communication",
//       children: [
//         {
//           label: "Health Campaign Communication",
//           href: "/communications-media-digital-marketing/campaign-communication/health-campaign-communication",
//         },
//         {
//           label: "Public Awareness Campaigns",
//           href: "/communications-media-digital-marketing/campaign-communication/public-awareness-campaigns",
//         },
//         {
//           label: "Digital Campaigns",
//           href: "/communications-media-digital-marketing/campaign-communication/digital-campaigns",
//         },
//         {
//           label: "Mass Media Campaigns",
//           href: "/communications-media-digital-marketing/campaign-communication/mass-media-campaigns",
//         },
//         {
//           label: "Community Campaign Communication",
//           href: "/communications-media-digital-marketing/campaign-communication/community-campaign-communication",
//         },
//         {
//           label: "Fundraising Campaign Communication",
//           href: "/communications-media-digital-marketing/campaign-communication/fundraising-campaign-communication",
//         },
//         {
//           label: "Product Campaign Communication",
//           href: "/communications-media-digital-marketing/campaign-communication/product-campaign-communication",
//         },
//       ],
//     },

//     {
//       label: "Project Communication",
//       href: "/communications-media-digital-marketing/project-communication",
//       children: [
//         {
//           label: "Project Announcements",
//           href: "/communications-media-digital-marketing/project-communication/project-announcements",
//         },
//         {
//           label: "Project Updates",
//           href: "/communications-media-digital-marketing/project-communication/project-updates",
//         },
//         {
//           label: "Project Highlights",
//           href: "/communications-media-digital-marketing/project-communication/project-highlights",
//         },
//         {
//           label: "Project Documentation",
//           href: "/communications-media-digital-marketing/project-communication/project-documentation",
//         },
//         {
//           label: "Project Media",
//           href: "/communications-media-digital-marketing/project-communication/project-media",
//         },
//       ],
//     },

//     {
//       label: "Product Communication",
//       href: "/communications-media-digital-marketing/product-communication",
//       children: [
//         {
//           label: "Software Product Promotion",
//           href: "/communications-media-digital-marketing/product-communication/software-product-promotion",
//         },
//         {
//           label: "Product Launches",
//           href: "/communications-media-digital-marketing/product-communication/product-launches",
//         },
//         {
//           label: "Product Content",
//           href: "/communications-media-digital-marketing/product-communication/product-content",
//         },
//         {
//           label: "Product Demonstrations",
//           href: "/communications-media-digital-marketing/product-communication/product-demonstrations",
//         },
//         {
//           label: "Product Stories",
//           href: "/communications-media-digital-marketing/product-communication/product-stories",
//         },
//         {
//           label: "Product Media",
//           href: "/communications-media-digital-marketing/product-communication/product-media",
//         },
//       ],
//     },

//     {
//       label: "Content & Creative",
//       href: "/communications-media-digital-marketing/content-creative",
//       children: [
//         {
//           label: "Graphic Design",
//           href: "/communications-media-digital-marketing/content-creative/graphic-design",
//         },
//         {
//           label: "Infographics",
//           href: "/communications-media-digital-marketing/content-creative/infographics",
//         },
//         {
//           label: "Photography",
//           href: "/communications-media-digital-marketing/content-creative/photography",
//         },
//         {
//           label: "Video Production",
//           href: "/communications-media-digital-marketing/content-creative/video-production",
//         },
//         {
//           label: "Reels",
//           href: "/communications-media-digital-marketing/content-creative/reels",
//         },
//         {
//           label: "Educational Content",
//           href: "/communications-media-digital-marketing/content-creative/educational-content",
//         },
//         {
//           label: "Campaign Creatives",
//           href: "/communications-media-digital-marketing/content-creative/campaign-creatives",
//         },
//         {
//           label: "Digital Content",
//           href: "/communications-media-digital-marketing/content-creative/digital-content",
//         },
//       ],
//     },

//     {
//       label: "Brand & Communication",
//       href: "/communications-media-digital-marketing/brand-communication",
//       children: [
//         {
//           label: "Brand Management",
//           href: "/communications-media-digital-marketing/brand-communication/brand-management",
//         },
//         {
//           label: "Visual Identity",
//           href: "/communications-media-digital-marketing/brand-communication/visual-identity",
//         },
//         {
//           label: "Project Branding",
//           href: "/communications-media-digital-marketing/brand-communication/project-branding",
//         },
//         {
//           label: "Campaign Branding",
//           href: "/communications-media-digital-marketing/brand-communication/campaign-branding",
//         },
//         {
//           label: "Product Branding",
//           href: "/communications-media-digital-marketing/brand-communication/product-branding",
//         },
//         {
//           label: "Communication Guidelines",
//           href: "/communications-media-digital-marketing/brand-communication/communication-guidelines",
//         },
//       ],
//     },

//     {
//       label: "Public Relations & Media Relations",
//       href: "/communications-media-digital-marketing/public-relations-media-relations",
//       children: [
//         {
//           label: "Public Relations",
//           href: "/communications-media-digital-marketing/public-relations-media-relations/public-relations",
//         },
//         {
//           label: "Media Outreach",
//           href: "/communications-media-digital-marketing/public-relations-media-relations/media-outreach",
//         },
//         {
//           label: "Media Partnerships",
//           href: "/communications-media-digital-marketing/public-relations-media-relations/media-partnerships",
//         },
//         {
//           label: "Press Releases",
//           href: "/communications-media-digital-marketing/public-relations-media-relations/press-releases",
//         },
//         {
//           label: "Interviews",
//           href: "/communications-media-digital-marketing/public-relations-media-relations/interviews",
//         },
//         {
//           label: "Media Monitoring",
//           href: "/communications-media-digital-marketing/public-relations-media-relations/media-monitoring",
//         },
//       ],
//     },
//   ],
// },

// ============================================================
// 12. IMPACT
// ============================================================

// {
//   label: "Impact",
//   href: "/impact",
//   dropdown: [
//     {
//       label: "Impact by Numbers",
//       href: "/impact/impact-by-numbers",
//     },
//     {
//       label: "Health Impact",
//       href: "/impact/health-impact",
//     },
//     {
//       label: "Community Impact",
//       href: "/impact/community-impact",
//     },
//     {
//       label: "Training & Capacity Impact",
//       href: "/impact/training-capacity-impact",
//     },
//     {
//       label: "Research Impact",
//       href: "/impact/research-impact",
//     },
//     {
//       label: "Research & Innovation Outcomes",
//       href: "/impact/research-innovation-outcomes",
//     },
//     {
//       label: "Climate & Environmental Impact",
//       href: "/impact/climate-environmental-impact",
//     },
//     {
//       label: "Digital Health Impact",
//       href: "/impact/digital-health-impact",
//     },
//     {
//       label: "Technology & Innovation Impact",
//       href: "/impact/technology-innovation-impact",
//     },
//     {
//       label: "Entrepreneurship & Enterprise Impact",
//       href: "/impact/entrepreneurship-enterprise-impact",
//     },
//     {
//       label: "Campaign Reach",
//       href: "/impact/campaign-reach",
//     },
//     {
//       label: "Community Awareness Reach",
//       href: "/impact/community-awareness-reach",
//     },
//     {
//       label: "Digital Engagement",
//       href: "/impact/digital-engagement",
//     },
//     {
//       label: "Social Media Reach",
//       href: "/impact/social-media-reach",
//     },
//     {
//       label: "Mass Media Reach",
//       href: "/impact/mass-media-reach",
//     },
//     {
//       label: "Geographic Impact",
//       href: "/impact/geographic-impact",
//     },
//     {
//       label: "SDG Impact",
//       href: "/impact/sdg-impact",
//     },
//     {
//       label: "Annual Impact",
//       href: "/impact/annual-impact",
//     },
//     {
//       label: "Impact Stories",
//       href: "/impact/impact-stories",
//     },
//   ],
// },

// ============================================================
// 13. SDGs & GLOBAL ALIGNMENT
// ============================================================

// {
//   label: "SDGs & Global Alignment",
//   href: "/sdgs-global-alignment",
//   dropdown: [
//     {
//       label: "Priority SDGs",
//       href: "/sdgs-global-alignment/priority-sdgs",
//     },
//     {
//       label: "SDG Project Mapping",
//       href: "/sdgs-global-alignment/sdg-project-mapping",
//     },
//     {
//       label: "SDG Indicators",
//       href: "/sdgs-global-alignment/sdg-indicators",
//     },
//     {
//       label: "SDG Targets",
//       href: "/sdgs-global-alignment/sdg-targets",
//     },
//     {
//       label: "Public Health Frameworks",
//       href: "/sdgs-global-alignment/public-health-frameworks",
//     },
//     {
//       label: "WHO & Global Health Alignment",
//       href: "/sdgs-global-alignment/who-global-health-alignment",
//     },
//     {
//       label: "Global Development Alignment",
//       href: "/sdgs-global-alignment/global-development-alignment",
//     },
//     {
//       label: "SDG Impact by Project",
//       href: "/sdgs-global-alignment/sdg-impact-by-project",
//     },
//     {
//       label: "SDG Impact by Program Area",
//       href: "/sdgs-global-alignment/sdg-impact-by-program-area",
//     },
//   ],
// },

// ============================================================
// 14. REPORTS & PUBLICATIONS
// ============================================================

// {
//   label: "Reports & Publications",
//   href: "/reports-publications",
//   dropdown: [
//     {
//       label: "Annual Reports",
//       href: "/reports-publications/annual-reports",
//     },
//     {
//       label: "Impact Reports",
//       href: "/reports-publications/impact-reports",
//     },
//     {
//       label: "Project Reports",
//       href: "/reports-publications/project-reports",
//     },
//     {
//       label: "Research Reports",
//       href: "/reports-publications/research-reports",
//     },
//     {
//       label: "Publications",
//       href: "/reports-publications/publications",
//     },
//     {
//       label: "Policy Briefs",
//       href: "/reports-publications/policy-briefs",
//     },
//     {
//       label: "Research Abstracts & Proceedings",
//       href: "/reports-publications/research-abstracts-proceedings",
//     },
//     {
//       label: "Organizational Documents",
//       href: "/reports-publications/organizational-documents",
//     },
//     {
//       label: "Campaign Reports",
//       href: "/reports-publications/campaign-reports",
//     },
//     {
//       label: "Media & Communication Reports",
//       href: "/reports-publications/media-communication-reports",
//     },
//     {
//       label: "Technology / Product Documentation",
//       href: "/reports-publications/technology-product-documentation",
//     },
//     {
//       label: "Entrepreneurship & Innovation Reports",
//       href: "/reports-publications/entrepreneurship-innovation-reports",
//     },
//   ],
// },

// ============================================================
// 15. ACHIEVEMENTS & RECOGNITION
// ============================================================

// {
//   label: "Achievements & Recognition",
//   href: "/achievements-recognition",
//   dropdown: [
//     {
//       label: "Awards",
//       href: "/achievements-recognition/awards",
//     },
//     {
//       label: "Prizes",
//       href: "/achievements-recognition/prizes",
//     },
//     {
//       label: "Competitions",
//       href: "/achievements-recognition/competitions",
//     },
//     {
//       label: "Research Competitions & Awards",
//       href: "/achievements-recognition/research-competitions-awards",
//     },
//     {
//       label: "Entrepreneurship Competitions & Awards",
//       href: "/achievements-recognition/entrepreneurship-competitions-awards",
//     },
//     {
//       label: "Technology & Innovation Awards",
//       href: "/achievements-recognition/technology-innovation-awards",
//     },
//     {
//       label: "Certificates",
//       href: "/achievements-recognition/certificates",
//     },
//     {
//       label: "Recognition",
//       href: "/achievements-recognition/recognition",
//     },
//     {
//       label: "Milestones",
//       href: "/achievements-recognition/milestones",
//     },
//     {
//       label: "Media Recognition",
//       href: "/achievements-recognition/media-recognition",
//     },
//     {
//       label: "Project Achievements",
//       href: "/achievements-recognition/project-achievements",
//     },
//     {
//       label: "Research Achievements",
//       href: "/achievements-recognition/research-achievements",
//     },
//     {
//       label: "Technology & Innovation Achievements",
//       href: "/achievements-recognition/technology-innovation-achievements",
//     },
//   ],
// },

// ============================================================
// 16. STORIES & MEDIA
// ============================================================

// {
//   label: "Stories & Media",
//   href: "/stories-media",
//   dropdown: [
//     {
//       label: "Community Stories",
//       href: "/stories-media/community-stories",
//     },
//     {
//       label: "Volunteer Stories",
//       href: "/stories-media/volunteer-stories",
//     },
//     {
//       label: "Project Stories",
//       href: "/stories-media/project-stories",
//     },
//     {
//       label: "Campaign Stories",
//       href: "/stories-media/campaign-stories",
//     },
//     {
//       label: "Research Stories",
//       href: "/stories-media/research-stories",
//     },
//     {
//       label: "Digital Health Stories",
//       href: "/stories-media/digital-health-stories",
//     },
//     {
//       label: "Technology Stories",
//       href: "/stories-media/technology-stories",
//     },
//     {
//       label: "Entrepreneurship Stories",
//       href: "/stories-media/entrepreneurship-stories",
//     },
//     {
//       label: "Impact Stories",
//       href: "/stories-media/impact-stories",
//     },
//     {
//       label: "News & Updates",
//       href: "/stories-media/news-updates",
//     },
//     {
//       label: "Media Coverage",
//       href: "/stories-media/media-coverage",
//     },
//     {
//       label: "Interviews",
//       href: "/stories-media/interviews",
//     },
//     {
//       label: "Press Releases",
//       href: "/stories-media/press-releases",
//     },
//     {
//       label: "Videos",
//       href: "/stories-media/videos",
//     },
//     {
//       label: "Field Stories",
//       href: "/stories-media/field-stories",
//     },
//     {
//       label: "Partner Stories",
//       href: "/stories-media/partner-stories",
//     },
//   ],
// },

// ============================================================
// 17. GALLERY
// ============================================================

// {
//   label: "Gallery",
//   href: "/gallery",
//   dropdown: [
//     {
//       label: "Medical Camps",
//       href: "/gallery/medical-camps",
//     },
//     {
//       label: "Community Activities",
//       href: "/gallery/community-activities",
//     },
//     {
//       label: "Campaigns",
//       href: "/gallery/campaigns",
//     },
//     {
//       label: "Training & Workshops",
//       href: "/gallery/training-workshops",
//     },
//     {
//       label: "Events",
//       href: "/gallery/events",
//     },
//     {
//       label: "Field Activities",
//       href: "/gallery/field-activities",
//     },
//     {
//       label: "Research & Innovation",
//       href: "/gallery/research-innovation",
//     },
//     {
//       label: "Digital Health",
//       href: "/gallery/digital-health",
//     },
//     {
//       label: "Technology",
//       href: "/gallery/technology",
//     },
//     {
//       label: "Entrepreneurship & Innovation",
//       href: "/gallery/entrepreneurship-innovation",
//     },
//     {
//       label: "Communications & Media",
//       href: "/gallery/communications-media",
//     },
//     {
//       label: "Behind the Scenes",
//       href: "/gallery/behind-the-scenes",
//     },
//   ],
// },

// ============================================================
// 18. GET INVOLVED
// ============================================================

// {
//   label: "Get Involved",
//   href: "/get-involved",
//   dropdown: [
//     {
//       label: "Become a Volunteer",
//       href: "/get-involved/be-a-volunteer",
//     },
//     {
//       label: "Become a Member",
//       href: "/get-involved/be-a-member",
//     },
//     {
//       label: "Become a Campaigner",
//       href: "/get-involved/be-a-campaigner",
//     },
//     {
//       label: "Join as a Physician",
//       href: "/get-involved/join-as-a-physician",
//     },
//     {
//       label: "Join as a Researcher",
//       href: "/get-involved/join-as-a-researcher",
//     },
//     {
//       label: "Join a Training Program",
//       href: "/get-involved/join-training-program",
//     },
//     {
//       label: "Get Hands-on Experience",
//       href: "/get-involved/hands-on-experience",
//     },
//     {
//       label: "Internship Opportunities",
//       href: "/get-involved/internship-opportunities",
//     },
//     {
//       label: "Join the Technology Team",
//       href: "/get-involved/join-technology-team",
//     },
//     {
//       label: "Join the Communications & Media Team",
//       href: "/get-involved/join-communications-media-team",
//     },
//     {
//       label: "Join the Digital Marketing Team",
//       href: "/get-involved/join-digital-marketing-team",
//     },
//     {
//       label: "Join the Entrepreneurship & Innovation Team",
//       href: "/get-involved/join-entrepreneurship-innovation-team",
//     },
//     {
//       label: "Become an Entrepreneur / Innovator",
//       href: "/get-involved/become-entrepreneur-innovator",
//     },
//     {
//       label: "Partner With Us",
//       href: "/get-involved/partner-with-us",
//     },
//     {
//       label: "Collaborate With Us",
//       href: "/get-involved/collaborate-with-us",
//     },
//     {
//       label: "Become a Sponsor",
//       href: "/get-involved/become-a-sponsor",
//     },
//     {
//       label: "Fund Research",
//       href: "/get-involved/fund-research",
//     },
//     {
//       label: "Technology & Innovation Collaboration",
//       href: "/get-involved/technology-innovation-collaboration",
//     },
//     {
//       label: "Entrepreneurship & Business Collaboration",
//       href: "/get-involved/entrepreneurship-business-collaboration",
//     },
//     {
//       label: "Media Collaboration",
//       href: "/get-involved/media-collaboration",
//     },
//     {
//       label: "Become a Donor",
//       href: "/get-involved/become-a-donor",
//     },
//   ],
// },

// ============================================================
// 19. DONATE
// ============================================================

// {
//   label: "Donate",
//   href: "/donate",
//   dropdown: [
//     {
//       label: "Donate Now",
//       href: "/donate/donate-now",
//     },
//     {
//       label: "Where Your Donation Goes",
//       href: "/donate/where-your-donation-goes",
//     },
//     {
//       label: "Donation Categories",
//       href: "/donate/donation-categories",
//       children: [
//         {
//           label: "Medical Support",
//           href: "/donate/donation-categories/medical-support",
//         },
//         {
//           label: "Community Support",
//           href: "/donate/donation-categories/community-support",
//         },
//         {
//           label: "Research Funding",
//           href: "/donate/donation-categories/research-funding",
//         },
//         {
//           label: "Campaign Support",
//           href: "/donate/donation-categories/campaign-support",
//         },
//         {
//           label: "Education & Training",
//           href: "/donate/donation-categories/education-training",
//         },
//         {
//           label: "Digital Health",
//           href: "/donate/donation-categories/digital-health",
//         },
//         {
//           label: "Technology & Innovation",
//           href: "/donate/donation-categories/technology-innovation",
//         },
//       ],
//     },
//     {
//       label: "Sponsorship Opportunities",
//       href: "/donate/sponsorship-opportunities",
//     },
//     {
//       label: "Fund a Project",
//       href: "/donate/fund-a-project",
//     },
//     {
//       label: "Fund Research",
//       href: "/donate/fund-research",
//     },
//     {
//       label: "Support a Campaign",
//       href: "/donate/support-a-campaign",
//     },
//     {
//       label: "Transparency & Accountability",
//       href: "/donate/transparency-accountability",
//     },
//   ],
// },


// ============================================================
// 20. CONTACT
// ============================================================

{
  label: "Contact",
  href: "/contact",
  dropdown: [
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "General Enquiries",
      href: "/contact/general-enquiries",
    },
    {
      label: "Partnership Enquiries",
      href: "/contact/partnership-enquiries",
    },
    {
      label: "Research Enquiries",
      href: "/contact/research-enquiries",
    },
    {
      label: "Volunteer Enquiries",
      href: "/contact/volunteer-enquiries",
    },
    {
      label: "Media Enquiries",
      href: "/contact/media-enquiries",
    },
    {
      label: "Digital Marketing Enquiries",
      href: "/contact/digital-marketing-enquiries",
    },
    {
      label: "Technology Enquiries",
      href: "/contact/technology-enquiries",
    },
    {
      label: "Digital Health Enquiries",
      href: "/contact/digital-health-enquiries",
    },
    {
      label: "Entrepreneurship & Business Enquiries",
      href: "/contact/entrepreneurship-business-enquiries",
    },
    {
      label: "Training Enquiries",
      href: "/contact/training-enquiries",
    },
    {
      label: "Sponsorship Enquiries",
      href: "/contact/sponsorship-enquiries",
    },
    {
      label: "Donation Enquiries",
      href: "/contact/donation-enquiries",
    },
    {
      label: "Office Information",
      href: "/contact/office-information",
    },
    {
      label: "Social Media",
      href: "/contact/social-media",
    },
  ],
},

]; // <-- mainNav ko close karna zaroori hai


// ============================================================
// CONTACT CTA
// ============================================================

export const contactNav = {
  label: "Contact Us",
  href: "/contact",
};
