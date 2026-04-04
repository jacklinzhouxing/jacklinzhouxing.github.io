import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const cvEntries = [
  { category: "Education", items: ["Ph.D. in History and Sociology of Technology and Science, Georgia Institute of Technology", "Graduate Certificate in Public Policy, Georgia Institute of Technology"] },
  { category: "Appointments", items: ["Incoming Assistant Professor, Division of Public Policy, HKUST", "An Wang Postdoctoral Fellow, Fairbank Center for Chinese Studies, Harvard University"] },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const CVSection = () => (
  <section id="cv" className="py-20 border-t border-border">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl md:text-3xl font-serif-display font-semibold text-foreground">
            Curriculum Vitae
          </h2>
        </div>
        <div className="w-12 h-px bg-primary/40 mb-8" />
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="mb-10">
        <a
          href="/Xing_Full CV_Apr 2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm"
        >
          <Download size={16} />
          Download CV (PDF)
        </a>
      </motion.div>

      <div className="space-y-8">
        {cvEntries.map((section, i) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 }}
          >
            <h3 className="text-base font-semibold text-foreground font-serif-display mb-3">
              {section.category}
            </h3>
            <ul className="space-y-1.5">
              {section.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <FileText size={13} className="text-primary/60 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CVSection;
