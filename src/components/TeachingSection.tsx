import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const teachingInterests = [
  "Sociology of Technology and Work",
  "Science, Technology, and Society (STS)",
  "Innovation Policy",
  "Digital Governance",
  "Chinese Society",
];

const TeachingSection = () => (
  <section id="teaching" className="py-20 px-6 bg-muted/30">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-10 flex items-center gap-3">
          <BookOpen className="text-primary" size={28} />
          Teaching
        </h2>

        {/* Teaching Interests */}
        <div className="mb-10">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Teaching Interests</h3>
          <p className="text-muted-foreground leading-relaxed">
            {teachingInterests.join("; ")}.
          </p>
        </div>

        {/* Teaching Experience */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Teaching Experience</h3>

          {/* Guest Lecturer */}
          <div className="mb-6">
            <h4 className="font-serif text-base font-medium text-foreground mb-3">Guest Lecturer</h4>
            <ul className="space-y-2 text-muted-foreground pl-5 list-disc">
              <li>
                <span className="font-medium text-foreground">Harvard University:</span>{" "}
                "Contemporary Chinese Society" and "Theorizing Digital Capitalism" (2025–2026)
              </li>
              <li>
                <span className="font-medium text-foreground">HKUST:</span>{" "}
                "Understanding Society, Economy, and Governance in the Digital Era" (2025)
              </li>
              <li>
                <span className="font-medium text-foreground">City University of Hong Kong:</span>{" "}
                Guest lectures on platform economy and automation (2024)
              </li>
            </ul>
          </div>

          {/* Teaching Assistant */}
          <div className="mb-6">
            <h4 className="font-serif text-base font-medium text-foreground mb-3">Teaching Assistant</h4>
            <ul className="space-y-2 text-muted-foreground pl-5 list-disc">
              <li>
                <span className="font-medium text-foreground">Georgia Institute of Technology:</span>{" "}
                Introduction to Sociology; Science, Technology, Medicine and Race (2021–2023)
              </li>
            </ul>
          </div>

          {/* Tutorial Instructor */}
          <div>
            <h4 className="font-serif text-base font-medium text-foreground mb-3">Tutorial Instructor</h4>
            <ul className="space-y-2 text-muted-foreground pl-5 list-disc">
              <li>
                <span className="font-medium text-foreground">The University of Hong Kong:</span>{" "}
                "Technology, Power and Culture in the Global Age"
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TeachingSection;
