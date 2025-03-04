import React from "react";
import { X, MapPin, Phone, CreditCard, Clock } from "lucide-react";

export const OrderDetailsModal = ({ order, onClose }) => {
  const timelineSteps = [
    {
      status: "placed",
      label: "Order Placed",
      time: "10:00 AM",
    },
    {
      status: "preparing",
      label: "Preparing",
      time: "10:05 AM",
    },
    {
      status: "out_for_delivery",
      label: "Out for Delivery",
      time: "10:30 AM",
    },
    {
      status: "delivered",
      label: "Delivered",
      time: "11:00 AM",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Order #{order.id}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Customer Details
              </h3>
              <div className="space-y-2">
                <p className="text-sm">{order.customerName}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {order.phone}
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  <span>{order.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Payment Information
              </h3>
              <div className="flex items-center text-sm text-gray-600">
                <CreditCard className="h-4 w-4 mr-2" />
                {order.paymentMethod}
              </div>
              <p className="text-sm text-gray-900 font-medium mt-1">
                Total: ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Order Timeline
            </h3>
            <div className="space-y-4">
              {timelineSteps.map((step, index) => (
                <div key={step.status} className="flex items-start">
                  <div
                    className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                      order.status === step.status
                        ? "bg-red-500"
                        : timelineSteps.indexOf({
                            ...timelineSteps.find(
                              (s) => s.status === order.status
                            ),
                          }) >= index
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      {step.label}
                    </p>
                    <p className="text-xs text-gray-500">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">
            Order Items
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 uppercase">
                  <th className="text-left pb-2">Item</th>
                  <th className="text-center pb-2">Quantity</th>
                  <th className="text-right pb-2">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {order.items.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 text-sm">{item.name}</td>
                    <td className="py-2 text-sm text-center">{item.quantity}</td>
                    <td className="py-2 text-sm text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};