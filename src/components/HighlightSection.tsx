import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function HighlightSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary-dark via-primary-main to-primary-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <Zap className="w-12 h-12 text-white animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluções Completas em Engenharia<br className="hidden md:block" />
            <span className="text-yellow-300">com Segurança e Eficiência</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Mais de uma década integrando expertise técnica, conformidade normativa e inovação
            para transformar seus projetos em realidade com excelência.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="inline-flex items-center space-x-2 bg-white text-primary-dark font-bold px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300"
          >
            <span>Solicitar Orçamento Agora</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-3 gap-4 md:gap-8"
          >
            {[
              { number: '+12', label: 'Anos de Experiência' },
              { number: '+500', label: 'Projetos Realizados' },
              { number: '100%', label: 'Conformidade' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
