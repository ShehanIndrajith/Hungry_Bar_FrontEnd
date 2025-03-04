import React, { useState } from "react";
import { OrderCard } from "../components/OrderCard";
import { OrderDetailsModal } from "../components/OrderDetailsModal";

const MOCK_ORDERS = [
  {
    id: "1234",
    address: "123 Main St, New York, NY 10001",
    estimatedDeliveryTime: "30-40 mins",
    status: "ready",
    customerName: "John Doe",
    phone: "(555) 123-4567",
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
  {
    id: "1235",
    address: "456 Park Ave, New York, NY 10002",
    estimatedDeliveryTime: "20-30 mins",
    status: "delivering",
    customerName: "Jane Smith",
    phone: "(555) 987-6543",
    items: [
      {
        name: "Margherita Pizza (Medium)",
        quantity: 1,
      },
      {
        name: "Caesar Salad",
        quantity: 1,
      },
    ],
  },
];

export const AssignedOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleAccept = (orderId) => {
    console.log("Accepted order:", orderId);
  };

  const handleReject = (orderId) => {
    console.log("Rejected order:", orderId);
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Assigned Orders
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_ORDERS.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onViewDetails={() => setSelectedOrder(order)}
              onAccept={() => handleAccept(order.id)}
              onReject={() => handleReject(order.id)}
            />
          ))}
        </div>
        {selectedOrder && (
          <OrderDetailsModal
            isOpen={!!selectedOrder}
            onClose={() => setSelectedOrder(null)}
            order={selectedOrder}
          />
        )}
      </div>
    </main>
  );
};
