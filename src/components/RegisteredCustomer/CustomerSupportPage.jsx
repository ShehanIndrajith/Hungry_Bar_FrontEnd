import React, { useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import {
  Pizza,
  Search,
  ShoppingCart,
  MessageCircle,
  X,
  Send,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Upload,
  Check,
  ExternalLink,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export function CustomerSupportPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      text: "Hello! How can I help you today?",
    },
  ]);
  const [messageInput, setMessageInput] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    message: "",
    file: null,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        orderNumber: "",
        message: "",
        file: null,
      });
    }, 3000);
  };

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
          text: "I'll connect you with a support agent shortly. In the meantime, you can check our FAQ section for quick answers.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header/>
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Customer Support
        </h1>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-green-100 rounded-full p-3 mb-4">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-green-600 font-medium">
                  Thank you! We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Order Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.orderNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        orderNumber: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Attachment
                  </label>
                  <div className="border-2 border-dashed rounded-lg p-4 text-center">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">
                      Drop files here or click to upload
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          {/* Direct Contact & Quick Links */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-gray-600">support@hungrybar.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-gray-600">1-800-HUNGRY-BAR</p>
                    <p className="text-sm text-gray-500">
                      Mon-Fri: 9AM-6PM EST
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                >
                  <span>Track My Order</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                >
                  <span>Refund Policy</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                >
                  <span>FAQ</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer/>
      {/* Chat Widget */}
      <div
        className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? "w-80" : "w-auto"}`}
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
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${msg.type === "user" ? "bg-red-500 text-white" : "bg-gray-100"}`}
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