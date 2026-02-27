# 🤝 Guia de Contribuição - Calça-me

Obrigado por considerar contribuir com o Calça-me! Este documento fornece diretrizes e instruções para contribuir com o projeto.

## 📋 Código de Conduta

Por favor, note que este projeto é lançado com um [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar deste projeto, você concorda em cumprir seus termos.

## 🚀 Como Contribuir

### 1. Reportando Bugs

Antes de criar um relatório de bug, por favor:
- Verifique se o bug já foi reportado em [Issues](https://github.com/Juvinho/Calca-me/issues)
- Tente reproduzir o bug em um ambiente limpo
- Colete informações relevantes (navegador, OS, versão do Node.js)

**Para reportar um bug, abra uma [Issue](https://github.com/Juvinho/Calca-me/issues/new) com:**
```markdown
**Descrição do Bug:**
Uma descrição clara e concisa do que é o bug.

**Passos para Reproduzir:**
1. Vá para '...'
2. Clique em '....'
3. Role para baixo até '....'
4. Veja o erro

**Comportamento Esperado:**
Um descrição clara do que deveria acontecer.

**Screenshots:**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [ex: Windows 10]
- Navegador: [ex: Chrome 120]
- Node.js: [ex: v18.17.0]
```

### 2. Sugerindo Enhancements

Para sugerir uma melhoria:
- Use um título claro e descritivo
- Forneça uma descrição clara do comportamento esperado
- Liste exemplos específicos para demonstrar as etapas

### 3. Pull Requests

**Passos para enviar um Pull Request:**

1. **Fork** o repositório
   ```bash
   git clone https://github.com/seu-usuario/Calca-me.git
   cd Calca-me
   ```

2. Crie uma branch para sua feature
   ```bash
   git checkout -b feature/sua-feature-descritiva
   ```

3. Faça suas mudanças seguindo os padrões do projeto

4. Commit suas mudanças
   ```bash
   git commit -m 'Add: descrição significativa da mudança'
   ```

5. Push para sua fork
   ```bash
   git push origin feature/sua-feature-descritiva
   ```

6. Abra um Pull Request com:
   - Título claro
   - Descrição detalhada das mudanças
   - Link para issues relacionadas (se houver)
   - Screenshots/vídeos (se UI for alterada)

---

## 📝 Padrões de Código

### TypeScript
- Sempre use tipos explícitos
- Evite `any`
- Use interfaces para props dos componentes

```typescript
interface ShoeCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

export function ShoeCard({ id, title, price, image }: ShoeCardProps) {
  // ...
}
```

### React Components
- Componentes funcionais com Hooks
- Use `const` em vez de `function` (exceto para tipos)
- Componentes no padrão PascalCase

```typescript
export function MyComponent() {
  const [state, setState] = useState("");
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Styling
- Use Tailwind CSS
- Prefira `cn()` do `clsx` para classes condicionais
- Mantenha a consistência com a paleta de cores definida

```typescript
<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)}>
```

### Nomes No Git
- Feature: `feature/descricao-clara`
- Fix: `fix/descricao-do-bug`
- Docs: `docs/descricao`
- Style: `style/descricao`

### Commit Messages
```
<tipo>: <descrição curta>

<descrição detalhada se necessário>

Closes #<número-da-issue>
```

**Tipos válidos:**
- `feat`: Nova feature
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, sem mudança de lógica
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Adicionando testes
- `chore`: Atualizações de dependências

---

## 🔍 Checklist Antes de Enviar PR

- [ ] Seu código segue os padrões de estilo deste projeto
- [ ] Você rodou `npm run lint` ao menos uma vez
- [ ] Você criou/atualizou testes (se aplicável)
- [ ] Você atualizou a documentação (se necessário)
- [ ] Você testou em navegadores diferentes
- [ ] Seu branch está atualizado com `main`
- [ ] Você não adicionou dependências desnecessárias
- [ ] Você removeu código de debug

---

## 📚 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar dev server
npm run dev

# Type checking
npm run lint

# Build
npm run build

# Preview build
npm run preview
```

---

## 🎯 Área de Foco

Trabalhando em qual área? Aqui estão as prioridades:

- 🔴 **Crítico**: Backend API, Sistema de pagamento
- 🟠 **Alto**: Autenticação, Chat, Notificações
- 🟡 **Médio**: Modo escuro, Internacionalização
- 🟢 **Baixo**: UI Polish, Micro-interações

---

## ❓ Dúvidas?

- 📧 Email: contato@calca-me.com
- 💬 [Discussions](https://github.com/Juvinho/Calca-me/discussions)
- 📖 [Documentação](./README.md)

---

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença MIT do projeto.

---

**Obrigado por contribuir! 🙌**
