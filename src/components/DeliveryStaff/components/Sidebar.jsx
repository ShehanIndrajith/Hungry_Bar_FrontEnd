import React, { useState } from "react";
import { X, Menu, ClipboardList, Truck, Navigation, AlertCircle, DollarSign, User, LogOut } from "lucide-react";

const NAVIGATION_ITEMS = [
  { value: "assignedOrders", icon: ClipboardList, label: "Assigned Orders" },
  { value: "updatestatus", icon: Truck, label: "Update Status" },
  { value: "navigate", icon: Navigation, label: "Navigate" },
  { value: "reportissue", icon: AlertCircle, label: "Report Issue" },
  { value: "payments", icon: DollarSign, label: "Payments" },
  { value: "profile", icon: User, label: "Profile" },
];

export const Sidebar = ({ onSelectPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-gray-100 lg:hidden"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b">
          <span className="text-xl font-bold text-gray-900">Hungry Bar</span>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3 space-y-1">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.value}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full text-left"
                onClick={() => {
                  onSelectPage(item.value);
                  setIsMobileMenuOpen(false);
                }}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
    </>
  );
};
