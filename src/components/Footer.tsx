const Footer = () => (
  <footer className="py-12 border-t border-border/50">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Dr. Aris Thorne. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Google Scholar</a>
        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        <a href="#" className="hover:text-primary transition-colors">ORCID</a>
      </div>
    </div>
  </footer>
);

export default Footer;
