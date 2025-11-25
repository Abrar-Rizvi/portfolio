// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageSquare, Send, XCircle } from 'lucide-react';
// import { v4 as uuidv4 } from 'uuid';

// interface ChatMessage {
//   id: string;
//   sender: 'user' | 'ai';
//   text: string;
//   timestamp: string;
// }

// interface ChatInputProps {
//   onSendMessage: (message: string) => void;
//   disabled?: boolean;
// }

// const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
//   const [message, setMessage] = useState('');
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

//   const handleSendMessage = () => {
//     if (message.trim() && !disabled) {
//       onSendMessage(message.trim());
//       setMessage('');
//       if (textareaRef.current) {
//         textareaRef.current.style.height = 'auto';
//       }
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   useEffect(() => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = 'auto';
//       textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
//     }
//   }, [message]);

//   return (
//     <div className="flex items-center p-4 bg-slate-100 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600">
//       <textarea
//         ref={textareaRef}
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         onKeyDown={handleKeyDown}
//         placeholder="Type your message..."
//         rows={1}
//         disabled={disabled}
//         className="flex-1 resize-none overflow-y-auto max-h-36 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-50"
//       />
//       <button
//         onClick={handleSendMessage}
//         disabled={!message.trim() || disabled}
//         className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         <Send size={20} />
//       </button>
//     </div>
//   );
// };

// export default function Chat() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSendMessage = (text: string) => {
//     const newUserMessage: ChatMessage = {
//       id: uuidv4(),
//       sender: 'user',
//       text,
//       timestamp: new Date().toLocaleTimeString(),
//     };
//     setMessages((prevMessages) => [...prevMessages, newUserMessage]);

//     // Simulate AI response
//     setTimeout(() => {
//       const newAiMessage: ChatMessage = {
//         id: uuidv4(),
//         sender: 'ai',
//         text: `Hello there! You said: "${text}". I am an AI assistant. How can I help you today?`,
//         timestamp: new Date().toLocaleTimeString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, newAiMessage]);
//     }, 1000);
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <>
//       <motion.button
//         className="fixed bottom-6 right-6 bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-600 transition-colors duration-300 z-50"
//         onClick={toggleChat}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         {isOpen ? <XCircle size={28} /> : <MessageSquare size={28} />}
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 50, scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//             className="fixed bottom-24 right-6 w-80 h-[500px] bg-white dark:bg-slate-800 rounded-lg shadow-xl flex flex-col z-50 border border-slate-200 dark:border-slate-700"
//           >
//             <div className="flex items-center justify-between p-4 bg-sky-500 text-white rounded-t-lg">
//               <h3 className="text-lg font-semibold">Chat with AI</h3>
//               <button onClick={toggleChat} className="p-1 hover:bg-sky-600 rounded-full transition-colors">
//                 <XCircle size={20} />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {messages.length === 0 && (
//                 <div className="text-center text-slate-500 dark:text-slate-400 mt-10">
//                   Start a conversation!
//                 </div>
//               )}
//               {messages.map((msg) => (
//                 <div
//                   key={msg.id}
//                   className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className={`max-w-[70%] p-3 rounded-lg shadow-md ${
//                       msg.sender === 'user'
//                         ? 'bg-blue-500 text-white rounded-br-none'
//                         : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-bl-none'
//                     }`}
//                   >
//                     <p className="text-sm">{msg.text}</p>
//                     <span className="block text-xs mt-1 opacity-75">
//                       {msg.timestamp}
//                     </span>
//                   </motion.div>
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>

//             <ChatInput onSendMessage={handleSendMessage} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }