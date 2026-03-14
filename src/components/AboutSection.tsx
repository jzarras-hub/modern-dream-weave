import { motion } from "framer-motion";
import { Check } from "lucide-react";
import aboutImg from "@/assets/about-tech.png";

const bullets = [
  "Πάνω από 35 χρόνια συνεχούς παρουσίας",
  "Εξειδικευμένοι τεχνικοί με τεχνογνωσία",
  "Χρήση ποιοτικών ανταλλακτικών",
  "Γρήγοροι χρόνοι παράδοσης",
  "Ειλικρίνεια και σεβασμός στον πελάτη",
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="Εργαστήριο επισκευών Zarras Tech"
            className="rounded-2xl shadow-card w-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-blue hidden md:block">
            <div className="text-4xl font-bold text-primary-foreground">35+</div>
            <div className="text-sm text-primary-foreground/80">Χρόνια Εμπειρίας</div>
            <div className="text-xs text-primary-foreground/60 mt-1">Από το 1991</div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Η Τεχνολογία στα χέρια{" "}
            <span className="text-gradient">των ειδικών</span>
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Η <strong className="text-foreground">Zarras Tech</strong> ιδρύθηκε το 1991 στα Ιωάννινα. Εδώ και 3 δεκαετίες παρακολουθούμε στενά την εξέλιξη της τεχνολογίας, προσφέροντας στην τοπική κοινωνία και τις επιχειρήσεις αξιόπιστες λύσεις μηχανογράφησης.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Δεν κάνουμε απλώς επισκευές. Εντοπίζουμε τη ρίζα του προβλήματος, προτείνουμε την πιο συμφέρουσα λύση και φροντίζουμε η συσκευή σας να επιστρέψει στα χέρια σας σαν καινούργια.
          </p>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
