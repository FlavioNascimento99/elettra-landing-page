/**
 * 📧 Backend Email API - JavaScript Test Examples
 * 
 * Use estes exemplos para testar o backend do Node.js
 * Copie e cole no console do navegador ou execute com Node.js
 */

// ============================================
// 1️⃣ Health Check
// ============================================
async function checkHealth() {
  console.log('🔍 Verificando status do servidor...');
  
  try {
    const response = await fetch('http://localhost:5000/health');
    const data = await response.json();
    console.log('✅ Status:', data);
    return response.ok;
  } catch (error) {
    console.error('❌ Erro:', error.message);
    return false;
  }
}

// ============================================
// 2️⃣ Enviar Email - Solicitação de Orçamento
// ============================================
async function sendOrcamentoEmail() {
  console.log('📮 Enviando solicitação de orçamento...');
  
  try {
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
    
    if (response.ok) {
      console.log('✅ Sucesso:', data.message);
    } else {
      console.error('❌ Erro:', data.message);
    }
    
    return data;
  } catch (error) {
    console.error('❌ Erro na requisição:', error.message);
  }
}

// ============================================
// 3️⃣ Enviar Email - Contato Geral
// ============================================
async function sendContatoEmail() {
  console.log('📮 Enviando email de contato...');
  
  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Maria Santos',
        email: 'maria@example.com',
        phone: '(83) 98765-4321',
        message: 'Vocês fazem projetos de energia solar? Estou interessada em saber mais.',
      }),
    });

    const data = await response.json();
    console.log(data.success ? '✅ Sucesso' : '❌ Erro', data.message);
    
    return data;
  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

// ============================================
// 4️⃣ Enviar Email - Com Dados Customizados
// ============================================
async function sendCustomEmail(name, email, phone, message) {
  console.log(`📮 Enviando email para ${email}...`);
  
  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await response.json();
    console.log(data.success ? '✅ Sucesso' : '❌ Erro', data.message);
    
    return data;
  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

// ============================================
// 5️⃣ Testar Validação (Erro esperado)
// ============================================
async function testValidationError() {
  console.log('⚠️  Testando validação - campos faltando...');
  
  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Pedro',
        email: 'pedro@example.com',
        // phone e message faltam propositalmente
      }),
    });

    const data = await response.json();
    console.log(`Status ${response.status}:`, data.message);
    
    return data;
  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

// ============================================
// 6️⃣ Executar Todos os Testes
// ============================================
async function runAllTests() {
  console.log('🧪 Iniciando Testes do Backend\n');
  
  // 1. Health check
  const isHealthy = await checkHealth();
  console.log('');
  
  if (!isHealthy) {
    console.error('❌ Servidor não está respondendo. Inicie com: npm run dev:all');
    return;
  }
  
  // 2. Orçamento
  await sendOrcamentoEmail();
  console.log('');
  
  // 3. Contato
  await sendContatoEmail();
  console.log('');
  
  // 4. Validação
  await testValidationError();
  console.log('');
  
  console.log('✅ Testes Concluídos!');
}

// ============================================
// Como Usar
// ============================================
/*
OPÇÃO 1: No Console do Navegador
1. Acesse http://localhost:5174/
2. Abra DevTools (F12)
3. Vá para a aba "Console"
4. Cole um dos códigos abaixo:

// Teste único
await checkHealth();
await sendOrcamentoEmail();
await sendContatoEmail();

// Ou todos os testes
await runAllTests();

// Com dados customizados
await sendCustomEmail(
  'Seu Nome',
  'seu@email.com',
  '(83) 99999-9999',
  'Sua mensagem aqui'
);

---

OPÇÃO 2: No Node.js (terminal)
1. Copie o código completo de um dos arquivos
2. Crie um arquivo: node test.js
3. Execute: node test.js

---

OPÇÃO 3: Scripts Automáticos
Windows PowerShell: .\test-backend.ps1
Linux/Mac Bash: bash test-backend.sh
*/

// Export para uso como módulo
export {
  checkHealth,
  sendOrcamentoEmail,
  sendContatoEmail,
  sendCustomEmail,
  testValidationError,
  runAllTests,
};
