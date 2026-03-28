import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 py-12 md:py-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-lightBlue to-secondary-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <div>
                <p className="font-bold text-lg">ELETTRA</p>
                <p className="text-xs text-white/60">Engenharia</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Soluções completas em engenharia com segurança e eficiência desde 2012.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Sobre', id: 'about' },
                { label: 'Serviços', id: 'services' },
                { label: 'Contato', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato Rápido</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5583996070404"
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>(83) 99607-0404</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@elettraengenharia.com.br"
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span className="break-all">contato@elettraengenharia.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Rua+Bento+Ribeiro+de+Assis,+Serra+Branca,+PB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Serra Branca – PB</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-secondary-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-secondary-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/elettraempreendimentos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-secondary-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} ELETTRA Engenharia & Soluções. Todos os direitos reservados.
          </p>
            <a
            href="https://nascimentohub.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors text-sm mb-4 md:mb-0"
            >
            Desenvolvido por Flavio Nascimento
            </a>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary-green rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all z-40 hover:bg-secondary-green/90"
        aria-label="Voltar ao topo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
