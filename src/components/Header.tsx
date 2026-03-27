import { Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 xs:h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-1 xs:space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-7 xs:w-8 sm:w-9 md:w-10 h-7 xs:h-8 sm:h-9 md:h-10 bg-gradient-to-br from-primary-main to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm xs:text-base sm:text-lg md:text-lg">E</span>
            </div>
            <div className="min-w-0">
              <p className="font-bold text-primary-dark text-xs xs:text-sm sm:text-base md:text-base truncate">ELETTRA</p>
              <p className="text-xs md:text-xs text-neutral-dark/60 leading-tight">Empreendimentos</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-dark hover:text-primary-main font-medium transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
            <a
              href="https://wa.me/5583996070404?text=Olá%21%20Tudo%20bem%3F%0AEncontrei%20a%20ELETTRA%20Engenharia%20%26%20Solu%C3%A7%C3%B5es%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20oferecidos%2C%20especialmente%20em%20projetos%20e%20execu%C3%A7%C3%A3o%20de%20obras%20el%C3%A9tricas%2Fcivis.%0APoderia%20me%20orientar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-1 xs:space-x-2 bg-secondary-green hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm md:text-base px-3 xs:px-4 py-2 xs:py-3"
            >
              <MessageCircle size={16} className="xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5" />
              <span className="hidden xs:inline">Fale Conosco</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-neutral-dark hover:text-primary-main transition-colors p-1.5"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={20} className="xs:w-6 xs:h-6" /> : <Menu size={20} className="xs:w-6 xs:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-neutral-border py-3 xs:py-4 space-y-2 xs:space-y-3 animate-slideInDown px-3 xs:px-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base text-neutral-dark hover:bg-primary-light rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5583996070404?text=Olá%21%20Tudo%20bem%3F%0AEncontrei%20a%20ELETTRA%20Engenharia%20%26%20Solu%C3%A7%C3%B5es%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20oferecidos%2C%20especialmente%20em%20projetos%20e%20execu%C3%A7%C3%A3o%20de%20obras%20el%C3%A9tricas%2Fcivis.%0APoderia%20me%20orientar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 btn-primary w-full mt-3 xs:mt-4 py-3 xs:py-3 text-sm xs:text-base"
            >
              <MessageCircle size={18} />
              <span>Fale no WhatsApp</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
