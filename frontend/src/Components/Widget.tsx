"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, AlertCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  isError?: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Abrar's AI assistant. I can answer questions about his skills, projects, and experience. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);

  useEffect(() => {
    // Generate a simple conversation ID (you can make this more sophisticated)
    const generatedId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const storedConversationId = localStorage.getItem('conversation_id');
    if (!storedConversationId) {
      localStorage.setItem('conversation_id', generatedId);
      setConversationId(generatedId);
    } else {
      setConversationId(storedConversationId);
    }
  }, []);
  
  // Configure your FastAPI endpoint here
  const API_ENDPOINT = 'http://localhost:5000/api/chat'; // Change this to your actual endpoint

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isOpen]);

  const sendMessageToAgent = async (userMessage: string) => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversation_id: conversationId, // Optional: for conversation tracking
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response || data.message || "I apologize, but I couldn't process that request.";
    } catch (error) {
      console.error('Error communicating with agent:', error);
      throw error;
    }
  };

  const handleSend = async () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);
    setError(null);

    try {
      // Call the FastAPI agent
      const botResponseText = await sendMessageToAgent(currentInput);

      const botResponse: Message = {
        id: messages.length + 2,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    } catch (error) {
      setError('Failed to get response. Please try again.');
      const errorResponse: Message = {
        id: messages.length + 2,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions: string[] = [
    "What are your skills?",
    "Tell me about projects",
    "How to contact?"
  ];

  return (
    // main container
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat Window */}
      <div
        className={`fixed inset-0 md:inset-auto md:bottom-0 md:left-6 w-full md:w-80 h-full md:h-[500px] bg-white md:rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-500 ease-out transform ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-sky-500 to-blue-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-sky-500" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="text-white font-semibold">Abrar's AI Assistant</h3>
              <p className="text-sky-100 text-xs">Online • AI-powered</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="bg-red-50 border-b border-red-200 p-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <p className="text-xs text-red-700">{error}</p>
            <button
              onClick={() => setError(null)}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((message: Message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              } animate-slideIn`}
            >
              {message.sender === 'bot' && (
                <div className="w-8 h-8 bg-linear-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-linear-to-r from-sky-500 to-blue-600 text-white shadow-lg'
                    : message.isError
                    ? 'bg-red-50 text-red-800 shadow-md border border-red-200'
                    : 'bg-white text-slate-800 shadow-md border border-slate-100'
                }`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed">
                  {message.text}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'user' 
                      ? 'text-sky-100' 
                      : message.isError
                      ? 'text-red-600'
                      : 'text-slate-400'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-linear-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-2 justify-start animate-slideIn">
              <div className="w-8 h-8 bg-linear-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shrink-0 shadow-md">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-slate-100">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="space-y-2 animate-slideIn">
              <p className="text-xs text-slate-500 text-center">Quick questions:</p>
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputValue(question);
                    setTimeout(() => handleSend(), 100);
                  }}
                  className="w-full text-left px-4 py-2 bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-xl text-sm text-slate-700 transition-all duration-200 hover:shadow-md"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              disabled={isTyping}
              className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              onClick={handleSend}
              disabled={inputValue.trim() === '' || isTyping}
              className="px-4 py-3 bg-linear-to-r from-sky-500 to-blue-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Button - Only visible when chat is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-linear-to-r from-sky-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-sky-300 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
        >
          <div className="absolute inset-0 bg-linear-to-r from-sky-400 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>

          <MessageCircle size={28} className="relative z-10" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-lg">
              {unreadCount}
            </div>
          )}
        </button>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        /* Custom Scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
