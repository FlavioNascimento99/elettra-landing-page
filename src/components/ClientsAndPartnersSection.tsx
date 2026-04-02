import { motion } from 'framer-motion';

interface Logo {
  id: number;
  name: string;
  logo: string;
}

const clients = [
  { id: 1, name: 'Cliente 1', logo: '/assets/clients/cliente1.jpg' },
  { id: 2, name: 'Cliente 2', logo: '/assets/clients/cliente2.png' },
  { id: 3, name: 'Cliente 3', logo: '/assets/clients/cliente3.png' },
] as Logo[];

const partners = [
  { id: 1, name: 'Parceiro 1', logo: '/assets/partners/parceiro1.png' },
  { id: 2, name: 'Parceiro 2', logo: '/assets/partners/parceiro2.png' },
] as Logo[];

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
    <section className="py-12 md:py-16 bg-white">
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
            <motion.div variants={containerVariants} className="mb-8">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-primary-dark mb-8 text-center"
              >
                Nossos Clientes
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-auto"
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
                className="text-2xl font-bold text-primary-dark mb-8 text-center"
              >
                Nossos Parceiros
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-auto"
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
