import SectionLanding from "@/components/shared/SectionLanding";
import { storyPages } from "@/data/stories";

export const metadata = {
  title: "Stories & Media",
  description: "Community, volunteer, research, project, and technology stories from Hopefelt Foundation, plus news and media coverage.",
};

export default function StoriesOverviewPage() {
  return (
    <SectionLanding
      eyebrow="Storytelling Hub"
      title="Stories & Media"
      intro="Numbers tell part of the story. These are the people behind them — communities, volunteers, researchers, and the teams building our tools."
      basePath="/stories"
      pages={storyPages}
    />
  );
}
