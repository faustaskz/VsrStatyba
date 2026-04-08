import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { value: '15+', label: 'Metų patirties' },
  { value: '200+', label: 'Užbaigtų projektų' },
  { value: '3', label: 'Veiklos kryptys' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apie-mus" className="py-10 px-4 md:py-16 md:px-6 bg-brand-offwhite text-brand-dark overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Decorative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-[6rem] md:text-[10rem] font-display font-black leading-none opacity-5 select-none">
              EST.
            </div>
            <div className="text-5xl md:text-7xl font-display font-black leading-none text-brand-red mt-[-2rem] md:mt-[-3rem]">
              2007
            </div>
            <div className="mt-8 md:mt-12 border-l-4 border-brand-red pl-6 md:pl-8 py-4">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark/50">
                Sąžiningumas • Pareigingumas • Kokybė
              </p>
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <p className="text-sm md:text-[16px] leading-relaxed font-medium">
              2007 m. birželio 6 d. buvo įkurta įmonė UAB „VG STATYBA", kuri savo veiklą vykdo vadovaudamasi sąžingumo ir pareigingumo principais. Įmonės įkūrimui įtakos turėjo statybos rinkos pagyvėjimas Lietuvoje.
            </p>
            <p className="text-xs md:text-[15px] leading-relaxed text-brand-dark/70">
              Nuo įmonės įkūrimo pradžios, UAB „VG STATYBA" pagrindinis tikslas buvo įsiskverbti į Lietuvos statybos rinką smulkiųjų ir vidutinių įmonių sektoriuje. Tai padaryti galima buvo tik laiku ir kokybiškai atliekant darbus, įgyjant ne tik klientų, bet ir partnerių pasitikėjimą.
            </p>
            <p className="text-xs md:text-[15px] leading-relaxed text-brand-dark/70 italic border-l-2 border-brand-accent/30 pl-4 md:pl-6">
              UAB „VG STATYBA" vizija – įgyvendinti idėjas, susijusias su naujų namų statymu, pastatytų objektų renovavimu, apdailos darbais. Misija – sukurti saugius, jaukius namus kiekvienam, kuriam svarbus jaukus „namų židinys".
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 md:mt-20 grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-12 border-t border-brand-dark/10 pt-10 md:pt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-[32px] md:text-[48px] font-display font-black text-brand-dark mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-brand-red">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
