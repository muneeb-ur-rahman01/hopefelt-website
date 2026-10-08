import SectionLanding from "@/components/shared/SectionLanding";
import { trainingPages } from "@/data/training";

export const metadata = {
  title: "Training & Experience",
  description: "Trainings, workshops, and hands-on / field experience programs run by Hopefelt Foundation.",
};

export default function TrainingOverviewPage() {
  return (
    <SectionLanding
      eyebrow="Build Your Skills"
      title="Training & Experience"
      intro="From short workshops to extended field placements, our training programs build the skills that keep Hopefelt's work running."
      basePath="/training"
      pages={trainingPages}
    />
  );
}
