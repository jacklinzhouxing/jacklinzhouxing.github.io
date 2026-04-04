import { motion } from "framer-motion";
import { Globe, Languages } from "lucide-react";

const englishMedia = [
  { year: 2026, title: '"It feels like Squid Game": China\'s workers scramble to keep up in the AI race', outlet: "Rest of World", type: "Interview", url: "https://restofworld.org/2026/china-ai-race-workers/" },
  { year: 2023, title: "Taxi versus Didi", outlet: "Konfuzius Institut", url: "https://www.konfuzius-institut-magazin.de/taxi-versus-didi/" },
  { year: 2022, title: "Why do some taxi drivers in China turn down e-hailing?", outlet: "MoLab Inventory of Mobilities and Socioeconomic Changes", url: "https://www.molab-inventory.org/" },
  { year: 2021, title: "Tracing apps and digital divide (Series 1–3)", outlet: "Technology of Things", url: "#" },
  { year: 2021, title: "Health QR code: Technological and/or social infrastructure about pandemic control and privacy", outlet: "Technology of Things", url: "#" },
  { year: 2021, title: 'Facial recognition: Surveillance with "artificial" intelligence', outlet: "Technology of Things", url: "#" },
  { year: 2020, title: 'The "Caring Class" behind the "Grid Reaction" against Coronavirus', outlet: "Oxford COMPAS", url: "https://www.compas.ox.ac.uk/" },
  { year: 2020, title: "Hive box: Controversies over automation, privatization, and negotiability", outlet: "Technology of Things", url: "#" },
  { year: 2020, title: "Food delivery platform: Service quality, algorithm, infrastructure, and people", outlet: "Technology of Things", url: "#" },
];

const chineseMedia = [
  { year: 2025, title: "技术创新背后的劳动变迁", outlet: "信睿周报 (TheThinker Weekly)", url: "#" },
  { year: 2025, title: "平台经济从何处来，往何处去?", outlet: "信睿周报 (TheThinker Weekly)", url: "#" },
  { year: 2023, title: '严肃谈一下"工作不断贬值"这个问题', outlet: "地球知识局 (Bureau of Knowledge about the Earth)", url: "#" },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

interface MediaEntry {
  year: number;
  title: string;
  outlet: string;
  type?: string;
  url: string;
}

const MediaList = ({ items }: { items: MediaEntry[] }) => (
  <ul className="space-y-4">
    {items.map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
        className="flex gap-3 items-start"
      >
        <span className="text-xs font-mono text-muted-foreground pt-1 shrink-0 w-10">[{item.year}]</span>
        <p className="text-[15px] leading-relaxed text-foreground/80">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/70 transition-colors duration-200 underline decoration-primary/30 underline-offset-2 hover:decoration-primary/60"
          >
            {item.title}
          </a>
          {item.type && (
            <span className="ml-1.5 text-xs font-medium text-primary/60">({item.type})</span>
          )}
          <span className="text-muted-foreground"> — {item.outlet}</span>
        </p>
      </motion.li>
    ))}
  </ul>
);

const PublicEngagementSection = () => (
  <section id="engagement" className="py-20 border-t border-border">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">
          Public Engagement
        </h2>
        <div className="w-12 h-px bg-primary/40 mb-10" />
      </motion.div>

      {/* English Media */}
      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="mb-12">
        <div className="flex items-center gap-2.5 mb-5">
          <Globe size={18} className="text-primary shrink-0" />
          <h3 className="font-serif-display font-semibold text-foreground text-lg">English Media</h3>
        </div>
        <MediaList items={englishMedia} />
      </motion.div>

      {/* Chinese Media */}
      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
        <div className="flex items-center gap-2.5 mb-5">
          <Languages size={18} className="text-primary shrink-0" />
          <h3 className="font-serif-display font-semibold text-foreground text-lg">Chinese Media</h3>
        </div>
        <MediaList items={chineseMedia} />
      </motion.div>
    </div>
  </section>
);

export default PublicEngagementSection;
