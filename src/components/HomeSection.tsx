import { motion } from "framer-motion";
import headshot from "@/assets/headshot.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const HomeSection = () => (
  <section id="home" className="py-20 md:py-28">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeUp} className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
        <div className="shrink-0">
          <img
            src={headshot}
            alt="Professor Jonathan Harwell"
            className="w-40 h-48 md:w-48 md:h-56 object-cover rounded-sm shadow-md"
          />
        </div>
        <div className="space-y-5">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif-display font-semibold text-foreground leading-tight">
              Jonathan Harwell
            </h1>
            <p className="text-primary font-medium mt-1.5 text-sm tracking-wide">
              Professor of Political Economy
            </p>
            <p className="text-muted-foreground text-sm mt-0.5">
              Department of Government · Harvard University
            </p>
          </div>
          <div className="w-12 h-px bg-primary/40" />
          <p className="text-foreground/80 leading-relaxed text-[15px]">
            I study the political economy of development, with a focus on how institutions shape economic outcomes in post-colonial states. My work draws on archival research, field experiments, and formal theory to understand the persistence of inequality and the conditions under which reform is possible.
          </p>
          <p className="text-foreground/80 leading-relaxed text-[15px]">
            I received my Ph.D. from Princeton University and held fellowships at the Institute for Advanced Study and the Hoover Institution before joining the Harvard faculty. I currently serve as director of the Program on Governance and Development.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeSection;
