import SectionLanding from "@/components/shared/SectionLanding";
import { sdgPages } from "@/data/sdgs";

export const metadata = {
  title: "SDGs & Global Alignment",
  description: "How Hopefelt Foundation's programs align with the UN Sustainable Development Goals and WHO global health frameworks.",
};

export default function SdgsOverviewPage() {
  return (
    <SectionLanding
      eyebrow="Global Alignment"
      title="SDGs & Global Alignment"
      intro="Hopefelt's programs are designed against the UN Sustainable Development Goals and WHO public health guidance — not as a label, but as a working framework."
      basePath="/sdgs"
      pages={sdgPages}
    />
  );
}
