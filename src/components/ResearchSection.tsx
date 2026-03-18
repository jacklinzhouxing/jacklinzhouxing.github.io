import { motion } from "framer-motion";
import { Brain, Dna, BarChart3, Globe } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Neural Architecture Search for Genomics",
    description: "Automated discovery of optimal neural network architectures for genomic sequence classification tasks, achieving state-of-the-art accuracy on benchmark datasets.",
    tags: ["Deep Learning", "Genomics", "AutoML"],
  },
  {
    icon: Dna,
    title: "Protein Folding Dynamics",
    description: "Probabilistic models that predict conformational changes in protein structures, enabling better drug target identification through simulation.",
    tags: ["Structural Biology", "Bayesian Methods"],
  },
  {
    icon: BarChart3,
    title: "Single-Cell RNA Sequencing Analysis",
    description: "Scalable pipelines for processing and clustering single-cell transcriptomic data, with novel visualization methods for high-dimensional spaces.",
    tags: ["Bioinformatics", "Visualization", "HPC"],
  },
  {
    icon: Globe,
    title: "Open Biodiversity Mapping",
    description: "Collaborative platform integrating satellite imagery and citizen science data to map species distribution patterns across ecosystems.",
    tags: ["Ecology", "Remote Sensing", "Open Data"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
};

const ResearchSection = () => (
  <section id="research" className="py-24 border-t border-border/50">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <p className="text-sm font-medium text-primary mb-3 font-mono-data uppercase tracking-wider">
          Research
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-12">
          Active projects
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] as const, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group bg-card p-6 rounded-[12px] transition-shadow duration-300"
            style={{ boxShadow: "var(--card-shadow)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
          >
            <div className="flex flex-col h-full space-y-4">
              <div className="w-12 h-12 rounded-[8px] bg-secondary flex items-center justify-center text-primary">
                <project.icon size={22} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-mono-data text-muted-foreground bg-tag px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
