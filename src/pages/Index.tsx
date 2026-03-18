import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import NewsSection from "@/components/NewsSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HomeSection />
      <NewsSection />
      <ResearchSection />
      <PublicationsSection />
      <CVSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
