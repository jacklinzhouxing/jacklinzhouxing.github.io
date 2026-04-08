const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <p className="text-xs text-muted-foreground">
        © 2026 Jonathan Harwell. All rights reserved.
      </p>
      <div className="flex gap-5 text-xs text-muted-foreground">
        <a href="https://scholar.google.com/citations?user=nqQte2oAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Google Scholar</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ORCID</a>
        <a href={`${import.meta.env.BASE_URL}Xing_Full%20CV_Apr%202026.pdf`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">CV (PDF)</a>
      </div>
    </div>
  </footer>
);

export default Footer;
