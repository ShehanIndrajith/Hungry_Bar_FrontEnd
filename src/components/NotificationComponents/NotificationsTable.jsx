import React from "react";
import {
  ShoppingBag,
  User,
  AlertTriangle,
  MessageSquare,
  Clock,
  Check,
  Circle,
} from "lucide-react";

export const NotificationsTable = ({
  notifications,
  selectedNotifications,
  onSelectNotification,
  onSelectAll,
  onViewDetails,
  onMarkAsRead,
}) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case "order":
        return ShoppingBag;
      case "user":
        return User;
      case "system":
        return AlertTriangle;
      case "feedback":
        return MessageSquare;
      default:
        return Circle;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "order":
        return "text-blue-500";
      case "user":
        return "text-green-500";
      case "system":
        return "text-red-500";
      case "feedback":
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-red-500 focus:ring-red-500"
                  checked={selectedNotifications.length === notifications.length}
                  onChange={(e) => onSelectAll(e.target.checked)}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notifications.map((notification) => {
              const TypeIcon = getTypeIcon(notification.type);
              return (
                <tr
                  key={notification.id}
                  className={`hover:bg-gray-50 cursor-pointer ${
                    notification.status === "unread" ? "bg-blue-50" : ""
                  }`}
                  onClick={() => onViewDetails(notification)}
                >
                  <td
                    className="px-6 py-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-red-500 focus:ring-red-500"
                      checked={selectedNotifications.includes(notification.id)}
                      onChange={() => onSelectNotification(notification.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <TypeIcon
                        className={`h-5 w-5 ${getTypeColor(notification.type)}`}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {notification.message}
                    </div>
                    {notification.entityId && (
                      <div className="text-xs text-gray-500">
                        {notification.entityType} #{notification.entityId}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(notification.timestamp).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {notification.status === "unread" ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onMarkAsRead(notification.id);
                        }}
                        className="flex items-center text-sm text-blue-500 hover:text-blue-600"
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Mark as read
                      </button>
                    ) : (
                      <span className="text-sm text-gray-500">Read</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};