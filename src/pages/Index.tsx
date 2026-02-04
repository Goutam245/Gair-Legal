import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ImpactStatement from "@/components/sections/ImpactStatement";
import FirmOverview from "@/components/sections/FirmOverview";
import ExpertiseShowcase from "@/components/sections/ExpertiseShowcase";
import ValuesSection from "@/components/sections/ValuesSection";
import StatsSection from "@/components/sections/StatsSection";
import LocationsSection from "@/components/sections/LocationsSection";
import CommitmentSection from "@/components/sections/CommitmentSection";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ImpactStatement />
      <FirmOverview />
      <ExpertiseShowcase />
      <ValuesSection />
      <StatsSection />
      <LocationsSection />
      <CommitmentSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
