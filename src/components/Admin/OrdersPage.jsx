import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { OrdersTable } from "./OrdersComponents/OrdersTable";
import { OrderDetailsModal } from "./OrdersComponents/OrderDetailsModal";

export const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/HungryBarFinal/getOrders");
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          console.error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Active Orders</h1>
        <p className="text-gray-500">Manage and track ongoing orders</p>
      </div>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>
          <select
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="preparing">Preparing</option>
            <option value="out_for_delivery">Out for Delivery</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Filter className="h-5 w-5" />
          More Filters
        </button>
      </div>
      <OrdersTable
        orders={orders}
        onViewDetails={setSelectedOrder}
        onUpdateStatus={(orderId, status) => {
          // Handle status update
          console.log(`Updating order ${orderId} to ${status}`);
        }}
      />
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};