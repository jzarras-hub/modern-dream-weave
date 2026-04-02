import { motion } from "framer-motion";
import { Award, Clock, ThumbsUp, Shield, Headphones, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Τεράστια Εμπειρία",
    desc: "Από το 1991 έχουμε δει και επισκευάσει σχεδόν κάθε είδους βλάβη.",
  },
  {
    icon: Clock,
    title: "Άμεση Εξυπηρέτηση",
    desc: "Οι επισκευές ολοκληρώνονται στον συντομότερο δυνατό χρόνο.",
  },
  {
    icon: ThumbsUp,
    title: "Εγγυημένο Αποτέλεσμα",
    desc: "Αξιόπιστα ανταλλακτικά και υποστήριξη μετά την επισκευή.",
  },
  {
    icon: Shield,
    title: "Γραπτή Εγγύηση",
    desc: "Κάθε επισκευή συνοδεύεται από επίσημη γραπτή εγγύηση.",
  },
  {
    icon: Headphones,
    title: "Τεχνική Υποστήριξη",
    desc: "Είμαστε δίπλα σας για απορίες ακόμα και μετά την παράδοση.",
  },
  {
    icon: Wrench,
    title: "Εξειδικευμένο Εργαστήριο",
    desc: "Πλήρως εξοπλισμένο εργαστήριο για κάθε τύπο επισκευής.",
  },
];

const WhyUsSection = () => (
  <section className="py-24 bg-secondary/50 relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Γιατί να μας <span className="text-gradient">Εμπιστευτείτε</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Η δέσμευσή μας στην ποιότητα και στην ικανοποίηση του πελάτη.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">{r.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
