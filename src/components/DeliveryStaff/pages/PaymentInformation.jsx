import React, { useState } from "react";
import { Download, FileText } from "lucide-react";
import { EarningsSummary } from "../components/EarningsSummary";
import { PaymentList } from "../components/PaymentList";
import { OrderDetailsModal } from "../components/OrderDetailsModal";

const MOCK_PAYMENTS = [
  {
    orderId: "1234",
    customerName: "John Doe",
    address: "123 Main St, New York, NY 10001",
    amount: "$25.50",
    method: "Cash on Delivery",
    status: "paid",
    date: "2024-01-20 14:30",
    items: [
      {
        name: "Pepperoni Pizza (Large)",
        quantity: 1,
      },
      {
        name: "Garlic Knots",
        quantity: 2,
      },
    ],
    phone: "(555) 123-4567",
  },
  {
    orderId: "1235",
    customerName: "Jane Smith",
    address: "456 Park Ave, New York, NY 10002",
    amount: "$32.75",
    method: "Cash on Delivery",
    status: "pending",
    date: "2024-01-20 15:45",
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
    phone: "(555) 987-6543",
  },
];

export const PaymentInformation = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleDownloadReport = () => {
    console.log("Downloading payment report...");
  };

  const handleViewDetails = (orderId) => {
    const order = MOCK_PAYMENTS.find((p) => p.orderId === orderId);
    if (order) {
      setSelectedOrder(order);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Payment Information
          </h1>
          <button
            onClick={handleDownloadReport}
            className="flex items-center px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50"
          >
            <FileText className="h-5 w-5 text-gray-400 mr-2" />
            <span>Download Report</span>
          </button>
        </div>

        {/* Earnings Summary */}
        <div className="mb-8">
          <EarningsSummary
            totalEarnings="$450.75"
            completedDeliveries={18}
            averageEarnings="$25.04"
          />
        </div>

        {/* Time Period Selector */}
        <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
              Today
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">
              This Week
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">
              This Month
            </button>
          </div>
        </div>

        {/* Payment List */}
        <PaymentList
          payments={MOCK_PAYMENTS}
          onViewDetails={handleViewDetails}
        />

        {/* Order Details Modal */}
        {selectedOrder && (
          <OrderDetailsModal
            isOpen={!!selectedOrder}
            onClose={() => setSelectedOrder(null)}
            order={{
              id: selectedOrder.orderId,
              customerName: selectedOrder.customerName,
              phone: selectedOrder.phone,
              address: selectedOrder.address,
              items: selectedOrder.items,
            }}
          />
        )}
      </div>
    </main>
  );
};
