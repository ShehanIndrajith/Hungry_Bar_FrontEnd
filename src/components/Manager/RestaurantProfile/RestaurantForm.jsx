import React from "react";
import { MapPin, Clock, Globe, Camera, Upload } from "lucide-react";
import { LocationMap } from "./LocationMap";
import { OperatingHours } from "./OperatingHours";

export const RestaurantForm = () => {
  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Restaurant Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
              placeholder="Enter restaurant name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
              placeholder="restaurant@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="url"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                placeholder="https://example.com"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Restaurant Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
              <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500 mb-2">
                Drop your logo here, or{" "}
                <span className="text-red-500 hover:text-red-600 cursor-pointer">
                  browse
                </span>
              </p>
              <p className="text-xs text-gray-400">PNG, JPG up to 2MB</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Image
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500 mb-2">
                Drop your cover image here, or{" "}
                <span className="text-red-500 hover:text-red-600 cursor-pointer">
                  browse
                </span>
              </p>
              <p className="text-xs text-gray-400">
                Recommended: 1200x400px, PNG, JPG
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Address & Location */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Address & Location</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            <textarea
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
              rows={3}
              placeholder="Enter full address"
            />
          </div>
        </div>
        <LocationMap />
      </div>

      {/* Operating Hours */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Operating Hours</h3>
          <button className="text-sm text-red-500 hover:text-red-600">
            Copy to all days
          </button>
        </div>
        <OperatingHours />
      </div>

      {/* Social Media */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Social Media</h3>
        <div className="space-y-4">
          {["Facebook", "Instagram", "Twitter"].map((platform) => (
            <div key={platform}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {platform}
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-300"
                placeholder={`Enter ${platform} profile URL`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-4">
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
          Reset Changes
        </button>
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};