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
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overall overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }}></div>
        {/* Dark gradient overlay on the left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      {/* Interactive Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Vertical Accent Line (Red) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-1 h-12 md:h-16 bg-brand-red mb-6 md:mb-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-[32px] md:text-[52px] font-display font-black uppercase leading-[1.1] tracking-tighter mb-6"
          >
            Statyba.<br />
            Renovacija.<br />
            Apdailos darbai.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="text-sm md:text-[16px] font-light text-white/70 max-w-xl mb-10 tracking-wide"
          >
            Aukščiausios kokybės statybos sprendimai Vilniuje nuo 2007 metų. Mes kuriame ateities erdves su precizišku tikslumu ir aistra meistriškumui.
          </motion.p>

          <motion.a
            href="#kontaktai"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block w-full md:w-auto bg-brand-accent hover:bg-brand-accent-light text-brand-dark px-8 py-4 md:py-3 text-sm font-bold uppercase tracking-[0.2em] transition-colors text-center min-h-[48px]"
          >
            Susisiekite
          </motion.a>
        </div>
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
