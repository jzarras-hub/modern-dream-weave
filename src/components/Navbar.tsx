import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/zarras-logo.png";

const navLinks = [
  { label: "Αρχική", href: "#hero" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Σχετικά με Εμάς", href: "#about" },
  { label: "Επικοινωνία", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <a href="#hero" onClick={() => scrollTo("#hero")}>
          <img src={logo} alt="Zarras Tech" className="h-[72px]" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:+306974484324"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            +30 6974484324
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 space-y-4">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:+306974484324"
            className="flex items-center gap-2 text-primary font-medium"
          >
            <Phone className="w-4 h-4" />
            +30 6974484324
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
