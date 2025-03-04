import React, { useState } from "react";
import { MapView } from "../components/MapView";
import { NavigationInfo } from "../components/NavigationInfo";
import {
  Phone,
  Navigation,
  RotateCw,
  User,
  MapPin,
  ScrollText,
  StopCircle,
} from "lucide-react";

const MOCK_DATA = {
  order: {
    id: "1234",
    customerName: "John Doe",
    phone: "(555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    items: [
      {
        name: "Pepperoni Pizza (Large)",
        quantity: 1,
      },
      {
        name: "Garlic Knots",
        quantity: 2,
      },
      {
        name: "Coca Cola",
        quantity: 2,
      },
    ],
    specialInstructions: "Please ring doorbell twice",
  },
  // Example coordinates for NYC
  customerLocation: [40.7128, -74.006],
  currentLocation: [40.7282, -73.9942],
  distance: "2.5 km",
  duration: "15 mins",
};

export const NavigateToCustomer = () => {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleCallCustomer = () => {
    console.log("Calling customer:", MOCK_DATA.order.phone);
  };

  const handleStartNavigation = () => {
    setIsNavigating(true);
    console.log("Starting navigation");
  };

  const handleStopNavigation = () => {
    setIsNavigating(false);
    console.log("Stopping navigation");
  };

  const handleRefreshRoute = () => {
    console.log("Refreshing route");
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Navigate to Customer
            </h1>
            <button
              onClick={handleCallCustomer}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Customer
            </button>
          </div>

          {/* Map Section */}
          <MapView
            customerLocation={MOCK_DATA.customerLocation}
            currentLocation={MOCK_DATA.currentLocation}
          />

          {/* Navigation Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <NavigationInfo
              distance={MOCK_DATA.distance}
              duration={MOCK_DATA.duration}
            />
            <div className="md:col-span-2 flex space-x-4">
              {!isNavigating ? (
                <button
                  onClick={handleStartNavigation}
                  className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Start Navigation</span>
                </button>
              ) : (
                <button
                  onClick={handleStopNavigation}
                  className="flex-1 flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  <StopCircle className="h-5 w-5" />
                  <span>Stop Navigation</span>
                </button>
              )}
              <button
                onClick={handleRefreshRoute}
                className="flex items-center justify-center px-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                <RotateCw className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Customer and Order Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer Details */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      {MOCK_DATA.order.customerName}
                    </p>
                    <p className="text-gray-600">{MOCK_DATA.order.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <p className="text-gray-600">{MOCK_DATA.order.address}</p>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold mb-4">
                Order #{MOCK_DATA.order.id}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ScrollText className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium mb-2">Order Items</p>
                    <ul className="space-y-1">
                      {MOCK_DATA.order.items.map((item, index) => (
                        <li key={index} className="text-gray-600">
                          {item.quantity}x {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {MOCK_DATA.order.specialInstructions && (
                  <div className="bg-yellow-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-yellow-800">
                      Special Instructions:
                    </p>
                    <p className="text-sm text-yellow-700">
                      {MOCK_DATA.order.specialInstructions}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
