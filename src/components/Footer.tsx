import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/zarras-logo.png";

const Footer = () => (
  <footer className="py-20 bg-background border-t border-border relative overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.02] blur-3xl rounded-full pointer-events-none" />

    <div className="container relative">
      <div className="grid md:grid-cols-4 gap-10 mb-14">
        <div>
          <img src={logo} alt="Zarras Tech" className="h-14 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            35+ χρόνια εξειδικευμένων υπηρεσιών τεχνολογίας στα Ιωάννινα.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Υπηρεσίες</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition-colors cursor-pointer">Επισκευές Laptop & PC</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Αναβάθμιση Ταχύτητας</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Apple Mac Service</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Smartphone Repair</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Επικοινωνία</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-primary shrink-0" /> Γιοσέφ Ελιγιά 18Β, Ιωάννινα</li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+306974484324" className="hover:text-primary transition-colors">+30 6974484324</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:jzarras@gmail.com" className="hover:text-primary transition-colors">jzarras@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Social</h4>
          <div className="flex gap-3">
            <a href="#" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <a
            href="#hero"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mt-6"
          >
            Πίσω στην κορυφή <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Zarras Tech. Όλα τα δικαιώματα κατοχυρωμένα.</span>
        <span className="text-xs">Ιωάννινα, Ελλάδα</span>
      </div>
    </div>
  </footer>
);

export default Footer;
