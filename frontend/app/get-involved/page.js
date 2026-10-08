import SectionLanding from "@/components/shared/SectionLanding";
import { getInvolvedPages } from "@/data/get-involved";

export const metadata = {
  title: "Get Involved",
  description: "Ways to get involved with Hopefelt Foundation — volunteer, partner, sponsor, or donate.",
};

export default function GetInvolvedOverviewPage() {
  return (
    <SectionLanding
      eyebrow="Join Us"
      title="Get Involved"
      intro="There's a role here whether you have an afternoon, a professional skill, or a budget to contribute."
      basePath="/get-involved"
      pages={getInvolvedPages}
    />
  );
}
