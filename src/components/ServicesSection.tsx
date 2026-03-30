import { motion } from 'framer-motion';
import {
  Building2,
  Zap as ElectricBolt,
  Hammer,
  Leaf,
  Lightbulb,
  Shield,
  TrendingUp,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: ElectricBolt,
    title: '⚡ Engenharia Elétrica',
    description: 'Projetos elétricos completos',
    items: [
      'Projetos residenciais e industriais',
      'Redes MT e BT',
      'Subestações',
      'Automação',
      'Energia Fotovoltaica -  Micro e minigerção',
      'Testes técnicos: Termografia, Resistência de contato, Isolamento, TTR, Análise de óleo',
    ],
  },
  {
    icon: Building2,
    title: '🏗️ Subestações',
    description: 'Soluções eletromecânicas integradas',
    items: [
      'Projetos eletromecânicos',
      'Construção e ampliação',
      'Instalação de equipamentos',
      'Painéis de comando e controle',
      'Automação',
    ],
  },
  {
    icon: Zap,
    title: '🔌 Redes de distribuição em média e baixa tensão',
    description: 'Infraestrutura de distribuição de energia',
    items: [
      'Construção e reforma',
      'Redes MT e BT',
      'Manutenção preventiva e corretiva',
      'Regularizações',
      'Loteamentos',
    ],
  },
  {
    icon: Lightbulb,
    title: '☀️ Energia Fotovoltaica',
    description: 'Soluções em energia renovável',
    items: [
      'Projetos de micro e minigeração',
      'Dimensionamento técnico e econômico',
      'Instalação',
      'Homologação',
      'Manutenção',
      'Consultoria energética',
      'Dimensionamento e instalação de carregadores para veículos elétricos'
    ],
  },
  {
    icon: Leaf,
    title: '🌱 Sustentabilidade e Eficiência',
    description: 'Soluções para redução de consumo',
    items: [
      'Estudos de viabilidade',
      'Análise de consumo',
      'Redução de demanda',
      'Soluções para empresas e condomínios',
    ],
  },
  {
    icon: Hammer,
    title: '🏢 Obras Civis',
    description: 'Execução de obras estruturais',
    items: [
      'Reformas',
      'Redes de água e esgoto',
      'Pavimentação',
    ],
  },
  {
    icon: Shield,
    title: '🦺 Testes e ensaios em equipamentos',
    description: 'Manutenção industrial',
    items: [
      'Termografia',
      'Resistência de contato',
      'Resistência de isolamento',
      'Análise de óleo',
      'Ajustes de proteção em relés',
      'Manutenção em painéis e circuitos elétricos'
    ],
  },
  {
    icon: Shield,
    title: '⚒️ Segurança do Trabalho',
    description: 'Conformidade e proteção ocupacional',
    items: [
      'Programa de Gerenciamento de Riscos',
      'PCMSO em Parceria Médica',
      'LTCAT Laudo Técnico das Condições e Ambiente do Trabalho',
      'PAE Plano de Atendimento à Emergência',
      'Treinamentos',
      'Gestão de SST'
    ]
  }
];

export default function ServicesSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Title */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <motion.h2 variants={cardVariants} className="section-title">
              Nossos Serviços
            </motion.h2>
            <motion.p variants={cardVariants} className="section-subtitle">
              Soluções completas e integradas para todos os seus projetos de engenharia
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="service-card group"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-primary-light rounded-lg group-hover:bg-secondary-green/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary-main group-hover:text-secondary-green transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-dark group-hover:text-secondary-green transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-dark/60">{service.description}</p>
                    </div>
                  </div>

                  {/* Service items */}
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 text-sm text-neutral-dark/70">
                        <span className="text-secondary-green font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Differentials Section */}
          <motion.div
            variants={cardVariants}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            {/* Safety Differentials */}
            <motion.div
              variants={cardVariants}
              className="card p-8 bg-gradient-to-br from-secondary-green/5 to-transparent border-secondary-green/20"
            >
              <h3 className="text-2xl font-bold text-primary-dark mb-4 flex items-center space-x-2">
                <Shield className="w-6 h-6 text-secondary-green" />
                <span>Diferenciais em Segurança</span>
              </h3>
              <ul className="space-y-2">
                {[
                  'Cultura de segurança aplicada',
                  'Atendimento às normas (NRs)',
                  'Integração entre engenharia e segurança',
                  'Redução de acidentes',
                  'Controle de indicadores',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-neutral-dark/70">
                    <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Competitive Differentials */}
            <motion.div
              variants={cardVariants}
              className="card p-8 bg-gradient-to-br from-primary-main/5 to-transparent border-primary-main/20"
            >
              <h3 className="text-2xl font-bold text-primary-dark mb-4 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-primary-main" />
                <span>Diferenciais Competitivos</span>
              </h3>
              <ul className="space-y-2">
                {[
                  'Equipe qualificada e experiente',
                  'Atuação integrada e coordenada',
                  'Cumprimento de prazos garantido',
                  'Conformidade normativa total',
                  'Foco em qualidade e segurança',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-neutral-dark/70">
                    <div className="w-2 h-2 bg-primary-main rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
