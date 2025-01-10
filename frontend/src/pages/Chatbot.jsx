import React from "react";
import Header from "../components/Header";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const ask = async () => {
    if (query.trim() === "") return;

    setLoading(true); // Set loading to true
    const response = await fetch(
      `https://threebeans-4coffee-level-super-mind.onrender.com/chatbot`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({ message: query }),
      }
    );

    const data = await response.json();
    const botResponse = data.outputs[0].outputs[0].artifacts.message;

    setMessage((prevMessages) => [
      ...prevMessages,
      { text: query, isUser: true },
      { text: botResponse, isUser: false },
    ]);
    setLoading(false); // Set loading to false
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      ask();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      <div className="flex-1 z-10 overflow-auto relative">
        <Header title="Chatbot Assistant" />
        <div
          id="ans"
          className="overflow-y-scroll m-4 p-4 rounded-xl h-3/4 w-3/4 mx-auto scrollbar-hide"
        >
          {message.map((msg, index) => (
            <div
              key={index}
              className={`bg-gray-700 p-4  max-w-[70%] w-fit rounded-xl my-2 ${
                msg.isUser ? "ml-auto" : "mr-auto"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ))}

          {loading && (
            <div className="bg-gray-700 p-4 max-w-[70%] w-fit rounded-xl my-2 mr-auto">
              Typing...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="flex items-center space-x-2 max-w-2xl mx-auto p-4">
          <input
            id="ques"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about socials"
            className="flex-1 p-2 bg-gray-700 text-white placeholder-gray-400 rounded-xl focus:outline-none"
            autoComplete="off"
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={ask}
            className="bg-gray-950 hover:bg-gray-900 text-white px-4 py-2 rounded-md focus:outline-none"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Loading..." : "Ask"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
