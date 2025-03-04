import React from "react";
import { Clock, MapPin } from "lucide-react";

export const OrderCard = ({ order, onViewDetails, onAccept, onReject }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onViewDetails}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold">Order #{order.id}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <p className="text-sm">{order.address}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            order.status === "ready"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {order.status === "ready" ? "Ready for Pickup" : "Out for Delivery"}
        </span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <Clock className="h-4 w-4 mr-1" />
        <span className="text-sm">
          Estimated delivery: {order.estimatedDeliveryTime}
        </span>
      </div>
      <div className="flex space-x-2 mt-2" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onAccept}
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Accept
        </button>
        <button
          onClick={onReject}
          className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Reject
        </button>
      </div>
    </div>
  );
};