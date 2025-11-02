import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes("ticket")) {
      return "Sure, I can help with tickets. You can create a new ticket from the Tickets page or view existing ones.";
    } else if (input.includes("knowledge") || input.includes("help")) {
      return "Check out the Knowledge Base for articles and FAQs. What topic are you looking for?";
    } else if (input.includes("profile")) {
      return "You can update your profile information in the Profile section.";
    } else if (input.includes("dashboard")) {
      return "The Dashboard shows an overview of your tickets and activities.";
    } else if (input.includes("login") || input.includes("signup")) {
      return "For authentication, use the Login or Signup pages.";
    } else {
      return "I'm here to help with support tickets and knowledge. How can I assist you today?";
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      const userInput = input;
      setInput("");
      // Realistic response based on input
      setTimeout(() => {
        const response = getResponse(userInput);
        setMessages((prev) => [...prev, { text: response, user: false }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col">
      <div className="bg-blue-600 text-white p-2 rounded-t-lg">Chatbot</div>
      <div className="flex-1 p-2 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${msg.user ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block p-2 rounded ${
                msg.user ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="w-full p-2 border rounded"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="mt-2 w-full bg-blue-600 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
