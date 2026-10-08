import SectionLanding from "@/components/shared/SectionLanding";
import { businessHubPages } from "@/data/business-hub";

export const metadata = {
  title: "Business Hub",
  description:
    "Hopefelt's Business Hub turns ideas, research, and technology into sustainable ventures — entrepreneurship, startups, mentorship, and social enterprise.",
};

export default function BusinessHubOverviewPage() {
  return (
    <SectionLanding
      eyebrow="Business Hub"
      title="Business Hub"
      intro="Idea, research, product, technology, business model, brand, marketing, media, market, scale. The Business Hub is where Hopefelt turns entrepreneurship and innovation into sustainable ventures with real community impact."
      basePath="/business-hub"
      pages={businessHubPages}
    />
  );
}
