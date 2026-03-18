import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HomeSection />
      <ResearchSection />
      <PublicationsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
