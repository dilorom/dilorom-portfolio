import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMessage, FaXmark, FaPaperPlane, FaSpinner, FaRobot } from "react-icons/fa6";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    /* Updated name branding to D21 */
    { role: "assistant", content: "Hi! 👋 I'm *D21*, Dilorom's AI twin assistant. Ask me anything about her projects, skills, experience, or education. I'm here to help you get to know her—and if you'd like, I can even tell a joke! 😊" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    // 1. Create the new user message object
    const userMessage = { role: "user", content: input };

    // 2. Calculate the updated history array so we can send it immediately
    const updatedMessages = [...messages, userMessage];

    // 3. Update the local React state so it shows up visually in the UI
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // 4. Send the full updated history array to the backend server!
      const response = await fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }), 
      });
      
      const data = await response.json();
      
      // 5. Append the AI twin's response to the chat history stream
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev, 
        { role: "assistant", content: "Oops! I couldn't reach D21's server. Make sure your backend terminal is running!" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans text-white">
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant Chat"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full border-2 border-cyan-500/40 bg-slate-900 flex items-center justify-center text-xl text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300"
      >
        {isOpen ? <FaXmark /> : <FaMessage />}
      </motion.button>

      {/* Chat Window Box Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-slate-950 border-2 border-cyan-500/30 rounded-2xl shadow-[0_10px_30px_rgba(34,211,238,0.15)] overflow-hidden flex flex-col"
          >
            {/* Header Area */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-cyan-400/40 bg-slate-950 flex items-center justify-center text-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                <FaRobot className="text-sm" />
              </div>
              <div>
                {/* Updated Title */}
                <h3 className="font-semibold text-sm tracking-wide">*D21* Assistant</h3>
                <p className="text-xs text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                </p>
              </div>
            </div>

            {/* Message Stream */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-thin scrollbar-thumb-slate-800">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 rounded-tr-none"
                        : "bg-slate-900 border border-slate-800 text-gray-200 rounded-tl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl rounded-tl-none flex items-center gap-2">
                    <FaSpinner className="animate-spin text-cyan-400 text-xs" />
                    <span className="text-xs text-gray-400">D21 is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form Submission Tray */}
            <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask D21 a question..."
                className="flex-1 px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_10px_rgba(34,211,238,0.1)] transition-all duration-300 text-white placeholder-gray-600"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all duration-300"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistant;