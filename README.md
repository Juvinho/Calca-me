# 👟 Calça-me

### O maior marketplace exclusivo para calçados!
**Compre, venda e descubra o tamanho perfeito para seus pés** ✨

[Explore](#-features) • [Instalar](#-instalação) • [Usar](#-como-usar) • [Contribuir](#-contribuindo)


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
npm run preview

# Limpar build
npm run clean
```

### Estrutura do Projeto
```
src/
├── pages/              # Páginas principais
│   ├── Explorar.tsx   # Browse & filtros (✨ Novo)
│   ├── Produto.tsx    # Detalhe do sapato
│   ├── Vender.tsx     # Criar anúncios (✨ Novo)
│   ├── MedirPe.tsx    # Medição inteligente (🐛 Corrigido)
│   ├── Carrinho.tsx   # Shopping cart
│   ├── Sobre.tsx      # Sobre nós
│   └── NotFound.tsx   # 404
│   ├── layout/        # Header, Footer, Layout
│   └── ui/            # ShoeCard, etc
├── lib/               # Utilidades
├── App.tsx            # Router principal

## ✅ Melhorias Recentes
- ✨ Filtros avançados com estado funcional
- ✨ Comparador de produtos (até 3)
- ✨ Vista grid/list alternável
- ✨ Recomendações personalizadas com localStorage
- ✨ Flash sales com contagem regressiva

### v0.1.0 - MVP Inicial
- Exploração com filtros básicos
- Medição de pés (3 métodos)
- Sistema de vendas com 4 etapas

## 🎨 Cores & Design
Paleta de cores custom:
- **Azul Primário**: `#0070F3`
- **Azul Escuro**: `#003DA5`
- **Azul Claro**: `#7FC3FC`

Veja `index.css` para o design system completo.

---

Adoraríamos sua contribuição! 
5. Abra um **Pull Request**
### Diretrizes
- Use TypeScript
- Siga o padrão de código existente
- Adicione tipos
- [ ] Backend API completa
- [ ] Sistema de autenticação
- [ ] Modo escuro
- [ ] Suporte a múltiplas idiomas
---
## 📄 Licença


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

>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
