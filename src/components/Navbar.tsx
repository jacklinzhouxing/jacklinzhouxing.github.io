import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Research", "Publications", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-serif-display text-lg font-semibold text-foreground">
          Prof. Jonathan Harwell
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground tracking-wide">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
