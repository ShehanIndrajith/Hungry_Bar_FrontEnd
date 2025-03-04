import React from "react";
import { Calendar, Filter, Download } from "lucide-react";

export const ReportFilters = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm text-gray-600 mb-2">Date Range</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-red-300">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Custom Range</option>
            </select>
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm text-gray-600 mb-2">
            Report Type
          </label>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-red-300">
              <option>Sales Report</option>
              <option>Payment Report</option>
              <option>Customer Report</option>
            </select>
          </div>
        </div>
        <div className="flex items-end gap-3 ml-auto">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};