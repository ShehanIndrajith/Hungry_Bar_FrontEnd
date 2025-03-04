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
    active: true,
  },
  {
    icon: ShoppingCart,
    label: "Orders",
  },
  {
    icon: BarChart2,
    label: "Reports",
  },
  {
    icon: Users,
    label: "Users",
  },
  {
    icon: Menu,
    label: "Menu",
  },
  {
    icon: Tag,
    label: "Promotions",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                  item.active
                    ? "bg-red-50 text-red-500"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};