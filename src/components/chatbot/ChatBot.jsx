import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import faqData from '../../i18n/pt.json';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Sou o assistente virtual da Sizebay. Como posso ajudá-lo hoje?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [userContext, setUserContext] = useState({
    isQualifying: false,
    qualificationStep: 0,
    userData: {},
    lastIntent: null,
    unansweredAttempts: 0
  });
  const messagesEndRef = useRef(null);

  // Auto scroll para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sistema avançado de respostas com navegação inteligente e qualificação de leads
  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Se estiver no processo de qualificação de leads
    if (userContext.isQualifying) {
      return handleLeadQualification(userMessage);
    }
    
    // Detecção de intenção de compra/contato - inicia qualificação
    if (detectsPurchaseIntent(message)) {
      return startLeadQualification();
    }
    
    // Identificação de intenções específicas
    const intent = identifyIntent(message);
    
    switch (intent) {
      case 'provador_virtual':
        return handleProvadorVirtualIntent(message);
      
      case 'como_funciona':
        return handleComoFuncionaIntent(message);
      
      case 'segmentos':
        return handleSegmentosIntent(message);
      
      case 'calçados':
        return handleCalcadosIntent();
      
      case 'integracao':
        return handleIntegracaoIntent();
      
      case 'tempo_implantacao':
        return handleTempoImplantacaoIntent();
      
      case 'plataformas':
        return handlePlataformasIntent();
      
      case 'cases':
        return handleCasesIntent(message);
      
      case 'contato':
        return handleContatoIntent();
      
      case 'sobre':
        return handleSobreIntent();
      
      case 'saudacao':
        return handleSaudacaoIntent();
      
      case 'despedida':
        return handleDespedidaIntent();
      
      case 'ajuda':
        return handleAjudaIntent();
      
      default:
        return handleUnknownIntent(message);
    }
  };

  // Detecta intenção de compra ou contato comercial
  const detectsPurchaseIntent = (message) => {
    const purchaseKeywords = [
      'preço', 'valor', 'orçamento', 'contratar', 'demonstração', 
      'demo', 'falar com vendas', 'contato comercial', 'planos',
      'quanto custa', 'solicitar', 'agendar'
    ];
    return purchaseKeywords.some(keyword => message.includes(keyword));
  };

  // Identifica a intenção principal da mensagem
  const identifyIntent = (message) => {
    const intentMap = {
      'provador_virtual': ['provador', 'virtual', 'size', 'fit', 'tamanho', 'medida'],
      'como_funciona': ['como funciona', 'funcionamento', 'como usar', 'como utilizar'],
      'segmentos': ['segmento', 'atende', 'tipo', 'categoria', 'vestuário', 'roupa'],
      'calçados': ['calçado', 'sapato', 'tênis', 'sandália', 'bota', 'chinelo', 'pé'],
      'integracao': ['integra', 'instala', 'implementa', 'javascript', 'api', 'xml'],
      'tempo_implantacao': ['tempo', 'prazo', 'implementação', 'implantação', 'quanto tempo'],
      'plataformas': ['plataforma', 'vtex', 'shopify', 'magento', 'nuvemshop', 'woocommerce'],
      'cases': ['case', 'sucesso', 'cliente', 'resultado', 'lanidor', 'miik', 'bunnies', 'intimissimi', 'osklen'],
      'contato': ['contato', 'telefone', 'email', 'falar', 'conversar'],
      'sobre': ['sobre', 'empresa', 'história', 'quem', 'sizebay'],
      'saudacao': ['olá', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'hey'],
      'despedida': ['tchau', 'obrigado', 'valeu', 'até logo', 'bye'],
      'ajuda': ['ajuda', 'suporte', 'problema', 'dúvida', 'não entendi']
    };

    for (const [intent, keywords] of Object.entries(intentMap)) {
      if (keywords.some(keyword => message.includes(keyword))) {
        return intent;
      }
    }
    return 'unknown';
  };

  // Handlers para cada intenção específica
  const handleProvadorVirtualIntent = (message) => {
    if (message.includes('calçado') || message.includes('sapato') || message.includes('tênis')) {
      return {
        text: faqData.faq.questions[3].answer + "\n\n🔗 Quer testar? Visite nossa seção de Provador Virtual!",
        options: [
          { text: "Abrir Provador Virtual", action: "navigate", target: "#vfr" },
          { text: "Ver Tabela de Medidas", action: "navigate", target: "#vfr" },
          { text: "Como funciona para roupas?", action: "more_info", data: "vestuario" }
        ]
      };
    } else {
      return {
        text: faqData.faq.questions[0].answer + "\n\n💡 Para te ajudar melhor, você gostaria de saber:",
        options: [
          { text: "Como funciona para roupas?", action: "more_info", data: "vestuario" },
          { text: "Como funciona para calçados?", action: "more_info", data: "calcados" },
          { text: "Como integrar na minha loja?", action: "more_info", data: "integracao" },
          { text: "Ver demonstração", action: "navigate", target: "#vfr" }
        ]
      };
    }
  };

  const handleComoFuncionaIntent = (message) => {
    return {
      text: faqData.faq.questions[2].answer + "\n\n🎯 Quer ver na prática?",
      options: [
        { text: "Ver demonstração", action: "navigate", target: "#vfr" },
        { text: "Como funciona para calçados?", action: "more_info", data: "calcados" },
        { text: "Solicitar demonstração personalizada", action: "qualify_lead" }
      ]
    };
  };

  const handleSegmentosIntent = (message) => {
    let response = faqData.faq.questions[1].answer;
    
    // Sugere cases específicos baseado no segmento mencionado
    if (message.includes('infantil') || message.includes('criança')) {
      response += `\n\n👶 **Case de Sucesso:** ${faqData.clients.bunnies.title} - ${faqData.clients.bunnies.text}`;
    } else if (message.includes('íntimo') || message.includes('lingerie')) {
      response += `\n\n👙 **Case de Sucesso:** ${faqData.clients.intimissimi.title} - ${faqData.clients.intimissimi.text}`;
    }
    
    return {
      text: response + "\n\n📈 Quer ver mais cases de sucesso?",
      options: [
        { text: "Ver todos os cases", action: "navigate", target: "#clients" },
        { text: "Solicitar demonstração", action: "qualify_lead" }
      ]
    };
  };

  const handleCalcadosIntent = () => {
    return {
      text: faqData.faq.questions[3].answer + "\n\n👟 Quer testar nosso provador de calçados?",
      options: [
        { text: "Testar Provador Virtual", action: "navigate", target: "#vfr" },
        { text: "Como funciona para roupas?", action: "more_info", data: "vestuario" }
      ]
    };
  };

  const handleIntegracaoIntent = () => {
    return {
      text: faqData.faq.questions[6].answer + "\n\n🔧 Precisa de mais detalhes técnicos?",
      options: [
        { text: "Ver plataformas compatíveis", action: "more_info", data: "plataformas" },
        { text: "Falar com equipe técnica", action: "qualify_lead" },
        { text: "Quanto tempo demora?", action: "more_info", data: "tempo" }
      ]
    };
  };

  const handleTempoImplantacaoIntent = () => {
    return {
      text: faqData.faq.questions[7].answer + "\n\n⚡ Quer acelerar o processo?",
      options: [
        { text: "Agendar demonstração", action: "qualify_lead" },
        { text: "Ver plataformas nativas", action: "more_info", data: "plataformas" }
      ]
    };
  };

  const handlePlataformasIntent = () => {
    return {
      text: faqData.faq.questions[9].answer + "\n\n🛒 Sua plataforma não está na lista?",
      options: [
        { text: "Verificar compatibilidade", action: "qualify_lead" },
        { text: "Ver integração personalizada", action: "more_info", data: "integracao" }
      ]
    };
  };

  const handleCasesIntent = (message) => {
    let response = "🏆 **Nossos Cases de Sucesso:**\n\n";
    
    // Se menciona uma marca específica
    if (message.includes('lanidor')) {
      response += `${faqData.clients.lanidor.title}: ${faqData.clients.lanidor.text}`;
    } else if (message.includes('miik')) {
      response += `${faqData.clients.miik.title}: ${faqData.clients.miik.text}`;
    } else {
      // Lista todos os cases
      Object.entries(faqData.clients).forEach(([key, client]) => {
        if (typeof client === 'object' && client.title) {
          response += `• **${client.title}:** ${client.text}\n`;
        }
      });
    }
    
    return {
      text: response + "\n\n📊 Quer saber como podemos ajudar sua loja?",
      options: [
        { text: "Ver cases completos", action: "navigate", target: "#clients" },
        { text: "Solicitar demonstração", action: "qualify_lead" }
      ]
    };
  };

  const handleContatoIntent = () => {
    return {
      text: `📞 **Formas de Contato:**\n\n• ${faqData.contact.email}\n• ${faqData.contact.site}\n• Demonstração: ${faqData.contact.store}\n\n💬 Ou continue conversando comigo aqui no chat!`,
      options: [
        { text: "Ir para seção Contato", action: "navigate", target: "#contact" },
        { text: "Agendar demonstração", action: "qualify_lead" }
      ]
    };
  };

  const handleSobreIntent = () => {
    return {
      text: `🚀 **Sobre a Sizebay:**\n\n${faqData.about.historyP1}\n\n${faqData.about.historyP2}\n\n🌍 ${faqData.about.globalP1}`,
      options: [
        { text: "Leia mais sobre nós", action: "navigate", target: "#about" },
        { text: "Ver nossos valores", action: "more_info", data: "valores" },
        { text: "Conhecer nossa solução", action: "more_info", data: "provador" }
      ]
    };
  };

  const handleSaudacaoIntent = () => {
    const responses = [
      "Olá! 👋 Sou o assistente virtual da Sizebay. Como posso ajudá-lo hoje?",
      "Oi! 😊 Em que posso ser útil? Estou aqui para falar sobre nosso provador virtual!",
      "Bem-vindo! 🎯 Como posso ajudá-lo a encontrar a solução perfeita para sua loja?"
    ];
    
    return {
      text: responses[Math.floor(Math.random() * responses.length)],
      options: [
        { text: "O que é o provador virtual?", action: "more_info", data: "provador" },
        { text: "Ver demonstração", action: "navigate", target: "#vfr" },
        { text: "Falar com consultor", action: "qualify_lead" }
      ]
    };
  };

  const handleDespedidaIntent = () => {
    return {
      text: "Obrigado por conversar comigo! 😊 Se precisar de mais alguma coisa, estarei sempre aqui. Tenha um ótimo dia!",
      options: [
        { text: "Agendar demonstração", action: "qualify_lead" },
        { text: "Ver contatos", action: "navigate", target: "#contact" }
      ]
    };
  };

  const handleAjudaIntent = () => {
    return {
      text: "Claro! Estou aqui para ajudar. 🤝 Posso te ajudar com:",
      options: [
        { text: "Como funciona o provador virtual", action: "more_info", data: "provador" },
        { text: "Cases de sucesso", action: "navigate", target: "#clients" },
        { text: "Preços e demonstração", action: "qualify_lead" },
        { text: "Integração técnica", action: "more_info", data: "integracao" }
      ]
    };
  };

  const handleUnknownIntent = (message) => {
    setUserContext(prev => ({ ...prev, unansweredAttempts: prev.unansweredAttempts + 1 }));
    
    if (userContext.unansweredAttempts >= 1) {
      return {
        text: "Sinto muito, ainda não consegui entender sua pergunta. 😅 Você gostaria de falar com um de nossos atendentes?",
        options: [
          { text: "Sim, falar com atendente", action: "human_contact" },
          { text: "Reformular pergunta", action: "restart" },
          { text: "Ver perguntas frequentes", action: "show_faq" }
        ]
      };
    }
    
    const defaultResponses = [
      'Interessante! Pode me contar mais sobre isso? 🤔',
      'Hmm, não tenho certeza sobre isso. Pode reformular sua pergunta? 💭',
      'Essa é uma boa pergunta! Que tal conversarmos sobre como o provador virtual pode ajudar? 🎯'
    ];
    
    return {
      text: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
      options: [
        { text: "Como funciona o provador virtual?", action: "more_info", data: "provador" },
        { text: "Falar com consultor", action: "qualify_lead" }
      ]
    };
  };

  // Sistema de qualificação de leads
  const startLeadQualification = () => {
    setUserContext(prev => ({ 
      ...prev, 
      isQualifying: true, 
      qualificationStep: 1,
      userData: {}
    }));
    
    return {
      text: "Ótimo! 🎯 Vou te conectar com nossa equipe comercial para uma demonstração personalizada.\n\nPara começar, qual é o seu nome?",
      isQualification: true
    };
  };

  const handleLeadQualification = (userMessage) => {
    const step = userContext.qualificationStep;
    const newUserData = { ...userContext.userData };
    
    switch (step) {
      case 1: // Nome
        newUserData.name = userMessage;
        setUserContext(prev => ({ 
          ...prev, 
          qualificationStep: 2, 
          userData: newUserData 
        }));
        return {
          text: `Prazer em conhecê-lo, ${userMessage}! 😊\n\nQual é o seu melhor email para contato?`,
          isQualification: true
        };
        
      case 2: // Email
        newUserData.email = userMessage;
        setUserContext(prev => ({ 
          ...prev, 
          qualificationStep: 3, 
          userData: newUserData 
        }));
        return {
          text: "Perfeito! E qual é o seu telefone para agendarmos a demonstração?",
          isQualification: true
        };
        
      case 3: // Telefone
        newUserData.phone = userMessage;
        setUserContext(prev => ({ 
          ...prev, 
          qualificationStep: 4, 
          userData: newUserData 
        }));
        return {
          text: "Última pergunta: Qual tipo de loja você tem? (Ex: moda feminina, calçados, moda infantil, etc.)",
          isQualification: true
        };
        
      case 4: // Tipo de loja
        newUserData.storeType = userMessage;
        setUserContext(prev => ({ 
          ...prev, 
          isQualifying: false, 
          qualificationStep: 0,
          userData: newUserData
        }));
        
        // Aqui você pode enviar os dados para sua API/CRM
        console.log('Lead qualificado:', newUserData);
        
        return {
          text: `Excelente, ${newUserData.name}! ✅\n\nRecebemos seus dados:\n📧 ${newUserData.email}\n📱 ${newUserData.phone}\n🏪 ${newUserData.storeType}\n\nUm de nossos consultores entrará em contato em breve para agendar sua demonstração gratuita e discutir os planos ideais para sua loja.\n\nObrigado! 🚀`,
          options: [
            { text: "Ver demonstração online", action: "navigate", target: "#vfr" },
            { text: "Conhecer cases de sucesso", action: "navigate", target: "#clients" }
          ]
        };
        
      default:
        return { text: "Ops, algo deu errado. Vamos começar novamente?" };
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');

    // Simula delay do bot antes de responder
    setTimeout(() => {
      const botResponse = generateBotResponse(currentMessage);
      
      // Se a resposta tem opções (botões), cria uma mensagem especial
      if (typeof botResponse === 'object' && botResponse.options) {
        const botMessage = {
          id: Date.now() + 1,
          text: botResponse.text,
          sender: 'bot',
          timestamp: new Date(),
          options: botResponse.options,
          isQualification: botResponse.isQualification || false
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        // Resposta simples (compatibilidade com sistema antigo)
        const botMessage = {
          id: Date.now() + 1,
          text: typeof botResponse === 'string' ? botResponse : botResponse.text,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }
    }, 1000);
  };

  // Função para lidar com cliques em opções/botões
  const handleOptionClick = (option) => {
    // Adiciona a opção selecionada como mensagem do usuário
    const userMessage = {
      id: Date.now(),
      text: option.text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Processa a ação
    setTimeout(() => {
      let botResponse;
      
      switch (option.action) {
        case 'navigate':
          botResponse = {
            text: "🔗 Redirecionando você para a seção solicitada...",
            navigation: option.target
          };
          // Simula navegação
          setTimeout(() => {
            if (option.target.includes('#')) {
              const element = document.querySelector(option.target);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }, 500);
          break;
          
        case 'more_info':
          botResponse = getMoreInfo(option.data);
          break;
          
        case 'qualify_lead':
          botResponse = startLeadQualification();
          break;
          
        case 'human_contact':
          botResponse = handleHumanContact();
          break;
          
        case 'restart':
          setUserContext({
            isQualifying: false,
            qualificationStep: 0,
            userData: {},
            lastIntent: null,
            unansweredAttempts: 0
          });
          botResponse = {
            text: "Vamos começar novamente! 😊 Como posso ajudá-lo?",
            options: [
              { text: "O que é o provador virtual?", action: "more_info", data: "provador" },
              { text: "Ver demonstração", action: "navigate", target: "#vfr" },
              { text: "Falar com consultor", action: "qualify_lead" }
            ]
          };
          break;
          
        case 'show_faq':
          botResponse = showFAQ();
          break;
          
        default:
          botResponse = { text: "Desculpe, não consegui processar essa opção." };
      }

      const botMessage = {
        id: Date.now() + 1,
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        options: botResponse.options,
        isQualification: botResponse.isQualification || false
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  // Funções auxiliares para as opções
  const getMoreInfo = (data) => {
    switch (data) {
      case 'provador':
        return {
          text: faqData.faq.questions[0].answer,
          options: [
            { text: "Ver demonstração", action: "navigate", target: "#vfr" },
            { text: "Como funciona para calçados?", action: "more_info", data: "calcados" }
          ]
        };
        
      case 'vestuario':
        return {
          text: faqData.faq.questions[2].answer,
          options: [
            { text: "Ver demonstração", action: "navigate", target: "#vfr" },
            { text: "Solicitar demonstração personalizada", action: "qualify_lead" }
          ]
        };
        
      case 'calcados':
        return {
          text: faqData.faq.questions[3].answer,
          options: [
            { text: "Testar Provador Virtual", action: "navigate", target: "#vfr" }
          ]
        };
        
      case 'integracao':
        return {
          text: faqData.faq.questions[6].answer,
          options: [
            { text: "Ver plataformas compatíveis", action: "more_info", data: "plataformas" },
            { text: "Falar com equipe técnica", action: "qualify_lead" }
          ]
        };
        
      case 'plataformas':
        return {
          text: faqData.faq.questions[9].answer,
          options: [
            { text: "Verificar compatibilidade", action: "qualify_lead" }
          ]
        };
        
      case 'tempo':
        return {
          text: faqData.faq.questions[7].answer,
          options: [
            { text: "Agendar demonstração", action: "qualify_lead" }
          ]
        };
        
      case 'valores':
        return {
          text: `💎 **Nossos Valores:**\n\n• ${faqData.about.values1}\n• ${faqData.about.values2}\n• ${faqData.about.values3}\n• ${faqData.about.values4}\n• ${faqData.about.values5}`,
          options: [
            { text: "Conhecer nossa história", action: "navigate", target: "#about" }
          ]
        };
        
      default:
        return { text: "Informação não encontrada." };
    }
  };

  const handleHumanContact = () => {
    return {
      text: "Entendo! 👨‍💼 Para falar com nossa equipe, preciso de algumas informações:",
      options: [
        { text: "Fornecer dados para contato", action: "qualify_lead" },
        { text: "Ver dados de contato", action: "navigate", target: "#contact" }
      ]
    };
  };

  const showFAQ = () => {
    let faqText = "❓ **Perguntas Frequentes:**\n\n";
    faqData.faq.questions.slice(0, 3).forEach((item, index) => {
      faqText += `${index + 1}. ${item.question}\n`;
    });
    
    return {
      text: faqText + "\n💡 Qual dessas perguntas te interessa mais?",
      options: [
        { text: "O que é o provador virtual?", action: "more_info", data: "provador" },
        { text: "Quais segmentos atende?", action: "more_info", data: "segmentos" },
        { text: "Como funciona?", action: "more_info", data: "vestuario" }
      ]
    };
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {/* Botão flutuante */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Janela do chat */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3>Chat de Suporte</h3>
                <span className="status">Online</span>
              </div>
            </div>
            <button 
              className="chatbot-close"
              onClick={toggleChat}
              aria-label="Fechar chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">
                  {message.text}
                </div>
                
                {/* Botões de opções para mensagens do bot */}
                {message.sender === 'bot' && message.options && (
                  <div className="message-options">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        className="option-button"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
                
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString('pt-BR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="message-input"
            />
            <button 
              onClick={handleSendMessage}
              className="send-button"
              disabled={inputMessage.trim() === ''}
              aria-label="Enviar mensagem"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
