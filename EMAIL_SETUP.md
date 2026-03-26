# 📧 Setup de Serviço de Email - ELETTRA

Este guia documenta como configurar o serviço de email para o formulário de contato do site ELETTRA.

## 🎯 Visão Geral

O sistema utiliza:
- **Backend**: Node.js + Express + Nodemailer
- **Frontend**: React + TypeScript
- **Email Provider**: Gmail com App Password

## ⚙️ Configuração Passo a Passo

### 1. Obter Credenciais do Gmail

#### Opção A: Usando App Password (Recomendado)

1. Acesse sua conta Google: https://myaccount.google.com
2. Clique em **Segurança** (opção esquerda)
3. Habilite **2-Step Verification** se ainda não estiver ativado
4. Após ativar, volte para Segurança
5. Role para baixo e clique em **App Passwords**
6. Selecione:
   - Aplicativo: **Mail**
   - Dispositivo: **Windows Computer** (ou seu dispositivo)
7. Clique em **Generate**
8. Copie a senha de 16 caracteres gerada

#### Opção B: Usando Senha Regular (Menos Seguro)

Se você não conseguir usar App Password:
1. Use sua senha regular do Gmail
2. Ative o acesso de "Aplicativos menos seguros" em: https://myaccount.google.com/lesssecureapps

### 2. Configurar Variáveis de Ambiente

1. Abra o arquivo `.env` na raiz do projeto
2. Preencha com suas credenciais:

```env
EMAIL_USER=wagnerrclemente@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx  # Cola a senha de 16 caracteres aqui, sem espaços
PORT=5000
NODE_ENV=development
VITE_API_URL=http://localhost:5000
```

### 3. Instalar Dependências

```bash
npm install
```

Isso instalará todas as dependências de frontend e backend.

### 4. Executar Aplicação

#### Opção A: Executar Frontend e Backend Simultaneamente (Recomendado)

```bash
npm run dev:all
```

Isso abrirá:
- Frontend: http://localhost:5174
- Backend: http://localhost:5000

#### Opção B: Executar Separadamente

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
npm run dev:server
```

## 🧪 Testando o Serviço

### 1. Verificar Status do Servidor

```bash
curl http://localhost:5000/health
```

Deve retornar:
```json
{ "status": "OK", "message": "Email server is running" }
```

### 2. Testar Envio de Email via API

```bash
curl -X POST http://localhost:5000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "(83) 99607-0404",
    "message": "Gostaria de um orçamento para meu projeto."
  }'
```

Deve retornar:
```json
{ "success": true, "message": "Email enviado com sucesso!" }
```

### 3. Testar via Interface Web

1. Acesse: http://localhost:5174
2. Vá até seção **Entre em Contato**
3. Preencha o formulário
4. Clique em **Enviar Mensagem**
5. Verifique seu email para confirmar

## 📧 O Que Acontece ao Enviar

Quando um usuário envia o formulário:

1. **Email para Administrador**: Você recebe um email com os detalhes de contato
2. **Confirmação para Usuário**: O usuário recebe um email confirmando o recebimento
3. **Resposta URL**: O campo "replyTo" permite que você responda diretamente para o email do usuário

## 🔧 Estrutura de Arquivos

```
projeto/
├── server.ts                 # Backend com Express + Nodemailer
├── src/
│   ├── services/
│   │   └── emailService.ts   # Utilitários para chamadas à API
│   └── components/
│       └── ContactSection.tsx # Formulário com integração de email
├── .env                      # Variáveis de ambiente (não commitar!)
├── .env.example              # Template para .env
└── package.json              # Dependências
```

## 🐛 Troubleshooting

### Erro: "Erro ao enviar email"

**Possíveis Causas:**
- Servidor backend não está rodando
- Credenciais do Gmail incorretas
- App Password não foi gerada corretamente

**Solução:**
1. Verifique se o backend está rodando: `curl http://localhost:5000/health`
2. Verifique as credenciais no arquivo `.env`
3. Teste a senha do Gmail em outro cliente de email

### Erro: "Connection refused"

**Causa**: O servidor backend não está rodando

**Solução:**
```bash
npm run dev:server
```

### Gmail rejeitando login

**Causa**: Geralmente é falta do 2FA ou App Password

**Solução:**
1. Ative 2-Step Verification em sua conta Google
2. Gere um novo App Password
3. Use a senha do App Password (não a senha regular)

### Email tidak sampai

**Possíveis Causas:**
- Email foi para spam
- Endereço de email incorreto
- Servidor Gmail pode estar bloqueando

**Solução:**
1. Verifique a pasta de spam/lixo
2. Adicione `noreply@${seudominio}` aos contatos confiáveis
3. Verifique os logs do servidor

## 📝 Logs do Servidor

Para depuração, verifique os logs do terminal onde o backend está rodando:

```
✅ Email server running on http://localhost:5000
📧 Email endpoint: POST http://localhost:5000/send-email
```

Erros serão exibidos no console.

## 🚀 Deployment (Produção)

Para deploy em produção, configure:

1. **Hosting Backend**: Heroku, Vercel, Railway, etc.
2. **Variáveis de Ambiente**: Configure no painel do host
3. **URL da API**: Atualize `VITE_API_URL` para a URL de produção

**Exemplo para Vercel + Railway:**

```env
# .env.production
EMAIL_USER=wagnerrclemente@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx
VITE_API_URL=https://seu-backend-production.com
```

## 📞 Contato

Para dúvidas sobre a integração:
- Website: ELETTRA Engenharia
- Email: wagnerrclemente@gmail.com
- WhatsApp: (83) 99607-0404

---

**Status**: ✅ Serviço de email configurado e pronto para uso!
