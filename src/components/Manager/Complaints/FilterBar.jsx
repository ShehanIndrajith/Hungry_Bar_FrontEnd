import React from "react";
import { Filter } from "lucide-react";

export const FilterBar = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-300">
          <option>All Status</option>
          <option>New</option>
          <option>In Progress</option>
          <option>Resolved</option>
          <option>Escalated</option>
        </select>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm">
          <Filter className="w-4 h-4" />
          More Filters
        </button>
      </div>
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
        Bulk Actions
      </button>
    </div>
  );
};