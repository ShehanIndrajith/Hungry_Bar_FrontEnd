import React from "react";
import {
  X,
  ShoppingBag,
  User,
  AlertTriangle,
  MessageSquare,
  ExternalLink,
  Check,
} from "lucide-react";

export const NotificationDetailsModal = ({
  notification,
  onClose,
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
        return AlertTriangle;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "order":
        return "bg-blue-100 text-blue-500";
      case "user":
        return "bg-green-100 text-green-500";
      case "system":
        return "bg-red-100 text-red-500";
      case "feedback":
        return "bg-purple-100 text-purple-500";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  const TypeIcon = getTypeIcon(notification.type);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${getTypeColor(notification.type)}`}>
              <TypeIcon className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-semibold">Notification Details</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Message</h3>
            <p className="text-gray-900">{notification.message}</p>
          </div>
          {notification.entityId && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Related Item
              </h3>
              <div className="flex items-center gap-2">
                <TypeIcon className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900">
                  {notification.entityType} #{notification.entityId}
                </span>
                <button className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  View Details
                </button>
              </div>
            </div>
          )}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Timestamp
            </h3>
            <p className="text-gray-900">
              {new Date(notification.timestamp).toLocaleString()}
            </p>
          </div>
          {notification.additionalInfo && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Additional Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-sm text-gray-900 whitespace-pre-wrap">
                  {JSON.stringify(notification.additionalInfo, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 flex justify-end gap-3">
          {notification.status === "unread" && (
            <button
              onClick={onMarkAsRead}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Check className="h-4 w-4" />
              Mark as Read
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};