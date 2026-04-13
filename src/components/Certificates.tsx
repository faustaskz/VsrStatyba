import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="sertifikatai" className="py-10 px-4 md:py-16 md:px-6 bg-brand-offwhite text-brand-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-[38px] uppercase mb-6 md:mb-8 tracking-tighter">Sertifikatai</h2>
          <p className="text-sm md:text-[16px] leading-relaxed text-brand-dark/70">
            UAB „VSR Statyba" turi visus reikalingus leidimus ir sertifikatus statybos darbams vykdyti Lietuvos Respublikoje. Mūsų kvalifikacija patvirtinta atitinkamomis institucijomis.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 md:p-12 shadow-2xl border-t-8 border-brand-accent max-w-md w-full text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={80} className="md:size-[120px]" />
            </div>

            <ShieldCheck className="text-brand-accent mb-6 md:mb-8" size={40} />
            <h3 className="text-xl md:text-2xl font-display font-bold uppercase mb-4">Kvalifikacijos atestatas</h3>
            <p className="text-sm md:text-base text-brand-dark/60 mb-8 leading-relaxed">
              Suteikiama teisė eiti ypatingojo statinio statybos rangovo pareigas. Statybos sritys: gyvenamieji ir negyvenamieji pastatai.
            </p>
            <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-widest text-brand-accent">
              <span>Statybos rangos darbai</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
