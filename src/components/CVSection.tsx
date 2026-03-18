import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const cvEntries = [
  { category: "Education", items: ["Ph.D. in Political Science, Princeton University, 2012", "A.B. in Economics, Harvard College, 2006 (magna cum laude)"] },
  { category: "Appointments", items: ["Professor of Political Economy, Harvard University, 2020–present", "Associate Professor, Harvard University, 2016–2020", "Fellow, Institute for Advanced Study, 2014–2016"] },
  { category: "Selected Honors", items: ["Carnegie Fellowship, 2025", "APSA Best Article Award, 2023", "Sloan Research Fellowship, 2019"] },
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
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <FileText size={14} />
            Download PDF
          </a>
        </div>
        <div className="w-12 h-px bg-primary/40 mb-10" />
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
                <li key={item} className="text-sm text-muted-foreground leading-relaxed">
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
