import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const newsItems = [
  { date: "March 2026", text: "Organized 'Technology and Society in/through Global China' Workshop at Harvard University." },
  { date: "August 2025", text: "Joined Fairbank Center for Chinese Studies as An Wang Postdoctoral Fellow." },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const NewsSection = () => (
  <section id="updates" className="py-20 border-t border-border">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">
          Updates
        </h2>
        <div className="w-12 h-px bg-primary/40 mb-10" />
      </motion.div>
      <ul className="space-y-5">
        {newsItems.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.06 }}
            className="flex gap-4 items-start"
          >
            <Newspaper size={16} className="text-primary shrink-0 mt-1" />
            <div>
              <span className="text-xs font-mono-data text-muted-foreground">{item.date}</span>
              <p className="text-[15px] text-foreground/80 leading-relaxed mt-0.5">{item.text}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default NewsSection;
