import { Lightbulb } from "lucide-react";
import ResearchSubpageLayout from "@/components/ResearchSubpageLayout";

const ResearchInnovation = () => (
  <ResearchSubpageLayout
    icon={Lightbulb}
    title="Interdisciplinary Understanding of Innovation"
    narrative="This pillar bridges critical and instrumental analyses through Science and Technology Studies (STS) and the sociology of technology. I explore the disciplinary development of STS in non-Western contexts, engage with the historiography of science from spatial and diachronic perspectives, and conduct dialogues with leading scholars on pedagogy and methodology in the field."
    publications={[
      {
        year: 2025,
        title: "走出西方中心主义：科技史研究的空间与历时转向",
        url: "https://zrbz.cbpt.cnki.net/portal/journal/portal/client/paper/99e1334ab7842c824c76f5f56042bef6",
      },
      {
        year: 2023,
        title: "Translating STS in China: Disciplinary struggles and future prospects",
        url: "https://estsjournal.org/index.php/ests/article/view/805",
      },
      {
        year: 2023,
        title: "在社会中学习技术与科学：启发，方法与技能——访谈维比·贝克教授",
        url: "https://kxwp.cbpt.cnki.net/portal/journal/portal/client/paper/e28065d9949140bb14a2744b42e752de",
      },
      {
        year: 2023,
        title: "从决定论到能动性：近四十年国内外技术转移研究述评",
        url: "https://jdn.ucas.ac.cn/home/journal/view/id/4399",
      },
    ]}
  />
);

export default ResearchInnovation;
