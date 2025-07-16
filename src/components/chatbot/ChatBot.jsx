import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import { useTranslation } from 'react-i18next';

const ChatBot = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [userContext, setUserContext] = useState({
    isQualifying: false,
    qualificationStep: 0,
    userData: {},
    lastIntent: null,
    unansweredAttempts: 0
  });
  const messagesEndRef = useRef(null);

  // Inicializar mensagem de saudação após carregamento das traduções
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: 1,
        text: t('chatbot.greeting'),
        sender: "bot",
        timestamp: new Date()
      }]);
    }
  }, [t, messages.length]);

  // Atualizar mensagem inicial quando o idioma mudar
  useEffect(() => {
    if (messages.length > 0 && messages[0].sender === "bot") {
      setMessages(prev => prev.map((msg, index) => 
        index === 0 ? { ...msg, text: t('chatbot.greeting') } : msg
      ));
    }
  }, [i18n.language, t]);

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
    const purchaseKeywords = t('chatbot.keywords.purchase', { returnObjects: true });
    return purchaseKeywords.some(keyword => message.includes(keyword));
  };

  // Identifica a intenção principal da mensagem
  const identifyIntent = (message) => {
    const intentMap = {
      'provador_virtual': t('chatbot.keywords.provador_virtual', { returnObjects: true }),
      'como_funciona': t('chatbot.keywords.como_funciona', { returnObjects: true }),
      'segmentos': t('chatbot.keywords.segmentos', { returnObjects: true }),
      'calçados': t('chatbot.keywords.calcados', { returnObjects: true }),
      'integracao': t('chatbot.keywords.integracao', { returnObjects: true }),
      'tempo_implantacao': t('chatbot.keywords.tempo_implantacao', { returnObjects: true }),
      'plataformas': t('chatbot.keywords.plataformas', { returnObjects: true }),
      'cases': t('chatbot.keywords.cases', { returnObjects: true }),
      'contato': t('chatbot.keywords.contato', { returnObjects: true }),
      'sobre': t('chatbot.keywords.sobre', { returnObjects: true }),
      'saudacao': t('chatbot.keywords.saudacao', { returnObjects: true }),
      'despedida': t('chatbot.keywords.despedida', { returnObjects: true }),
      'ajuda': t('chatbot.keywords.ajuda', { returnObjects: true })
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
    const shoesKeywords = t('chatbot.keywords.calcados', { returnObjects: true });
    if (shoesKeywords.some(keyword => message.includes(keyword))) {
      return {
        text: t('faq.questions.3.answer') + "\n\n" + t('chatbot.responses.want_test_visit'),
        options: [
          { text: t('chatbot.buttons.open_vfr'), action: "navigate", target: "#virtual" },
          { text: t('chatbot.buttons.see_measurements'), action: "navigate", target: "#virtual" },
          { text: t('chatbot.buttons.how_works_clothes'), action: "more_info", data: "vestuario" }
        ]
      };
    } else {
      return {
        text: t('faq.questions.0.answer') + "\n\n" + t('chatbot.responses.help_better'),
        options: [
          { text: t('chatbot.buttons.how_works_clothes'), action: "more_info", data: "vestuario" },
          { text: t('chatbot.buttons.how_works_shoes'), action: "more_info", data: "calcados" },
          { text: t('chatbot.buttons.how_to_integrate'), action: "more_info", data: "integracao" },
          { text: t('chatbot.buttons.see_demo'), action: "navigate", target: "#virtual" }
        ]
      };
    }
  };

  const handleComoFuncionaIntent = (message) => {
    return {
      text: t('faq.questions.2.answer') + "\n\n" + t('chatbot.responses.want_to_practice'),
      options: [
        { text: t('chatbot.buttons.see_demo'), action: "navigate", target: "#virtual" },
        { text: t('chatbot.buttons.how_works_shoes'), action: "more_info", data: "calcados" },
        { text: t('chatbot.buttons.request_custom_demo'), action: "qualify_lead" }
      ]
    };
  };

  const handleSegmentosIntent = (message) => {
    let response = t('faq.questions.1.answer');
    
    // Sugere cases específicos baseado no segmento mencionado
    const infantilKeywords = t('chatbot.keywords.infantil', { returnObjects: true });
    const intimoKeywords = t('chatbot.keywords.intimo', { returnObjects: true });
    
    if (infantilKeywords.some(keyword => message.includes(keyword))) {
      response += `\n\n👶 ${t('chatbot.case_success')} ${t('clients.bunnies.title')} - ${t('clients.bunnies.text')}`;
    } else if (intimoKeywords.some(keyword => message.includes(keyword))) {
      response += `\n\n👙 ${t('chatbot.case_success')} ${t('clients.intimissimi.title')} - ${t('clients.intimissimi.text')}`;
    }
    
    return {
      text: response + "\n\n" + t('chatbot.responses.want_more_cases'),
      options: [
        { text: t('chatbot.buttons.see_all_cases'), action: "navigate", target: "#clients" },
        { text: t('chatbot.buttons.request_demo'), action: "qualify_lead" }
      ]
    };
  };

  const handleCalcadosIntent = () => {
    return {
      text: t('faq.questions.3.answer') + "\n\n" + t('chatbot.responses.want_to_test_shoes'),
      options: [
        { text: t('chatbot.buttons.test_vfr'), action: "navigate", target: "#virtual" },
        { text: t('chatbot.buttons.how_works_clothes'), action: "more_info", data: "vestuario" }
      ]
    };
  };

  const handleIntegracaoIntent = () => {
    return {
      text: t('faq.questions.6.answer') + "\n\n" + t('chatbot.responses.need_tech_details'),
      options: [
        { text: t('chatbot.buttons.see_platforms'), action: "more_info", data: "plataformas" },
        { text: t('chatbot.buttons.talk_to_tech'), action: "qualify_lead" },
        { text: t('chatbot.buttons.how_long_takes'), action: "more_info", data: "tempo" }
      ]
    };
  };

  const handleTempoImplantacaoIntent = () => {
    return {
      text: t('faq.questions.7.answer') + "\n\n" + t('chatbot.responses.want_to_accelerate'),
      options: [
        { text: t('chatbot.buttons.schedule_demo'), action: "qualify_lead" },
        { text: t('chatbot.buttons.see_native_platforms'), action: "more_info", data: "plataformas" }
      ]
    };
  };

  const handlePlataformasIntent = () => {
    return {
      text: t('faq.questions.9.answer') + "\n\n" + t('chatbot.responses.platform_not_listed'),
      options: [
        { text: t('chatbot.buttons.check_compatibility'), action: "qualify_lead" },
        { text: t('chatbot.buttons.see_custom_integration'), action: "more_info", data: "integracao" }
      ]
    };
  };

  const handleCasesIntent = (message) => {
    let response = t('chatbot.responses.our_cases');
    
    // Se menciona uma marca específica
    if (message.includes('lanidor')) {
      response += `${t('clients.lanidor.title')}: ${t('clients.lanidor.text')}`;
    } else if (message.includes('miik')) {
      response += `${t('clients.miik.title')}: ${t('clients.miik.text')}`;
    } else {
      // Lista todos os cases
      const clients = ['lanidor', 'miik', 'bunnies', 'intimissimi', 'osklen'];
      clients.forEach((client) => {
        response += `• **${t(`clients.${client}.title`)}:** ${t(`clients.${client}.text`)}\n`;
      });
    }
    
    return {
      text: response + "\n\n" + t('chatbot.responses.want_to_know_how'),
      options: [
        { text: t('chatbot.buttons.see_complete_cases'), action: "navigate", target: "#clients" },
        { text: t('chatbot.buttons.request_demo'), action: "qualify_lead" }
      ]
    };
  };

  const handleContatoIntent = () => {
    return {
      text: t('chatbot.responses.contact_forms', {
        email: t('contact.email'),
        site: t('contact.site'),
        store: t('contact.store')
      }),
      options: [
        { text: t('chatbot.buttons.go_to_contact'), action: "navigate", target: "#contact" },
        { text: t('chatbot.buttons.schedule_demo'), action: "qualify_lead" }
      ]
    };
  };

  const handleSobreIntent = () => {
    return {
      text: t('chatbot.responses.about_sizebay', {
        history1: t('about.historyP1'),
        history2: t('about.historyP2'),
        global: t('about.globalP1')
      }),
      options: [
        { text: t('chatbot.buttons.read_about_us'), action: "navigate", target: "#about" },
        { text: t('chatbot.buttons.see_values'), action: "more_info", data: "valores" },
        { text: t('chatbot.buttons.know_solution'), action: "more_info", data: "provador" }
      ]
    };
  };

  const handleSaudacaoIntent = () => {
    const responses = [
      t('chatbot.greetings.hello'),
      t('chatbot.greetings.hi'),
      t('chatbot.greetings.welcome')
    ];
    
    return {
      text: responses[Math.floor(Math.random() * responses.length)],
      options: [
        { text: t('chatbot.buttons.what_is_vfr'), action: "more_info", data: "provador" },
        { text: t('chatbot.buttons.see_demo'), action: "navigate", target: "#virtual" },
        { text: t('chatbot.buttons.talk_to_consultant'), action: "qualify_lead" }
      ]
    };
  };

  const handleDespedidaIntent = () => {
    return {
      text: t('chatbot.responses.thank_you'),
      options: [
        { text: t('chatbot.buttons.schedule_demo'), action: "qualify_lead" },
        { text: t('chatbot.buttons.see_contact_data'), action: "navigate", target: "#contact" }
      ]
    };
  };

  const handleAjudaIntent = () => {
    return {
      text: t('chatbot.responses.can_help'),
      options: [
        { text: t('chatbot.buttons.what_is_vfr'), action: "more_info", data: "provador" },
        { text: t('chatbot.buttons.know_cases'), action: "navigate", target: "#clients" },
        { text: t('chatbot.buttons.prices_and_demo'), action: "qualify_lead" },
        { text: t('chatbot.buttons.technical_integration'), action: "more_info", data: "integracao" }
      ]
    };
  };

  const handleUnknownIntent = (message) => {
    setUserContext(prev => ({ ...prev, unansweredAttempts: prev.unansweredAttempts + 1 }));
    
    if (userContext.unansweredAttempts >= 1) {
      return {
        text: t('chatbot.responses.unknown_intent'),
        options: [
          { text: t('chatbot.buttons.talk_to_agent'), action: "human_contact" },
          { text: t('chatbot.buttons.reformulate_question'), action: "restart" },
          { text: t('chatbot.buttons.see_faq'), action: "show_faq" }
        ]
      };
    }
    
    const defaultResponses = t('chatbot.responses.default_responses', { returnObjects: true });
    
    return {
      text: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
      options: [
        { text: t('chatbot.buttons.what_is_vfr'), action: "more_info", data: "provador" },
        { text: t('chatbot.buttons.talk_to_consultant'), action: "qualify_lead" }
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
      text: t('chatbot.responses.lead_qualification'),
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
          text: t('chatbot.responses.nice_to_meet', { name: userMessage }),
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
          text: t('chatbot.responses.perfect'),
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
          text: t('chatbot.responses.last_question'),
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
        console.log(t('chatbot.lead_qualified'), newUserData);
        
        return {
          text: t('chatbot.responses.excellent', {
            name: newUserData.name,
            email: newUserData.email,
            phone: newUserData.phone,
            storeType: newUserData.storeType
          }),
          options: [
            { text: t('chatbot.buttons.see_online_demo'), action: "navigate", target: "#virtual" },
            { text: t('chatbot.buttons.know_cases'), action: "navigate", target: "#clients" }
          ]
        };
        
      default:
        return { text: t('chatbot.error_restart') };
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
            text: t('chatbot.redirecting'),
            navigation: option.target
          };
          // Simula navegação com scroll suave
          setTimeout(() => {
            if (option.target.includes('#')) {
              const targetId = option.target.substring(1);
              const element = document.getElementById(targetId);
              console.log(t('chatbot.trying_navigate'), targetId, t('chatbot.element_found'), element);
              if (element) {
                // Scroll com offset para compensar header fixo (se houver)
                const headerOffset = 80;
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              } else {
                console.warn(t('chatbot.element_not_found'), targetId);
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
            text: t('chatbot.responses.lets_restart'),
            options: [
              { text: t('chatbot.buttons.what_is_vfr'), action: "more_info", data: "provador" },
              { text: t('chatbot.buttons.see_demo'), action: "navigate", target: "#virtual" },
              { text: t('chatbot.buttons.talk_to_consultant'), action: "qualify_lead" }
            ]
          };
          break;
          
        case 'show_faq':
          botResponse = showFAQ();
          break;
          
        default:
          botResponse = { text: t('chatbot.error_processing') };
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
          text: t('faq.questions.0.answer'),
          options: [
            { text: t('chatbot.buttons.see_demo'), action: "navigate", target: "#virtual" },
            { text: t('chatbot.buttons.how_works_shoes'), action: "more_info", data: "calcados" }
          ]
        };
        
      case 'vestuario':
        return {
          text: t('faq.questions.2.answer'),
          options: [
            { text: t('chatbot.buttons.see_demo'), action: "navigate", target: "#virtual" },
            { text: t('chatbot.buttons.request_custom_demo'), action: "qualify_lead" }
          ]
        };
        
      case 'calcados':
        return {
          text: t('faq.questions.3.answer'),
          options: [
            { text: t('chatbot.buttons.test_vfr'), action: "navigate", target: "#virtual" }
          ]
        };
        
      case 'integracao':
        return {
          text: t('faq.questions.6.answer'),
          options: [
            { text: t('chatbot.buttons.see_platforms'), action: "more_info", data: "plataformas" },
            { text: t('chatbot.buttons.talk_to_tech'), action: "qualify_lead" }
          ]
        };
        
      case 'plataformas':
        return {
          text: t('faq.questions.9.answer'),
          options: [
            { text: t('chatbot.buttons.check_compatibility'), action: "qualify_lead" }
          ]
        };
        
      case 'tempo':
        return {
          text: t('faq.questions.7.answer'),
          options: [
            { text: t('chatbot.buttons.schedule_demo'), action: "qualify_lead" }
          ]
        };
        
      case 'valores':
        return {
          text: t('chatbot.responses.our_values', {
            value1: t('about.values1'),
            value2: t('about.values2'),
            value3: t('about.values3'),
            value4: t('about.values4'),
            value5: t('about.values5')
          }),
          options: [
            { text: t('chatbot.buttons.know_history'), action: "navigate", target: "#about" }
          ]
        };
        
      default:
        return { text: t('chatbot.info_not_found') };
    }
  };

  const handleHumanContact = () => {
    return {
      text: t('chatbot.responses.understand_human_contact'),
      options: [
        { text: t('chatbot.buttons.provide_contact'), action: "qualify_lead" },
        { text: t('chatbot.buttons.see_contact_data'), action: "navigate", target: "#contact" }
      ]
    };
  };

  const showFAQ = () => {
    let faqText = t('chatbot.responses.frequent_questions');
    
    // Pega as primeiras 3 perguntas do FAQ
    for (let i = 0; i < 3; i++) {
      faqText += `${i + 1}. ${t(`faq.questions.${i}.question`)}\n`;
    }
    
    return {
      text: faqText + t('chatbot.responses.which_interests'),
      options: [
        { text: t('chatbot.buttons.what_is_vfr'), action: "more_info", data: "provador" },
        { text: t('faq.questions.1.question'), action: "more_info", data: "segmentos" },
        { text: t('faq.questions.2.question'), action: "more_info", data: "vestuario" }
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
        aria-label={t('chatbot.open_chat')}
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
                <h3>{t('chatbot.chat_support')}</h3>
                <span className="status">{t('chatbot.online')}</span>
              </div>
            </div>
            <button 
              className="chatbot-close"
              onClick={toggleChat}
              aria-label={t('chatbot.close_chat')}
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
                  {message.timestamp.toLocaleTimeString(i18n.language === 'pt' ? 'pt-BR' : i18n.language, { 
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
              placeholder={t('chatbot.placeholder')}
              className="message-input"
            />
            <button 
              onClick={handleSendMessage}
              className="send-button"
              disabled={inputMessage.trim() === ''}
              aria-label={t('chatbot.send')}
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
