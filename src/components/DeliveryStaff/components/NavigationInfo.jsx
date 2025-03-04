import React from "react";
import { Clock, Navigation2 } from "lucide-react";

export const NavigationInfo = ({ distance, duration }) => {
  return (
    <div className="flex space-x-6 bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center space-x-2">
        <Navigation2 className="h-5 w-5 text-blue-600" />
        <div>
          <p className="text-sm text-gray-500">Distance</p>
          <p className="font-medium">{distance}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Clock className="h-5 w-5 text-blue-600" />
        <div>
          <p className="text-sm text-gray-500">Estimated Time</p>
          <p className="font-medium">{duration}</p>
        </div>
      </div>
    </div>
  );
};