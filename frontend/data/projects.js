// =============================================================================
// PROJECTS — website content
// Slugs match the Projects dropdown in data/navigation.js exactly.
//
// IMAGE STANDARDS (for whoever swaps the placeholder picsum URLs):
//  • Hero / wide sections: 16:9, 1600×900 or larger. Cards: one consistent 4:3 crop.
//  • Mobile: use a separate 4:5 portrait crop where possible.
//  • Keep faces/essential objects within the central 60–70% of the frame.
//  • Prefer authentic project photography; licensed stock only if none exists.
//  • Never show medical records, participant data, confidential screens or
//    identifiable people without consent. Write concise, meaningful alt text.
//  • Per-area direction: Health = respectful care/community-health interaction
//    (no graphic clinical imagery) · Health Education = workshop/classroom ·
//    Community = real group activity, don't crop tightly · Climate = people IN
//    the environment, not nature-only · Social Support = warm mentoring/peer
//    learning, no staged handshakes · Research = field interview/focus group ·
//    Digital Health = person using phone/tablet in context · Technology = team
//    with laptops, no code-screen stock · Enterprise = active founder workshop ·
//    Communications = filming/interviewing/content production · Cross-Program =
//    multi-disciplinary planning workshop or field activity.
// =============================================================================

export const projectsOverview = {
  eyebrow: "What We Build",
  title: "Projects",
  tagline: "Creating practical solutions for healthier people, stronger communities and sustainable impact.",
  introduction:
    "We develop practical, people-centered projects across health, education, community development, research, technology, environment, enterprise and communications. Our work begins with a clear understanding of the need and the people affected by it. From there, we bring together relevant expertise, partners and evidence to develop solutions that are useful, inclusive and achievable. Whether the requirement is a focused project in one area or a multidisciplinary initiative, our aim is to turn ideas into well-structured work that creates meaningful and measurable value.",
  approach: {
    title: "Our Approach",
    text: "We work collaboratively from the beginning. We listen, understand the context, define realistic goals, develop the right activities and keep learning throughout delivery. Our projects are designed to be clear, responsible and adaptable, with attention to accessibility, quality, participation and long-term usefulness.",
    steps: ["Listen", "Understand", "Define goals", "Deliver", "Learn"],
  },
  areas: {
    title: "Project Areas",
    text: "Explore our project areas below to understand the types of initiatives we can develop and deliver with communities, organizations and partners.",
  },
  coordinator: {
    eyebrow: "Coordinator Introduction",
    role: "Project Coordinator",
    name: null,   // add later, e.g. "Jane Doe"
    image: null,  // add later, e.g. "/images/team/coordinator.jpg" (1:1 or 4:5)
    text: "Our Project Coordinator believes that meaningful projects begin with listening, collaboration and a clear understanding of what people genuinely need. The coordinator supports communication between teams, partners and participants, helps keep activities organized and focused, and believes that strong coordination should make every project more inclusive, practical and accountable.",
  },
  recruitment: {
    eyebrow: "Work With Us / Recruitment",
    title: "Work With Us",
    text: "We welcome people who care about purposeful work, collaboration and positive social impact. Depending on project needs, opportunities may include coordination, research, community engagement, health education, technology, communications and other specialist roles. If you believe your skills can contribute to our work, we encourage you to explore current opportunities or share your interest with our team.",
    roles: ["Coordination", "Research", "Community engagement", "Health education", "Technology", "Communications"],
    cta: { label: "Explore Opportunities", href: "/get-involved" },
  },
};

// Shared by every project-area page.
export const sharedApproach =
  "We start by understanding the need, the intended audience and the delivery context. We then define clear activities and responsibilities, work with relevant stakeholders, monitor progress and use feedback to improve delivery. Where appropriate, we also support documentation, handover and future development so that useful learning continues beyond the immediate project.";

export const sharedGetInvolved =
  "If you are planning a related initiative, looking for an implementation partner or interested in supporting this area of work, we would be pleased to hear about your priorities and explore how we can work together.";

const img = (seed) => `https://picsum.photos/seed/hopefelt-proj-${seed}/1600/900`;

