// Hierarchy is expressed as a tree so TeamHierarchy.jsx can render any
// number of levels/members just by walking this data — add or remove
// people here without touching the component.

export const teamTree = {
  name: "Amara Whitfield",
  role: "Executive Director",
  image: "https://picsum.photos/seed/hopefelt-team-director/400/400",
  bio: "Leads Hopefelt's overall strategy and partnerships.",
  children: [
    {
      name: "Daniel Osei",
      role: "Programs Director",
      image: "https://picsum.photos/seed/hopefelt-team-daniel/400/400",
      bio: "Oversees education and healthcare program delivery.",
      children: [
        {
          name: "Priya Nair",
          role: "Education Lead",
          image: "https://picsum.photos/seed/hopefelt-team-priya/400/400",
          bio: "Runs tutoring and scholarship programs.",
        },
        {
          name: "Miguel Torres",
          role: "Healthcare Lead",
          image: "https://picsum.photos/seed/hopefelt-team-miguel/400/400",
          bio: "Coordinates mobile clinic outreach.",
        },
      ],
    },
    {
      name: "Sarah Klein",
      role: "Community Director",
      image: "https://picsum.photos/seed/hopefelt-team-sarah/400/400",
      bio: "Leads community development and empowerment initiatives.",
      children: [
        {
          name: "Kwame Boateng",
          role: "Community Development Lead",
          image: "https://picsum.photos/seed/hopefelt-team-kwame/400/400",
          bio: "Manages local infrastructure partnerships.",
        },
        {
          name: "Elena Rossi",
          role: "Empowerment Programs Lead",
          image: "https://picsum.photos/seed/hopefelt-team-elena/400/400",
          bio: "Runs women & youth empowerment workshops.",
        },
      ],
    },
  ],
};
