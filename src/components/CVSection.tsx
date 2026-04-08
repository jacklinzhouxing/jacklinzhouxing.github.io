import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, BookOpen, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const CV_URL = `${import.meta.env.BASE_URL}Xing_Full%20CV_Apr%202026.pdf`;

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
        {/* Column 1 – Academic Highlights */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="lg:col-span-2 space-y-0"
        >
          <div className="rounded-sm border border-border bg-background p-6 shadow-sm">
            {/* Employment */}
            <div className="mb-5">
              <div className="flex items-center gap-2.5 mb-3">
                <Briefcase size={18} className="text-primary shrink-0" />
                <h3 className="font-serif-display font-semibold text-foreground text-base">Employment</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>Incoming Assistant Professor, Division of Public Policy, Hong Kong University of Science and Technology</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>An Wang Postdoctoral Fellow, Fairbank Center for Chinese Studies, Harvard University</span>
                </li>
              </ul>
            </div>

            <Separator className="my-5" />

            {/* Education */}
            <div className="mb-5">
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap size={18} className="text-primary shrink-0" />
                <h3 className="font-serif-display font-semibold text-foreground text-base">Education</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>PhD, Sociology, Georgia Institute of Technology, 2025 (Graduate Certificate in Public Policy)</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>MPhil, Science &amp; Technology Studies, The University of Hong Kong, 2019</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>MA, Social Science, Hong Kong University of Science and Technology, 2017</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>BBA (Acc &amp; Fin), The University of Hong Kong, 2016</span>
                </li>
              </ul>
            </div>

            <Separator className="my-5" />

            {/* Selected Publications */}
            <div className="mb-5">
              <div className="flex items-center gap-2.5 mb-3">
                <BookOpen size={18} className="text-primary shrink-0" />
                <h3 className="font-serif-display font-semibold text-foreground text-base">Selected Publications</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground">Xing, J. L.</strong>, &amp; Zheng, E. L. (2026). Patchwork surveillance and accountability labor: China's Health Code Systems during COVID-19. <em>Big Data &amp; Society</em>, 13(1).
                </li>
                <li>
                  <strong className="text-foreground">Xing, J. L.</strong>, Zhang, J., &amp; Santos, G. (2026). Mythology of wealth in the platform economy: The case of the ride-hailing platform Didi in China. <em>Science, Technology, &amp; Human Values</em>.
                </li>
                <li>
                  Zhang, J., &amp; <strong className="text-foreground">Xing, J. L.</strong> (2025). Towards a processual approach to the infrastructuralization of digital platforms: The case of WeChat. <em>Chinese Journal of Communication</em>, 0(0), 1–18.
                </li>
                <li>
                  <strong className="text-foreground">Xing, J. L.</strong>, &amp; Sharif, N. (2025). A processual approach to skill changes in digital automation: The case of the platform economy in the service sector. <em>Research Policy</em>, 54(4): 105190.
                </li>
                <li>
                  <strong className="text-foreground">Xing, J. L.</strong> (2022). Driving as communities: Chinese taxi drivers' technology, job, and mobility choices under the pressure of e-hailing. <em>Mobilities</em>, 17(5): 676-694.
                </li>
                <li>
                  <strong className="text-foreground">Xing, J. L.</strong>, &amp; Sharif, N. (2020). From creative destruction to creative appropriation: A comprehensive framework. <em>Research Policy</em>, 49(7): 104060.
                </li>
              </ul>
            </div>

            <Separator className="my-5" />

            {/* Professional Service */}
            <div className="mb-5">
              <div className="flex items-center gap-2.5 mb-3">
                <Briefcase size={18} className="text-primary shrink-0" />
                <h3 className="font-serif-display font-semibold text-foreground text-base">Professional Service</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>Book Review Editor, <em>East Asian Science, Technology and Society: An International Journal</em> (2026–2028)</span>
                </li>
              </ul>
            </div>

            <Separator className="my-5" />

            {/* Selected Awards */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Award size={18} className="text-primary shrink-0" />
                <h3 className="font-serif-display font-semibold text-foreground text-base">Selected Awards</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>(Co-I) HK RGC General Research Fund (Ref.: 11600724): An Ethnographic, Processual Study of Platformized Lives: WeChat in China as a Case Study</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>Kranzberg / Lesson Smith Fellowship, Georgia Institute of Technology</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span>Ivan Allen College Travel and Fieldwork Grant, Georgia Institute of Technology</span>
                </li>
              </ul>
            </div>
          </div>
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
