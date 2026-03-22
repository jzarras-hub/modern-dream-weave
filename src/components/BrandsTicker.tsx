import { motion } from "framer-motion";

const brands = [
  "HP", "Dell", "Lenovo", "Apple", "Asus", "Acer", "Samsung", "Sony",
  "Microsoft", "Toshiba", "MSI", "Epson", "Canon", "Brother",
];

const BrandsTicker = () => (
  <section className="py-12 overflow-hidden border-y border-border">
    <div className="relative">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 whitespace-nowrap"
      >
        {[...brands, ...brands].map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="text-2xl font-display font-bold text-muted-foreground/30 uppercase tracking-widest select-none"
          >
            {b}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default BrandsTicker;
