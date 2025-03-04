import React from "react";
import { Clock, Eye, MoreVertical } from "lucide-react";

export const OrdersTable = ({ orders, onViewDetails, onUpdateStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "preparing":
        return "bg-yellow-100 text-yellow-800";
      case "out_for_delivery":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatStatus = (status) => {
    return status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Items
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estimated Delivery
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      #{order.id}
                    </div>
                    <div className="text-sm text-gray-500">
                      {order.customerName}
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(order.orderTime).toLocaleTimeString()}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {order.items.map((item, index) => (
                      <span key={index} className="block">
                        {item.quantity}x {item.name}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-900 mt-1">
                    ${order.total.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <select
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      order.status
                    )}`}
                    value={order.status}
                    onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                  >
                    <option value="preparing">Preparing</option>
                    <option value="out_for_delivery">Out for Delivery</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-900">
                    <Clock className="h-4 w-4 text-gray-400 mr-1" />
                    {order.estimatedDelivery}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onViewDetails(order)}
                    className="text-gray-600 hover:text-red-500 mr-3"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-red-500">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};