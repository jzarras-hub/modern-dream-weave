import { motion } from "framer-motion";

import serviceLaptopRepair from "@/assets/service-laptop-repair.jpg";
import serviceSpeedUpgrade from "@/assets/service-speed-upgrade.jpg";
import serviceAppleMac from "@/assets/service-apple-mac.jpg";
import serviceSmartphone from "@/assets/service-smartphone.jpg";
import serviceConsole from "@/assets/service-console.jpg";
import serviceSales from "@/assets/service-sales.jpg";
import serviceRental from "@/assets/service-rental.jpg";
import serviceToner from "@/assets/service-toner.jpg";

const services = [
  {
    image: serviceLaptopRepair,
    title: "Επισκευές Laptop & PC",
    desc: "Διάγνωση και επιδιόρθωση βλαβών σε επίπεδο hardware και software. Αντικατάσταση οθόνης, μπαταρίας, πληκτρολογίου σε Laptop.",
  },
  {
    image: serviceSpeedUpgrade,
    title: "Αναβάθμιση Ταχύτητας Υπολογιστών 10Χ",
    desc: "Εξειδικευόμαστε στην αύξηση της ταχύτητας του PC ή του Laptop σας έως και x10 φορές.",
  },
  {
    image: serviceAppleMac,
    title: "Apple Mac",
    desc: "Εξειδικευμένη υποστήριξη για συστήματα Apple. Επισκευές iMac, MacBook Pro και MacBook Air.",
  },
  {
    image: serviceSmartphone,
    title: "Επισκευή Smartphone",
    desc: "Γρήγορη αλλαγή οθόνης, μπαταρίας και επισκευή πλακέτας για iPhone και συσκευές Android.",
  },
  {
    image: serviceConsole,
    title: "Επισκευή PlayStation, Xbox",
    desc: "Αντιμετώπιση υπερθέρμανσης, αλλαγή πάστας, επισκευή θύρας HDMI και καθαρισμός κονσόλας.",
  },
  {
    image: serviceSales,
    title: "Πωλήσεις καινούργιων & Refurbished Υπολογιστών, Laptop",
    desc: "Επιλεγμένα καινούργια και ελεγμένα 100% refurbished συστήματα.",
  },
  {
    image: serviceRental,
    title: "Ενοικιάσεις Laptop",
    desc: "Βραχυχρόνια ενοικίαση laptop για συνεδρία, παρουσιάσεις ή προσωρινή εργασία.",
  },
  {
    image: serviceToner,
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
            className="group rounded-xl glass hover:border-primary/40 transition-all hover:scale-[1.02] overflow-hidden"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
