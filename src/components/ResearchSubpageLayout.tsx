import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Publication {
  year: number;
  title: string;
  url: string;
}

interface ResearchSubpageLayoutProps {
  icon: LucideIcon;
  title: string;
  narrative: string;
  publications: Publication[];
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const ResearchSubpageLayout = ({ icon: Icon, title, narrative, publications }: ResearchSubpageLayoutProps) => (
  <div className="min-h-screen bg-background text-foreground">
    {/* Header */}
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif-display text-lg font-semibold text-foreground hover:text-primary transition-colors">
          Jack Linzhou Xing 邢麟舟
        </Link>
        <Link
          to="/#research"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>
    </header>

    {/* Content */}
    <main className="max-w-3xl mx-auto px-6 py-16">
      <motion.div {...fadeUp}>
        <div className="flex items-center gap-3 mb-6">
          <Icon size={24} className="text-primary" />
          <h1 className="text-2xl md:text-3xl font-serif-display font-semibold">{title}</h1>
        </div>
        <div className="w-12 h-px bg-primary/40 mb-8" />
      </motion.div>

      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="text-[15px] text-foreground/80 leading-relaxed mb-12"
      >
        {narrative}
      </motion.p>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
        <h2 className="text-lg font-serif-display font-semibold text-foreground mb-6">Publications</h2>
        <ul className="space-y-4">
          {publications.map((pub) => (
            <li key={pub.title} className="border-l-2 border-primary/20 pl-4">
              <span className="text-xs font-medium text-primary">{pub.year}</span>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-foreground hover:text-primary transition-colors leading-relaxed mt-0.5"
              >
                {pub.title}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </main>
  </div>
);

export default ResearchSubpageLayout;
