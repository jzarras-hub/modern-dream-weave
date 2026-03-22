import { motion } from "framer-motion";
import { Monitor, Laptop, Smartphone, Gamepad2, Apple } from "lucide-react";

const devices = [
  { icon: Monitor, label: "Desktop PC", color: "from-cyan-500 to-blue-600" },
  { icon: Laptop, label: "Laptop", color: "from-blue-500 to-purple-600" },
  { icon: Apple, label: "Mac", color: "from-gray-400 to-gray-600" },
  { icon: Smartphone, label: "Smartphone", color: "from-green-500 to-emerald-600" },
  { icon: Gamepad2, label: "PlayStation / Xbox", color: "from-purple-500 to-pink-600" },
];

const DevicesGrid = () => (
  <section className="py-24 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Συσκευές που <span className="text-gradient">Επισκευάζουμε</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Εξειδίκευση σε όλες τις δημοφιλείς πλατφόρμες και συσκευές.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {devices.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-8 text-center group cursor-pointer hover:scale-105 transition-transform"
          >
            <div className={`w-16 h-16 rounded-xl mx-auto mb-4 bg-gradient-to-br ${d.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
              <d.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">{d.label}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DevicesGrid;
