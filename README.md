# 🌟 ELETTRA Engenharia & Soluções - Landing Page

Landing page moderna, responsiva e profissional para a empresa ELETTRA Engenharia & Soluções.

## 🎯 Objetivo

Apresentar a empresa, seus serviços e diferenciais de forma clara e profissional, com foco em geração de leads através de WhatsApp, telefone e e-mail.

## ✨ Características

- **Design Moderno & Corporativo**: Interface minimalista e elegante
- **Responsivo**: Layout mobile-first com suporte completo
- **Performance Otimizada**: Build otimizado com Vite
- **Animações Suaves**: Utilizando Framer Motion
- **SEO Pronto**: Meta tags e estrutura semântica
- **Acessibilidade**: ARIA labels e contraste adequado
- **Dark Mode Pronto**: Estrutura para implementação

## 🛠️ Tecnologias

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool rápido
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animações
- **Lucide React** - Icons

## 📋 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx              # Navegação e menu
│   ├── HeroSection.tsx         # Seção principal
│   ├── AboutSection.tsx        # Sobre a empresa
│   ├── ServicesSection.tsx     # Serviços oferecidos
│   ├── HighlightSection.tsx    # Chamada estratégica
│   ├── PortfolioSection.tsx    # Portfolio de projetos
│   ├── ContactSection.tsx      # Contato e formulário
│   ├── Footer.tsx              # Rodapé
│   └── FloatingWhatsApp.tsx    # Botão flutuante
├── App.tsx                      # App principal
├── main.tsx                     # Entry point
└── index.css                    # Estilos globais
```

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos

1. **Instalar dependências**
```bash
npm install
```

2. **Rodar servidor de desenvolvimento**
```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

3. **Build para produção**
```bash
npm run build
```

4. **Preview da build de produção**
```bash
npm run preview
```

## 🎨 Paleta de Cores

### Cores Principais
- **Azul Escuro**: `#003366` - Institucional, títulos
- **Azul Principal**: `#0051BA` - CTA buttons, highlights
- **Branco**: `#FFFFFF` - Fundo predominante
- **Preto**: `#1F2937` - Texto principal

### Cores Secundárias
- **Verde**: `#10B981` - Sustentabilidade, success
- **Azul Claro**: `#06B6D4` - Destaques suaves
- **Laranja**: `#F59E0B` - Atenção, energia

## 📱 Seções da Landing Page

1. **Header** - Navegação fixa com menu responsivo
2. **Hero Section** - Apresentação principal com CTA
3. **About** - Sobre a empresa, missão, visão e valores
4. **Services** - Grid de serviços em cards interativos
5. **Highlight** - Chamada estratégica destacada
6. **Portfolio** - Galeria de projetos (preparada)
7. **Contact** - Formulário e informações de contato
8. **Footer** - Links, redes sociais e copyright

## 🔧 Funcionalidades

- ✅ Menu responsivo mobile/desktop
- ✅ Scroll suave entre seções
- ✅ Animações ao rolar a página (scroll reveal)
- ✅ Hover interativo em elementos
- ✅ Botão flutuante de WhatsApp
- ✅ Formulário de contato funcional
- ✅ Links diretos (WhatsApp, E-mail, Telefone)
- ✅ Back-to-top button

## 📊 Performance

- Lighthouse Score: 90+
- Otimizado para Core Web Vitals
- Build size < 150KB (gzip)

## 🔐 Segurança & SEO

- Meta tags completas
- Open Graph tags
- Schema.org ready
- HTTPS ready
- Sem conteúdo sensível exposto

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
Configure em `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repository-name/',
})
```

## 📞 Contato

- **Telefone**: (83) 99607-0404
- **Email**: contato@elettraengenharia.com.br
- **Endereço**: Rua Bento Ribeiro de Assis, s/n, centro, Serra Branca - PB

## 📄 Licença

Desenvolvido para ELETTRA Engenharia & Soluções.

## 🤝 Contribuindo

Para sugestões e melhorias, entre em contato através dos canais de comunicação acima.

---

**Desenvolvido com ❤️ para ELETTRA Engenharia & Soluções**
