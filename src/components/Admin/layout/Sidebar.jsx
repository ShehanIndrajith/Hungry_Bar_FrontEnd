import React from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  BarChart2,
  Users,
  Menu,
  Tag,
  Settings,
} from "lucide-react";

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    value: "dashboard",
  },
  {
    icon: ShoppingCart,
    label: "Orders",
    value: "orderpage",
  },
  {
    icon: Users,
    label: "Users",
    value: "userpage",
  },
  {
    icon: Menu,
    label: "Menu",
    value: "menupage",
  },
  {
    icon: Tag,
    label: "Promotions",
    value: "promotionspage",
  },
];

export const Sidebar = ({ activePage, onSelectPage }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.value}>
              <button
                onClick={() => onSelectPage(item.value)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${
                  activePage === item.value
                    ? "bg-red-50 text-red-500"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};