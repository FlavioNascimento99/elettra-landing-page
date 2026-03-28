// Formspree configuration
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'xpqoqewg';

export interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Sanitiza strings para evitar injeção
 */
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Send email through Formspree directly from frontend
 */
export async function sendEmail(data: EmailPayload): Promise<ApiResponse> {
  try {
    // Validação básica
    if (!data.name?.trim()) throw new Error('Nome é obrigatório');
    if (!data.email?.trim()) throw new Error('Email é obrigatório');
    if (!data.phone?.trim()) throw new Error('Telefone é obrigatório');
    if (!data.message?.trim()) throw new Error('Mensagem é obrigatória');

    const sanitizedData = {
      name: sanitizeHtml(data.name),
      email: sanitizeHtml(data.email),
      phone: sanitizeHtml(data.phone),
      message: sanitizeHtml(data.message),
      _subject: `Novo Contato - ${data.name}`,
      _replyto: data.email,
    };

    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.statusText}`);
    }

    const result = await response.json();

    if (!result.ok) {
      throw new Error('Erro ao enviar formulário');
    }

    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Você receberá uma confirmação por email.',
    };
  } catch (error) {
    console.error('Email Service Error:', error);
    throw error;
  }
}
