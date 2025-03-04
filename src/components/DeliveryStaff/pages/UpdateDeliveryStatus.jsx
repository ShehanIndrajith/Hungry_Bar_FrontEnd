import React, { useState } from "react";
import { Package, Truck, MapPin, User, Phone, ScrollText } from "lucide-react";
import { ConfirmationModal } from "../components/ConfirmationModal";

const MOCK_ORDER = {
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
  status: "assigned",
};

export const UpdateDeliveryStatus = () => {
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingAction, setPendingAction] = useState(null); // Removed TypeScript annotation

  const handleStatusUpdate = (action) => {
    setPendingAction(action);
    setShowConfirmation(true);
  };

  const confirmStatusUpdate = () => {
    console.log("Status updated:", pendingAction, "Notes:", deliveryNotes);
    setShowConfirmation(false);
    setPendingAction(null);
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Update Delivery Status
        </h1>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Order #{MOCK_ORDER.id}</h2>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              In Progress
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <User className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium">{MOCK_ORDER.customerName}</p>
                <p className="text-gray-600">{MOCK_ORDER.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
              <p className="text-gray-600">{MOCK_ORDER.address}</p>
            </div>
            <div className="flex items-start space-x-3">
              <ScrollText className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium mb-2">Order Items</p>
                <ul className="space-y-1">
                  {MOCK_ORDER.items.map((item, index) => (
                    <li key={index} className="text-gray-600">
                      {item.quantity}x {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {MOCK_ORDER.specialInstructions && (
              <div className="bg-yellow-50 p-3 rounded-md">
                <p className="text-sm font-medium text-yellow-800">
                  Special Instructions:
                </p>
                <p className="text-sm text-yellow-700">
                  {MOCK_ORDER.specialInstructions}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Update Status</h3>
            <div className="flex space-x-4">
              <button
                onClick={() => handleStatusUpdate("pickup")}
                className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                <Package className="h-5 w-5" />
                <span>Mark as Picked Up</span>
              </button>
              <button
                onClick={() => handleStatusUpdate("deliver")}
                className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Truck className="h-5 w-5" />
                <span>Mark as Delivered</span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Delivery Notes</h3>
            <textarea
              value={deliveryNotes}
              onChange={(e) => setDeliveryNotes(e.target.value)}
              placeholder="Add delivery notes (optional)"
              className="w-full h-32 px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={confirmStatusUpdate}
        title="Confirm Status Update"
        message={`Are you sure you want to mark this order as ${
          pendingAction === "pickup" ? "picked up" : "delivered"
        }?`}
        confirmText={
          pendingAction === "pickup" ? "Mark as Picked Up" : "Mark as Delivered"
        }
      />
    </main>
  );
};
