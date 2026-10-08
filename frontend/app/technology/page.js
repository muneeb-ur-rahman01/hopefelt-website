import SectionLanding from "@/components/shared/SectionLanding";
import { technologyPages } from "@/data/technology";

export const metadata = {
  title: "Technology & Digital Health",
  description: "Hopefelt Foundation's digital health tools and technology innovation programs, including Virtual Clinic and Virtual Pharmacy.",
};

export default function TechnologyOverviewPage() {
  return (
    <SectionLanding
      eyebrow="IT, Tech & Digital Health"
      title="Technology & Digital Health"
      intro="Our technology work spans core software products, digital health tools, and community technology access — all built to extend the reach of our field programs."
      basePath="/technology"
      pages={technologyPages}
    />
  );
}
