import { motion } from "framer-motion";
import { Download } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const CV_URL = "/Xing_Full CV_Apr 2026.pdf";

const CVSection = () => (
  <section id="cv" className="py-20 border-t border-border">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">
          Curriculum Vitae
        </h2>
        <div className="w-12 h-px bg-primary/40 mb-8" />
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="mb-8">
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm"
        >
          <Download size={16} />
          Download CV (PDF)
        </a>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="w-full rounded-sm border border-border shadow-sm overflow-hidden bg-muted/30"
      >
        <iframe
          src={CV_URL}
          title="Curriculum Vitae"
          className="w-full border-0"
          style={{ height: "900px" }}
        />
      </motion.div>
    </div>
  </section>
);

export default CVSection;
