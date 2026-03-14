import { motion } from "framer-motion";
import { Award, Clock, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Τεράστια Εμπειρία",
    desc: "Από το 1991 έχουμε δει και επισκευάσει σχεδόν κάθε είδους βλάβη. Η εμπειρία μας αποτελεί εγγύηση για εσάς.",
  },
  {
    icon: Clock,
    title: "Άμεση Εξυπηρέτηση",
    desc: "Κατανοούμε πόσο σημαντικός είναι ο εξοπλισμός σας. Οι επισκευές μας ολοκληρώνονται στον συντομότερο δυνατό χρόνο.",
  },
  {
    icon: ThumbsUp,
    title: "Εγγυημένο Αποτέλεσμα",
    desc: "Χρησιμοποιούμε αξιόπιστα ανταλλακτικά και είμαστε δίπλα σας ακόμα και μετά την επισκευή.",
  },
];

const WhyUsSection = () => (
  <section className="py-24 bg-secondary/50">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{r.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
