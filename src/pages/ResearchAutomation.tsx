import { Cpu } from "lucide-react";
import ResearchSubpageLayout from "@/components/ResearchSubpageLayout";

const ResearchAutomation = () => (
  <ResearchSubpageLayout
    icon={Cpu}
    title="Technology, Automation, and Work"
    narrative="My research in this area explores human-machine interactions, labor transformation, and skill changes within the platform economy. I examine how digital platforms reshape work practices, alter skill requirements, and reconfigure labor markets — particularly in the service sector. I also investigate how workers develop creative strategies to navigate technological disruption. An upcoming project extends this inquiry to Autonomous Vehicles (AVs), examining the sociotechnical dynamics of automation in transportation and its implications for labor and mobility."
    publications={[
      {
        year: 2026,
        title: "Mythology of wealth in the platform economy: The case of the ride-hailing platform Didi in China",
        url: "https://journals.sagepub.com/doi/abs/10.1177/01622439251398910",
      },
      {
        year: 2025,
        title: "A processual approach to skill changes in digital automation: The case of the platform economy in the service sector",
        url: "https://www.sciencedirect.com/science/article/pii/S0048733325000198",
      },
      {
        year: 2022,
        title: "Driving as communities: Chinese taxi drivers' technology, job, and mobility choices under the pressure of e-hailing",
        url: "https://www.tandfonline.com/doi/abs/10.1080/17450101.2022.2114844",
      },
      {
        year: 2021,
        title: "The temporality of and competition between infrastructures: Taxis and e-hailing in China",
        url: "https://www.berghahnjournals.com/view/journals/transfers/11/3/trans110305.xml",
      },
    ]}
  />
);

export default ResearchAutomation;
