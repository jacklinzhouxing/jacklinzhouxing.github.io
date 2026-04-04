import { motion } from "framer-motion";
import { Mic, PenLine } from "lucide-react";

const engagements = [
  {
    icon: Mic,
    type: "Interview",
    title: "Interview with Rest of World on AI race and labor anxiety.",
  },
  {
    icon: PenLine,
    type: "Op-ed",
    title: "Op-ed in TheThinker Weekly (信睿周报) on the future of platform economy.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const PublicEngagementSection = () => (
  <section id="engagement" className="py-20 border-t border-border">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">
          Public Engagement
        </h2>
        <div className="w-12 h-px bg-primary/40 mb-10" />
      </motion.div>
      <div className="space-y-5">
        {engagements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 }}
            className="flex gap-4 items-start border border-border rounded-sm p-5 bg-card"
          >
            <item.icon size={18} className="text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">{item.type}</span>
              <p className="text-[15px] text-foreground/80 leading-relaxed mt-1">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PublicEngagementSection;
