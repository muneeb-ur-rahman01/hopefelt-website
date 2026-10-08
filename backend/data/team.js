// Mirrors frontend/data/team.js. Kept separately for now so the backend
// can serve /api/team independently; once a database is introduced this
// becomes a query instead of a static export.

const teamTree = {
  name: "Amara Whitfield",
  role: "Executive Director",
  children: [
    {
      name: "Daniel Osei",
      role: "Programs Director",
      children: [
        { name: "Priya Nair", role: "Education Lead" },
        { name: "Miguel Torres", role: "Healthcare Lead" },
      ],
    },
    {
      name: "Sarah Klein",
      role: "Community Director",
      children: [
        { name: "Kwame Boateng", role: "Community Development Lead" },
        { name: "Elena Rossi", role: "Empowerment Programs Lead" },
      ],
    },
  ],
};

module.exports = teamTree;
