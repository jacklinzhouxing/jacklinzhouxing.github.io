import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">
            Contact
          </h2>
          <div className="w-12 h-px bg-primary/40 mb-10" />
        </motion.div>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <p className="text-[15px] text-foreground/80 leading-relaxed">
              I welcome inquiries from prospective graduate students, postdoctoral researchers, and colleagues interested in collaboration. Please feel free to reach out.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={16} className="text-primary shrink-0" />
                <span>jharwell@gov.harvard.edu</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>
                  1737 Cambridge Street, Room 406<br />
                  Cambridge, MA 02138
                </span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Office Hours</p>
              <p>Wednesdays, 2:00–4:00 PM (by appointment)</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-3 py-2 rounded-sm bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-3 py-2 rounded-sm bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-3 py-2 rounded-sm bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
            >
              {sent ? (
                <>
                  <Check size={15} />
                  Sent
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
