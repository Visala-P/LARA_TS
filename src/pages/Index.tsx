import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ConditionsSection from "@/components/ConditionsSection";
import AboutSection from "@/components/AboutSection";
import ResearchPreview from "@/components/ResearchPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ConditionsSection />
      <AboutSection />
      <ResearchPreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
