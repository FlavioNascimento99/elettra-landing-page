import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface EmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message }: EmailRequest = req.body;

  // Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'Todos os campos são obrigatórios: name, email, phone, message',
    });
  }

  try {
    const transporter = createTransporter();

    // Email content for admin
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0051BA;">Novo Contato do Site ELETTRA</h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone/WhatsApp:</strong> ${phone}</p>
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0051BA;">
          <h3 style="color: #0051BA; margin-top: 0;">Mensagem:</h3>
          <p style="white-space: pre-wrap; color: #333;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #666;">
          <p>Este é um email automático do formulário de contato do site ELETTRA Engenharia & Soluções.</p>
          <p>Para responder, clique em responder ou envie um email para: ${email}</p>
        </div>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Novo Contato - ${name}`,
      html: htmlContent,
    });

    // Send confirmation email to user
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0051BA;">Obrigado pelo seu contato!</h2>
        
        <p>Olá <strong>${name}</strong>,</p>
        
        <p>Recebemos sua mensagem com sucesso. Nossa equipe da ELETTRA Engenharia & Soluções analisará sua solicitação e entrará em contato em breve.</p>
        
        <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; border-left: 4px solid #10B981; margin: 20px 0;">
          <p><strong>Tempo de resposta:</strong> Em média dentro de 24 horas</p>
          <p><strong>Contato direto:</strong> (83) 99607-0404</p>
        </div>

        <p>Até breve!</p>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          <strong>ELETTRA Engenharia & Soluções</strong><br>
          Rua Hortêncio Ribeiro de Luna, 1151 – BR 101<br>
          João Pessoa – PB
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmação de recebimento - ELETTRA Engenharia',
      html: confirmationHtml,
    });

    return res.status(200).json({
      success: true,
      message: 'Email enviado com sucesso!',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      success: false,
      message: 'Erro ao enviar email. Tente novamente mais tarde.',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
