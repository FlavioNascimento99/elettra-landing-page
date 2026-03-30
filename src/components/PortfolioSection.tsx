import { motion } from 'framer-motion';

const portfolioProjects = [
  { 
    id: 1, 
    title: 'Subestações', 
    category: 'Infraestrutura',
    image: '/assets/projeto_subestacao.jpg'
  },
  { 
    id: 2, 
    title: 'Energia Fotovoltaica', 
    category: 'Energia Renovável',
    image: '/assets/solar_residencial.jpg'
  },
  { 
    id: 3, 
    title: 'Ampliação e reforma da Rede Elétrica', 
    category: 'Redes de média e baixa tensão',
    image: '/assets/rede_eletrica.png'
  },
  { 
    id: 4, 
    title: 'Obra Civis', 
    category: 'Construção e Reformas',
    image: '/assets/obra_civil.jpg'
  },
  { 
    id: 5, 
    title: 'Automações de Subestações', 
    category: 'Automação',
    image: '/assets/automacao_industrial.jpg'
  },
  { 
    id: 6, 
    title: 'Segurança do Trabalho', 
    category: 'Gestão de Segurança e Saúde do Trabalho',
    image: '/assets/seguranca_trabalho.jpg'
  },
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
            {portfolioProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-neutral-border cursor-pointer"
              >
                {/* Image Area */}
                <div className="relative overflow-hidden bg-neutral-light">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
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
