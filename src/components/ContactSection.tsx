import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check, Linkedin, Twitter, GraduationCap, BookOpen } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const socialLinks = [
  { icon: Linkedin, label: "Jack Linzhou Xing", href: "https://www.linkedin.com/in/jacklinzhouxing/" },
  { icon: Twitter, label: "@XingJLZ", href: "https://x.com/XingJLZ" },
  { icon: GraduationCap, label: "Google Scholar", href: "https://scholar.google.com/citations?user=nqQte2oAAAAJ&hl=en&oi=ao" },
  { icon: BookOpen, label: "边缘学术人", href: null },
];

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/mpqooyev", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } catch {
      // silently fail
    } finally {
      setSubmitting(false);
    }
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
              I welcome inquiries from prospective collaborators, graduate students, and colleagues. Please feel free to reach out.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground mb-0.5">Harvard University</p>
                  <p>Office S134, CGIS South Building</p>
                  <p>1730 Cambridge St., Cambridge, MA</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground mb-0.5">HKUST (Incoming)</p>
                  <p>Division of Public Policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:lxing@fas.harvard.edu" className="hover:text-primary transition-colors">
                  lxing@fas.harvard.edu
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="pt-2 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  const content = (
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                      <Icon size={15} className="text-primary shrink-0" />
                      {s.label}
                    </span>
                  );
                  return s.href ? (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <span key={s.label} className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <Icon size={15} className="text-primary shrink-0" />
                      {s.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center text-center space-y-3 py-12">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Check size={24} className="text-primary" />
              </div>
              <p className="text-lg font-serif-display font-semibold text-foreground">Thank you!</p>
              <p className="text-sm text-muted-foreground">Your message has been sent. I'll get back to you soon.</p>
              <button
                onClick={() => setSent(false)}
                className="text-sm text-primary hover:underline mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input id="name" name="name" type="text" required className="w-full px-3 py-2 rounded-sm bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input id="email" name="email" type="email" required className="w-full px-3 py-2 rounded-sm bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 rounded-sm bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow resize-none" />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60"
              >
                <Send size={15} />
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
