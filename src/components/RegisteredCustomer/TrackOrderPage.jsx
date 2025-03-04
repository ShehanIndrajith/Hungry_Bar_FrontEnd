import React, { useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import {
    Pizza,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  Truck,
  ChefHat,
  MessageCircle,
  Timer,Facebook,
  Instagram,
  Twitter,ArrowRight,
  Navigation,
} from "lucide-react";

export const TrackOrderPage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const orderDetails = {
    id: "ORD-2024-001",
    date: "2024-01-16 19:30",
    restaurant: "Tony's Pizza & Pasta",
    status: "in-transit",
    estimatedDelivery: "20:15",
    address: "123 Main St, New York, NY 10001",
    items: [
      {
        name: "Margherita Pizza",
        quantity: 1,
      },
      {
        name: "Garlic Bread",
        quantity: 2,
      },
    ],
    driver: {
      name: "Michael R.",
      phone: "+1 (555) 123-4567",
      vehicle: "Honda Civic",
      plateNumber: "ABC 123",
    },
  };

  const trackingSteps = [
    {
      id: 1,
      title: "Order Placed",
      time: "19:30",
      completed: true,
    },
    {
      id: 2,
      title: "Preparing",
      time: "19:35",
      completed: true,
    },
    {
      id: 3,
      title: "Out for Delivery",
      time: "19:50",
      completed: true,
    },
    {
      id: 4,
      title: "Delivered",
      time: "-",
      completed: false,
    },
  ];

  const handleTrackOrder = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <form onSubmit={handleTrackOrder} className="flex space-x-4">
              <input
                type="text"
                placeholder="Enter your order number"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Track Order
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    {orderDetails.restaurant}
                  </h2>
                  <p className="text-gray-600">Order #{orderDetails.id}</p>
                  <p className="text-sm text-gray-500">{orderDetails.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-600">
                    Estimated Delivery
                  </div>
                  <div className="text-2xl font-bold text-red-500">
                    {orderDetails.estimatedDelivery}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-px bg-gray-200 ml-4"></div>
                <div className="space-y-8">
                  {trackingSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div
                        className={`w-9 h-9 rounded-full border-2 flex items-center justify-center ${
                          step.completed
                            ? "border-green-500 bg-green-50"
                            : index ===
                              trackingSteps.findIndex((s) => !s.completed)
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : index ===
                          trackingSteps.findIndex((s) => !s.completed) ? (
                          <Timer className="w-5 h-5 text-red-500" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{step.title}</span>
                          <span className="text-sm text-gray-500">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Delivery Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium">Delivery Address</p>
                        <p className="text-sm text-gray-600">
                          {orderDetails.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Truck className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium">Delivery Partner</p>
                        <p className="text-sm text-gray-600">
                          {orderDetails.driver.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {orderDetails.driver.vehicle} •{" "}
                          {orderDetails.driver.plateNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    {orderDetails.items.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="text-gray-900">x{item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
                <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <Phone className="w-4 h-4" />
                  <span>Contact Driver</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Support</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Need Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50"
              >
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>What if my order is late?</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50"
              >
                <Navigation className="w-5 h-5 text-red-500" />
                <span>Wrong delivery address?</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};