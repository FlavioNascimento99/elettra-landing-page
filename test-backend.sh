#!/bin/bash

# 📧 Email Backend Test Script

# Cor para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🧪 Testando Email Backend${NC}\n"

# 1. Health Check
echo -e "${BLUE}1️⃣  Verificando Status do Servidor...${NC}"
curl -s http://localhost:5000/health | jq .
echo -e "\n"

# 2. Test Email - Solicitação de Orçamento
echo -e "${BLUE}2️⃣  Enviando Email de Teste - Solicitação de Orçamento${NC}"
curl -X POST http://localhost:5000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "(83) 99607-0404",
    "message": "Olá! Gostaria de um orçamento para meu projeto de instalação elétrica residencial. Pode entrar em contato comigo?"
  }' | jq .
echo -e "\n"

# 3. Test Email - Contato Geral
echo -e "${BLUE}3️⃣  Enviando Email de Teste - Contato Geral${NC}"
curl -X POST http://localhost:5000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos",
    "email": "maria@example.com",
    "phone": "(83) 98765-4321",
    "message": "Vocês fazem projetos de energia solar? Estou interessada em saber mais sobre esse serviço."
  }' | jq .
echo -e "\n"

# 4. Test Email - Erro com campos faltando
echo -e "${BLUE}4️⃣  Testando Validação - Campos Faltando${NC}"
curl -X POST http://localhost:5000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pedro",
    "email": "pedro@example.com"
  }' | jq .
echo -e "\n"

echo -e "${GREEN}✅ Testes Concluídos!${NC}"
