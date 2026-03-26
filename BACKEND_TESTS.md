# 📧 Backend Email API - Exemplos de Teste

## 🧪 Teste Rápido - Health Check

```bash
curl http://localhost:5000/health
```

Resposta esperada:
```json
{
  "status": "OK",
  "message": "Email server is running"
}
```

---

## 📮 Teste 1: Solicitação de Orçamento

### cURL
```bash
curl -X POST http://localhost:5000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "(83) 99607-0404",
    "message": "Olá! Gostaria de um orçamento para meu projeto de instalação elétrica residencial."
  }'
```

### JavaScript/Node.js
```javascript
const response = await fetch('http://localhost:5000/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '(83) 99607-0404',
    message: 'Olá! Gostaria de um orçamento para meu projeto de instalação elétrica residencial.',
  }),
});

const data = await response.json();
console.log(data);
```

### PowerShell
```powershell
$body = @{
    name = "João Silva"
    email = "joao@example.com"
    phone = "(83) 99607-0404"
    message = "Olá! Gostaria de um orçamento para meu projeto de instalação elétrica residencial."
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/send-email" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

---

## 📱 Teste 2: Contato Geral

```bash
curl -X POST http://localhost:5000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos",
    "email": "maria@example.com",
    "phone": "(83) 98765-4321",
    "message": "Vocês fazem projetos de energia solar? Estou interessada em saber mais."
  }'
```

---

## ⚠️ Teste 3: Erro - Campos Faltando

Este teste deve retornar um erro 400:

```bash
curl -X POST http://localhost:5000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pedro",
    "email": "pedro@example.com"
  }'
```

Resposta esperada:
```json
{
  "success": false,
  "message": "Todos os campos são obrigatórios"
}
```

---

## 🎯 Teste 4: Segurança do Trabalho

```bash
curl -X POST http://localhost:5000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Carlos Mendes",
    "email": "carlos@empresa.com.br",
    "phone": "(83) 99999-8888",
    "message": "Precisamos de consultoria sobre NR10 e segurança em sistemas elétricos. Qual o valor do seu serviço?"
  }'
```

---

## 🌞 Teste 5: Energia Solar

```bash
curl -X POST http://localhost:5000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ana Costa",
    "email": "ana@example.com",
    "phone": "(83) 98765-4321",
    "message": "Interesse em instalar painéis solares na minha residência. Fazem projeto completo?"
  }'
```

---

## 📊 Respostas Esperadas

### ✅ Sucesso (200)
```json
{
  "success": true,
  "message": "Email enviado com sucesso!"
}
```

### ❌ Erro - Campos Faltando (400)
```json
{
  "success": false,
  "message": "Todos os campos são obrigatórios"
}
```

### ❌ Erro - Servidor (500)
```json
{
  "success": false,
  "message": "Erro ao enviar email. Tente novamente mais tarde.",
  "error": "Detalhes do erro (apenas em desenvolvimento)"
}
```

---

## 🛠️ Usando em Clientes HTTP

### Insomnia / Postman

1. **Novo Request**
   - Method: `POST`
   - URL: `http://localhost:5000/send-email`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "name": "Seu Nome",
     "email": "seu@email.com",
     "phone": "(83) 9XXXX-XXXX",
     "message": "Sua mensagem aqui"
   }
   ```

### Thunder Client (VS Code)

1. Instale a extensão "Thunder Client"
2. New Request
3. Configure como acima
4. Clique em "Send"

---

## 📝 Dicas de Teste

✅ **Sempre forneça os 4 campos**: name, email, phone, message
✅ **Use emails válidos** para testar a funcionalidade completa
✅ **Mensagens em português** funcionam normalmente
✅ **Verifique o .env** se receber erro 500
✅ **Veja os logs** do terminal para debugging detalhado

---

## 🚀 Scripts Prontos

Executar todos os testes:

**No PowerShell (Windows):**
```powershell
.\test-backend.ps1
```

**No Bash (Linux/Mac):**
```bash
bash test-backend.sh
```

---

**Endpoint disponível**: `POST http://localhost:5000/send-email`
**Destination**: `wagnerrclemente@gmail.com`
