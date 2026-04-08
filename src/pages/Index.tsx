import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import NewsSection from "@/components/NewsSection";
import ResearchSection from "@/components/ResearchSection";
import TeachingSection from "@/components/TeachingSection";
import PublicEngagementSection from "@/components/PublicEngagementSection";
import PublicationsSection from "@/components/PublicationsSection";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HomeSection />
      <NewsSection />
      <ResearchSection />
      <TeachingSection />
      <PublicEngagementSection />
      <CVSection />
      <ContactSection />
    </main>
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
