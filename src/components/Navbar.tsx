import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';


const navLinks = [
  { name: 'Apie mus', href: '#apie-mus' },
  { name: 'Statyba', href: '#statyba' },
  { name: 'Apdailos darbai', href: '#apdailos-darbai' },
  { name: 'Konsultavimas', href: '#konsultavimas' },
  { name: 'Sertifikatai', href: '#sertifikatai' },
  { name: 'Kontaktai', href: '#kontaktai' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-dark/90 backdrop-blur-md py-4 border-b border-white/10' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/VSR Statyba logo.png" alt="VSR Statyba" className="h-20 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-brand-red transition-colors min-h-[48px] flex items-center"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white min-w-[48px] min-h-[48px] flex items-center justify-end"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-display font-bold uppercase tracking-wider hover:text-brand-red transition-colors min-h-[48px] flex items-center"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
