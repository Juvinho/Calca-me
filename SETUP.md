# 🚀 Guia de Setup - Calça-me

Instruções passo a passo para colocar o Calça-me rodando na sua máquina.

## ✅ Pré-requisitos

Verifique se você tem instalado:

```bash
# Node.js v16+ e npm
node --version
npm --version
```

Se não tiver:
- 📥 Baixe em [nodejs.org](https://nodejs.org)
- Escolha LTS (recomendado)
- Siga o installer

## 📥 Instalação (5 minutos)

### 1. Clone o repositório

```bash
git clone https://github.com/Juvinho/Calca-me.git
cd Calca-me
```

### 2. Instale as dependências

```bash
npm install
```

*Isso vai instalar ~200 pacotes. Pode levar 1-3 minutos dependendo da conexão.*

### 3. Configure a API Key do Gemini

Este projeto usa Google Generative AI para gerar descrições de produtos com IA.

**Obter a API Key:**

1. Vá para [Google AI Studio](https://ai.google.dev/aistudio)
2. Clique em "Get API Key"
3. Selecione ou crie um projeto Google Cloud
4. Copie a API Key

**Configurar no projeto:**

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Abra .env.local e substitua:
# VITE_GEMINI_API_KEY=seu_api_key_aqui
```

Exemplo de .env.local:
```env
VITE_GEMINI_API_KEY=AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
APP_URL=http://localhost:3000
```

### 4. Inicie o servidor

```bash
npm run dev
```

Você deve ver:

```
  ➜  Local:   http://localhost:3000/
  ➜  press h + enter to show help
```

## 🌐 Acessando o App

Abra seu navegador e visite: **http://localhost:3000**

Pronto! 🎉

## 📦 Comandos Disponíveis

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Type checking (TypeScript)
npm run lint

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Limpar a pasta dist
npm run clean
```

## 🐛 Troubleshooting

### Erro: "Port 3000 already in use"

Mudança a porta no comando:
```bash
npm run dev -- --port 3001
```

### Erro: "Cannot find module '@google/genai'"

Reinstale as dependências:
```bash
rm -rf node_modules
npm install
```

### Erro: "VITE_GEMINI_API_KEY is not defined"

Certifique-se de que:
1. Arquivo `.env.local` existe na raiz do projeto
2. A variável está definida como `VITE_GEMINI_API_KEY=...`
3. Vite foi reiniciado após criar o .env.local

### A aplicação não carrega

1. Abra DevTools (F12)
2. Cheque a aba "Console" para erros
3. Cheque a aba "Network" para requisições que falharam
4. Reporte em [Issues](https://github.com/Juvinho/Calca-me/issues)

## 📁 Estrutura de Pastas Rapidão

```
Calça-me/
├── src/
│   ├── pages/          ← Páginas principais
│   ├── components/     ← Componentes reutilizáveis
│   ├── lib/           ← Utilitários
│   └── App.tsx        ← Roteamento
├── public/            ← Arquivos estáticos
├── .env.example       ← Template de variáveis
├── package.json       ← Dependências
├── tsconfig.json      ← TypeScript config
├── tailwind.config.js ← Tailwind CSS config
├── vite.config.ts     ← Vite config
└── README.md          ← Este arquivo
```

## 🎨 Entendendo o Design

O projeto usa:

- **Tailwind CSS** para styling
- **Framer Motion** para animações
- **Lucide React** para ícones
- **Paleta de cores**: Azul primário com tons neutros

Veja `src/index.css` para a configuração de cores.

## 🚀 Próximos Passos

1. Explore as páginas:
   - Home (`/`)
   - Explorar (`/explorar`)
   - Medir Pé (`/medir-pe`)
   - Vender (`/vender`)

2. Leia o [README.md](./README.md) para features detalhadas

3. Veja o [CONTRIBUTING.md](./CONTRIBUTING.md) se quiser contribuir

## 💡 Dicas de Desenvolvimento

### Hot Module Reloading
Toda vez que você salva um arquivo, o navegador atualiza automaticamente. Zero configuração!

### DevTools
Use React DevTools Chrome Extension para inspecionar componentes.

### TypeScript
O projeto força tipos. Se houver erros:
```bash
npm run lint
```

### Componentes Reutilizáveis
Sempre que criar um componente novo, considere se pode ser reutilizado em outro lugar.

## 📚 Recursos Úteis

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Vite Guide](https://vitejs.dev/guide/)

## ❓ Dúvidas?

- 💬 Abra uma [Discussion](https://github.com/Juvinho/Calca-me/discussions)
- 🐛 Relate um bug em [Issues](https://github.com/Juvinho/Calca-me/issues)
- 📧 Email: contato@calca-me.com

---

**Bem-vindo ao Calça-me! 👟✨**
