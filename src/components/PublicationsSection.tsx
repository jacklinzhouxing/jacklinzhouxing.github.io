import { motion } from "framer-motion";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

const publications: Record<string, Publication[]> = {
  "2025": [
    { title: "Colonial Revenue Systems and Contemporary Tax Morale", authors: "Harwell, J. & Okafor, C.", venue: "American Political Science Review, 119(2), 312–330", year: "2025" },
  ],
  "2024": [
    { title: "The Political Logic of Land Reform: Evidence from East Africa", authors: "Harwell, J.", venue: "Quarterly Journal of Economics, 139(4), 1847–1902", year: "2024" },
    { title: "Decentralization and Service Delivery: A Factorial Experiment", authors: "Harwell, J., Mensah, A., & Dupont, R.", venue: "Journal of Politics, 86(3), 1023–1041", year: "2024" },
  ],
  "2023": [
    { title: "Institutional Legacies and Property Rights in Post-Colonial States", authors: "Harwell, J. & Kim, S.", venue: "World Politics, 75(1), 44–89", year: "2023" },
    { title: "When Do Elites Reform? A Formal Model of Redistributive Politics", authors: "Harwell, J.", venue: "American Journal of Political Science, 67(2), 289–306", year: "2023" },
  ],
  "2022": [
    { title: "Participatory Budgeting and Local Accountability: Experimental Evidence from Ghana", authors: "Harwell, J. & Mensah, A.", venue: "Comparative Political Studies, 55(8), 1344–1379", year: "2022" },
  ],
  "2021": [
    { title: "The Persistence of Extractive Institutions: A Natural Experiment", authors: "Harwell, J.", venue: "Econometrica, 89(5), 2107–2148", year: "2021" },
  ],
};

const years = Object.keys(publications).sort((a, b) => Number(b) - Number(a));

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const PublicationsSection = () => (
  <section id="publications" className="py-20 border-t border-border">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">
          Selected Publications
        </h2>
        <div className="w-12 h-px bg-primary/40 mb-10" />
      </motion.div>
      <div className="space-y-10">
        {years.map((year) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h3 className="text-lg font-serif-display font-semibold text-primary mb-4">
              {year}
            </h3>
            <ul className="space-y-5">
              {publications[year].map((pub) => (
                <li key={pub.title} className="group">
                  <p className="text-[15px] font-medium text-foreground leading-snug">
                    {pub.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {pub.venue}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
