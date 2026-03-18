import { motion } from "framer-motion";

const stats = [
  { value: "14", label: "Peer-reviewed Papers" },
  { value: "3", label: "Open-source Libraries" },
  { value: "1,240", label: "Citations" },
];

const HeroSection = () => (
  <section className="py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className="max-w-3xl"
      >
        <p className="text-sm font-medium text-primary mb-4 font-mono-data uppercase tracking-wider">
          Current Inquiry
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-[1.1] mb-6">
          Investigating the intersection of computational biology and machine learning.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          Developing novel frameworks for understanding complex biological systems through data-driven approaches and open collaboration.
        </p>
        <div className="flex flex-wrap gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <p className="text-3xl font-display font-semibold text-foreground font-mono-data">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
