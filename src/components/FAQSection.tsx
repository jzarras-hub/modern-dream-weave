import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Πόσο χρόνο χρειάζεται μια τυπική επισκευή;",
    a: "Οι περισσότερες επισκευές ολοκληρώνονται εντός 1–2 εργάσιμων ημερών. Αν πρόκειται για απλή αντικατάσταση (π.χ. μπαταρία, RAM, SSD), συνήθως γίνεται αυθημερόν.",
  },
  {
    q: "Παρέχετε εγγύηση στις επισκευές;",
    a: "Ναι, όλες οι επισκευές μας συνοδεύονται από γραπτή εγγύηση. Η διάρκεια εξαρτάται από τον τύπο της επισκευής και τα ανταλλακτικά που χρησιμοποιούνται.",
  },
  {
    q: "Μπορείτε να επισκευάσετε MacBook και iMac;",
    a: "Φυσικά! Εξειδικευόμαστε σε επισκευές Apple Mac, συμπεριλαμβανομένων MacBook Pro, MacBook Air και iMac. Αντιμετωπίζουμε προβλήματα hardware και software.",
  },
  {
    q: "Τι σημαίνει αναβάθμιση ταχύτητας x10;",
    a: "Με αντικατάσταση του σκληρού δίσκου σε SSD NVMe, αύξηση RAM και βελτιστοποίηση λογισμικού, ο υπολογιστής σας μπορεί να γίνει έως και 10 φορές ταχύτερος. Η διαφορά είναι αισθητή αμέσως.",
  },
  {
    q: "Κάνετε ενοικιάσεις laptop;",
    a: "Ναι, προσφέρουμε βραχυχρόνια και μακροχρόνια ενοικίαση laptop για συνέδρια, παρουσιάσεις, εκπαίδευση ή προσωρινή εργασία. Επικοινωνήστε μαζί μας για τιμές.",
  },
  {
    q: "Πόσο κοστίζουν τα συμβατά toner;",
    a: "Τα συμβατά laser toners που προσφέρουμε κοστίζουν έως και 70% λιγότερο από τα γνήσια, χωρίς καμία υποχώρηση στην ποιότητα εκτύπωσης.",
  },
  {
    q: "Πουλάτε refurbished υπολογιστές;",
    a: "Ναι! Προσφέρουμε 100% ελεγμένα refurbished laptop και desktop σε εξαιρετικές τιμές. Κάθε σύστημα περνάει αυστηρό έλεγχο ποιότητας πριν φτάσει στα χέρια σας.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const FAQSection = () => (
  <section className="py-24 bg-background relative">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6">
          <HelpCircle className="w-4 h-4 text-primary" />
          Συχνές Ερωτήσεις
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Απαντήσεις στις <span className="text-gradient">Ερωτήσεις σας</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Βρείτε γρήγορες απαντήσεις στα πιο συχνά ερωτήματα.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary transition-colors py-5 text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-[15px]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
