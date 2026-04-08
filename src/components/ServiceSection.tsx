import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface Service {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  services: Service[];
  imagePosition?: 'left' | 'right';
  dark?: boolean;
}

export default function ServiceSection({
  id,
  title,
  subtitle,
  description,
  image,
  services,
  imagePosition = 'right',
  dark = false,
}: ServiceSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id={id}
      className={`py-10 px-4 md:py-16 md:px-6 overflow-hidden scroll-mt-20 ${dark ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          
          {/* Content Column */}
          <div className={imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-[38px] uppercase mb-4 tracking-tighter">{title}</h2>
              <h3 className={`text-base md:text-lg font-bold uppercase tracking-widest mb-6 md:mb-8 ${dark ? 'text-brand-red' : 'text-brand-red'}`}>
                {subtitle}
              </h3>
              <p className={`text-sm md:text-[16px] leading-relaxed mb-8 md:mb-12 ${dark ? 'text-white/70' : 'text-brand-dark/70'}`}>
                {description}
              </p>
            </motion.div>

            {/* Accordion */}
            <div className="space-y-2 md:space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`border-b ${dark ? 'border-white/10' : 'border-brand-dark/10'}`}
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full py-4 md:py-6 flex justify-between items-center text-left group min-h-[48px]"
                  >
                    <span className="text-base md:text-lg font-bold uppercase tracking-wide group-hover:text-brand-red transition-colors">
                      {service.title}
                    </span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className={`pb-6 text-sm md:text-[16px] leading-relaxed ${dark ? 'text-white/60' : 'text-brand-dark/60'}`}>
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: imagePosition === 'right' ? 50 : -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative aspect-[4/5] ${imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'} ${imagePosition === 'left' ? 'order-first lg:order-1' : 'order-first lg:order-2'}`}
          >
            <div className={`absolute inset-0 border-2 ${dark ? 'border-brand-red/30' : 'border-brand-red/20'} translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10`}></div>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
