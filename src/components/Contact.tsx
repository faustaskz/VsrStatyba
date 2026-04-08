import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Building2, CreditCard, Landmark } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontaktai" className="bg-brand-dark text-white overflow-hidden scroll-mt-20">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Contact Details */}
        <div className="lg:w-1/2 p-6 md:p-8 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-[38px] uppercase mb-10 md:mb-12 tracking-tighter">Kontaktai</h2>
            
            <div className="space-y-10 md:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-red shrink-0" size={24} />
                    <div>
                      <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 mb-1">Adresas</h4>
                      <p className="text-base md:text-lg font-medium">Šilo g. 5, Vilnius</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-brand-red shrink-0" size={24} />
                    <div>
                      <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 mb-1">Telefonas</h4>
                      <p className="text-base md:text-lg font-medium">+370 672 95845</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-brand-red shrink-0" size={24} />
                    <div>
                      <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 mb-1">El. paštas</h4>
                      <p className="text-base md:text-lg font-medium">vgstatyba@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="text-brand-red shrink-0" size={24} />
                    <div>
                      <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 mb-1">Įmonės kodas</h4>
                      <p className="text-base md:text-lg font-medium">300867894</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CreditCard className="text-brand-red shrink-0" size={24} />
                    <div>
                      <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 mb-1">PVM kodas</h4>
                      <p className="text-base md:text-lg font-medium">LT100003753419</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 md:pt-12 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <Landmark className="text-brand-red shrink-0" size={24} />
                  <div>
                    <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 mb-1">Banko duomenys</h4>
                    <p className="text-base md:text-lg font-medium">AB DNB bankas</p>
                    <p className="text-sm md:text-md text-white/60">A/S: LT15 4010 0424 0391 5513</p>
                    <p className="text-sm md:text-md text-white/60">SWIFT: AGBLLT2X</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <div className="lg:w-1/2 h-[300px] md:h-[450px] lg:h-auto relative group p-4 lg:p-8">
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-white/5">
            {/* Subtle dark overlay to match aesthetic */}
            <div className="absolute inset-0 bg-brand-dark/10 pointer-events-none z-10 transition-opacity group-hover:opacity-0"></div>
            
            {/* Smooth transition gradient from contact details */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-20 hidden lg:block pointer-events-none"></div>
            
            <iframe
              src="https://maps.google.com/maps?q=Šilo+g.+5,+Vilnius,+Lithuania&t=m&z=16&output=embed"
              className="w-full h-full border-0 scale-105 contrast-[1.1] saturate-[1.1]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
