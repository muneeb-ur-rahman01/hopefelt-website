import SectionLanding from "@/components/shared/SectionLanding";
import { impactPages } from "@/data/impact";

export const metadata = {
  title: "Impact",
  description: "Hopefelt Foundation's impact across health, community, training, research, climate, and technology.",
};

export default function ImpactOverviewPage() {
  return (
    <SectionLanding
      eyebrow="What's Changed"
      title="Our Impact"
      intro="Every Hopefelt program reports against the same Impact Framework, so results are comparable across departments and years."
      basePath="/impact"
      pages={impactPages}
    />
  );
}
