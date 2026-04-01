import { motion } from "framer-motion";
import { HardDrive, Cpu, MemoryStick } from "lucide-react";

const upgrades = [
  { icon: HardDrive, label: "SSD NVMe", desc: "Αντικατάσταση σκληρού δίσκου με SSD για άμεση εκκίνηση" },
  { icon: MemoryStick, label: "RAM Upgrade", desc: "Αύξηση μνήμης για ομαλή πολυδιεργασία" },
  { icon: Cpu, label: "Βελτιστοποίηση", desc: "Καθαρισμός λογισμικού και βελτιστοποίηση συστήματος" },
];

const SpeedSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Animated visual matching reference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{ border: "1px solid hsla(220, 30%, 40%, 0.3)" }}
            >
              {/* Cyan dot on outer ring */}
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_4px_rgba(0,200,255,0.5)]" />
              {/* Small purple dot */}
              <div className="absolute bottom-8 left-4 w-2 h-2 rounded-full bg-purple-400/60" />
            </motion.div>

            {/* Inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 md:inset-14 rounded-full"
              style={{ border: "1px solid hsla(25, 80%, 50%, 0.25)" }}
            >
              {/* Orange dot on inner ring */}
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-orange-500 shadow-[0_0_14px_4px_rgba(255,140,0,0.5)]" />
            </motion.div>

            {/* Center dark circle with glow */}
            <motion.div
              animate={{ boxShadow: [
                "0 0 60px 15px rgba(255,160,0,0.06)",
                "0 0 100px 30px rgba(255,160,0,0.15)",
                "0 0 60px 15px rgba(255,160,0,0.06)",
              ]}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-16 md:inset-20 rounded-full bg-gradient-to-b from-[hsl(220,20%,14%)] to-[hsl(220,25%,8%)] flex flex-col items-center justify-center">
              <span className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-orange-400 leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                x10
              </span>
              <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-300/90 mt-2 uppercase">
                Ταχύτερα
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Αναβάθμιση Ταχύτητας{" "}
            <span className="text-gradient">×10</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Ο υπολογιστής σας τρέχει αργά; Με τις εξειδικευμένες αναβαθμίσεις μας,
            μπορούμε να αυξήσουμε την ταχύτητά του έως και 10 φορές. Η διαφορά
            είναι αισθητή από το πρώτο δευτερόλεπτο.
          </p>
          <div className="space-y-4">
            {upgrades.map((u, i) => (
              <motion.div
                key={u.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <u.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{u.label}</h4>
                  <p className="text-sm text-muted-foreground">{u.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SpeedSection;
