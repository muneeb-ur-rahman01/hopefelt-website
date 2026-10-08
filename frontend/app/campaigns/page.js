import SectionLanding from "@/components/shared/SectionLanding";
import { campaignPages } from "@/data/campaigns";

export const metadata = {
  title: "Campaigns & Initiatives",
  description: "Hopefelt Foundation's public campaigns across health, climate, community, and youth engagement.",
};

export default function CampaignsOverviewPage() {
  return (
    <SectionLanding
      eyebrow="Public Campaigns"
      title="Campaigns & Initiatives"
      intro="Campaigns mobilize volunteers and communities around a specific cause — often feeding directly into our longer-running projects."
      basePath="/campaigns"
      pages={campaignPages}
    />
  );
}
