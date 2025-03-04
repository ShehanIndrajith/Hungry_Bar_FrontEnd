import React, { useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import {
  Pizza,
  Search,
  ShoppingCart,
  User,
  MessageCircle,
  X,
  ChevronDown,
  Send,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";

export function FAQPage() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      text: "Hello! How can I help you today?",
    },
  ]);
  const [messageInput, setMessageInput] = useState("");

  const faqCategories = [
    {
      title: "Ordering & Delivery",
      questions: [
        {
          q: "How long does delivery take?",
          a: "Delivery typically takes 30-45 minutes depending on your location and current order volume.",
        },
        {
          q: "What is the minimum order amount?",
          a: "The minimum order amount for delivery is $15.",
        },
      ],
    },
    {
      title: "Payments & Refunds",
      questions: [
        {
          q: "What payment methods are accepted?",
          a: "We accept all major credit cards, PayPal, and cash on delivery.",
        },
        {
          q: "How can I request a refund?",
          a: "Contact our support team within 24 hours of your order for refund requests.",
        },
      ],
    },
  ];

  const filteredFAQs = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.a.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories;

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: messageInput,
      },
    ]);
    setMessageInput("");
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "I'll help you find an answer to that question. Please check our FAQ section above or contact our support team for more detailed assistance.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQ..."
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        {/* FAQ Sections */}
        <div className="max-w-2xl mx-auto space-y-8">
          {filteredFAQs.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl font-semibold">{category.title}</h2>
              {category.questions.map((item, i) => (
                <details key={i} className="bg-white border rounded-lg">
                  <summary className="px-4 py-3 cursor-pointer hover:bg-gray-50">
                    {item.q}
                  </summary>
                  <p className="px-4 py-3 text-gray-600 border-t">{item.a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
        {/* Contact Support */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">Still need help?</h2>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
            Contact Support
          </button>
        </div>
      </main>
      {/* Footer */}
      <Footer/>
      {/* Chat Widget */}
      <div
        className={`fixed bottom-4 right-4 z-50 ${
          isChatOpen ? "w-80" : "w-auto"
        }`}
      >
        {isChatOpen ? (
          <div className="bg-white rounded-lg shadow-lg border">
            <div className="p-4 border-b flex justify-between items-center bg-red-500 text-white rounded-t-lg">
              <h3 className="font-semibold">Chat Support</h3>
              <button onClick={() => setIsChatOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-96 flex flex-col">
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === "user"
                          ? "bg-red-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
