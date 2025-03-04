import React, { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {
  CreditCard,
  MapPin,
  Phone,
  Mail,
  User,
  DollarSign,
  Clock,
  Pizza, Menu, X, ShoppingCart, Facebook, Instagram, Twitter
} from "lucide-react";

export const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    instructions: "",
    paymentMethod: "card",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const orderItems = [
    {
      name: "Margherita Pizza",
      quantity: 2,
      price: 14.99,
    },
    {
      name: "Garden Salad",
      quantity: 1,
      price: 8.99,
    },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 3.99;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
            <Clock className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Thank you for your order!
            </h2>
            <p className="text-gray-600 mb-4">
              Your food is being prepared and will be on its way soon.
            </p>
            <p className="text-gray-600">
              Order confirmation has been sent to your email.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
        <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Delivery Address & Contact Details */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Delivery Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fullName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="email"
                          required
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="tel"
                          required
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                      <textarea
                        required
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        rows={3}
                        placeholder="Enter your delivery address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="ZIP Code"
                        value={formData.zipCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            zipCode: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Payment Method Selection */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          paymentMethod: "card",
                        })
                      }
                      className="h-4 w-4 text-red-500"
                    />
                    <CreditCard className="ml-3 h-5 w-5 text-gray-400" />
                    <span className="ml-2">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          paymentMethod: "cash",
                        })
                      }
                      className="h-4 w-4 text-red-500"
                    />
                    <DollarSign className="ml-3 h-5 w-5 text-gray-400" />
                    <span className="ml-2">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={formData.paymentMethod === "paypal"}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          paymentMethod: "paypal",
                        })
                      }
                      className="h-4 w-4 text-red-500"
                    />
                    <span className="ml-3">PayPal</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">
                      {item.quantity}x {item.name}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mt-4 font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CheckoutPage;