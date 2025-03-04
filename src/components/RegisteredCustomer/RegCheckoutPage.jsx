import React, { useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { ChevronRight, MapPin, Tag, Gift, Clock, CreditCard, Banknote, Plus } from "lucide-react";

const RegCheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Checkout</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <span>Cart</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-red-500">Checkout</span>
            <ChevronRight className="w-4 h-4" />
            <span>Confirmation</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            <DeliveryForm />
            <PaymentMethods />
            <DiscountSection />
          </div>
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

const DeliveryForm = () => {
  const [useNewAddress, setUseNewAddress] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Delivery Details</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setUseNewAddress(false)}
              className={`text-sm ${!useNewAddress ? "text-red-500 font-medium" : "text-gray-500 hover:text-gray-700"}`}
            >
              Saved Addresses
            </button>
            <button
              onClick={() => setUseNewAddress(true)}
              className={`text-sm ${useNewAddress ? "text-red-500 font-medium" : "text-gray-500 hover:text-gray-700"}`}
            >
              New Address
            </button>
          </div>
        </div>
        {useNewAddress ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                  rows={3}
                  placeholder="Enter your delivery address"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                placeholder="Enter postal code"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Instructions (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                placeholder="E.g., Leave at the front door"
              />
            </div>
          </div>
        ) : (
          <SavedAddressList />
        )}
      </div>
    </div>
  );
};

const DiscountSection = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Discounts & Rewards</h2>
        {/* Promo Code */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
          <div className="flex gap-3">
            <div className="relative flex-grow">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                placeholder="Enter promo code"
              />
            </div>
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Apply</button>
          </div>
        </div>
        {/* Loyalty Points */}
        <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
          <Gift className="w-5 h-5 text-red-500 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-gray-900">Loyalty Points Available</h3>
            <p className="text-sm text-gray-600 mt-1">
              You have 500 points available. Use them to get a $5 discount on your order!
            </p>
            <button className="mt-3 text-sm text-red-500 hover:text-red-600 font-medium">Redeem Points</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderSummary = () => {
  const orderItems = [
    { name: "Spicy Chicken Burger", quantity: 2, price: 12.99 },
    { name: "French Fries (Large)", quantity: 1, price: 4.99 },
    { name: "Coca Cola", quantity: 2, price: 2.49 },
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const deliveryFee = 2.99;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="bg-white rounded-lg border border-gray-200 sticky top-6">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
        {/* Estimated Delivery Time */}
        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg mb-6">
          <Clock className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-600">Estimated delivery: 30-45 mins</span>
        </div>
        {/* Order Items */}
        <div className="space-y-4 mb-6">
          {orderItems.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <div>
                <span className="font-medium">{item.quantity}x</span> {item.name}
              </div>
              <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>
        {/* Price Breakdown */}
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-medium">${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base font-medium pt-4 border-t border-gray-200">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        {/* Place Order Button */}
        <button className="w-full mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
          Place Order
        </button>
        {/* Terms */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By placing your order, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

const PaymentMethods = () => {
  const [useNewCard, setUseNewCard] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setUseNewCard(false)}
              className={`text-sm ${!useNewCard ? "text-red-500 font-medium" : "text-gray-500 hover:text-gray-700"}`}
            >
              Saved Cards
            </button>
            <button
              onClick={() => setUseNewCard(true)}
              className={`text-sm ${useNewCard ? "text-red-500 font-medium" : "text-gray-500 hover:text-gray-700"}`}
            >
              New Card
            </button>
          </div>
        </div>
        {useNewCard ? (
          <div className="space-y-4">
            <div className="relative">
              <input
                type="radio"
                name="payment"
                id="card"
                className="peer absolute opacity-0"
                defaultChecked
              />
              <label
                htmlFor="card"
                className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-red-500 peer-checked:bg-red-50"
              >
                <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
                <span className="flex-grow">Credit / Debit Card</span>
                <span className="text-sm text-gray-500">Visa, Mastercard, Amex</span>
              </label>
              <div className="mt-4 space-y-4 peer-checked:block hidden">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <SavedPaymentList />
        )}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="relative">
            <input
              type="radio"
              name="payment"
              id="cash"
              className="peer absolute opacity-0"
            />
            <label
              htmlFor="cash"
              className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-red-500 peer-checked:bg-red-50"
            >
              <Banknote className="w-5 h-5 text-gray-400 mr-3" />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const SavedAddressList = () => {
  const savedAddresses = [
    {
      id: 1,
      name: "Home",
      address: "123 Main Street, Apt 4B",
      city: "New York",
      postalCode: "10001",
      phone: "+1 (555) 000-0000",
    },
    {
      id: 2,
      name: "Office",
      address: "456 Business Ave, Floor 12",
      city: "New York",
      postalCode: "10002",
      phone: "+1 (555) 000-0001",
    },
  ];

  return (
    <div className="space-y-4">
      {savedAddresses.map((address) => (
        <div key={address.id} className="relative">
          <input
            type="radio"
            name="delivery-address"
            id={`address-${address.id}`}
            className="peer absolute opacity-0"
          />
          <label
            htmlFor={`address-${address.id}`}
            className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-red-500 peer-checked:bg-red-50"
          >
            <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
            <div className="flex-grow">
              <div className="flex justify-between">
                <span className="font-medium">{address.name}</span>
                <span className="text-sm text-gray-500">{address.phone}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{address.address}</p>
              <p className="text-sm text-gray-600">
                {address.city}, {address.postalCode}
              </p>
            </div>
          </label>
        </div>
      ))}
      {/* Add New Address Button */}
      <button className="w-full flex items-center justify-center gap-2 p-4 border border-dashed border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
        <Plus className="w-5 h-5" />
        <span>Add New Address</span>
      </button>
    </div>
  );
};

const SavedPaymentList = () => {
  const savedPayments = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/24",
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "08/25",
    },
  ];

  return (
    <div className="space-y-4">
      {savedPayments.map((payment) => (
        <div key={payment.id} className="relative">
          <input
            type="radio"
            name="payment-method"
            id={`payment-${payment.id}`}
            className="peer absolute opacity-0"
          />
          <label
            htmlFor={`payment-${payment.id}`}
            className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-red-500 peer-checked:bg-red-50"
          >
            <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
            <div className="flex-grow">
              <div className="flex justify-between">
                <span className="font-medium">{payment.type}</span>
                <span className="text-sm text-gray-500">expires {payment.expiry}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">•••• •••• •••• {payment.last4}</p>
            </div>
          </label>
        </div>
      ))}
      {/* Add New Payment Method Button */}
      <button className="w-full flex items-center justify-center gap-2 p-4 border border-dashed border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
        <Plus className="w-5 h-5" />
        <span>Add New Payment Method</span>
      </button>
    </div>
  );
};

export default RegCheckoutPage;