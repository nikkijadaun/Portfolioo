import React, { useState } from "react";
import { FaTimes, FaRobot } from "react-icons/fa";
import { useChatbot } from "../hooks/useChatbot";

const Chatbot = () => {
  const { chatHistory, sendMessage, loading } = useChatbot();
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    sendMessage(message);
    setMessage("");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "chatbot-large" : "chatbot-small"}`}>
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-center mb-2 cursor-pointer" onClick={toggleChat}>
          {isOpen ? <FaTimes size={30} /> : <FaRobot size={30} />}
        </div>

        {isOpen && (
          <>
            <div className="chat-history">
              <div className="space-y-4">
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg ${
                      chat.type === "user" ? "bg-blue-100" : "bg-gray-100"
                    }`}
                  >
                    <p>{chat.message}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask a question about my resume..."
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
