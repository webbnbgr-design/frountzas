/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Scale, 
  Gavel, 
  Building2, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Mail,
  ChevronRight,
  UserCheck
} from 'lucide-react';

const SERVICES = [
  {
    id: 'civil',
    title: 'Αστικό Δίκαιο',
    description: 'Εξειδίκευση σε συμβόλαια, ακίνητα, κληρονομικά και υποθέσεις γης με έμφαση στη λεπτομέρεια.',
    icon: Scale
  },
  {
    id: 'criminal',
    title: 'Ποινικό Δίκαιο',
    description: 'Στρατηγική υπεράσπιση και εκπροσώπηση σε όλα τα στάδια της ποινικής διαδικασίας.',
    icon: Gavel
  },
  {
    id: 'commercial',
    title: 'Εμπορικό Δίκαιο',
    description: 'Συμβουλευτική επιχειρήσεων, εταιρικά ζητήματα και εξασφάλιση εμπορικών συμφερόντων.',
    icon: ShieldCheck
  },
  {
    id: 'administrative',
    title: 'Διοικητικό Δίκαιο',
    description: 'Επίλυση διαφορών με το δημόσιο και διοικητικές αρχές με γνώση της νομολογίας.',
    icon: Building2
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-burgundy/10 selection:text-burgundy">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-header border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tight text-burgundy">Γ. ΦΡΟΥΝΤΖΑΣ</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Νομικές Υπηρεσίες</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="hover:text-burgundy transition-colors">Το Γραφείο</a>
            <a href="#services" className="hover:text-burgundy transition-colors">Υπηρεσίες</a>
            <a href="#values" className="hover:text-burgundy transition-colors">Φιλοσοφία</a>
            <a href="#contact" className="hover:text-burgundy transition-colors">Επικοινωνία</a>
          </div>
          <a 
            href="tel:2721023003"
            className="hidden sm:flex items-center space-x-2 bg-burgundy text-white px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-forest transition-all duration-500"
          >
            <Phone size={14} />
            <span>27210 23003</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-paper/5 to-paper"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block text-gold uppercase tracking-[0.4em] text-xs mb-6 font-medium">
              Καλαμάτα • Μεσσηνία
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.1] mb-8">
              Γεώργιος Φρούντζας <br />
              <span className="serif-italic opacity-80">& Συνεργάτες</span>
            </h1>
            <div className="divider-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-serif italic">
              "Νομική Εκπροσώπηση με Συνέπεια και Ήθος"
            </p>
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <a 
                href="#contact" 
                className="inline-block border border-gold/30 text-gold hover:bg-gold hover:text-burgundy px-10 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-500"
              >
                Προγραμματισμός Συνάντησης
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / The Firm Section */}
      <section id="about" className="section-padding grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-4 block">Το Γραφείο</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
            Μια Παράδοση Εμπιστοσύνης στο <br />
            <span className="serif-italic text-burgundy">Μέγαρο Στρούμπου</span>
          </h2>
          <div className="space-y-6 text-charcoal/80 leading-relaxed font-light">
            <p>
              Το δικηγορικό γραφείο των Γεώργιου και Παναγιώτη Γ. Φρούντζα εδρεύει σε ένα από τα πιο εμβληματικά σημεία της Καλαμάτας, το ιστορικό Μέγαρο Στρούμπου (Αντωνοπούλου 12 & Πλ. Εθνικής Αντίστασης).
            </p>
            <p>
              Η πολυετής παρουσία μας στον νομικό χώρο της Μεσσηνίας αποτελεί εγγύηση για την ποιότητα των υπηρεσιών μας. Συνδυάζουμε την εμπειρία δεκαετιών με τη σύγχρονη νομική προσέγγιση, διατηρώντας πάντα ως επίκεντρο τον άνθρωπο και το δίκαιο.
            </p>
            <p>
              Η οικογενειακή παράδοση στη δικηγορία μάς επιτρέπει να προσφέρουμε μια συνέχεια και μια σταθερότητα που εκτιμάται ιδιαίτερα από τους πελάτες μας, είτε πρόκειται για ιδιώτες είτε για επιχειρήσεις.
            </p>
          </div>
        </motion.div>
        <div className="relative aspect-3/4 bg-burgundy/5 overflow-hidden border border-gold/20 flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000')] opacity-40 grayscale mix-blend-multiply"></div>
            <div className="relative z-10 text-center space-y-4">
                <Building2 size={48} className="mx-auto text-gold opacity-60" />
                <h3 className="text-xl uppercase tracking-widest font-medium opacity-80">Antonopoulou 12</h3>
                <p className="text-sm italic opacity-60 italic">Kalamata, Greece</p>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block"
            >
              Legal Services
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif">Τομείς Δραστηριότητας</h2>
            <div className="divider-gold mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-default"
              >
                <div className="w-12 h-12 bg-burgundy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={20} className="text-gold" />
                </div>
                <h3 className="text-xl mb-4 font-serif">{service.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Λεπτομέρειες <ChevronRight size={10} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-paper border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex text-gold space-x-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
              </div>
              <p className="text-lg font-serif italic text-charcoal/80 leading-relaxed">
                "Εξαιρετική συνεργασία και βαθιά γνώση του αντικειμένου. Ένας σταθερός σύμμαχος σε κάθε νομική υπόθεση."
              </p>
              <div className="divider-gold"></div>
              <span className="block text-[10px] uppercase tracking-widest font-semibold opacity-60">Ιδιώτης • Καλαμάτα</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex text-gold space-x-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
              </div>
              <p className="text-lg font-serif italic text-charcoal/80 leading-relaxed">
                "Επαγγελματισμός, συνέπεια και ήθος. Το γραφείο του Γεώργιου Φρούντζα εμπνέει απόλυτη εμπιστοσύνη."
              </p>
              <div className="divider-gold"></div>
              <span className="block text-[10px] uppercase tracking-widest font-semibold opacity-60">Επιχειρηματίας • Μεσσηνία</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex text-gold space-x-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
              </div>
              <p className="text-lg font-serif italic text-charcoal/80 leading-relaxed">
                "Η εμπειρία και η διακριτικότητα που χαρακτηρίζουν το γραφείο είναι αξιοσημείωτες. Συνιστάται ανεπιφύλακτα."
              </p>
              <div className="divider-gold"></div>
              <span className="block text-[10px] uppercase tracking-widest font-semibold opacity-60">Νομικός Σύμβουλος</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="section-padding relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <UserCheck size={40} className="mx-auto text-gold opacity-50" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl italic font-serif leading-relaxed">
            "Η δέσμευσή μας είναι η προστασία των συμφερόντων του πελάτη μέσω της βαθιάς γνώσης της νομολογίας και της προσεκτικής προετοιμασίας κάθε υπόθεσης."
          </h2>
          <div className="divider-gold mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs uppercase tracking-[0.2em] font-medium opacity-60">
            <div>Σοβαρότητα</div>
            <div>Διακριτικότητα</div>
            <div>Εξειδίκευση</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-paper border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-serif mb-8 lowercase serif-italic italic">Επικοινωνία.</h2>
              <p className="text-charcoal/60 leading-relaxed max-w-sm">
                Είμαστε στη διάθεσή σας για οποιαδήποτε νομική συμβουλή ή διευκρίνιση. Προγραμματίστε τη συνάντησή σας στο γραφείο μας στην Καλαμάτα.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-burgundy/5 text-burgundy">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">Τηλέφωνο</span>
                  <a href="tel:2721023003" className="text-lg font-serif hover:text-burgundy transition-colors text-charcoal/80">27210 23003</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-burgundy/5 text-burgundy">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">Διεύθυνση</span>
                  <p className="text-lg font-serif text-charcoal/80">
                    Αντωνοπούλου 12 & Μέγαρο Στρούμπου,<br />
                    24100, Καλαμάτα
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-burgundy/5 text-burgundy">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">Email</span>
                  <p className="text-lg font-serif text-charcoal/80">info@frountzas-law.gr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-charcoal/5 p-8 md:p-12 border border-gold/20 flex flex-col justify-center">
            <h3 className="text-2xl font-serif mb-6">Σημείο Αναφοράς</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed italic mb-8">
              Το γραφείο μας στεγάζεται στο "Μέγαρο Στρούμπου", το οποίο αποτελεί σημείο αναφοράς για τη νομική και κοινωνική ζωή της Καλαμάτας. 
            </p>
            <div className="aspect-video bg-charcoal/10 flex items-center justify-center border border-charcoal/10">
               <span className="text-[10px] uppercase tracking-widest opacity-40">Map View Placeholder</span>
            </div>
          </div>
        </div>

        {/* Simple Footer */}
        <footer className="border-t border-gold/10 py-10 px-6 text-center">
           <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">
             © {new Date().getFullYear()} Γεώργιος Φρούντζας & Συνεργάτες • Νομική Υποστήριξη
           </p>
        </footer>
      </section>
    </div>
  );
}
