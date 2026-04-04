import { motion } from "framer-motion";
import { Cpu, Globe, Shield, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Technology, Automation, and Work",
    description: "Exploring human-machine interactions and labor transformation in digital platforms, autonomous vehicles, and generative AI.",
  },
  {
    icon: Globe,
    title: "Digital Infrastructure",
    description: "Analyzing the development trajectories of tools like contact-tracing, e-government platforms, and cloud infrastructure.",
  },
  {
    icon: Shield,
    title: "Strategies and Governance of Emerging Tech",
    description: "Investigating platform governance, innovation policies, and state-tech relations.",
  },
  {
    icon: Lightbulb,
    title: "Interdisciplinary Understanding of Innovation",
    description: "Bridging critical and instrumental analyses through the history of science and technology, STS, and innovation studies.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const ResearchSection = () => (
  <section id="research" className="py-20 border-t border-border">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">
          Research
        </h2>
        <div className="w-12 h-px bg-primary/40 mb-10" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {pillars.map((item, i) => (
          <motion.div
            key={item.title}
            id={`pillar-${i}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 }}
            className="border border-border rounded-sm p-6 bg-card scroll-mt-24"
          >
            <item.icon size={20} className="text-primary mb-3" />
            <h3 className="text-base font-semibold text-foreground font-serif-display mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
