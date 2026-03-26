import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const commitments = [
    'Segurança',
    'Qualidade',
    'Eficiência',
    'Conformidade técnica e legal',
    'Sustentabilidade',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-light">
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
              Sobre a ELETTRA
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle">
              Fundada em 2012, a ELETTRA é especializada em soluções técnicas completas
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-neutral-dark/80 leading-relaxed">
                A Elettra foi fundada em 2012 e atua no desenvolvimento de soluções
                completas nas áreas de Engenharia Elétrica, Obras Civis, Segurança do
                Trabalho e Energias Renováveis.
              </p>
              <p className="text-neutral-dark/80 leading-relaxed">
                Com mais de uma década de experiência, a empresa oferece consultoria,
                projeto, execução e manutenção de sistemas com foco em excelência técnica,
                segurança e sustentabilidade.
              </p>
            </motion.div>

            {/* Commitments */}
            <motion.div variants={containerVariants} className="space-y-3">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary-green flex-shrink-0" />
                  <span className="text-neutral-dark font-medium">{commitment}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Missão',
                content:
                  'Fornecer soluções técnicas seguras, eficientes e sustentáveis nas áreas elétrica, civil e energética.',
                icon: '🎯',
              },
              {
                title: 'Visão',
                content:
                  'Ser referência regional em engenharia elétrica, segurança do trabalho e energia solar.',
                icon: '🔭',
              },
              {
                title: 'Valores',
                content:
                  'Ética, Segurança em primeiro lugar, Excelência técnica, Sustentabilidade e Comprometimento com o cliente.',
                icon: '💎',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
                <p className="text-neutral-dark/70 text-sm md:text-base">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
