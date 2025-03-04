import React, { useState } from "react";
import { Search, Filter, Calendar, Check, Trash2 } from "lucide-react";
import { NotificationsTable } from "../components/Notifications/NotificationsTable";
import { NotificationDetailsModal } from "../components/Notifications/NotificationDetailsModal";

const SAMPLE_NOTIFICATIONS = [
  {
    id: "1",
    type: "order",
    message: "New order #12345 received from John Doe",
    timestamp: "2024-01-20T10:00:00",
    status: "unread",
    priority: "high",
    entityId: "12345",
    entityType: "Order",
  },
  {
    id: "2",
    type: "system",
    message: "Low inventory alert: Mozzarella cheese running low",
    timestamp: "2024-01-20T09:45:00",
    status: "unread",
    priority: "medium",
  },
  {
    id: "3",
    type: "feedback",
    message: "New complaint received regarding order #12346",
    timestamp: "2024-01-20T09:30:00",
    status: "read",
    priority: "high",
    entityId: "12346",
    entityType: "Order",
  },
  {
    id: "4",
    type: "user",
    message: "New delivery staff account created",
    timestamp: "2024-01-20T09:15:00",
    status: "read",
    priority: "low",
    entityId: "USR123",
    entityType: "User",
  },
];

export const NotificationsPage = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [selectedNotifications, setSelectedNotifications] = useState([]);
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <p className="text-gray-500">View and manage system notifications</p>
      </div>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search notifications..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>
          <select
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="order">Orders</option>
            <option value="system">System</option>
            <option value="user">Users</option>
            <option value="feedback">Feedback</option>
          </select>
          <select
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Calendar className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">Date Range</span>
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Filter className="h-5 w-5" />
          More Filters
        </button>
      </div>
      {selectedNotifications.length > 0 && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {selectedNotifications.length} notifications selected
          </span>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500">
              <Check className="h-4 w-4" />
              Mark as Read
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500">
              <Trash2 className="h-4 w-4" />
              Clear Selected
            </button>
          </div>
        </div>
      )}
      <NotificationsTable
        notifications={SAMPLE_NOTIFICATIONS}
        selectedNotifications={selectedNotifications}
        onSelectNotification={(id) => {
          setSelectedNotifications((prev) =>
            prev.includes(id)
              ? prev.filter((notificationId) => notificationId !== id)
              : [...prev, id]
          );
        }}
        onSelectAll={(checked) => {
          setSelectedNotifications(
            checked
              ? SAMPLE_NOTIFICATIONS.map((notification) => notification.id)
              : []
          );
        }}
        onViewDetails={setSelectedNotification}
        onMarkAsRead={(id) => {
          // Handle marking as read
          console.log(`Marking notification ${id} as read`);
        }}
      />
      {selectedNotification && (
        <NotificationDetailsModal
          notification={selectedNotification}
          onClose={() => setSelectedNotification(null)}
          onMarkAsRead={() => {
            // Handle marking as read
            console.log("Marking notification as read");
            setSelectedNotification(null);
          }}
        />
      )}
    </div>
  );
};