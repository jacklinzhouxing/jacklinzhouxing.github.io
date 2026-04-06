import { Globe } from "lucide-react";
import ResearchSubpageLayout from "@/components/ResearchSubpageLayout";

const ResearchInfrastructure = () => (
  <ResearchSubpageLayout
    icon={Globe}
    title="Digital Infrastructure"
    narrative="This strand of my research analyzes the infrastructuralization of digital tools — how platforms like WeChat and Didi evolve from simple applications into deeply embedded societal infrastructures. I also investigate large-scale digital systems such as China's health code systems during COVID-19, examining how patchwork surveillance emerges and how accountability labor is distributed across state, platform, and citizen actors."
    publications={[
      {
        year: 2026,
        title: "Patchwork surveillance and accountability labor: China's Health Code Systems during COVID-19",
        url: "https://journals.sagepub.com/doi/10.1177/20539517261419359",
      },
      {
        year: 2025,
        title: "Towards a processual approach to the infrastructuralization of digital platforms: The case of WeChat",
        url: "https://www.tandfonline.com/doi/full/10.1080/17544750.2025.2517254",
      },
      {
        year: 2021,
        title: "The temporality of and competition between infrastructures: Taxis and e-hailing in China",
        url: "https://www.berghahnjournals.com/view/journals/transfers/11/3/trans110305.xml",
      },
    ]}
  />
);

export default ResearchInfrastructure;
