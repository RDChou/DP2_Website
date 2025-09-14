import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Clock } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '¡Hola! 👋 Soy el asistente virtual del Hotel Perú. ¿En qué puedo ayudarte hoy?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    '¿Cuáles son sus tarifas?',
    '¿Tienen disponibilidad?',
    '¿Dónde están ubicados?',
    '¿Qué servicios incluyen?'
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputMessage.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      const lowerText = messageText.toLowerCase();

      if (lowerText.includes('tarifa') || lowerText.includes('precio')) {
        botResponse = 'Nuestras tarifas van desde S/ 180 por noche. Tenemos habitaciones estándar, deluxe y suites ejecutivas. ¿Te interesa alguna en particular?';
      } else if (lowerText.includes('disponibilidad')) {
        botResponse = 'Puedo ayudarte a verificar disponibilidad. ¿Para qué fechas necesitas la reserva?';
      } else if (lowerText.includes('ubicación') || lowerText.includes('ubicados')) {
        botResponse = 'Nos encontramos en Av. José Larco 1301, Miraflores, Lima. Una ubicación privilegiada cerca de todo. ¿Necesitas direcciones específicas?';
      } else if (lowerText.includes('servicios')) {
        botResponse = 'Ofrecemos WiFi gratuito, restaurante, piscina, gimnasio, estacionamiento y servicio 24h. ¿Hay algún servicio específico que te interese?';
      } else {
        botResponse = 'Gracias por tu consulta. Para una atención más personalizada, te recomiendo contactar a nuestro equipo al +51 1 234-5678. ¿Hay algo más en lo que pueda ayudarte?';
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-orange-600 text-white p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Asistente Virtual</h3>
              <p className="text-xs opacity-90">Hotel Perú</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-orange-600 text-white'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-orange-200'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Preguntas frecuentes:</p>
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(action)}
                    className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>+51 1 234-5678</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>Atención 24/7</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;