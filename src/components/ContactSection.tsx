import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
};

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium text-primary mb-3 font-mono-data uppercase tracking-wider">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              Let's collaborate
            </h2>
            <p className="text-muted-foreground mb-8">
              Interested in collaborating on a research project, seeking a postdoc position, or want to discuss ideas? I'd love to hear from you.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-mono-data text-foreground">Email:</span>{" "}
                aris.thorne@ics.edu
              </p>
              <p>
                <span className="font-mono-data text-foreground">Office:</span>{" "}
                Room 412, Computational Sciences Building
              </p>
              <p>
                <span className="font-mono-data text-foreground">Hours:</span>{" "}
                Tue & Thu, 14:00–16:00
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
              >
                {sent ? (
                  <>
                    <Check size={16} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
