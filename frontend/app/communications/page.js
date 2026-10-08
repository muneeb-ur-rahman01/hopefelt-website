import SectionLanding from "@/components/shared/SectionLanding";
import { communicationsPages } from "@/data/communications";

export const metadata = {
  title: "Communications, Media & Digital Marketing",
  description:
    "How Hopefelt Foundation tells its story — digital marketing, social media, mass media, PR, brand, and creative content behind every project and campaign.",
};

export default function CommunicationsOverviewPage() {
  return (
    <SectionLanding
      eyebrow="Communications, Media & Digital Marketing"
      title="Communications, Media & Digital Marketing"
      intro="From digital marketing and social media to mass media, public relations, and creative content — our communications team makes sure every project, campaign, and product reaches the people it's meant for."
      basePath="/communications"
      pages={communicationsPages}
    />
  );
}
