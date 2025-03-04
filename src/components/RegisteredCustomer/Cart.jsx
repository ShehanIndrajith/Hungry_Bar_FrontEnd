import React, { useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  Pizza,
  Menu,
  X,
  ShoppingCart,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export const Cart = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 14.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    },
    {
      id: 2,
      name: "Garden Salad",
      price: 8.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "welcome10") {
      setDiscount(10);
      setCouponSuccess("Coupon applied successfully!");
      setCouponError("");
    } else {
      setDiscount(0);
      setCouponError("Invalid coupon code");
      setCouponSuccess("");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax - (subtotal * discount) / 100;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="mb-8">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty!</h2>
          <p className="text-gray-600 mb-8">Start adding delicious food now.</p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-sm">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 border-b last:border-b-0">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <p className="text-gray-500">
                        ${item.price.toFixed(2)} each
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Coupon Code Section */}
            <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  onClick={applyCoupon}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponError && (
                <p className="mt-2 text-red-500 text-sm">{couponError}</p>
              )}
              {couponSuccess && (
                <p className="mt-2 text-green-500 text-sm">{couponSuccess}</p>
              )}
            </div>
          </div>
          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discount}%)</span>
                    <span>-${((subtotal * discount) / 100).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 font-bold flex justify-between">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
