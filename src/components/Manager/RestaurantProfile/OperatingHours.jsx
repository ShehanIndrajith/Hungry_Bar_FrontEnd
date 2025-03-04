import React from "react";
import { Clock } from "lucide-react";

export const OperatingHours = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="space-y-4">
      {days.map((day) => (
        <div key={day} className="flex items-center gap-4">
          <div className="w-32">
            <span className="text-sm font-medium">{day}</span>
          </div>
          <div className="flex-1 flex items-center gap-4">
            <div className="relative flex-1">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="time"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                defaultValue="09:00"
              />
            </div>
            <span className="text-gray-400">to</span>
            <div className="relative flex-1">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="time"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                defaultValue="22:00"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};