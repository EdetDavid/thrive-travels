import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import "./Chatbot.css";

const defaultMessages = [
  { from: "bot", text: "Hello! How can I help you with your travel plans today?" },
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages([...messages, userMessage]);

    // Enhanced FAQ/keyword-based responses for all site features
    const lowerInput = input.toLowerCase();
    let botReply = "Thank you for your message! We'll get back to you soon.";

    if (lowerInput.includes("book") && lowerInput.includes("flight")) {
      botReply = "To book a flight, go to the 'Book Now' page or click 'Flight Reservation & Ticketing' under Our Products.";
    } else if (lowerInput.includes("hotel")) {
      botReply = "We offer great hotel deals! Visit the 'Hotel Booking' section or ask for a quote.";
    } else if (lowerInput.includes("contact") || lowerInput.includes("help")) {
      botReply = "You can reach us via the Contact Us page, or use the WhatsApp chat for live support. Our desk lines are also available below the navbar.";
    } else if (lowerInput.includes("visa")) {
      botReply = "For visa assistance, visit the 'Visa Assistant Services' page under Our Products or ask your question here.";
    } else if (lowerInput.includes("insurance")) {
      botReply = "We provide travel insurance. Visit the 'Travel Insurance' page or ask for a quote.";
    } else if (lowerInput.includes("vacation") || lowerInput.includes("tour")) {
      botReply = "Check out our 'Vacation (Tours & Special-packages)' page for amazing travel packages.";
    } else if (lowerInput.includes("corporate")) {
      botReply = "We offer Corporate Travels services. See 'Corporate Travels' under Our Products for details.";
    } else if (lowerInput.includes("vip")) {
      botReply = "Our VIP Travels package is designed for those who like to travel in style. See 'VIP Travels' under Our Products.";
    } else if (lowerInput.includes("pilgrimage")) {
      botReply = "We offer Pilgrimage Packages for spiritual journeys. Visit the 'Pilgrimage Packages' page for more info.";
    } else if (lowerInput.includes("destination wedding") || lowerInput.includes("honeymoon")) {
      botReply = "We can help with Destination Weddings and Honeymoons. See the relevant page under Our Products.";
    } else if (lowerInput.includes("sports event") || lowerInput.includes("international sports")) {
      botReply = "We offer International Sports Events packages. Check the 'International Sports Events' page for details.";
    } else if (lowerInput.includes("easy pay")) {
      botReply = "Our Easy Pay service lets you pay for travel in installments. See 'Easy Pay' under Our Products.";
    } else if (lowerInput.includes("team") || lowerInput.includes("management") || lowerInput.includes("board")) {
      botReply = "Learn more about our team on the Board of Directors, Management Team, and Other Team Members pages.";
    } else if (lowerInput.includes("newsletter")) {
      botReply = "Subscribe to our newsletter to stay updated on offers and news!";
    } else if (lowerInput.includes("about")) {
      botReply = "Visit the About Us page to learn more about Thrive Travels & Tours Limited.";
    } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("quote")) {
      botReply = "Our prices vary by destination and service. Please specify your travel details for a quote.";
    } else if (lowerInput.includes("thanks") || lowerInput.includes("thank you")) {
      botReply = "You're welcome! Let us know if you have more questions.";
    } else if (lowerInput.includes("music")) {
      botReply = "Enjoy background music while you browse! Use the music controls at the bottom left to play or pause.";
    } else if (lowerInput.includes("not found") || lowerInput.includes("404")) {
      botReply = "If you see a 404 error, the page may not exist. Use the navigation menu to find what you need.";
    } else if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("good morning") ||
      lowerInput.includes("good afternoon") ||
      lowerInput.includes("good evening") ||
      lowerInput.includes("greetings") ||
      lowerInput.includes("hey") ||
      lowerInput.includes("how are you") ||
      lowerInput.includes("what's up") ||
      lowerInput.includes("howdy") ||
      lowerInput.includes("nice to meet you") ||
      lowerInput.includes("pleased to meet you")
    ) {
      botReply = "Hello! How can I assist you with your travel plans today?";
    }

    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "bot", text: botReply }]);
    }, 800);
    setInput("");
  };

  // Clear messages and restore default
  const handleClear = () => {
    setMessages(defaultMessages);
  };

  // Feature: close chatbot with Escape key
  React.useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  return (
    <div className="chatbot-container">
      {open ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Thrive Travels Chatbot</span>
            <button className="chatbot-close" onClick={() => setOpen(false)}><FaTimes /></button>
          </div>
          <div className="chatbot-messages" style={{ maxHeight: 300, overflowY: 'auto' }}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.from}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chatbot-input" style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 8, alignItems: 'center' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              style={{ width: '100%', minWidth: 0 }}
            />
            <button onClick={handleSend} style={{ minWidth: 70 }}>Send</button>
            <button onClick={handleClear} style={{ minWidth: 70 }}>Clear</button>
          </div>
        </div>
      ) : (
        <button className="chatbot-fab" onClick={() => setOpen(true)}>
          <FaComments size={24} /> ChatBot
        </button>
      )}
    </div>
  );
};

export default Chatbot;
