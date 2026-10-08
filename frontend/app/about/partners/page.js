import SectionLanding from "@/components/shared/SectionLanding";
import { partnerCategories } from "@/data/partners";

export const metadata = {
  title: "Partners",
  description: "The organizations Hopefelt Foundation partners with across health, education, climate, and research.",
};

export default function PartnersOverviewPage() {
  return (
    <SectionLanding
      eyebrow="About · Partners"
      title="Our Partners"
      intro="Hopefelt works through six categories of partner organizations. Each one extends our reach, expertise, or credibility in a specific area."
      basePath="/about/partners"
      pages={partnerCategories}
    />
  );
}
