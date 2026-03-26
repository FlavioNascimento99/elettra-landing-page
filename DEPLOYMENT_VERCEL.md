# 🚀 Deploy na Vercel

Este documento explica como fazer deploy da landing page ELETTRA na Vercel.

## 📋 Estrutura para Vercel

A estrutura do projeto foi reorganizada para funcionar perfeitamente com Vercel:

```
/projeto
  /api                    ← Serverless functions
    send-email.ts        ← Função de envio de email
    health.ts            ← Health check
  /src
    App.tsx              ← React frontend
    ...
  /dist                  ← Build output (gerado após npm run build)
  package.json
  vercel.json            ← Configuração Vercel
```

## 🔧 Configuração Pré-deploy

### 1. Instalar dependências
```bash
npm install
```

### 2. Testar localmente em dev
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend serverless (simular)
npm run dev:server
```

### 3. Verificar build
```bash
npm run build
```

## 📤 Deploy no Vercel

### Opção 1: Via CLI (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Fazer login
vercel login

# 3. Deploy
vercel --prod
```

### Opção 2: Via GitHub (Automático)

1. Push do código para GitHub
2. Conectar repositório no [dashboard.vercel.com](https://dashboard.vercel.com)
3. Vercel faz deploy automaticamente a cada push

## 🔐 Variáveis de Ambiente

Na página do projeto no Vercel, adicione as seguintes variáveis:

| Variável     | Valor                          |
|--------------|--------------------------------|
| `EMAIL_USER` | `seu-email@gmail.com`         |
| `EMAIL_PASS` | Gmail App Password (16 chars) |

### Como gerar Gmail App Password

1. Vá para [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Selecione "Mail" e "Windows Computer"
3. Copie a senha de 16 caracteres
4. Cole em `EMAIL_PASS` no Vercel

## ✅ Depois do Deploy

### Testar endpoints

```bash
# Health check
curl https://seu-projeto.vercel.app/api/health

# Send email (POST)
curl -X POST https://seu-projeto.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@example.com",
    "phone": "(83) 99607-0404",
    "message": "Teste de envio"
  }'
```

### Testar frontend

Acesse `https://seu-projeto.vercel.app` e teste o formulário de contato.

## 🔄 Fluxo de Dados

```
Frontend (React) 
    ↓
fetch('/api/send-email', POST) 
    ↓
Vercel Edge Network 
    ↓
/api/send-email.ts (Node.js serverless)
    ↓
Gmail SMTP
    ↓
Email enviado ✓
```

## 📊 Monitoramento

No [dashboard.vercel.com](https://dashboard.vercel.com):
- Ver logs de função serverless
- Verificar performance
- Configurar alertas
- Limpar cache
- Ver analytics

## 🐛 Troubleshooting

### Erro: "EMAIL_USER não definido"
→ Verifique se variáveis de ambiente estão configuradas no Vercel

### Erro: "Method not allowed"
→ Certifique-se de usar POST para `/api/send-email`

### Erro: "CORS"
→ CORS está habilitado na função, verifique se frontend está no mesmo domínio

### Email não enviado
→ Verifique Gmail App Password (não use senha regular)
→ Verifique ["Allow less secure apps"](https://myaccount.google.com/security) está ativado

## 📝 Notas Importantes

- ✅ Frontend é servido como arquivos estáticos (rápido)
- ✅ Backend é serverless (paga apenas por uso)
- ✅ Não é necessário manter um servidor rodando
- ✅ Auto-scaling automático
- ✅ HTTPS por padrão
- ✅ CDN global incluído

## 🚫 O que remover

Quando fizer deploy, o `server.ts` NÃO é mais necessário pois a lógica está em `/api`. Você pode mantê-lo localmente para testes.

---

**Status**: ✅ Pronto para deploy na Vercel
