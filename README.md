<div align="center">

# 👟 Calça-me

### O maior marketplace exclusivo para calçados!
**Compre, venda e descubra o tamanho perfeito para seus pés** ✨

[Explore](#-features) • [Instalar](#-instalação) • [Usar](#-como-usar) • [Contribuir](#-contribuindo)

</div>

---

## 📸 Visão Geral

**Calça-me** é uma plataforma SaaS moderna para compra e venda de sapatos com foco em UX excepcional e recursos inteligentes powered by IA. Desde medição interativa de pés até recomendações personalizadas, oferecemos a melhor experiência de shopping para amantes de calçados.

> 🚀 **Status**: Em desenvolvimento ativo | MVP completo com recursos avançados

---

## ✨ Features

### 🏠 **Home Page**
- ✅ Hero com animação dinâmica e carrossel de produtos
- ✅ Recomendações personalizadas baseadas em histórico
- ✅ Flash sales com contador regressivo
- ✅ Histórico de buscas (persistente no localStorage)
- ✅ Seção "Visto Recentemente"

### 🔍 **Exploração Avançada**
- ✅ Busca em tempo real por texto
- ✅ Busca por imagem (interface preparada)
- ✅ Filtros múltiplos e funcionais:
  - Por tamanho (38-44)
  - Por condição (Novo, Seminovo, Usado)
  - Por marca (Nike, Adidas, Vans, Puma, etc.)
  - Por cor com seletor visual
  - Por faixa de preço
- ✅ Toggle entre vista Grid/List
- ✅ **Comparador de produtos** (até 3 sapatos lado a lado)
- ✅ Wishlist/Favoritos

### 👟 **Medição Inteligente de Pés** 
- ✅ 3 métodos de medição:
  - 📱 Câmera AR (simulação)
  - 📏 Régua Digital (simulação)
  - ✍️ Medição Manual com inputs
- ✅ Conversão automática de tamanhos (BR, US, EU, CM)
- ✅ Animações fluidas com Confetti ao resultado
- ✅ Histórico de medições (pronto para persister)

### 💰 **Vender Sapatos**
- ✅ Dashboard pessoal com estatísticas:
  - Total vendido
  - Ganhos totais
  - Visualizações
  - Avaliações
- ✅ Histórico de anúncios
- ✅ Fluxo de criação em 4 etapas:
  1. Upload de fotos
  2. Preenchimento de detalhes
  3. **Preview do anúncio**
  4. Publicação
- ✅ **Gerador de descrição com IA** (Gemini API)
- ✅ Análise inteligente de preço

### 🎨 **UI/UX Premium**
- ✅ Design system próprio com Tailwind CSS
- ✅ Animações smooth com Framer Motion
- ✅ Efeitos visuais (blur, gradients, particles)
- ✅ Componentes reutilizáveis
- ✅ Fully responsive (mobile-first)

---

## 🛠️ Stack Técnico

### Frontend
- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool rápido
- **Tailwind CSS** - Styling
- **Framer Motion** - Animações
- **React Router v7** - Navegação
- **Lucide React** - Ícones

### AI & Backend
- **Google Generative AI** - Gemini API para descrições
- **Express** - Server (pronto para APIs)
- **SQLite** (better-sqlite3) - Banco de dados

### DevOps
- **TypeScript Compiler** - Type checking
- **Vite Preview** - Production build

---

## 📦 Instalação

### Pré-requisitos
- **Node.js** 16+ 
- **npm** ou **yarn**
- **Gemini API Key** (Google AI)

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/Juvinho/Calca-me.git
cd Calca-me
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local`:
```env
VITE_GEMINI_API_KEY=seus_api_key_aqui
```

Ou copie do exemplo:
```bash
cp .env.example .env.local
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

Acesse: **http://localhost:3000**

---

## 🚀 Como Usar

### Desenvolvimento
```bash
# Dev server
npm run dev

# Type checking
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview

# Limpar build
npm run clean
```

### Estrutura do Projeto
```
src/
├── pages/              # Páginas principais
│   ├── Home.tsx       # Landing page (✨ Novo)
│   ├── Explorar.tsx   # Browse & filtros (✨ Novo)
│   ├── Produto.tsx    # Detalhe do sapato
│   ├── Vender.tsx     # Criar anúncios (✨ Novo)
│   ├── MedirPe.tsx    # Medição inteligente (🐛 Corrigido)
│   ├── Carrinho.tsx   # Shopping cart
│   ├── Sobre.tsx      # Sobre nós
│   └── NotFound.tsx   # 404
├── components/        # Componentes reutilizáveis
│   ├── layout/        # Header, Footer, Layout
│   └── ui/            # ShoeCard, etc
├── lib/               # Utilidades
├── App.tsx            # Router principal
├── main.tsx           # Entry point
└── index.css          # Estilos globais
```

---

## ✅ Melhorias Recentes

### v0.2.0 - Home, Explorar & Vendas (Feb 27, 2026)
- ✨ Dashboard completo de vendas pessoais
- ✨ Filtros avançados com estado funcional
- ✨ Comparador de produtos (até 3)
- ✨ Vista grid/list alternável
- ✨ Recomendações personalizadas com localStorage
- ✨ Flash sales com contagem regressiva
- 🐛 Tipagem melhorada em MedirPé
- 🐛 Correção de animações (cursor, counter)
- 🐛 Fallback para dimensões de confetti

### v0.1.0 - MVP Inicial
- Página Home com hero dinâmico
- Exploração com filtros básicos
- Medição de pés (3 métodos)
- Sistema de vendas com 4 etapas
- Design system completo

---

## 🎨 Cores & Design

Paleta de cores custom:
- **Azul Primário**: `#0070F3`
- **Azul Escuro**: `#003DA5`
- **Azul Claro**: `#7FC3FC`
- **Azul Gelo**: `#E6F2FF`
- **Branco Off**: `#F5F5F5`

Veja `index.css` para o design system completo.

---

## 🤝 Contribuindo

Adoraríamos sua contribuição! 

1. **Fork** o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Diretrizes
- Use TypeScript
- Siga o padrão de código existente
- Adicione tipos
- Teste em mobile
- Componentes devem ser reutilizáveis

---

## 📝 Roadmap

- [ ] Backend API completa
- [ ] Sistema de autenticação
- [ ] Pagamentos (Stripe/PIX)
- [ ] Chat entre vendedor/comprador
- [ ] Notificações push
- [ ] Modo escuro
- [ ] Suporte a múltiplas idiomas
- [ ] App mobile nativa

---

## 📄 Licença

MIT © 2026 [Juvinho](https://github.com/Juvinho)

---

## 💬 Suporte

Tem dúvidas ou encontrou um bug?
- 📧 Email: contato@calca-me.com
- 🐛 [Issues](https://github.com/Juvinho/Calca-me/issues)
- 💬 [Discussions](https://github.com/Juvinho/Calca-me/discussions)

---

<div align="center">

### Made with ❤️ for shoe lovers 👟

⭐ Se gostou, deixe uma estrela! | [Visite nosso site](#) | [Siga no Twitter](#)

</div>
