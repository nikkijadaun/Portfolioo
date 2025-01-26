// src/hooks/useChatbot.jsx
import { useState } from "react";
import { faqData } from "../utils/resumeData"; // Adjust the import path as necessary

export const useChatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = (message) => {
    setLoading(true);
    setChatHistory((prev) => [...prev, { type: "user", message }]);

    // Check for a matching FAQ answer
    const faqResponse = faqData.find((faq) =>
      faq.question.toLowerCase().includes(message.toLowerCase())
    );

    const responseMessage = faqResponse
      ? faqResponse.answer
      : "I'm sorry, I don't have an answer for that.";

    // Simulate a delay for the chatbot response
    setTimeout(() => {
      // First, show a typing indicator
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", message: "..." }, // Typing indicator
      ]);

      // Then, after a short delay, show the actual response
      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev.slice(0, prev.length - 1), // Remove the typing indicator
          { type: "bot", message: responseMessage },
        ]);
        setLoading(false);
      }, 1000); // Delay before showing the actual response
    }, 1000); // Initial delay for typing effect
  };

  return { chatHistory, sendMessage, loading };
};