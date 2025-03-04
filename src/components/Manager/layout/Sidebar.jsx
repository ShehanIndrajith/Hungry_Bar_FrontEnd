import React from "react";
import {Pizza,
  LayoutGrid,
  ShoppingBag,
  Menu,
  BarChart2,
  Users,
  Tag,
  Settings,
  BoxIcon,
} from "lucide-react";

export const Sidebar = () => {
  const menuItems = [
    {
      icon: LayoutGrid,
      label: "Dashboard",
      active: false,
    },
    {
      icon: ShoppingBag,
      label: "Orders",
      active: false,
    },
    {
      icon: Menu,
      label: "Menu",
      active: false,
    },
    {
      icon: Tag,
      label: "Promotions",
      active: false,
    },
    {
      icon: BoxIcon,
      label: "Complaints Management",
      active: true,
    },
    {
      icon: BarChart2,
      label: "Reports",
      active: false,
    },
    {
      icon: Settings,
      label: "Settings",
      active: false,
    },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <div className='flex items-center space-x-2 mb-8'><Pizza className="w-8 h-8 text-red-500"/>
        <span className="text-xl font-bold">Hungry Bar</span></div>
        
        <nav>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center px-4 py-3 mb-1 rounded-lg text-gray-600 hover:bg-gray-50 
                ${item.active ? "bg-red-50 text-red-600" : ""}`}
            >
              <item.icon
                className={`w-5 h-5 mr-3 ${item.active ? "text-red-600" : ""}`}
              />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};