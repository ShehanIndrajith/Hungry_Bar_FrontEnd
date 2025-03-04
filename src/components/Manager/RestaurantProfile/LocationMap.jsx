import React from "react";
import { MapPin } from "lucide-react";

export const LocationMap = () => {
  return (
    <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-6 h-6 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">Map preview will appear here</p>
        </div>
      </div>
    </div>
  );
};