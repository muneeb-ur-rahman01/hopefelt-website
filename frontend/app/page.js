import Hero from "@/components/home/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import TeamHierarchy from "@/components/shared/TeamHierarchy";
import ExploreSection from "@/components/home/ExploreSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ResearchInnovationSection from "@/components/home/ResearchInnovationSection";
import TechnologySection from "@/components/home/TechnologySection";
import ProductsSection from "@/components/home/ProductsSection";
import BusinessHubSection from "@/components/home/BusinessHubSection";
import CampaignsSection from "@/components/home/CampaignsSection";
import MediaHighlights from "@/components/home/MediaHighlights";
import TrainingSection from "@/components/home/TrainingSection";
import ImpactSection from "@/components/home/ImpactSection";
import PartnersSection from "@/components/home/PartnersSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">

      {/* 1. Hero */}
      <Hero />

      {/* 2. Who We Are (short teaser — full content lives on /about) */}
      <AboutTeaser />

      {/* 3. Organization / Team */}
      <section className="border-t border-line bg-sand">
        <TeamHierarchy />
      </section>

      {/* 4. What We Do */}
      <ExploreSection />

      {/* 5. Featured Projects */}
      <FeaturedProjects />

      {/* 6. Research & Innovation */}
      <ResearchInnovationSection />

      {/* 7. Technology & Digital Innovation */}
      <TechnologySection />

      {/* 8. Products */}
      <ProductsSection />

      {/* 9. Business Hub */}
      <BusinessHubSection />

      {/* 10. Campaigns */}
      <CampaignsSection />

      {/* 11. Media & Mass Media */}
      <MediaHighlights />

      {/* 12. Training */}
      <TrainingSection />

      {/* 13. Impact */}
      <ImpactSection />

      {/* 14. Partners */}
      <PartnersSection />

    </main>
  );
}