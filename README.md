# 🌐 Sizebay PEX - Multilingual Landing Page

<div align="center">
  <h3>Página de demonstração da Sizebay com suporte multilíngue e componentes interativos</h3>
  <p>Built with React + Vite + i18next</p>
</div>

---

## 📋 Sobre o Projeto

Este é um projeto de landing page desenvolvido para demonstrar as soluções da Sizebay, uma empresa especializada em tecnologia para redução de devoluções no e-commerce de moda. A página apresenta a história da empresa, casos de sucesso, provador virtual e informações de contato.

### ✨ Características Principais

- 🌍 **Suporte Multilíngue**: 8 idiomas suportados (PT, EN, ES, IT, FR, DE, JP, CH)
- 📱 **Design Responsivo**: Otimizado para desktop, tablet e mobile
- 🎯 **Componentes Interativos**: Provador virtual, carrossel de clientes, modais
- ⚡ **Performance**: Built com Vite para desenvolvimento rápido
- 🎨 **UI/UX Moderna**: Interface limpa e intuitiva

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server ultrarrápido
- **i18next** - Framework de internacionalização
- **Swiper** - Carrossel moderno e responsivo
- **CSS3** - Estilização avançada com flexbox e grid
- **React DOM** - Renderização de componentes

## 🌐 Idiomas Suportados

| Código | Idioma    | Status      |
| ------ | --------- | ----------- |
| `pt`   | Português | ✅ Completo |
| `en`   | English   | ✅ Completo |
| `es`   | Español   | ✅ Completo |
| `it`   | Italiano  | ✅ Completo |
| `fr`   | Français  | ✅ Completo |
| `de`   | Deutsch   | ✅ Completo |
| `jp`   | 日本語    | ✅ Completo |
| `ch`   | 中文      | ✅ Completo |

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── header/          # Cabeçalho com navegação
│   ├── hero/            # Seção principal
│   ├── about/           # Sobre a empresa
│   ├── howWork/         # Como funciona
│   ├── clients/         # Cases de sucesso
│   ├── contact/         # Informações de contato
│   ├── vfr/             # Provador virtual
│   │   └── szbbtn/      # Botões do provador
│   ├── footer/          # Rodapé com seletor de idioma
│   ├── tape-left/       # Elementos decorativos
│   └── tape-right/      # Elementos decorativos
├── i18n/
│   ├── i18n.js          # Configuração do i18next
│   ├── pt.json          # Traduções em português
│   ├── en.json          # Traduções em inglês
│   └── ...              # Outros idiomas
└── assets/              # Imagens e recursos
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos para executar

1. **Clone o repositório**

```bash
git clone <repository-url>
cd PEX
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto em desenvolvimento**

```bash
npm run dev
```

4. **Acesse no navegador**

```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa verificação de código

## 🎯 Componentes Principais

### Header

- Navegação responsiva com menu hamburger
- Seleção de idioma integrada
- Links de ancoragem para seções

### Hero

- Seção de impacto com animações
- Mensagem principal multilíngue
- Call-to-action destacado

### About

- História da empresa
- Valores e missão
- Presença global

### Clients

- Carrossel de cases de sucesso
- Cards interativos com links
- Responsive design

### VFR (Virtual Fitting Room)

- Demonstração do provador virtual
- Botões interativos com modais
- Integração com APIs da Sizebay

### Footer

- Seletor de idioma customizado
- Links importantes
- Informações de copyright

## 🌍 Sistema de Internacionalização

O projeto utiliza `react-i18next` para gerenciar traduções:

### Estrutura das Traduções

```javascript
{
  "menu": { /* Navegação */ },
  "hero": { /* Seção principal */ },
  "about": { /* Sobre a empresa */ },
  "clients": { /* Cases de sucesso */ },
  "vfr": { /* Provador virtual */ },
  "contact": { /* Contato */ },
  "footer": { /* Rodapé */ }
}
```

### Como Usar

```jsx
import { useTranslation } from "react-i18next";

function Component() {
  const { t } = useTranslation();
  return <h1>{t("hero.title")}</h1>;
}
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **Allan Micuanski** - Desenvolvimento e Internacionalização

---

<div align="center">
  <p>Feito com ❤️ para demonstrar as soluções da Sizebay</p>
  <p>🌐 <strong>Reducing returns, increasing confidence</strong></p>
</div>
