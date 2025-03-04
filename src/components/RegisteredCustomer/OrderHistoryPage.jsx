import React, { useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import {
    Pizza,
    Search,
    ShoppingCart,
    User,
    ChevronDown,
    MapPin,
    Facebook,
    Instagram,
    Twitter,ArrowRight,
  Filter,
  ChevronRight,
  Download,
  CreditCard,
} from "lucide-react";

export const OrderHistoryPage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15 19:30",
      status: "Delivered",
      total: 45.99,
      items: [
        {
          name: "Margherita Pizza",
          quantity: 1,
          price: 18.99,
          image: "https://via.placeholder.com/60",
        },
        {
          name: "Pepperoni Pizza",
          quantity: 2,
          price: 21.99,
          image: "https://via.placeholder.com/60",
        },
      ],
      address: "123 Main St, New York, NY 10001",
      payment: "Visa •••• 4242",
    },
    {
      id: "ORD-002",
      date: "2024-01-14 20:15",
      status: "In Transit",
      total: 32.5,
      items: [
        {
          name: "Chicken Wings",
          quantity: 2,
          price: 15.99,
          image: "https://via.placeholder.com/60",
        },
      ],
      address: "456 Park Ave, New York, NY 10022",
      payment: "PayPal",
    },
  ];

  const handleReorder = (orderId) => {
    console.log("Reordering:", orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Order History</h1>

          {/* Search and Filter */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search orders by ID or items..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
            {filterOpen && (
              <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Date Range
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  >
                    <option value="all">All Time</option>
                    <option value="week">Last 7 Days</option>
                    <option value="month">Last 30 Days</option>
                    <option value="year">Last Year</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Status
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="delivered">Delivered</option>
                    <option value="transit">In Transit</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {/* Order Summary */}
                <div className="p-4 border-b">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="font-medium">{order.id}</h3>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "In Transit"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <span className="font-medium">
                        ${order.total.toFixed(2)}
                      </span>
                      <button
                        onClick={() =>
                          setSelectedOrder(
                            selectedOrder === order.id ? null : order.id
                          )
                        }
                        className="text-red-500 hover:text-red-600"
                      >
                        <ChevronRight
                          className={`w-5 h-5 transform transition-transform ${
                            selectedOrder === order.id ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {order.items.slice(0, 2).map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                    {order.items.length > 2 && (
                      <span className="text-sm text-gray-600">
                        +{order.items.length - 2} more items
                      </span>
                    )}
                  </div>
                </div>

                {/* Order Details */}
                {selectedOrder === order.id && (
                  <div className="p-4 bg-gray-50 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Delivery Address</h4>
                        <p className="text-gray-600 text-sm flex items-start">
                          <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                          {order.address}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Payment Method</h4>
                        <p className="text-gray-600 text-sm flex items-center">
                          <CreditCard className="w-4 h-4 mr-2" />
                          {order.payment}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <button
                        onClick={() => handleReorder(order.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Reorder
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                        <Download className="w-4 h-4" />
                        <span>Download Invoice</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};