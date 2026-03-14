import { ArrowRight, Wrench, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

const badges = [
  { icon: Wrench, label: "Άμεση Επισκευή" },
  { icon: ShieldCheck, label: "Εγγύηση Ποιότητας" },
  { icon: Zap, label: "Αναβάθμιση Ταχύτητας Υπολογιστών 10Χ" },
];

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center overflow-hidden pt-20"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          35+ Χρόνια Εμπειρίας
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Επισκευές &amp; Πωλήσεις{" "}
          <span className="text-gradient">Ηλεκτρονικών</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
          35+ χρόνια εμπειρίας στα Ιωάννινα. Εξειδικευόμαστε σε επισκευές Laptop,
          PC, Mac, PlayStation &amp; Smartphone, με εγγύηση επισκευής.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-blue text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Οι Υπηρεσίες μας <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3.5 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors font-medium"
          >
            Επικοινωνία
          </a>
        </div>

        <div className="border-t border-border pt-8 flex flex-wrap gap-8">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3 text-muted-foreground">
              <b.icon className="w-5 h-5 text-primary" />
              <span className="text-sm">{b.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
