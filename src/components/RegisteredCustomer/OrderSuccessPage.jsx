import React from "react";
import { CheckCircle, Home, Clock, Receipt } from "lucide-react";

export const OrderSuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-lg w-full text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-50 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle className="w-14 h-14 text-green-500" />
            </div>
          </div>
          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Thank You for Your Order!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your delicious meal is being prepared with care. Enjoy every bite!
            🍽️
          </p>
          {/* Order Info */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Receipt className="w-5 h-5" />
                <span>Order #HD2834</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>Estimated Delivery: 30-45 mins</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              We'll send you updates about your order via email and SMS
            </div>
          </div>
          {/* Next Steps */}
          <div className="space-y-4 mb-8">
            <p className="text-gray-600">While you wait, why not:</p>
            <div className="flex flex-col gap-3">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                Browse our menu for next time 🍔
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                Check out our special offers �
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                Share your excitement with friends 🌟
              </div>
            </div>
          </div>
          {/* Action Button */}
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </button>
          {/* Support Info */}
          <div className="mt-8 text-sm text-gray-600">
            <p>Need help with your order?</p>
            <p className="mt-1">
              Contact our support team at{" "}
              <a
                href="mailto:support@hungrybar.com"
                className="text-red-500 hover:text-red-600"
              >
                support@hungrybar.com
              </a>
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="py-4 text-center text-sm bg-gray-900 text-white border-t">
        <p>© 2024 Hungry Bar. All rights reserved.</p>
      </footer>
    </div>
  );
};