
const navLinks = [
  { name: 'Apie mus', href: '#apie-mus' },
  { name: 'Statyba', href: '#statyba' },
  { name: 'Apdailos darbai', href: '#apdailos-darbai' },
  { name: 'Konsultavimas', href: '#konsultavimas' },
  { name: 'Sertifikatai', href: '#sertifikatai' },
  { name: 'Kontaktai', href: '#kontaktai' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-10 px-4 md:py-16 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 text-center lg:text-left">
          {/* Left Column */}
          <div className="space-y-8 md:space-y-12">
            <a href="#" className="flex items-center justify-center lg:justify-start">
              <img src="/VGStatybalogooo.png" alt="VG Statyba" className="h-20 md:h-28 w-auto" />
            </a>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 md:gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs md:text-sm uppercase tracking-widest text-white/50 hover:text-brand-red transition-colors min-h-[48px] flex items-center"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <p className="text-xs md:text-sm text-white/30">
              © 2026 VG Statyba. Visos teisės saugomos.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:text-right space-y-6 md:space-y-8">
            <h4 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-red font-bold">Rekvizitai</h4>
            <div className="space-y-2 text-xs md:text-sm text-white/60">
              <p>UAB „VG STATYBA"</p>
              <p>Įmonės kodas: 300867894</p>
              <p>PVM kodas: LT100003753419</p>
              <p>A/S: LT15 4010 0424 0391 5513</p>
              <p>AB DNB bankas</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
