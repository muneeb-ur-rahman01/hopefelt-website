import SectionLanding from "@/components/shared/SectionLanding";
import { researchPages } from "@/data/research";

export const metadata = {
  title: "Research & Knowledge",
  description: "Hopefelt Foundation's research projects, abstracts, publications, reports, and collaborations.",
};

export default function ResearchOverviewPage() {
  return (
    <SectionLanding
      eyebrow="Evidence & Learning"
      title="Research & Knowledge"
      intro="Every program we run is backed by research — and everything we learn feeds back into how we design the next one."
      basePath="/research"
      pages={researchPages}
    />
  );
}
