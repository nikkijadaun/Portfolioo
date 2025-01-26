// src/components/ChatBot.jsx
import React, { useState } from "react";
import { FaTimes, FaRobot } from "react-icons/fa";
import { useChatbot } from "../hooks/useChatbot";
import { faqData } from "../utils/resumeData"; // Import the FAQ data

const Chatbot = () => {
  const { chatHistory, sendMessage, loading } = useChatbot();
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]); // State to track selected questions

  const handleSendMessage = () => {
    if (!message.trim()) return; // Prevent sending empty messages
    sendMessage(message);
    setMessage(""); // Clear the input field
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleQuestionSelect = (question) => {
    sendMessage(question); // Send the selected question to the chatbot
    setSelectedQuestions((prev) => [...prev, question]); // Add the question to selected questions
    setMessage(""); // Clear the input field
  };

  // Filter out selected questions from the FAQ data
  const remainingQuestions = faqData.filter(
    (faq) => !selectedQuestions.includes(faq.question)
  );

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

              {/* Display remaining questions below the chat history */}
              <div className="faq-questions mt-4 flex flex-wrap gap-2">
                {remainingQuestions.map((faq, index) => (
                  <button
                    key={index}
                    className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-200"
                    onClick={() => handleQuestionSelect(faq.question)}
                  >
                    {faq.question}
                  </button>
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
                    e.preventDefault(); // Prevent default behavior (new line)
                    handleSendMessage(); // Call the send message function
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