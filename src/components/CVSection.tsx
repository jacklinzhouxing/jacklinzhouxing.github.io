import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, BookOpen, Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const CV_URL = "/Xing_Full%20CV_Apr%202026.pdf";

const highlights = [
  {
    icon: Briefcase,
    title: "Employment",
    items: [
      "An Wang Postdoctoral Fellow, Fairbank Center for Chinese Studies, Harvard University",
      "Incoming Assistant Professor, Division of Public Policy, Hong Kong University of Science and Technology",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "Ph.D. in Sociology, Georgia Institute of Technology (2025)",
      "M.Phil. (Science & Technology Studies), The University of Hong Kong",
      "M.A. in Social Sciences, Hong Kong University of Science and Technology",
      "B.B.A., The University of Hong Kong",
    ],
  },
  {
    icon: BookOpen,
    title: "Selected Publications",
    items: [
      <>Featured journal articles in <em>Research Policy</em>, <em>Science, Technology, &amp; Human Values</em>, <em>Big Data &amp; Society</em>, <em>Chinese Journal of Communications</em>, <em>Mobility</em>, <em>Transfers</em>, <em>自然辩证法通讯</em>, <em>自然辩证法研究</em></>,
    ],
  },
  {
    icon: Award,
    title: "Key Awards",
    items: [
      "An Wang Postdoctoral Fellowship (Harvard)",
      "Co-I for General Research Fund (HK RGC)",
    ],
  },
];

const CVSection = () => (
  <section id="cv" className="py-20 border-t border-border bg-muted/20">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">
          Curriculum Vitae
        </h2>
        <div className="w-12 h-px bg-primary/40 mb-8" />
      </motion.div>

      {/* Download button */}
      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="mb-10">
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm"
        >
          <Download size={16} />
          Download Full CV (PDF)
        </a>
      </motion.div>

      {/* Two-column hybrid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Column 1 – Visual Highlights */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {highlights.map((section) => (
            <div
              key={section.title}
              className="rounded-sm border border-border bg-background p-5 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <section.icon size={18} className="text-primary shrink-0" />
                <h3 className="font-serif-display font-semibold text-foreground text-base">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Column 2 – Embedded PDF */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="lg:col-span-3 rounded-sm border border-border shadow-sm overflow-hidden bg-background"
        >
          <iframe
            src={CV_URL}
            title="Curriculum Vitae"
            className="w-full border-0"
            style={{ height: "900px" }}
          />
          <noscript>
            <p className="p-6 text-sm text-muted-foreground">
              PDF viewer unavailable.{" "}
              <a href={CV_URL} className="text-primary underline">
                Download the CV directly
              </a>.
            </p>
          </noscript>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CVSection;
