import { Shield } from "lucide-react";
import ResearchSubpageLayout from "@/components/ResearchSubpageLayout";

const ResearchGovernance = () => (
  <ResearchSubpageLayout
    icon={Shield}
    title="Strategies and Governance of Emerging Tech"
    narrative="This research pillar focuses on corporate strategies, state-tech relations, platform governance, and regulatory environments — primarily in the Chinese context. I investigate how platform companies navigate political and market pressures, how innovation policies are shaped and constrained by local contexts, and how the relationship between the state and technology firms evolves through crises and regulatory shifts."
    publications={[
      {
        year: 2025,
        title: "作為全球拼裝體的平台：以滴滴的發展歷程與上市危機為例",
        url: "https://www.cschinese.com/issueArticle.asp?P_No=119&CA_ID=791",
      },
      {
        year: 2025,
        title: "Towards a processual approach to the infrastructuralization of digital platforms: The case of WeChat",
        url: "https://www.tandfonline.com/doi/full/10.1080/17544750.2025.2517254",
      },
      {
        year: 2020,
        title: "From creative destruction to creative appropriation: A comprehensive framework",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0048733320301384",
      },
      {
        year: 2019,
        title: "Restricted generalizability of city innovation policies: The case of e-hailing in China",
        url: "https://academic.oup.com/spp/article/47/1/148/5592229",
      },
    ]}
  />
);

export default ResearchGovernance;
