import React from "react";
import { RestaurantForm } from "../RestaurantProfile/RestaurantForm";

export const RestaurantProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Restaurant Profile</h1>
            <p className="text-gray-600 mt-1">
              Manage your restaurant information and settings
            </p>
          </div>
          <RestaurantForm />
        </div>
      </main>
    </div>
  );
};