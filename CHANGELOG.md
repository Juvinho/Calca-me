# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [0.2.0] - 2026-02-27

### ✨ Adicionado
- **Home Page Melhorada**
  - Seção "Em Alta" com produtos trending
  - Flash sales com countdown regressivo
  - Recomendações personalizadas com localStorage
  - Histórico de buscas memorizado
  - Seção "Visto Recentemente"

- **Explorar Avançado**
  - Filtros múltiplos e funcionais (tamanho, condição, marca, cor, preço)
  - Busca em tempo real por texto
  - Interface de busca por imagem (preparada)
  - Toggle vista Grid/List
  - **Comparador de sapatos** (até 3 produtos lado a lado)
  - Wishlist/Favoritos com persistência
  - Contagem dinâmica de filtros ativos

- **Vender Melhorado**
  - **Dashboard pessoal** com estatísticas de vendas
  - Histórico de anúncios com performance
  - Fluxo em 4 etapas (upload, detalhes, preview, publicação)
  - **Gerador de descrição com IA** (Gemini API)
  - Análise de preço com sugestões
  - Preview do anúncio antes de publicar

### 🐛 Corrigido
- **MedirPé**
  - Cursor animado do typewriter agora desaparece quando completa
  - Contador animado com float melhorado (easing suave)
  - Comparação de largura do pé consistente (lowercase)
  - Fallback para dimensões de confetti
  - Melhor tipagem de estado

### 📚 Documentação
- README.md completamente redesenhado
- Adicionado CONTRIBUTING.md com diretrizes
- Adicionado SETUP.md para facilitar onboarding
- Adicionado CODE_OF_CONDUCT.md
- Adicionado LICENSE (MIT)
- Adicionado CHANGELOG.md

### 🔧 Melhorias Técnicas
- package.json atualizado com metadata correto
- Melhor estrutura de tipos TypeScript
- Paleta de cores documentada
- Design system bem definido

## [0.1.0] - 2026-02-20

### ✨ Adicionado
- **MVP Completo**
  - Home page com hero dinâmico
  - Página Explorar com filtros básicos
  - Página Medir Pé com 3 métodos de medição
  - Página Vender com wizard de 2 etapas
  - Página Carrinho
  - Página Sobre
  - Design system com Tailwind CSS
  - Animações com Framer Motion
  - Ícones com Lucide React
  - Router com React Router v7
  - TypeScript para type safety

### 🎨 UI/UX
- Design premium com blur e gradients
- Animações fluidas e responsivas
- Componente ShoeCard reutilizável
- Tipografia customizada
- Paleta de cores própria
- Fully responsive design

### 🛠️ Stack Técnico
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router v7
- Express (setup)
- SQLite (setup)
- Google Generative AI

---

## Tipos de Mudanças

- **✨ Adicionado**: Novas features
- **🐛 Corrigido**: Bug fixes
- **🚀 Alterado**: Mudanças em features existentes
- **⚠️ Deprecado**: Features que serão removidas
- **🗑️ Removido**: Features removidas
- **🔒 Segurança**: Fixes de vulnerabilidades

---

## Versionamento

Este projeto segue [Semantic Versioning](https://semver.org/):
- **MAJOR**: mudanças incompatíveis na API
- **MINOR**: novas funcionalidades compatíveis
- **PATCH**: fixes de bugs compatíveis

---

## Plano Futuro 🗺️

### v0.3.0 (Próximo)
- [ ] Sistema de autenticação completo
- [ ] Backend API funcional
- [ ] Integração de pagamentos (Stripe/PIX)
- [ ] Chat entre vendedor/comprador
- [ ] Notificações em tempo real

### v1.0.0 (Produção)
- [ ] App mobile nativa (React Native)
- [ ] Modo escuro
- [ ] i18n (internacionalização)
- [ ] Search avançado com ElasticSearch
- [ ] Analytics e dashboards
- [ ] Moderação de conteúdo

### Roadmap Longo Prazo
- [ ] PWA com offline support
- [ ] WebAR para experimentar sapatos
- [ ] Integração com shipping
- [ ] Programa de fidelidade
- [ ] Marketplace de marcas

---

**[Ver todas as releases](https://github.com/Juvinho/Calca-me/releases)**
