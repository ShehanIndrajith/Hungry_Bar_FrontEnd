import React from "react";
import { BoxIcon } from "lucide-react";

export const StatsCard = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          {trend && (
            <p
              className={`text-sm mt-1 ${
                trend.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {trend.value}
            </p>
          )}
        </div>
        <div className="h-12 w-12 bg-red-50 flex items-center justify-center rounded-lg">
          <Icon className="h-6 w-6 text-red-500" />
        </div>
      </div>
    </div>
  );
};