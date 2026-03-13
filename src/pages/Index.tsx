import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorityBar from "@/components/AuthorityBar";
import PainSection from "@/components/PainSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CoverageSection from "@/components/CoverageSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AuthorityBar />
      <PainSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CoverageSection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
