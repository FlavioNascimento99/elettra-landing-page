# 🧪 Testando Backend - Guia Rápido

## ⚡ Teste Mais Rápido (30 segundos)

### 1. Certifique-se que o backend está rodando:
```bash
npm run dev:all
```

Você deve ver:
```
✅ Email server running on http://localhost:5000
```

### 2. Abra outra aba do PowerShell/Terminal e rode:

**Windows (PowerShell):**
```powershell
.\test-backend.ps1
```

**Linux/Mac (Bash):**
```bash
bash test-backend.sh
```

---

## 📱 Teste Direto no Console (Navegador)

### 1. Com o servidor rodando, acesse:
```
http://localhost:5174/
```

### 2. Abra o DevTools: `F12` ou `Ctrl+Shift+I`

### 3. Vá para a aba "Console"

### 4. Cole um destes comandos:

```javascript
// Verificar se servidor está ok
await fetch('http://localhost:5000/health').then(r => r.json()).then(d => console.log(d))

// Enviar email de teste
await fetch('http://localhost:5000/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'João Teste',
    email: 'joao@test.com',
    phone: '(83) 99999-9999',
    message: 'Teste de backend funcionando!'
  })
}).then(r => r.json()).then(d => console.log(d))
```

---

## 🎯 Teste com cURL (Linha de Comando)

### Health Check:
```bash
curl http://localhost:5000/health
```

### Enviar Email:
```bash
curl -X POST http://localhost:5000/send-email ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"João\",\"email\":\"joao@test.com\",\"phone\":\"(83)99999-9999\",\"message\":\"Teste\"}"
```

---

## 📊 Respostas Esperadas

### ✅ Sucesso (Health Check):
```json
{
  "status": "OK",
  "message": "Email server is running"
}
```

### ✅ Sucesso (Email Enviado):
```json
{
  "success": true,
  "message": "Email enviado com sucesso!"
}
```

### ❌ Erro (Campos Faltando):
```json
{
  "success": false,
  "message": "Todos os campos são obrigatórios"
}
```

---

## 🔍 Se Algo Não Funcionar

### ❌ "Servidor não está respondendo"
**Solução:** Rode `npm run dev:all` em um terminal

### ❌ "ECONNREFUSED"
**Solução:** Backend não está rodando na porta 5000

### ❌ "Email não chegou"
**Solução:** 
1. Verifique `.env` - credenciais do Gmail
2. Procure em **spam/lixo**
3. Veja logs do servidor

### ❌ "SyntaxError" no backend
**Solução:** Problema nas dependências
```bash
npm install
npm run dev:server
```

---

## 📋 Arquivos de Teste

- **test-backend.ps1** - Script PowerShell completo (Windows)
- **test-backend.sh** - Script Bash completo (Linux/Mac)
- **test-backend.js** - Exemplos JavaScript (Navegador/Node)
- **BACKEND_TESTS.md** - Documentação detalhada com todos os testes

---

## 🚀 Próximas Steps

1. ✅ Teste o backend com um dos métodos acima
2. ✅ Verifique emails recebidos em wagnerrclemente@gmail.com
3. ✅ Teste a interface web em http://localhost:5174/
4. ✅ Teste o modal de email
5. ✅ Teste o formulário de contato completo

---

**Dúvidas?** Veja `BACKEND_TESTS.md` ou `EMAIL_SETUP.md`
