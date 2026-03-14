import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-secondary/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Επικοινωνήστε μαζί μας
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Είμαστε στη διάθεσή σας για οποιαδήποτε τεχνική βοήθεια ή απορία.
          Επισκεφθείτε το κατάστημά μας ή καλέστε μας.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <InfoCard
            icon={MapPin}
            title="Διεύθυνση"
            lines={["Γιοσέφ Ελιγιά 18Β", "Ιωάννινα, Ελλάδα"]}
          />
          <InfoCard
            icon={Phone}
            title="Τηλέφωνο"
            lines={[
              <a key="phone" href="tel:+306974484324" className="text-primary hover:underline">
                +30 6974484324
              </a>,
            ]}
          />
          <InfoCard
            icon={Mail}
            title="Email"
            lines={[
              <a key="email" href="mailto:jzarras@gmail.com" className="text-primary hover:underline">
                jzarras@gmail.com
              </a>,
            ]}
          />
          <InfoCard
            icon={Clock}
            title="Ωράριο Λειτουργίας"
            lines={["Καθημερινά: 8:00 π.μ.–2:00 μ.μ.", "Απόγευμα μετά από ραντεβού."]}
          />
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border shadow-card relative min-h-[350px]"
        >
          <iframe
            title="Zarras Tech Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=20.85%2C39.665%2C20.865%2C39.673&layer=mapnik&marker=39.66893%2C20.85765"
            className="w-full h-full absolute inset-0"
            style={{ border: 0 }}
          />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <span className="text-sm bg-background/90 backdrop-blur px-3 py-1.5 rounded-lg text-foreground">
              Βρείτε μας στα Ιωάννινα
            </span>
            <a
              href="https://www.openstreetmap.org/?mlat=39.66892593351386&mlon=20.857645131282823#map=16/39.66892593351386/20.857645131282823"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Άνοιγμα Χάρτη <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Google Reviews CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="https://www.google.com/maps/search/Zarras+Tech+%CE%99%CF%89%CE%AC%CE%BD%CE%BD%CE%B9%CE%BD%CE%B1+%CE%93%CE%B9%CE%BF%CF%83%CE%AD%CF%86+%CE%95%CE%BB%CE%B9%CE%B3%CE%B9%CE%AC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
        >
          Δείτε τις κριτικές μας στο Google <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

const InfoCard = ({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ElementType;
  title: string;
  lines: React.ReactNode[];
}) => (
  <div className="p-6 rounded-xl bg-card border border-border shadow-card">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    {lines.map((line, i) => (
      <p key={i} className="text-sm text-muted-foreground">
        {line}
      </p>
    ))}
  </div>
);

export default ContactSection;
