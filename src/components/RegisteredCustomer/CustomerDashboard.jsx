import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import {Pizza,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Edit,
  Clock,
  CreditCard,
  MapPin,
  HelpCircle,
  LogOut,
  Settings,
  Gift,
  History,
  Star,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight
} from "lucide-react";

export function CustomerDashboard() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const recentOrders = [
    {
      id: "123",
      restaurant: "Tony's Pizza",
      status: "Delivered",
      date: "2024-01-15",
      total: 29.99,
    },
    {
      id: "124",
      restaurant: "Mario's Pasta",
      status: "Out for Delivery",
      date: "2024-01-14",
      total: 45.5,
    },
    {
      id: "125",
      restaurant: "Sushi Express",
      status: "Pending",
      date: "2024-01-14",
      total: 32.75,
    },
  ];

  const navigate = useNavigate();
  const quickActions = [
    {
      icon: User,
      label: "Edit Profile",
      path: "/edit-profile", // Add the corresponding path
    },
    {
      icon: History,
      label: "Order History",
      path: "/order-history", // Add the corresponding path
    },
    {
      icon: HelpCircle,
      label: "Support & Help",
      path: "/customer-support", // Add the corresponding path
    },
  ];
  const handleQuickActionClick = (path) => {
    navigate(path); // Navigate to the corresponding page
  };
  const offers = [
    {
      title: "20% Off Your Next Order",
      code: "SAVE20",
      expires: "2024-01-31",
    },
    {
      title: "Free Delivery",
      code: "FREEDEL",
      expires: "2024-01-25",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="https://avatar.iran.liara.run/public/49"
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm border">
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, John!</h1>
                <p className="text-gray-600">Member since January 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{order.restaurant}</h3>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${order.status === "Delivered" ? "bg-green-100 text-green-800" : order.status === "Out for Delivery" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        ${order.total.toFixed(2)}
                      </span>
                      <button className="text-red-500 hover:text-red-600 text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleQuickActionClick(action.path)} // Navigate on click
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <action.icon className="w-6 h-6 text-gray-600 mb-2" />
            <span className="text-sm text-gray-700">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
          </div>
          <div className="space-y-6">
            {/* Loyalty & Rewards */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Loyalty Points</h2>
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">250</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Points Available</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{
                      width: "60%",
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  150 more points until your next reward!
                </p>
                <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Redeem Rewards
                </button>
              </div>
            </div>
            {/* Offers */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Your Offers</h2>
              <div className="space-y-4">
                {offers.map((offer, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{offer.title}</h3>
                        <p className="text-sm text-gray-600">
                          Use code: {offer.code}
                        </p>
                        <p className="text-xs text-gray-500">
                          Expires: {offer.expires}
                        </p>
                      </div>
                      <Gift className="w-5 h-5 text-red-500" />
                    </div>
                    <button className="w-full mt-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                      Apply to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
}