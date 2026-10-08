import SectionLanding from "@/components/shared/SectionLanding";
import { achievementPages } from "@/data/achievements";

export const metadata = {
  title: "Achievements",
  description: "Awards, prizes, competitions, certificates, and recognition earned by Hopefelt Foundation.",
};

export default function AchievementsOverviewPage() {
  return (
    <SectionLanding
      eyebrow="Recognition"
      title="Achievements"
      intro="A record of the awards, prizes, and recognition Hopefelt Foundation and its people have earned along the way."
      basePath="/achievements"
      pages={achievementPages}
    />
  );
}
