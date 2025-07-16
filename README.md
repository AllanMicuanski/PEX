# 🌐 Sizebay PEX - Multilingual Landing Page

<div align="center">
  <h3>Página de demonstração da Sizebay com suporte multilíngue e componentes interativos</h3>
  <p>Built with React + Vite + i18next</p>
</div>

---

## 📋 Sobre o Projeto

Este é um projeto de landing page desenvolvido para demonstrar as soluções da Sizebay, uma empresa especializada em tecnologia para redução de devoluções no e-commerce de moda. A página apresenta a história da empresa, casos de sucesso, provador virtual e informações de contato.

**Principais funcionalidades:**

- **ChatBot Inteligente**: Assistente virtual multilíngue com detecção de intenção, qualificação de leads e navegação automática
- **Sistema de Internacionalização Completo**: Suporte a 8 idiomas com mudança dinâmica em tempo real
- **Provador Virtual Interativo**: Demonstração das tecnologias da Sizebay
- **FAQ Integrado**: Sistema de perguntas e respostas multilíngue
- **Interface Responsiva**: Otimizada para todos os dispositivos

### ✨ Características Principais

- 🌍 **Suporte Multilíngue**: 8 idiomas suportados (PT, EN, ES, IT, FR, DE, JP, CH)
- 🤖 **ChatBot Inteligente**: Assistente virtual multilíngue com detecção de intenção
- 📱 **Design Responsivo**: Otimizado para desktop, tablet e mobile
- 🎯 **Componentes Interativos**: Provador virtual, carrossel de clientes, modais
- ⚡ **Performance**: Built com Vite para desenvolvimento rápido
- 🎨 **UI/UX Moderna**: Interface limpa e intuitiva
- 🔄 **Mudança de Idioma Dinâmica**: Todos os componentes reagem instantaneamente

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server ultrarrápido
- **i18next** - Framework de internacionalização completa
- **react-i18next** - Bindings do i18next para React
- **Swiper** - Carrossel moderno e responsivo
- **CSS3** - Estilização avançada com flexbox e grid
- **React DOM** - Renderização de componentes
- **Lucide React** - Ícones modernos e customizáveis

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
│   ├── chatbot/         # ChatBot inteligente multilíngue
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

### ChatBot

- **Assistente virtual inteligente** com suporte a 8 idiomas
- **Detecção de intenção** para palavras-chave específicas
- **Qualificação de leads** com coleta de dados
- **Navegação automática** para seções relevantes
- **Respostas contextuais** baseadas no conteúdo do site
- **Interface moderna** com animações e emoji
- **Suporte completo a FAQ** com respostas dinâmicas

### Footer

- Seletor de idioma customizado
- Links importantes
- Informações de copyright

## 🤖 ChatBot Inteligente

O projeto inclui um chatbot avançado e multilíngue com as seguintes funcionalidades:

### Características do ChatBot

- **🌍 Multilíngue**: Suporta todos os 8 idiomas do site
- **🧠 Detecção de Intenção**: Reconhece palavras-chave específicas em cada idioma
- **📋 Qualificação de Leads**: Coleta dados de potenciais clientes
- **🔗 Navegação Inteligente**: Redireciona automaticamente para seções relevantes
- **❓ FAQ Integrado**: Responde perguntas baseadas no conteúdo do site
- **🎨 Interface Moderna**: Design responsivo com animações suaves

### Funcionalidades Avançadas

#### Sistema de Palavras-chave

O chatbot detecta intenções através de palavras-chave específicas para cada idioma:

```javascript
// Exemplo de palavras-chave em português
"purchase": ["preço", "valor", "orçamento", "contratar", "demo"],
"provador_virtual": ["provador", "virtual", "size", "fit", "tamanho"],
"integracao": ["integra", "instala", "implementa", "javascript", "api"]
```

#### Qualificação de Leads

Processo automatizado para captura de informações:

1. Detecção de interesse comercial
2. Coleta de nome, email e telefone
3. Identificação do tipo de negócio
4. Encaminhamento para equipe comercial

#### Navegação Contextual

- Redirecionamento automático para seções relevantes
- Links diretos para FAQ, casos de sucesso, contato
- Abertura de modais do provador virtual

### Como Usar o ChatBot

O chatbot é inicializado automaticamente e reage a:

- Saudações em qualquer idioma
- Perguntas sobre produtos e serviços
- Solicitações de demonstração
- Dúvidas técnicas sobre integração
- Interesse em casos de sucesso

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
  "footer": { /* Rodapé */ },
  "faq": { /* Perguntas frequentes */ },
  "chatbot": {
    /* ChatBot multilíngue com:
       - Mensagens e saudações
       - Botões de ação
       - Respostas contextuais
       - Palavras-chave por idioma
       - Mensagens de erro/sistema
    */
  }
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

### Contribuindo com o Código

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Contribuindo com Traduções

Para adicionar ou melhorar traduções:

1. **Adicione novos idiomas**:

   - Crie um novo arquivo JSON em `src/i18n/`
   - Siga a estrutura dos arquivos existentes
   - Inclua todas as seções: `menu`, `hero`, `about`, `clients`, `vfr`, `contact`, `footer`, `faq`, `chatbot`

2. **Melhorar traduções existentes**:

   - Revise os arquivos JSON existentes
   - Foque especialmente na seção `chatbot` que contém palavras-chave específicas do idioma
   - Teste o comportamento do chatbot no idioma alterado

3. **Estrutura obrigatória para ChatBot**:
   ```json
   "chatbot": {
     "greeting": "Mensagem inicial",
     "greetings": { "hello": "...", "hi": "...", "welcome": "..." },
     "buttons": { /* botões de ação */ },
     "responses": { /* respostas contextuais */ },
     "keywords": {
       "purchase": ["palavra1", "palavra2"],
       "provador_virtual": ["palavra1", "palavra2"],
       // ... outras categorias
     }
   }
   ```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **Allan Micuanski** - Desenvolvimento e Internacionalização

---

<div align="center">
  <p>Feito com ❤️ para demonstrar as soluções da Sizebay</p>
  <p>🌐 <strong>Reducing returns, increasing confidence</strong></p>
</div>
