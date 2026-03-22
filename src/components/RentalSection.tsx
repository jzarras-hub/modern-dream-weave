import { motion } from "framer-motion";
import { Laptop, Calendar, Briefcase } from "lucide-react";

const plans = [
  { icon: Calendar, title: "Ημερήσια", desc: "Ιδανικό για σύντομες ανάγκες και εκδηλώσεις", highlight: false },
  { icon: Briefcase, title: "Εβδομαδιαία", desc: "Για projects, παρουσιάσεις και συνέδρια", highlight: true },
  { icon: Laptop, title: "Μηνιαία", desc: "Μακροχρόνια ενοικίαση για εργασία ή εκπαίδευση", highlight: false },
];

const RentalSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ενοικιάσεις <span className="text-gradient">Laptop</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Βραχυχρόνια ή μακροχρόνια ενοικίαση laptop για κάθε ανάγκη.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass rounded-2xl p-8 text-center ${
              p.highlight ? "ring-2 ring-primary" : ""
            }`}
          >
            <div className={`w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center ${
              p.highlight ? "bg-gradient-primary" : "bg-primary/10"
            }`}>
              <p.icon className={`w-8 h-8 ${p.highlight ? "text-primary-foreground" : "text-primary"}`} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RentalSection;
