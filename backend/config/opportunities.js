// Single source of truth for the "Get Involved" opportunities. Slugs match the
// frontend routes: /get-involved/<slug>. Add `requiredDetails` for fields that
// a specific opportunity form must send inside `details`.
const opportunities = [
  { slug: "volunteer", title: "Official Volunteer" },
  { slug: "member", title: "Official Member" },
  { slug: "campaigner", title: "Become a Campaigner" },
  { slug: "campaign-coordinator", title: "Campaign Coordinator" },
  { slug: "campus-representative", title: "Campus Representative", requiredDetails: ["institution"] },
  { slug: "director-team", title: "Director Team" },
  { slug: "executive-team", title: "Executive Team" },
  { slug: "project-team", title: "Project Team" },
  { slug: "researcher", title: "Become a Researcher" },
  { slug: "training", title: "Join a Training" },
  { slug: "intern", title: "Join as an Intern" },
  { slug: "trainee", title: "Join as a Trainee" },
  { slug: "collaborate", title: "Collaborate With Us" },
  { slug: "donor", title: "Become a Donor" },
  { slug: "funder", title: "Become a Funder" },
  { slug: "technology-team", title: "Join the Technology Team" },
  { slug: "communications-media-team", title: "Join the Communications & Media Team" },
  { slug: "digital-marketing-team", title: "Join the Digital Marketing Team" },
  { slug: "entrepreneur-innovation-team", title: "Join the Entrepreneur / Innovation Team" },
  { slug: "partnerships", title: "Partnership Opportunities" },
];

const bySlug = new Map(opportunities.map((o) => [o.slug, o]));

module.exports = { opportunities, getOpportunity: (slug) => bySlug.get(slug) };
