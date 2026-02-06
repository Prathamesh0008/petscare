'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  FaCommentDots, FaTimes, FaPaperPlane, FaUser, 
  FaRobot, FaThumbsUp, FaThumbsDown, FaSmile,
  FaImage, FaPaperclip
} from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const initialMessages = [
  { id: 1, text: "Hello! I'm PawPal, your virtual assistant at PawHaven Vashi. How can I help you today?", sender: 'bot', time: '10:00 AM' },
  { id: 2, text: "You can ask me about: • Adoption process • Available animals • Volunteering • Donations • Shelter hours", sender: 'bot', time: '10:01 AM' },
];

const quickReplies = [
  "How to adopt?",
  "Available dogs",
  "Available cats",
  "Volunteer opportunities",
  "Donation process",
  "Shelter location",
];

const faqAnswers: Record<string, string> = {
  "how to adopt": "Our adoption process has 4 steps: 1. Visit shelter or browse online 2. Submit application 3. Home visit 4. Finalize adoption. Would you like details on any specific step?",
  "available dogs": "We currently have 24 wonderful dogs looking for homes! You can view all available dogs at: /animals?type=dog",
  "available cats": "We have 18 lovely cats waiting for their forever homes! Browse all cats: /animals?type=cat",
  "volunteer opportunities": "We need volunteers for: Animal care, cleaning, socialization, events, and administration. Apply at: /volunteer",
  "donation process": "You can donate online at /donate, via bank transfer, or in-person. All donations are tax-deductible under 80G.",
  "shelter location": "We're located at: Sector 17, Vashi, Navi Mumbai. Open Tue-Sun, 9AM-6PM. Get directions: /contact",
  "emergency": "For emergency animal rescue, call: +91 98765 43210 (24/7). Please provide location details.",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user' as const,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setShowQuickReplies(false);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const userInput = inputText.toLowerCase();
      let botResponse = "I understand you're asking about: " + inputText + ". Could you be more specific?";
      
      // Check for FAQ matches
      Object.keys(faqAnswers).forEach(key => {
        if (userInput.includes(key)) {
          botResponse = faqAnswers[key];
        }
      });

      // Special cases
      if (userInput.includes('emergency') || userInput.includes('injured') || userInput.includes('rescue')) {
        botResponse = "🚨 EMERGENCY: For immediate animal rescue, please call our 24/7 emergency line: +91 98765 43210. Provide location and animal condition.";
      } else if (userInput.includes('thank') || userInput.includes('thanks')) {
        botResponse = "You're welcome! 😊 Is there anything else I can help you with?";
      } else if (userInput.includes('hi') || userInput.includes('hello') || userInput.includes('hey')) {
        botResponse = "Hello! 👋 How can I assist you today?";
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot' as const,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-red-500 text-white'
            : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:scale-110'
        }`}
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaCommentDots className="text-2xl" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MdSupportAgent className="text-amber-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">PawPal Assistant</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Online • 24/7 Support
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                    <div className={`flex items-end gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' ? 'bg-blue-500' : 'bg-amber-500'
                      }`}>
                        {message.sender === 'user' ? <FaUser className="text-white" /> : <FaRobot className="text-white" />}
                      </div>
                      <div className={`px-4 py-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none'
                          : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
                      }`}>
                        <div className="whitespace-pre-line">{message.text}</div>
                        <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                          {message.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                      <FaRobot className="text-white" />
                    </div>
                    <div className="px-4 py-3 bg-white rounded-2xl rounded-bl-none shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showQuickReplies && (
                <div className="mt-4">
                  <div className="text-sm text-gray-600 mb-2">Quick questions:</div>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="px-3 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 hover:border-amber-300 transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  rows={1}
                  style={{ minHeight: '48px', maxHeight: '120px' }}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button className="text-gray-400 hover:text-amber-500">
                    <FaSmile />
                  </button>
                  <button className="text-gray-400 hover:text-amber-500">
                    <FaImage />
                  </button>
                  <button className="text-gray-400 hover:text-amber-500">
                    <FaPaperclip />
                  </button>
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <FaPaperPlane />
              </button>
            </div>

            {/* Chat Features */}
            <div className="flex items-center justify-between mt-3 text-sm">
              <div className="flex items-center gap-4 text-gray-600">
                <button className="flex items-center gap-1 hover:text-amber-600">
                  <FaThumbsUp /> Helpful
                </button>
                <button className="flex items-center gap-1 hover:text-amber-600">
                  <FaThumbsDown /> Not helpful
                </button>
              </div>
              <button className="text-amber-600 hover:text-amber-700 font-medium">
                Live agent →
              </button>
            </div>
          </div>

          {/* Chat Footer */}
          <div className="border-t border-gray-200 p-3 bg-gray-50 text-center">
            <div className="text-xs text-gray-600">
              Powered by AI • Messages are secure • <a href="/privacy" className="text-amber-600 hover:underline">Privacy policy</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}