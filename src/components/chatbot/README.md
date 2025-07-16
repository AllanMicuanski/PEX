# 🤖 ChatBot Avançado - Sizebay

## Funcionalidades Implementadas

### 🎯 **1. Navegação Inteligente e Respostas Contextuais**

- **Identificação de Intenção:** O chatbot identifica automaticamente a intenção do usuário baseado em palavras-chave
- **Opções de Aprofundamento:** Para perguntas amplas, oferece opções específicas de navegação
- **Links Diretos:** Fornece navegação direta para seções do site (usando smooth scroll)
- **Sugestão Proativa de Cases:** Sugere cases de sucesso baseados no segmento mencionado

### 🔍 **2. Intenções Suportadas**

- `provador_virtual` - Informações sobre o provador virtual
- `como_funciona` - Explicações sobre funcionamento
- `segmentos` - Tipos de produtos/segmentos atendidos
- `calçados` - Específico para calçados
- `integracao` - Integração técnica
- `tempo_implantacao` - Prazos de implementação
- `plataformas` - Plataformas de e-commerce suportadas
- `cases` - Cases de sucesso
- `contato` - Informações de contato
- `sobre` - Sobre a empresa
- `saudacao/despedida` - Cumprimentos
- `ajuda` - Suporte geral

### 💼 **3. Qualificação de Leads e Agendamento**

- **Detecção Automática:** Identifica intenções de compra/contato através de palavras-chave:
  - "preço", "valor", "orçamento", "contratar", "demonstração", "demo", "falar com vendas"
- **Fluxo de Coleta:** Processo estruturado em 4 etapas:
  1. Nome
  2. Email
  3. Telefone
  4. Tipo de loja
- **Confirmação:** Mensagem de confirmação com resumo dos dados coletados

### 🛠️ **4. Suporte Contextualizado**

- **Provador Virtual:** Oferece opções diretas para testar o provador
- **Navegação Assistida:** Links diretos para seções relevantes
- **Cases Específicos:** Sugere cases baseados no segmento mencionado

### 🔄 **5. Gestão de Respostas Não Identificadas**

- **Sistema de Tentativas:** Após 1-2 tentativas não identificadas:
  - Oferece contato humano
  - Opção de reformular pergunta
  - Mostra FAQ resumido
- **Fallback Inteligente:** Respostas padrão contextualizadas

## 🎨 **Interface e UX**

### **Botões de Opções Interativas**

- Cada resposta do bot pode incluir botões de ação
- Design responsivo com gradientes
- Hover effects e animações suaves

### **Estados Visuais**

- Mensagens normais (azul/branco)
- Mensagens de qualificação (verde)
- Indicadores de carregamento

## 📊 **Integração com Dados**

### **FAQ Dinâmico**

- Utiliza o arquivo `pt.json` para respostas contextuais
- Acesso a informações de:
  - FAQ completo (`faqData.faq.questions`)
  - Cases de sucesso (`faqData.clients`)
  - Informações da empresa (`faqData.about`)
  - Dados de contato (`faqData.contact`)

### **Cases de Sucesso Disponíveis**

- **Lanidor:** Marca portuguesa
- **Miik:** Loja canadense (+202% ticket médio)
- **Bunnies JR:** Moda infantil
- **Intimissimi:** Lingerie
- **Osklen:** Ticket médio +19%

## 🔧 **Implementação Técnica**

### **Hooks Utilizados**

- `useState`: Estados das mensagens e contexto do usuário
- `useRef`: Referência para scroll automático
- `useEffect`: Auto-scroll para novas mensagens

### **Estado do Contexto**

```javascript
userContext: {
  isQualifying: boolean,     // Se está em processo de qualificação
  qualificationStep: number, // Etapa atual (1-4)
  userData: object,          // Dados coletados do lead
  lastIntent: string,        // Última intenção identificada
  unansweredAttempts: number // Tentativas não compreendidas
}
```

### **Sistema de Ações**

- `navigate`: Navegação para seções do site
- `more_info`: Informações adicionais
- `qualify_lead`: Inicia qualificação
- `human_contact`: Solicita contato humano
- `restart`: Reinicia conversa
- `show_faq`: Mostra FAQ resumido

## 🚀 **Como Usar**

1. **Importação:** O componente está integrado ao `App.jsx`
2. **Dados:** Utiliza automaticamente o arquivo `pt.json` para contexto
3. **Navegação:** Usa smooth scroll para navegar entre seções
4. **Leads:** Os dados coletados são logados no console (prontos para integração com CRM)

## 📱 **Responsividade**

- **Desktop:** Janela 350px, botões organizados verticalmente
- **Tablet:** Janela 320px adaptativa
- **Mobile:** Janela full-screen, interface otimizada

## 🔮 **Funcionalidades Futuras**

- Integração com CRM/API para leads
- Indicador de "digitando..."
- Histórico persistente entre sessões
- Suporte a múltiplos idiomas
- Analytics de conversas
- Webhook para notificações de leads

---

**Desenvolvido para a Sizebay** - Sistema de chatbot inteligente com foco em conversão e experiência do usuário.
