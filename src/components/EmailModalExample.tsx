import { useState } from 'react';
import { Mail } from 'lucide-react';
import EmailModal from './EmailModal';

/**
 * Example Component: Shows how to use the EmailModal
 * 
 * This is a reference implementation. You can:
 * 1. Copy this pattern to integrate EmailModal into other components
 * 2. Add buttons throughout your site to open the modal
 * 3. Customize the button styling and placement
 */

export default function EmailModalExample() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-light to-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
          Email Modal Example
        </h1>

        <p className="text-neutral-dark/70 text-lg mb-12">
          Clique no botão abaixo para ver o modal de email em ação.
        </p>

        {/* Button Variations */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {/* Primary Button */}
          <button
            onClick={() => setIsEmailModalOpen(true)}
            className="btn-primary flex items-center justify-center gap-2 text-lg py-3"
          >
            <Mail size={20} />
            Enviar Email
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => setIsEmailModalOpen(true)}
            className="btn-secondary flex items-center justify-center gap-2 text-lg py-3"
          >
            <Mail size={20} />
            Fale Conosco via Email
          </button>
        </div>

        {/* Code Example */}
        <div className="bg-neutral-dark text-white rounded-lg p-6 text-left overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">📝 Código de Integração</h2>
          <pre className="text-sm leading-relaxed">
{`import { useState } from 'react';
import EmailModal from './EmailModal';

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Abrir Email
      </button>
      
      <EmailModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}`}
          </pre>
        </div>

        {/* Features */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="p-4 bg-primary-light rounded-lg">
            <h3 className="font-semibold text-primary-dark mb-2">💬 Mínimo</h3>
            <p className="text-sm text-neutral-dark/70">Apenas campos essenciais</p>
          </div>
          <div className="p-4 bg-secondary-lightBlue/20 rounded-lg">
            <h3 className="font-semibold text-primary-dark mb-2">⚡ Rápido</h3>
            <p className="text-sm text-neutral-dark/70">Envio imediato via backend</p>
          </div>
          <div className="p-4 bg-secondary-green/10 rounded-lg">
            <h3 className="font-semibold text-primary-dark mb-2">✨ Elegante</h3>
            <p className="text-sm text-neutral-dark/70">Animações suaves e feedback</p>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}
