import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 500);
  };

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

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Endereço',
      content: 'Rua Hortêncio Ribeiro de Luna, 1151 – BR 101\nJoão Pessoa – PB',
      link: 'https://maps.google.com/?q=Rua+Hortêncio+Ribeiro+de+Luna,+1151,+João+Pessoa,+PB',
    },
    {
      icon: Phone,
      label: 'Telefone',
      content: '(83) 99607-0404',
      link: 'tel:+5583996070404',
    },
    {
      icon: Mail,
      label: 'Email',
      content: 'wagnerrclemente@gmail.com',
      link: 'mailto:wagnerrclemente@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-lightBlue rounded-full blur-3xl"></div>
      </div>

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
              Entre em Contato
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle">
              Estamos prontos para discutir e desenvolver a melhor solução para seu projeto
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
            {/* Contact Information */}
            <motion.div variants={containerVariants} className="space-y-4 xs:space-y-5 md:space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="group block"
                  >
                    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary-light transition-colors">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-main/10 group-hover:bg-primary-main/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary-main" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-primary-dark mb-1">{info.label}</p>
                        <p className="text-neutral-dark/70 whitespace-pre-line text-sm md:text-base">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="space-y-3 mt-8 pt-8 border-t border-neutral-border">
                <a
                  href="https://wa.me/5583996070404?text=Olá%20ELETTRA,%20gostaria%20de%20solicitar%20um%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 btn-primary w-full"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:wagnerrclemente@gmail.com"
                  className="flex items-center justify-center space-x-2 btn-secondary w-full"
                >
                  <Mail size={20} />
                  <span>Enviar Email</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5\">
                <div>
                  <label htmlFor="name" className="block text-xs xs:text-sm font-semibold text-primary-dark mb-2\">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                    className="w-full px-3 xs:px-4 py-3 text-base rounded-lg border border-neutral-border focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20 transition-all\"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs xs:text-sm font-semibold text-primary-dark mb-2\">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(83) 99607-0404"
                    className="w-full px-3 xs:px-4 py-3 text-base rounded-lg border border-neutral-border focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs xs:text-sm font-semibold text-primary-dark mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={4}
                    className="w-full px-3 xs:px-4 py-3 text-base rounded-lg border border-neutral-border focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <Send size={18} />
                    </>
                  )}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-secondary-green/10 border border-secondary-green text-secondary-green rounded-lg text-sm font-medium text-center"
                  >
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </motion.div>
                )}
              </form>

              <p className="text-xs text-neutral-dark/50 mt-4 text-center">
                * Campos obrigatórios. Responderemos em até 24 horas.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
