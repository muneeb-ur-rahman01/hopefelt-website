// =============================================================================
// CAMPAIGNS & INITIATIVES — website content (route: /campaigns-initiatives)
// Slugs match the Campaigns dropdown in data/navigation.js.
// =============================================================================

const img = (seed) => `https://picsum.photos/seed/hopefelt-camp-${seed}/1600/900`;

export const campaignsOverview = {
  eyebrow: "Public Campaigns & Initiatives",
  title: "Campaigns & Initiatives",
  tagline: "Turning our vision and mission into practical, community-centred action.",
  introduction: [
    "Hopefelt Foundation’s Campaigns & Initiatives framework brings together public health, community development, environmental, digital, fundraising, technology, entrepreneurship, youth, and awareness-focused activities under one coordinated structure.",
    "Our campaigns are designed to translate the Foundation’s vision and mission into practical action. They provide a structured platform for raising awareness, engaging communities, mobilizing resources, promoting healthier behaviours, supporting vulnerable populations, encouraging innovation, and responding to emerging social, public health, environmental, and community needs.",
    "Campaigns may be implemented independently, as part of a larger programme, in partnership with other organizations, or as time-bound responses to specific community needs or emergencies.",
  ],
  purpose: [
    "Promote health, wellbeing, dignity, and social development.",
    "Increase public awareness of important health and social issues.",
    "Support disease prevention and health promotion.",
    "Encourage communities to participate in identifying and addressing local challenges.",
    "Promote environmental responsibility and climate awareness.",
    "Use digital platforms and mass media to extend public outreach.",
    "Mobilize financial, technical, human, and material resources.",
    "Support innovation, entrepreneurship, technology, and sustainable solutions.",
    "Create opportunities for youth, volunteers, professionals, and community members to contribute.",
    "Respond to emerging needs, emergencies, and priority community issues.",
    "Build partnerships with relevant organizations, institutions, professionals, businesses, and community groups.",
    "Generate evidence, lessons, and community insights that can contribute to future programmes and research.",
  ],
  mission:
    "To design and implement meaningful, inclusive, evidence-informed, and community-centred campaigns and initiatives that contribute to better health, stronger communities, environmental responsibility, innovation, and sustainable development.",
  vision:
    "To build a future where communities are informed, engaged, resilient, and empowered to take collective action for health, dignity, sustainability, and positive social change.",
};

export const strategicObjectives = [
  { title: "Awareness and Education", points: ["Deliver accessible and evidence-informed information.", "Improve understanding of health, social, environmental, and community issues.", "Promote informed decision-making and healthier practices."] },
  { title: "Prevention and Health Promotion", points: ["Support disease prevention activities.", "Promote preventive health behaviours.", "Address emerging and priority public health concerns."] },
  { title: "Community Engagement", points: ["Encourage community participation.", "Support community-led action.", "Strengthen local networks and community ownership."] },
  { title: "Climate and Environmental Action", points: ["Promote climate and environmental awareness.", "Encourage sustainable practices.", "Support plantation, conservation, and environmental initiatives."] },
  { title: "Digital and Media Outreach", points: ["Use social media and digital platforms for awareness and engagement.", "Develop campaigns suitable for online audiences.", "Explore television, radio, newspaper, and other mass media opportunities."] },
  { title: "Resource Mobilization", points: ["Develop responsible fundraising and donation campaigns.", "Mobilize resources for programmes, emergencies, and community initiatives.", "Strengthen donor and partner engagement."] },
  { title: "Innovation and Technology", points: ["Promote technology-based solutions to social and public health challenges.", "Introduce and promote relevant digital products and services.", "Encourage innovation, experimentation, and responsible technology adoption."] },
  { title: "Youth and Volunteer Engagement", points: ["Create meaningful opportunities for youth participation.", "Engage volunteers in campaign planning and implementation.", "Develop leadership, communication, research, and community engagement skills."] },
  { title: "Entrepreneurship and Economic Initiatives", points: ["Encourage entrepreneurship and innovation.", "Support relevant startup and business development initiatives.", "Create linkages between community needs, innovation, and sustainable opportunities."] },
];

export const developmentApproach = {
  intro: "Each campaign or initiative may follow a structured cycle.",
  cycle: ["Identify", "Assess", "Plan", "Partner", "Implement", "Monitor", "Evaluate", "Document", "Improve", "Scale"],
  planningTitle: "Campaign planning may include",
  planning: [
    "Identification of the issue or opportunity", "Target population and beneficiary identification", "Needs assessment or situation analysis", "Campaign objectives",
    "Key messages", "Activities and implementation plan", "Timeline and milestones", "Human resources and volunteer requirements",
    "Budget and resource requirements", "Communication and media strategy", "Partnership and stakeholder engagement", "Monitoring indicators",
    "Risk assessment and mitigation", "Documentation and reporting", "Evaluation and lessons learned", "Sustainability or scale-up planning",
  ],
};

