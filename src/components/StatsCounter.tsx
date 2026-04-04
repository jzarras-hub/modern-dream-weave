import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Zap, Wrench, Heart } from "lucide-react";

const stats = [
  { value: 35, suffix: "+", label: "Χρόνια Εμπειρίας", icon: Calendar },
  { value: 10, suffix: "×", label: "Ταχύτερος Υπολογιστής", icon: Zap },
  { value: 5000, suffix: "+", label: "Επισκευές", icon: Wrench },
  { value: 100, suffix: "%", label: "Ικανοποίηση Πελατών", icon: Heart },
];

const useCounter = (target: number, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = duration / (target / step);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [target, inView]);
  return count;
};

const StatItem = ({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: React.ElementType }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCounter(value, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const StatsCounter = () => (
  <section className="py-16 relative overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default StatsCounter;
