import { useState } from "react";
import { faqData } from "../utils/resumeData"; // Import the FAQ data

export const useChatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = (message) => {
    if (!message.trim()) return; // Prevent empty messages

    setChatHistory((prev) => [...prev, { type: 'user', message }]);
    setLoading(true);

    // Check for a matching FAQ response
    const faqResponse = faqData.find(faq =>
      faq.question.toLowerCase().includes(message.toLowerCase()) // Case-insensitive matching
    );

    let response;

    if (faqResponse) {
      // If a match is found, use the FAQ answer
      response = faqResponse.answer;
    } else {
      // If no match is found, use a default message
      response = "Sorry, I couldn't find an answer to your question.";
    }

    // Update chat history with the bot's response
    setChatHistory((prev) => [
      ...prev,
      { type: 'bot', message: response },
    ]);

    setLoading(false);
  };

  return {
    chatHistory,
    loading,
    sendMessage,
  };
};
