import { motion } from "framer-motion";
import { Printer, BadgePercent, CheckCircle } from "lucide-react";

const benefits = [
  "Συμβατά με τους περισσότερους εκτυπωτές",
  "Ίδια ποιότητα εκτύπωσης",
  "Εξοικονόμηση χρημάτων χωρίς συμβιβασμούς",
  "Άμεση διαθεσιμότητα",
];

const TonerSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container">
      <div className="glass rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <BadgePercent className="w-4 h-4" />
              Εξοικονόμηση 70%
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Toner Εκτυπωτών{" "}
              <span className="text-gradient-accent">−70%</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Μεγάλη γκάμα αξιόπιστων, συμβατών laser toners για όλους τους δημοφιλείς
              εκτυπωτές, σε τιμές 70% χαμηλότερες από τα γνήσια.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center p-10 bg-accent/5"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-accent/10 flex items-center justify-center">
                <Printer className="w-24 h-24 text-accent/60" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full w-20 h-20 flex flex-col items-center justify-center font-bold shadow-lg"
              >
                <span className="text-2xl">-70%</span>
                <span className="text-[10px] uppercase tracking-wider">Έκπτωση</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default TonerSection;
