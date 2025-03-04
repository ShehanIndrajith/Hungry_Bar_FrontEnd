import React from "react";
import { Pizza } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm border-b z-20">
      <div className="h-16 flex items-center px-4">
        <Pizza className="h-8 w-8 text-red-600 lg:hidden" />
        <span className="ml-2 text-xl font-bold text-gray-900 lg:hidden">
          Hungry Bar
        </span>
      </div>
    </header>
  );
};