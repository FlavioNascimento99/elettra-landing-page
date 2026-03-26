import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 md:pt-0 md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-light to-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-lightBlue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-green rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary-main rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-4 xs:mb-6">
            <span className="inline-flex items-center space-x-1.5 xs:space-x-2 bg-secondary-lightBlue/20 text-primary-main px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold">
              <Zap size={14} className="xs:w-4 xs:h-4" />
              <span className="hidden xs:inline">Soluções Completas em Engenharia</span>
              <span className="xs:hidden">Soluções</span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-dark mb-4 xs:mb-6 leading-tight"
          >
            ELETTRA
            <span className="block text-primary-main mt-1 xs:mt-2">Engenharia & Soluções</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-neutral-dark/70 mb-6 xs:mb-8 max-w-2xl mx-auto leading-relaxed px-2 xs:px-0">
            Projetos • Execução de Obras Elétricas e Civis • Segurança do Trabalho • Energias Renováveis
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-1.5 xs:space-x-2 text-secondary-green font-semibold mb-6 xs:mb-8 text-xs xs:text-sm sm:text-base"
          >
            <svg className="w-4 xs:w-5 h-4 xs:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>João Pessoa – PB</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 mb-8 xs:mb-12 px-3 xs:px-0">
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center space-x-2 w-full xs:w-auto justify-center text-sm xs:text-base py-2.5 xs:py-3"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={16} className="xs:w-4.5 xs:h-4.5" />
            </button>
            <a
              href="https://wa.me/5583996070404?text=Olá%20ELETTRA,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full xs:w-auto justify-center text-sm xs:text-base py-2.5 xs:py-3"
            >
              <span className="hidden xs:inline">Fale conosco no WhatsApp</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative mt-16"
          >
            <div className="bg-gradient-to-br from-primary-main to-primary-dark rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-pattern"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="text-6xl md:text-8xl text-white/20">⚡</div>
                <div className="absolute text-white/90 text-center">
                  <p className="text-sm md:text-lg font-semibold">Expertise em Soluções Integradas</p>
                  <p className="text-xs md:text-sm text-white/70 mt-1">Mais de uma década de experiência</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-main rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary-main rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
