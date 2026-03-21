import { motion } from "framer-motion";
import {
  Monitor,
  Zap,
  Apple,
  Smartphone,
  Gamepad2,
  ShoppingBag,
  Laptop,
  Printer,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Επισκευές Laptop & PC",
    desc: "Διάγνωση και επιδιόρθωση βλαβών σε επίπεδο hardware και software. Αντικατάσταση οθόνης, μπαταρίας, πληκτρολογίου σε Laptop.",
  },
  {
    icon: Zap,
    title: "Αναβάθμιση Ταχύτητας Υπολογιστών 10Χ",
    desc: "Εξειδικευόμαστε στην αύξηση της ταχύτητας του PC ή του Laptop σας έως και x10 φορές.",
  },
  {
    icon: Apple,
    title: "Apple Mac",
    desc: "Εξειδικευμένη υποστήριξη για συστήματα Apple. Επισκευές iMac, MacBook Pro και MacBook Air.",
  },
  {
    icon: Smartphone,
    title: "Επισκευή Smartphone",
    desc: "Γρήγορη αλλαγή οθόνης, μπαταρίας και επισκευή πλακέτας για iPhone και συσκευές Android.",
  },
  {
    icon: Gamepad2,
    title: "Επισκευή PlayStation, Xbox",
    desc: "Αντιμετώπιση υπερθέρμανσης, αλλαγή πάστας, επισκευή θύρας HDMI και καθαρισμός κονσόλας.",
  },
  {
    icon: ShoppingBag,
    title: "Πωλήσεις καινούργιων & Refurbished Υπολογιστών, Laptop",
    desc: "Επιλεγμένα καινούργια και ελεγμένα 100% refurbished συστήματα.",
  },
  {
    icon: Laptop,
    title: "Ενοικιάσεις Laptop",
    desc: "Βραχυχρόνια ενοικίαση laptop για συνεδρία, παρουσιάσεις ή προσωρινή εργασία.",
  },
  {
    icon: Printer,
    title: "Toner Εκτυπωτών",
    desc: "Μεγάλη γκάμα από αξιόπιστα, συμβατά laser toners για τους περισσότερους εκτυπωτές 70% φθηνότερα.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Οι Υπηρεσίες μας
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Ολοκληρωμένες λύσεις τεχνολογίας προσαρμοσμένες στις δικές σας ανάγκες,
          με έμφαση στην ταχύτητα και την αξιοπιστία.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all shadow-card"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
