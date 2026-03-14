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
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors text-lg"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>Δείτε τις κριτικές μας στο Google</span>
          <span className="flex items-center gap-0.5 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </span>
          <ExternalLink className="w-5 h-5" />
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
