import React from "react";
import { X } from "lucide-react";

export const OrderDetailsModal = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Order Details #{order.id}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">Customer Information</h3>
              <p className="text-gray-600">{order.customerName}</p>
              <p className="text-gray-600">{order.phone}</p>
              <p className="text-gray-600">{order.address}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Order Items</h3>
              <ul className="space-y-2">
                {order.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-gray-600">x{item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
            {order.specialInstructions && (
              <div>
                <h3 className="font-medium text-gray-900">
                  Special Instructions
                </h3>
                <p className="text-gray-600">{order.specialInstructions}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};