import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

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
            Sociology of Technology and Work; Science, Technology, and Society (STS); Innovation Policy; Digital Governance; and Chinese Society.
          </p>
        </div>

        {/* Guest Lecturer */}
        <div className="mb-8">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Guest Lecturer</h3>
          <ul className="space-y-4 text-muted-foreground">
            {[
              { course: "Contemporary Chinese Society", school: "Harvard University, 2026", lecture: "How to build a platform in China?" },
              { course: "Theorizing Digital Capitalism", school: "Harvard University, 2025", lecture: "Three principles of studying platforms elsewhere" },
              { course: "Understanding Society, Economy, and Governance in the Digital Era", school: "HKUST, 2025", lecture: "Speed, time, and infrastructure in the digital era" },
              { course: "Technology and Society", school: "Northeastern University, 2025", lecture: "The platform economy and future of work" },
              { course: "Urban Development and Sustainable Cities", school: "PG, City University of Hong Kong, 2024", lecture: "The platform economy and automation" },
              { course: "Traditions of Inquiry in Social Sciences", school: "City University of Hong Kong, 2024", lecture: "Sociological thoughts on science and technology" },
              { course: "Introduction to Sociology", school: "Georgia Institute of Technology, 2022–2023", lecture: "Testing the promise of the gig economy\" & \"Technology and future of work" },
            ].map((item, i) => (
              <li key={i} className="pl-5 border-l-2 border-primary/20">
                <span className="font-serif font-semibold text-foreground">{item.course}</span>
                <span className="text-sm text-muted-foreground ml-1">({item.school})</span>
                <br />
                <span className="text-sm italic text-muted-foreground/80">Lecture: "{item.lecture}"</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Teaching Assistant */}
        <div className="mb-8">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Teaching Assistant</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="pl-5 border-l-2 border-primary/20">
              <span className="font-serif font-semibold text-foreground">Introduction to Sociology</span>
              <span className="text-sm ml-1">(Georgia Institute of Technology, 2022–2023)</span>
            </li>
            <li className="pl-5 border-l-2 border-primary/20">
              <span className="font-serif font-semibold text-foreground">Science, Technology, Medicine and Race</span>
              <span className="text-sm ml-1">(Georgia Institute of Technology, 2021)</span>
            </li>
          </ul>
        </div>

        {/* Tutorial Instructor */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Tutorial Instructor</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="pl-5 border-l-2 border-primary/20">
              <span className="font-serif font-semibold text-foreground">Technology, Power and Culture in the Global Age</span>
              <span className="text-sm ml-1">(The University of Hong Kong, 2018)</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TeachingSection;
