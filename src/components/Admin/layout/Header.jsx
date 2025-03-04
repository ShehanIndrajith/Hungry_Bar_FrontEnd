import React from "react";
import {Pizza, Search, Bell, ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Pizza className="w-8 h-8 text-red-500"/>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Admin"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium">Admin</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
};