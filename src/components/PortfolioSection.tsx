import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const portfolioPlaceholders = [
  { id: 1, title: 'Projeto de Subestação', category: 'Infraestrutura' },
  { id: 2, title: 'Instalação Solar Residencial', category: 'Energia Renovável' },
  { id: 3, title: 'Ampliação de Rede Elétrica', category: 'Distribuição' },
  { id: 4, title: 'Obra Civil Integrada', category: 'Construção' },
  { id: 5, title: 'Sistema de Automação Industrial', category: 'Automação' },
  { id: 6, title: 'Auditoria de Segurança do Trabalho', category: 'Segurança' },
];

export default function PortfolioSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Title */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <motion.h2 variants={itemVariants} className="section-title">
              Nosso Trabalho
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle">
              Projetos e soluções que transformam negócios
            </motion.p>
          </div>

          {/* Portfolio Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioPlaceholders.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-neutral-border cursor-pointer"
              >
                {/* Placeholder Image Area */}
                <div className="aspect-video bg-gradient-to-br from-primary-light to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:translate-x-full transition-transform duration-700"></div>
                  <ImageIcon className="w-12 h-12 text-primary-main/40" />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-primary-dark group-hover:text-secondary-green transition-colors flex-1">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-secondary-green font-semibold">{project.category}</p>
                  <p className="text-xs text-neutral-dark/50 mt-3">
                    Adicionar imagens e detalhes do projeto
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-2 bg-white text-primary-dark font-semibold rounded-lg hover:bg-neutral-light transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-neutral-dark/70 mb-4">
              Portfolio completo em desenvolvimento. Galeria será atualizada com seus projetos mais recentes.
            </p>
            <a
              href="#contact"
              className="inline-block btn-primary"
            >
              Solicitar Portfolio Completo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
