import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  { year: "2025", title: "Attention-Based Models for Regulatory Genomics", authors: "Thorne A., Chen W., Patel R.", venue: "Nature Methods", doi: "10.1038/s41592-025-0142" },
  { year: "2024", title: "Scalable Bayesian Inference for Protein Dynamics", authors: "Thorne A., Vasquez E.", venue: "ICML 2024", doi: "10.48550/arXiv.2401.09832" },
  { year: "2024", title: "BioSeqKit: An Open-Source Toolkit for Sequence Analysis", authors: "Thorne A., Liu J., Kim S.", venue: "Bioinformatics", doi: "10.1093/bioinformatics/btae078" },
  { year: "2023", title: "Variational Autoencoders for Single-Cell Transcriptomics", authors: "Thorne A., Martinez D.", venue: "NeurIPS 2023", doi: "10.48550/arXiv.2310.05421" },
  { year: "2023", title: "Graph Neural Networks for Molecular Property Prediction", authors: "Thorne A., Okonkwo I., Chen W.", venue: "JMLR", doi: "10.5555/3618408.3618520" },
  { year: "2022", title: "Probabilistic Models for Protein Structure Prediction", authors: "Thorne A., Vasquez E.", venue: "PhD Thesis, Cambridge", doi: "10.17863/CAM.92145" },
];

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const },
};

const WorkSection = () => (
  <section id="work" className="py-24 border-t border-border/50">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <p className="text-sm font-medium text-primary mb-3 font-mono-data uppercase tracking-wider">
          Work
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-12">
          Selected publications
        </h2>
      </motion.div>
      <div className="space-y-0">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.doi}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1], delay: i * 0.05 }}
            className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 py-5 border-b border-border/50 hover:bg-secondary/30 -mx-4 px-4 rounded-md transition-colors duration-200"
          >
            <span className="text-sm font-mono-data text-muted-foreground shrink-0 w-14">
              {pub.year}
            </span>
            <div className="flex-grow min-w-0">
              <p className="text-foreground font-medium text-sm md:text-base leading-snug">
                {pub.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {pub.authors} · <span className="italic">{pub.venue}</span>
              </p>
            </div>
            <div className="flex gap-2 shrink-0 md:ml-4">
              <button className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                <FileText size={14} />
                PDF
              </button>
              <button className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink size={14} />
                DOI
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
