import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-16 bg-background border-t border-border">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4">Zarras Tech</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            35+ χρόνια εξειδικευμένων υπηρεσιών τεχνολογίας στα Ιωάννινα.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4">Υπηρεσίες</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Επισκευές Laptop & PC</li>
            <li>Αναβάθμιση Ταχύτητας</li>
            <li>Apple Mac Service</li>
            <li>Smartphone Repair</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4">Επικοινωνία</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Γιοσέφ Ελιγιά 18Β, Ιωάννινα</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +30 6974484324</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> jzarras@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4">Social</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Zarras Tech. Όλα τα δικαιώματα κατοχυρωμένα.
      </div>
    </div>
  </footer>
);

export default Footer;
