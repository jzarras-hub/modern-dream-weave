import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Ευχαριστούμε!</h3>
        <p className="text-muted-foreground">
          Λάβαμε το μήνυμά σας. Θα επικοινωνήσουμε σύντομα μαζί σας.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-8 md:p-10 space-y-5"
    >
      <h3 className="text-2xl font-bold text-foreground mb-2">Στείλτε μας μήνυμα</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
      </p>

      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          name="name"
          required
          placeholder="Ονοματεπώνυμο"
          maxLength={100}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            maxLength={255}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="tel"
            name="phone"
            placeholder="Τηλέφωνο (προαιρετικό)"
            maxLength={20}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
          />
        </div>
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Περιγράψτε το πρόβλημα ή την ερώτησή σας..."
          maxLength={1000}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-all disabled:opacity-60 text-sm"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Αποστολή Μηνύματος
          </>
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;
