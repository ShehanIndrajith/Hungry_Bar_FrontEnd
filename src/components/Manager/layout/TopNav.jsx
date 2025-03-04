import React from "react";
import { Search, Bell } from "lucide-react";

export const TopNav = () => {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3">
          <img
            src="https://avatar.iran.liara.run/public/5"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </div>
  );
};