export const projectPages = {
  "health-medical": {
    title: "Health & Medical Projects",
    short: "Health & Medical",
    tagline: "Better health starts with practical, accessible and people-centered solutions.",
    image: img("health-medical"),
    introduction:
      "We design and deliver health and medical projects that respond to real community and service needs. Our work supports prevention, health awareness, access to appropriate services, stronger referral pathways, workforce capacity and better health-program delivery. Each project is developed around the people it serves, the local context and clearly defined outcomes.",
    goal: "To improve health outcomes by strengthening prevention, access, health knowledge, service delivery and community-based support.",
    whatWeDo: [
      "Community and primary health initiatives",
      "Maternal, newborn, child and adolescent health programs",
      "Non-communicable disease awareness and prevention",
      "Infectious disease education, prevention and referral",
      "Screening, referral and patient-navigation initiatives",
      "Health-worker and community-worker training",
      "Patient and caregiver support initiatives",
      "Health service quality-improvement projects",
    ],
    objectives: [
      "Improve access to reliable health information and appropriate services.",
      "Increase awareness and adoption of preventive health practices.",
      "Strengthen referral, follow-up and community support pathways.",
      "Build the capacity of health workers and community teams.",
      "Improve the quality and responsiveness of health-program delivery.",
    ],
    who: ["Communities", "Patients", "Caregivers", "Health workers", "Clinics", "NGOs", "Public-sector programs", "Schools", "Employers", "Underserved populations"],
    outcomes: [
      "Improved access to health information and services",
      "Greater awareness of preventive practices",
      "Stronger referral and follow-up systems",
      "Improved workforce capability",
      "More responsive, evidence-informed health programs",
    ],
    cta: "Discuss a Health Project",
  },

  "health-education": {
    title: "Health Education Projects",
    short: "Health Education",
    tagline: "Health knowledge that people can understand, trust and use.",
    image: img("health-education"),
    introduction:
      "We create health education projects that turn complex information into clear, practical and audience-appropriate learning. From community awareness and patient education to professional training and digital learning, our programs help people build knowledge, confidence and healthier decision-making skills.",
    goal: "To strengthen health literacy and enable individuals, communities and professionals to make better-informed health decisions.",
    whatWeDo: [
      "Community health education campaigns",
      "School and youth health-learning programs",
      "Patient and caregiver education",
      "Frontline-worker and professional training",
      "Training-of-trainers programs",
      "Educational toolkits and facilitator guides",
      "Workshops, webinars and blended learning",
      "Health literacy and behavior-change content",
    ],
    objectives: [
      "Translate complex health topics into accessible learning.",
      "Develop structured and engaging education programs.",
      "Support practical behavior change through relevant information.",
      "Strengthen educator and facilitator capacity.",
      "Measure learning, participation and application of knowledge.",
    ],
    who: ["Students", "Families", "Patients", "Caregivers", "Educators", "Frontline workers", "Institutions", "Community groups"],
    outcomes: [
      "Improved knowledge and confidence",
      "Better understanding of prevention and care",
      "Higher engagement with appropriate services",
      "Stronger facilitator capacity",
      "Reusable learning resources for wider reach",
    ],
    cta: "Request a Health Education Project",
  },

  "community-development": {
    title: "Community Development Projects",
    short: "Community Development",
    tagline: "Stronger communities are built with people, not for them.",
    image: img("community-development"),
    introduction:
      "We work with communities and partner organizations to develop locally relevant initiatives that strengthen participation, skills, inclusion, resilience and access to opportunity. Community voice and shared ownership remain central so that solutions are practical, relevant and more sustainable over time.",
    goal: "To strengthen community capacity, inclusion, resilience and access to sustainable opportunities and support.",
    whatWeDo: [
      "Community needs assessments",
      "Youth and women’s empowerment initiatives",
      "Skills and livelihood development",
      "Community leadership and volunteer programs",
      "Local support and referral networks",
      "Social inclusion and accessibility initiatives",
      "Community resilience projects",
      "Capacity building for community-based organizations",
    ],
    objectives: [
      "Identify community priorities through meaningful participation.",
      "Develop practical solutions with local stakeholders.",
      "Strengthen local skills, leadership and networks.",
      "Improve inclusion and access for underserved groups.",
      "Support sustainable community ownership and continuity.",
    ],
    who: ["Local communities", "Youth", "Women", "Families", "Community leaders", "Civil-society organizations", "Development partners"],
    outcomes: [
      "Greater local participation and ownership",
      "Improved access to skills and opportunities",
      "Stronger community networks",
      "More inclusive local systems",
      "Sustainable community-led action",
    ],
    cta: "Start a Community Development Project",
  },

  "climate-environment": {
    title: "Climate & Environment Projects",
    short: "Climate & Environment",
    tagline: "Healthier environments. More resilient communities. Sustainable action.",
    image: img("climate-environment"),
    introduction:
      "Our climate and environment projects connect awareness with practical action. We support communities, institutions and partners to understand environmental risks, strengthen resilience, encourage sustainable practices and explore the connection between environmental conditions and human wellbeing.",
    goal: "To support practical environmental action and build healthier, more resilient and sustainable communities.",
    whatWeDo: [
      "Climate and environmental awareness campaigns",
      "Environmental health initiatives",
      "Waste reduction and resource-efficiency projects",
      "Community resilience and adaptation programs",
      "Youth environmental education",
      "Green community initiatives",
      "Climate-health research and communication",
      "Sustainability and behavior-change campaigns",
    ],
    objectives: [
      "Increase understanding of climate and environmental risks.",
      "Encourage practical sustainable behaviors and local action.",
      "Strengthen community resilience and preparedness.",
      "Connect environmental action with health and equity.",
      "Build capacity for long-term sustainability initiatives.",
    ],
    who: ["Communities", "Schools", "Municipalities", "NGOs", "Institutions", "Businesses", "Youth groups", "Sustainability partners"],
    outcomes: [
      "Increased environmental awareness",
      "Greater participation in sustainable practices",
      "Improved local resilience",
      "Stronger climate-health understanding",
      "More informed environmental action",
    ],
    cta: "Explore an Environment Project",
  },

  "social-support-learning": {
    title: "Social Support & Learning Projects",
    short: "Social Support & Learning",
    tagline: "Inclusive learning and support that open pathways to opportunity.",
    image: img("social-support-learning"),
    introduction:
      "We develop social support and learning projects that help people build confidence, practical skills and stronger connections to education, services and community life. Programs can combine mentoring, learning support, life skills, digital inclusion and referral pathways according to the needs of the target group.",
    goal: "To improve access to inclusive learning, social support, skills and opportunities for people facing educational or social barriers.",
    whatWeDo: [
      "Learning support and tutoring",
      "Mentoring and peer-support programs",
      "Life-skills and employability learning",
      "Digital inclusion and basic digital skills",
      "Community learning hubs",
      "Support and referral navigation",
      "Volunteer-led learning programs",
      "Inclusive participation initiatives",
    ],
    objectives: [
      "Reduce barriers to learning and participation.",
      "Strengthen practical, communication and digital skills.",
      "Connect participants with relevant support and resources.",
      "Create inclusive and learner-centered environments.",
      "Support progression into education, work or community participation.",
    ],
    who: ["Young people", "Adult learners", "Families", "Underserved groups", "Volunteers", "Educators", "Community organizations"],
    outcomes: [
      "Improved learning participation and confidence",
      "Stronger practical and digital skills",
      "Better access to support",
      "Increased social participation",
      "Clearer progression pathways",
    ],
    cta: "Discuss a Learning or Support Project",
  },

  "research-evidence": {
    title: "Research & Evidence Projects",
    short: "Research & Evidence",
    tagline: "Evidence that helps organizations make better decisions.",
    image: img("research-evidence"),
    introduction:
      "We deliver research and evidence projects that help partners understand needs, test assumptions, measure results and improve programs. Our work can combine quantitative and qualitative methods, monitoring and evaluation, evidence reviews and clear communication of findings for decision-makers and non-technical audiences.",
    goal: "To generate credible, useful evidence that strengthens program design, decision-making, learning and impact.",
    whatWeDo: [
      "Needs assessments and baseline studies",
      "Literature and evidence reviews",
      "Surveys, interviews and focus groups",
      "Monitoring, evaluation and learning frameworks",
      "Process and outcome evaluations",
      "Data analysis and insight reports",
      "Research briefs and evidence summaries",
      "Learning and dissemination activities",
    ],
    objectives: [
      "Define research questions linked to real decisions.",
      "Use methods appropriate to the question and context.",
      "Generate actionable findings and recommendations.",
      "Strengthen monitoring, evaluation and learning systems.",
      "Communicate evidence clearly to relevant audiences.",
    ],
    who: ["NGOs", "Health organizations", "Social enterprises", "Funders", "Academic partners", "Public programs", "Community organizations"],
    outcomes: [
      "Clearer understanding of needs and gaps",
      "Stronger project design",
      "More credible outcome measurement",
      "Actionable recommendations",
      "Better evidence for improvement and scale",
    ],
    cta: "Commission Research or Evaluation",
  },

  "digital-health": {
    title: "Digital Health Projects",
    short: "Digital Health",
    tagline: "Digital solutions designed around real health needs.",
    image: img("digital-health"),
    introduction:
      "We design digital health projects that improve access to information, engagement, service navigation, learning and program visibility. We focus on simple user journeys, accessibility and responsible use of data so that technology supports, rather than complicates, the health experience.",
    goal: "To use appropriate digital tools to improve health access, engagement, service navigation and program delivery.",
    whatWeDo: [
      "Health information portals and resource hubs",
      "Patient and community engagement tools",
      "Digital screening and referral workflows",
      "Service-navigation and telehealth-support workflows",
      "Health learning platforms",
      "Monitoring and reporting dashboards",
      "Messaging-based health engagement",
      "Prototype and usability-testing projects",
    ],
    objectives: [
      "Identify digital solutions to real user and service needs.",
      "Create accessible and intuitive health journeys.",
      "Support responsible data and privacy practices.",
      "Connect digital tools with real-world workflows.",
      "Measure usability, adoption and engagement.",
    ],
    who: ["Health providers", "NGOs", "Public-health programs", "Patients", "Communities", "Employers", "Digital-health partners"],
    outcomes: [
      "Improved access to trusted information",
      "More efficient navigation and follow-up",
      "Higher user engagement",
      "Better program visibility",
      "Validated digital concepts ready for refinement or scale",
    ],
    cta: "Discuss a Digital Health Solution",
  },

  technology: {
    title: "Technology Projects",
    short: "Technology",
    tagline: "Practical technology built to improve access, efficiency and delivery.",
    image: img("technology"),
    introduction:
      "We create technology projects that translate operational and program needs into usable digital solutions. From websites and data dashboards to workflow automation and learning platforms, we focus on technology that is purposeful, easy to adopt and able to evolve with organizational needs.",
    goal: "To build practical technology solutions that improve service delivery, information access, efficiency and user experience.",
    whatWeDo: [
      "Web platforms and portals",
      "Data dashboards and reporting tools",
      "Workflow automation",
      "Learning and knowledge platforms",
      "Mobile-friendly tools and prototypes",
      "CRM and lead-management workflows",
      "Data collection systems",
      "Technology discovery and product roadmaps",
    ],
    objectives: [
      "Translate real needs into clear technology requirements.",
      "Design simple and usable digital experiences.",
      "Reduce repetitive manual work.",
      "Improve access to data and information.",
      "Support testing, adoption and continuous improvement.",
    ],
    who: ["NGOs", "Social enterprises", "Health and education programs", "Research teams", "Mission-driven organizations"],
    outcomes: [
      "Reduced process friction",
      "Improved access to information",
      "Better data visibility",
      "Stronger user experience",
      "Scalable technology foundations",
    ],
    cta: "Request a Technology Project",
  },

  "entrepreneurship-social-enterprise": {
    title: "Entrepreneurship & Social Enterprise Projects",
    short: "Entrepreneurship & Social Enterprise",
    tagline: "Turning mission-driven ideas into sustainable models for impact.",
    image: img("entrepreneurship"),
    introduction:
      "We support entrepreneurs and social enterprises to move from idea to validation, pilot and growth. Our projects combine user and market understanding, business-model development, entrepreneurial learning, partnership readiness and impact thinking so that social value and financial sustainability can develop together.",
    goal: "To help mission-driven entrepreneurs and organizations build viable, sustainable and impact-oriented ventures.",
    whatWeDo: [
      "Entrepreneurship training and incubation",
      "Business-model development",
      "Market and customer research",
      "Social-enterprise strategy",
      "Pilot and minimum-viable-offer design",
      "Pitch and partnership readiness",
      "Impact model and measurement design",
      "Founder mentoring and support",
    ],
    objectives: [
      "Clarify the problem, customer and beneficiary.",
      "Test assumptions through user and market research.",
      "Strengthen revenue, partnership and impact models.",
      "Build entrepreneurial capability.",
      "Create practical pilot and growth pathways.",
    ],
    who: ["Early-stage founders", "Youth entrepreneurs", "Women-led ventures", "Community enterprises", "NGOs", "Impact-focused businesses"],
    outcomes: [
      "Stronger market understanding",
      "More viable business models",
      "Improved founder capability",
      "Clearer pilot and growth pathways",
      "Better alignment of sustainability and social impact",
    ],
    cta: "Build a Social Enterprise Project",
  },

  "communications-media": {
    title: "Communications & Media Projects",
    short: "Communications & Media",
    tagline: "Clear communication that informs, engages and inspires action.",
    image: img("communications-media"),
    introduction:
      "We develop communications and media projects that make complex ideas easier to understand and act on. Our work supports health, research, development and social-impact organizations with audience-focused messaging, campaigns, digital content, storytelling and knowledge products.",
    goal: "To strengthen awareness, understanding, trust, participation and action through clear and purposeful communication.",
    whatWeDo: [
      "Communication strategies and campaign plans",
      "Health and social-impact campaigns",
      "Website and landing-page content",
      "Social media content systems",
      "Video and storytelling concepts",
      "Research dissemination products",
      "Brand messaging and editorial frameworks",
      "Community outreach materials",
    ],
    objectives: [
      "Define audiences, messages, channels and desired actions.",
      "Translate technical information into accessible content.",
      "Create consistent communication across channels.",
      "Connect campaigns with measurable engagement pathways.",
      "Use inclusive and ethical storytelling.",
    ],
    who: ["NGOs", "Health organizations", "Research teams", "Social enterprises", "Public programs", "Funders", "Educators"],
    outcomes: [
      "Clearer organizational messaging",
      "Improved audience engagement",
      "Stronger trust and understanding",
      "More consistent campaign delivery",
      "Better movement from awareness to action",
    ],
    cta: "Plan a Communications Project",
  },

  "special-cross-program": {
    title: "Special / Cross-Program Projects",
    short: "Special / Cross-Program",
    tagline: "Integrated solutions for challenges that cross traditional program boundaries.",
    image: img("cross-program"),
    introduction:
      "Some challenges require more than one discipline. Our cross-program projects combine health, research, education, technology, community development, communications, environment and enterprise capabilities into one coordinated solution. We build the project around the problem and intended outcomes rather than forcing it into a single category.",
    goal: "To create integrated, multi-disciplinary projects for complex challenges that require coordinated expertise and delivery.",
    whatWeDo: [
      "Multi-sector pilots",
      "Innovation and special initiatives",
      "Integrated community-health and technology projects",
      "Research-to-implementation programs",
      "Cross-program capacity building",
      "Multi-partner campaigns",
      "Rapid-response strategic projects",
      "Custom programs aligned with partner priorities",
    ],
    objectives: [
      "Define complex challenges across systems and stakeholders.",
      "Create one integrated outcome framework.",
      "Coordinate specialist workstreams effectively.",
      "Connect research, implementation and communication.",
      "Build sustainability and scale into project design.",
    ],
    who: ["Funders", "Consortiums", "NGOs", "Institutions", "Public programs", "Social enterprises", "Partners requiring a customized solution"],
    outcomes: [
      "Better coordination across disciplines",
      "One coherent delivery framework",
      "Faster learning across workstreams",
      "More efficient use of resources",
      "Integrated solutions with stronger sustainability potential",
    ],
    cta: "Discuss a Custom Project",
  },
};
