import { motion } from 'framer-motion';

interface Logo {
  id: number;
  name: string;
  logo: string;
}

const clients: Logo[] = [
  // Adicione as logos dos clientes aqui conforme adicionadas em public/assets/clients/
  // Exemplo: { id: 1, name: 'Client Name', logo: '/assets/clients/client1.png' }
];

const partners: Logo[] = [
  // Adicione as logos dos parceiros aqui conforme adicionadas em public/assets/partners/
  // Exemplo: { id: 1, name: 'Partner Name', logo: '/assets/partners/partner1.png' }
];

export default function ClientsAndPartnersSection() {
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
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
              Parceiros & Clientes
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle">
              Confiança de empresas que buscam excelência
            </motion.p>
          </div>

          {/* Clients Section */}
          {clients.length > 0 && (
            <motion.div variants={containerVariants} className="mb-16">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-primary-dark mb-8"
              >
                Nossos Clientes
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {clients.map((client) => (
                  <motion.div
                    key={client.id}
                    variants={logoVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center p-6 bg-neutral-light rounded-lg border border-neutral-border hover:border-secondary-green hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-16 object-contain"
                      title={client.name}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Partners Section */}
          {partners.length > 0 && (
            <motion.div variants={containerVariants}>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-primary-dark mb-8"
              >
                Nossos Parceiros
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {partners.map((partner) => (
                  <motion.div
                    key={partner.id}
                    variants={logoVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center p-6 bg-neutral-light rounded-lg border border-neutral-border hover:border-secondary-green hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-16 object-contain"
                      title={partner.name}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Empty State */}
          {clients.length === 0 && partners.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <p className="text-neutral-dark/60">
                Logos de clientes e parceiros serão adicionadas em breve.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
