import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappLink =
    'https://wa.me/5583996070404?text=Olá%21%20Tudo%20bem%3F%0AEncontrei%20a%20ELETTRA%20Engenharia%20%26%20Solu%C3%A7%C3%B5es%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20oferecidos%2C%20especialmente%20em%20projetos%20e%20execu%C3%A7%C3%A3o%20de%20obras%20el%C3%A9tricas%2Fcivis.%0APoderia%20me%20orientar%3F';

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary-green to-green-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-3xl z-30 group cursor-pointer"
      aria-label="Abrir WhatsApp"
    >
      <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
      <div className="absolute inset-3 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors"></div>
      <MessageCircle size={24} className="md:w-7 md:h-7 relative z-10" />

      {/* Tooltip */}
      <div className="absolute right-full mr-3 px-3 py-2 bg-neutral-dark rounded-lg text-white text-xs md:text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat
        <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-dark"></div>
      </div>

      {/* Pulse animation */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-secondary-green rounded-full opacity-0"
      ></motion.div>
    </motion.a>
  );
}
