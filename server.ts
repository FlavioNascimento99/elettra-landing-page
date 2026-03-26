import express from 'express';
import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Types
interface EmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password (not regular password)
    },
  });
};

// Email sending endpoint
app.post('/send-email', async (req: Request, res: Response) => {
  const { name, email, phone, message }: EmailRequest = req.body;

  // Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'Todos os campos são obrigatórios',
    });
  }

  try {
    const transporter = createTransporter();

    // Email content
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

    // Send email to your address
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Novo Contato - ${name}`,
      html: htmlContent,
    });

    // Optional: Send confirmation email to user
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
      subject: 'Recebemos seu contato - ELETTRA',
      html: confirmationHtml,
    });

    return res.status(200).json({
      success: true,
      message: 'Email enviado com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({
      success: false,
      message: 'Erro ao enviar email. Tente novamente mais tarde.',
      error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined,
    });
  }
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Email server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Email server running on http://localhost:${PORT}`);
  console.log(`📧 Email endpoint: POST http://localhost:${PORT}/send-email`);
});
