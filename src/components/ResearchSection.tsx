import { motion } from "framer-motion";

const interests = [
  {
    title: "Institutional Persistence",
    description: "How colonial-era institutions continue to shape governance, property rights, and economic development across the Global South.",
  },
  {
    title: "Political Economy of Reform",
    description: "The conditions under which political elites adopt or resist institutional reforms, examined through game-theoretic models and case studies.",
  },
  {
    title: "Land Tenure & Property Rights",
    description: "The relationship between land tenure systems, agricultural productivity, and long-run wealth accumulation in sub-Saharan Africa.",
  },
  {
    title: "Experimental Governance",
    description: "Field experiments that test the effectiveness of decentralization, participatory budgeting, and anti-corruption interventions.",
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
          Research Interests
        </h2>
        <div className="w-12 h-px bg-primary/40 mb-10" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {interests.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 }}
          >
            <h3 className="text-base font-semibold text-foreground font-serif-display mb-1.5">
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
