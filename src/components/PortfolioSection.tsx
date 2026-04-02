import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioProjects = [
  { 
    id: 1, 
    title: 'Reforma de Subestações', 
    category: 'Infraestrutura',
    images: ['/assets/reforma_substacoes (1).png', '/assets/reforma_substacoes (2).png']
  },
  { 
    id: 2, 
    title: 'Usinas Fotovoltaicas', 
    category: 'Energia Renovável',
    images: ['/assets/usinas_fotovoltaicas (1).png', '/assets/usinas_fotovoltaicas (2).png']
  },
  { 
    id: 3, 
    title: 'Ampliação e reforma da Rede Elétrica', 
    category: 'Redes de média e baixa tensão',
    images: ['/assets/reforma_redes_distribuicao.png']
  },
  { 
    id: 4, 
    title: 'Loteamento', 
    category: 'Construção e Reformas',
    images: ['/assets/loteamento.png']
  },
  { 
    id: 5, 
    title: 'Automações de Subestações', 
    category: 'Automação',
    images: ['/assets/automacao_ substacoes (1).png', '/assets/automacao_ substacoes (2).png']
  },
  { 
    id: 6, 
    title: 'Manutenção Industrial', 
    category: 'Gestão de Segurança e Saúde do Trabalho',
    images: ['/assets/manutencao_industrial (1).png', '/assets/manutencao_industrial (2).png', '/assets/manutencao_industrial (3).png']
  },
];

// Componente para o card do portfólio com carrossel
function PortfolioCard({ project }: { project: typeof portfolioProjects[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
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
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl bg-white border border-neutral-border cursor-pointer"
    >
      {/* Image Area com Carrossel */}
      <div className="relative overflow-hidden bg-neutral-light h-48">
        <img
          key={currentImageIndex}
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 animate-fadeIn"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

        {/* Navigation Buttons - Mostro apenas se houver múltiplas imagens */}
        {project.images.length > 1 && (
          <>
            {/* Botão Anterior */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-dark rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Botão Próximo */}
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-dark rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicador de Página */}
            <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-xs font-semibold">
              {currentImageIndex + 1}/{project.images.length}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-primary-dark group-hover:text-secondary-green transition-colors flex-1">
            {project.title}
          </h3>
        </div>
        <p className="text-sm text-secondary-green font-semibold">{project.category}</p>
      </div>
    </motion.div>
  );
}

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
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-neutral-dark/70 mb-4">
              Veja alguns dos nossos projetos mais recentes. Conheça melhor nosso trabalho e qualidade de execução.
            </p>
            <a
              href="#contact"
              className="inline-block btn-primary"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