export const targetGroups = {
  intro: "Campaigns may be designed for different population groups depending on the purpose and scope, including:",
  groups: [
    "General communities", "Children and adolescents", "Youth", "Women and families", "Older adults", "Vulnerable and underserved communities",
    "Students and educational institutions", "Healthcare professionals", "Community health workers", "Volunteers", "Teachers and educators",
    "Workers and occupational groups", "Community leaders", "Businesses and entrepreneurs", "Digital audiences", "Partner organizations and institutions",
  ],
};

export const partnerships = {
  intro: "Campaigns and initiatives may be developed and implemented in collaboration with:",
  partners: [
    "Government departments and public institutions", "Healthcare institutions", "Universities and educational institutions", "NGOs and civil society organizations",
    "Community-based organizations", "International organizations", "Private-sector organizations", "Businesses and corporate partners", "Media organizations",
    "Technology companies", "Researchers and public health professionals", "Volunteers and youth networks", "Community leaders and local stakeholders",
  ],
  note: "Partnerships will be established according to the purpose, scope, resources, expertise, and requirements of each campaign.",
};

export const monitoring = {
  intro: "Campaign performance should be monitored through appropriate indicators, such as:",
  indicators: [
    "Number of people reached", "Number of participants", "Number of activities conducted", "Geographic coverage", "Engagement and digital reach",
    "Educational materials distributed", "Volunteers involved", "Partners engaged", "Resources mobilized", "Beneficiaries supported",
    "Knowledge or awareness changes where measurable", "Outputs and outcomes achieved", "Lessons learned", "Community feedback",
  ],
  note: "Where appropriate, campaigns should produce documentation such as activity reports, photographs, attendance records, communication materials, monitoring data, evaluation findings, case studies, and lessons learned.",
};

export const inclusion = {
  intro: "All campaigns and initiatives should aim to be inclusive, accessible, respectful, and appropriate to the communities they serve. Campaign planning should consider:",
  points: [
    "Accessibility", "Gender and social inclusion", "Socioeconomic barriers", "Vulnerable and underserved populations", "Cultural and community context",
    "Protection of personal information", "Informed participation", "Safeguarding of children and vulnerable individuals", "Ethical communication",
    "Non-discrimination", "Responsible use of images, stories, and beneficiary information",
  ],
};

export const documentation = {
  intro: "Each significant campaign or initiative should be appropriately documented to support transparency, learning, reporting, and future planning. Documentation may include:",
  items: [
    "Campaign concept notes", "Objectives and implementation plans", "Budgets", "Activity schedules", "Attendance records", "Monitoring data", "Photos and videos",
    "Communication materials", "Partner information", "Campaign reports", "Impact stories", "Evaluation findings", "Lessons learned", "Recommendations", "Future action plans",
  ],
};

export const sustainability = {
  intro: "Where an initiative demonstrates relevance, feasibility, community value, and available resources, Hopefelt Foundation may consider continuing, expanding, adapting, or integrating it into a longer-term programme. Sustainability may be supported through:",
  points: [
    "Community ownership", "Partnerships", "Capacity building", "Resource mobilization", "Digital tools", "Volunteer networks", "Evidence generation",
    "Institutional collaboration", "Replication of effective approaches",
  ],
};

