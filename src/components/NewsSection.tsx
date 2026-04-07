import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import React from "react";

interface NewsEntry {
  date: string;
  content: React.ReactNode;
}

const newsItems: NewsEntry[] = [
  {
    date: "March 20, 2026",
    content: (
      <>
        Organized the panel "Theorizing STS from China and beyond: Disciplinary development, epistemic exploration, and sociopolitical positioning" at the upcoming{" "}
        <a href="https://www.4sonline.org/meeting.php" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 underline underline-offset-2">
          Society for Social Studies of Science Annual Conference 2026
        </a>
        . Abstract deadline: April 30, 2026. See the{" "}
        <a href="https://docs.google.com/document/d/1pipYgSPOuNoQflyb-iwbPTNPMRLnit3n/edit?usp=sharing&ouid=100719509504817851767&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 underline underline-offset-2">
          CFP
        </a>
        .
      </>
    ),
  },
  {
    date: "March 19, 2026",
    content: (
      <>
        Interviewed by Kinling Lo in the <em>Rest of World</em> article:{" "}
        <a href="https://restofworld.org/2026/china-ai-anxiety-openclaw-jobs-redundancy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 underline underline-offset-2">
          'It feels like Squid Game': China's workers scramble to keep up in the AI race
        </a>
        .
      </>
    ),
  },
  {
    date: "March 13, 2026",
    content: (
      <>
        Organized the{" "}
        <a href="https://fairbank.fas.harvard.edu/events/technology-and-society-in-through-global-china-new-reflections-new-visions/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 underline underline-offset-2">
          'Technology and Society in/through Global China' Workshop
        </a>{" "}
        at Harvard University.
      </>
    ),
  },
  {
    date: "March 4, 2026",
    content: (
      <>
        Gave a guest lecture titled "How to build a platform in China?" for the course "Contemporary Chinese Society" at Harvard University.
      </>
    ),
  },
  {
    date: "January 23, 2026",
    content: (
      <>
        Gave an invited talk "Riding with the State: Didi and the Precarious Symbiosis between State and Platforms in China" at the 2026 Southeastern Conference for Association for Asian Studies (AAS).
      </>
    ),
  },
  {
    date: "November 13, 2025",
    content: (
      <>
        Gave a guest lecture titled "Three principles of studying platforms elsewhere" for the course "Theorizing digital capitalism" at Harvard University.
      </>
    ),
  },
  {
    date: "October 1, 2025",
    content: (
      <>
        Gave a guest lecture titled "The platform economy and future of work" for the course "Technology and Society" at Northeastern University.
      </>
    ),
  },
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
          News
        </h2>
        <div className="w-12 h-px bg-primary/40 mb-10" />
      </motion.div>
      <ul className="space-y-6">
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
              <span className="text-xs font-mono-data font-bold text-foreground">{item.date}</span>
              <p className="text-[15px] text-foreground/80 leading-relaxed mt-0.5">{item.content}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default NewsSection;
