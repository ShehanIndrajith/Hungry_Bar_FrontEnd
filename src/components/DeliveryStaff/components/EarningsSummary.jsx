import React from "react";
import { DollarSign, Package, TrendingUp } from "lucide-react";

export const EarningsSummary = ({
  totalEarnings,
  completedDeliveries,
  averageEarnings,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Earnings</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {totalEarnings}
            </p>
          </div>
          <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <p className="text-sm text-green-600 mt-2">+12% from last week</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Completed Deliveries
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {completedDeliveries}
            </p>
          </div>
          <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <p className="text-sm text-blue-600 mt-2">+8% from last week</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Average per Delivery
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {averageEarnings}
            </p>
          </div>
          <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-purple-600" />
          </div>
        </div>
        <p className="text-sm text-purple-600 mt-2">+5% from last week</p>
      </div>
    </div>
  );
};