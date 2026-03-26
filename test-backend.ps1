# 📧 Email Backend Test - PowerShell Script

Write-Host "🧪 Testando Email Backend" -ForegroundColor Cyan
Write-Host ""

# 1. Health Check
Write-Host "1️⃣  Verificando Status do Servidor..." -ForegroundColor Blue
$response = Invoke-WebRequest -Uri "http://localhost:5000/health" -Method Get
$response.Content | ConvertFrom-Json | ConvertTo-Json
Write-Host ""

# 2. Test Email - Solicitação de Orçamento
Write-Host "2️⃣  Enviando Email de Teste - Solicitação de Orçamento" -ForegroundColor Blue
$body = @{
    name = "João Silva"
    email = "joao@example.com"
    phone = "(83) 99607-0404"
    message = "Olá! Gostaria de um orçamento para meu projeto de instalação elétrica residencial. Pode entrar em contato comigo?"
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri "http://localhost:5000/send-email" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
$response.Content | ConvertFrom-Json | ConvertTo-Json
Write-Host ""

# 3. Test Email - Contato Geral
Write-Host "3️⃣  Enviando Email de Teste - Contato Geral" -ForegroundColor Blue
$body = @{
    name = "Maria Santos"
    email = "maria@example.com"
    phone = "(83) 98765-4321"
    message = "Vocês fazem projetos de energia solar? Estou interessada em saber mais sobre esse serviço."
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri "http://localhost:5000/send-email" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
$response.Content | ConvertFrom-Json | ConvertTo-Json
Write-Host ""

# 4. Test Email - Erro com campos faltando
# Write-Host "4️⃣  Testando Validação - Campos Faltando" -ForegroundColor Blue
# $body = @{
#     name = "Pedro"
#     email = "pedro@example.com"
# } | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "http://localhost:5000/send-email" `
      -Method Post `
      -ContentType "application/json" `
      -Body $body
    $response.Content | ConvertFrom-Json | ConvertTo-Json
} catch {
    $errorContent = $_.Exception.Response.Content.ToString()
    try {
        $errorContent | ConvertFrom-Json | ConvertTo-Json
    } catch {
        Write-Host "❌ Error Response (non-JSON): $errorContent" -ForegroundColor Red
    }
}
Write-Host ""

Write-Host "✅ Testes Concluídos!" -ForegroundColor Green
