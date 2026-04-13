import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-20 px-4 py-10 md:px-6 md:py-20">
      {/* Video Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vsrstatybaherovid_16s.mp4" type="video/mp4" />
        </video>
        {/* Dark overall overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }}></div>
        {/* Dark gradient overlay — center fade */}
        <div className="absolute inset-0 bg-brand-dark/50"></div>
      </div>

      {/* Interactive Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
          <h1 className="text-[40px] md:text-[64px] uppercase leading-[1.0] tracking-tighter mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>
            {['Statyba.', 'Renovacija.', 'Apdailos darbai.'].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 + i * 0.25 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            className="text-sm md:text-[16px] font-light text-white/70 max-w-xl mb-10 tracking-wide"
          >
            Aukščiausios kokybės statybos sprendimai Vilniuje nuo 2007 metų. Mes kuriame ateities erdves su precizišku tikslumu ir aistra meistriškumui.
          </motion.p>

          <motion.a
            href="#kontaktai"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-brand-accent hover:bg-brand-accent-light text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors min-h-[48px]"
          >
            Susisiekite
          </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
}