// The 11 major campaign & initiative areas (portfolio structure, 5.14 / key areas, 5.8)
export const campaignPages = {
  "health-campaigns": {
    letter: "A", title: "Health Campaigns", short: "Health",
    tagline: "Awareness, prevention and health promotion for healthier communities.",
    image: img("health"),
    focus: ["Awareness and Education", "Prevention and Health Promotion"],
    items: ["Health Awareness Campaigns", "Disease Prevention Campaigns", "Health Promotion Campaigns", "Mental Health Awareness", "Maternal and Child Health Initiatives", "Nutrition and Healthy Lifestyle Campaigns", "Communicable Disease Prevention", "Non-Communicable Disease Awareness", "First Aid and Emergency Awareness", "Health Screening and Referral Initiatives", "Health Education Sessions", "Public Health Information Campaigns"],
  },
  "community-campaigns": {
    letter: "B", title: "Community Campaigns", short: "Community",
    tagline: "Community participation and community-led action on local challenges.",
    image: img("community"),
    focus: ["Community Engagement", "Awareness and Education"],
    items: ["Community Awareness", "Community Mobilization", "Community Action", "Community Needs-Based Initiatives", "Community Outreach Activities", "Community Education", "Vulnerable Community Support", "Local Problem-Solving Initiatives", "Community-Led Development Activities", "Social Support and Inclusion Initiatives"],
  },
  "climate-environmental-campaigns": {
    letter: "C", title: "Climate & Environmental Campaigns", short: "Climate & Environment",
    tagline: "Climate awareness, plantation and sustainable practice.",
    image: img("climate"),
    focus: ["Climate and Environmental Action", "Awareness and Education"],
    items: ["Climate Awareness", "Environmental Awareness", "Plantation Campaigns", "Climate and Health Awareness", "Heat-Health Awareness", "Water and Environmental Health", "Waste Management Awareness", "Clean Environment Campaigns", "Sustainable Lifestyle Campaigns", "Disaster and Climate Resilience Initiatives"],
  },
  "digital-campaigns": {
    letter: "D", title: "Digital Campaigns", short: "Digital",
    tagline: "Extending outreach and engagement through digital platforms.",
    image: img("digital"),
    focus: ["Digital and Media Outreach", "Awareness and Education"],
    items: ["Social Media Campaigns", "Digital Awareness Campaigns", "Digital Outreach Campaigns", "Digital Health Awareness", "Online Educational Campaigns", "Digital Volunteer Engagement", "Digital Community Mobilization", "Online Events and Webinars", "Digital Resource Development", "Technology-Based Awareness Initiatives"],
  },
  "mass-media-campaigns": {
    letter: "E", title: "Mass Media Campaigns", short: "Mass Media",
    tagline: "Reaching wider audiences through television, radio, newspaper and online media.",
    image: img("media"),
    focus: ["Digital and Media Outreach", "Awareness and Education"],
    items: ["Television Campaigns", "Radio Campaigns", "Newspaper Campaigns", "Online Media Campaigns", "Public Service Awareness Campaigns", "Media Interviews and Discussions", "Public Awareness Features", "Community Awareness Through Mass Media", "Media Partnerships and Collaborations"],
  },
  "fundraising-campaigns": {
    letter: "F", title: "Fundraising Campaigns", short: "Fundraising",
    tagline: "Responsible resource mobilization for programmes, emergencies and communities.",
    image: img("fundraising"),
    focus: ["Resource Mobilization"],
    items: ["Donation Campaigns", "Project Fundraising", "Emergency Fundraising", "Community Fundraising", "Campaign-Based Sponsorship", "Corporate Support Campaigns", "In-Kind Donation Drives", "Resource Mobilization Campaigns", "Disaster and Emergency Response Fundraising"],
  },
  "technology-product-campaigns": {
    letter: "G", title: "Technology & Product Campaigns", short: "Technology & Product",
    tagline: "Introducing, demonstrating and testing technology-based solutions.",
    image: img("technology"),
    focus: ["Innovation and Technology"],
    items: ["Software Product Campaigns", "Product Launch Campaigns", "Technology Awareness Campaigns", "Digital Health Product Promotion", "Software Demonstrations", "Technology Education Campaigns", "Product Testing and Feedback Initiatives", "Innovation Showcases", "Technology-Based Community Solutions"],
  },
  "entrepreneurship-innovation-initiatives": {
    letter: "H", title: "Entrepreneurship & Innovation Initiatives", short: "Entrepreneurship & Innovation",
    tagline: "Linking community needs, innovation and sustainable opportunity.",
    image: img("entrepreneurship"),
    focus: ["Entrepreneurship and Economic Initiatives", "Innovation and Technology"],
    items: ["Entrepreneurship Initiatives", "Innovation Challenges", "Startup Initiatives", "Business Development Initiatives", "Youth Entrepreneurship", "Social Entrepreneurship", "Innovation Workshops", "Business and Community Linkages", "Idea Development Programmes", "Mentorship and Networking Initiatives"],
  },
  "youth-initiatives": {
    letter: "I", title: "Youth Initiatives", short: "Youth",
    tagline: "Meaningful opportunities for youth participation and leadership.",
    image: img("youth"),
    focus: ["Youth and Volunteer Engagement"],
    items: ["Youth Awareness Campaigns", "Youth Leadership Initiatives", "Youth Development Activities", "Youth Volunteer Programmes", "Student Engagement", "Youth Innovation Challenges", "Skills and Capacity-Building Activities", "Youth-Led Community Projects"],
  },
  "volunteer-initiatives": {
    letter: "J", title: "Volunteer Initiatives", short: "Volunteer",
    tagline: "Engaging and developing volunteers in campaigns and community action.",
    image: img("volunteer"),
    focus: ["Youth and Volunteer Engagement", "Community Engagement"],
    items: ["Volunteer Recruitment Campaigns", "Volunteer Mobilization", "Volunteer Training", "Community Volunteer Activities", "Event-Based Volunteering", "Digital Volunteering", "Volunteer Recognition Initiatives", "Volunteer Leadership Development"],
  },
  "special-initiatives": {
    letter: "K", title: "Special Initiatives", short: "Special",
    tagline: "Flexible, time-bound responses to emerging and priority needs.",
    image: img("special"),
    focus: ["Awareness and Education", "Community Engagement"],
    items: ["Special Awareness Initiatives", "Awareness Days and Observances", "Emergency Response Initiatives", "Seasonal Campaigns", "Rapid Community Response Activities", "Pilot Initiatives", "Collaborative Special Projects", "Emerging Issue Campaigns", "Time-Bound Priority Initiatives"],
  },
};
