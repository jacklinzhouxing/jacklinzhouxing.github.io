import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
};

const AboutSection = () => (
  <section id="about" className="py-24 border-t border-border/50">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <p className="text-sm font-medium text-primary mb-3 font-mono-data uppercase tracking-wider">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-8">
          Building bridges between disciplines
        </h2>
      </motion.div>
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div className="space-y-4 text-muted-foreground">
          <p>
            I am a researcher at the Institute for Computational Sciences, where I lead a small team focused on developing machine learning methods for biological sequence analysis.
          </p>
          <p>
            My work sits at the convergence of statistical learning, genomics, and software engineering. I believe that rigorous, open-source tooling is the foundation of reproducible science.
          </p>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Before joining ICS, I completed my PhD at the University of Cambridge, where I studied under Prof. Elena Vasquez. My thesis explored probabilistic models for protein structure prediction.
          </p>
          <p>
            I am always looking for motivated collaborators—whether you are a graduate student, postdoc, or industry partner interested in applied ML for the life sciences.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
