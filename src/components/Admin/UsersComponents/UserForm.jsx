import React, { useState } from "react";
import { X, Upload } from "lucide-react";

export const UserForm = ({ onClose, onSubmit, initialData }) => {
  const [selectedRole, setSelectedRole] = useState(initialData?.role || "");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("userId", initialData?.userID); // Include userId for edit operation
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("role", selectedRole);
    formData.append("profilePicture", profilePicture);
  
    if (selectedRole === "DeliveryStaff") {
      formData.append("vehicleType", e.target.vehicleType.value);
      formData.append("vehicleNumber", e.target.vehicleNumber.value);
    }
  
    const url = initialData
      ? "http://localhost:8080/HungryBarFinal/editStaff" // Edit endpoint
      : "http://localhost:8080/HungryBarFinal/addStaff"; // Add endpoint
  
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert(initialData ? "User updated successfully" : "User added successfully");
        onClose();
      } else {
        const errorMessage = await response.text();
        alert(`Failed: ${errorMessage}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {initialData ? "Edit User" : "Add New User"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Picture
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProfilePicture(e.target.files[0])}
                  className="hidden"
                  id="profilePicture"
                />
                <label htmlFor="profilePicture" className="cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="mt-1 text-sm text-gray-500">
                    Click to upload or drag and drop
                  </p>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter full name"
                defaultValue={initialData?.name}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter email address"
                defaultValue={initialData?.email}
              />
            </div>
            {!initialData && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter password"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="">Select role</option>
                <option value="KitchenStaff">Kitchen Staff</option>
                <option value="DeliveryStaff">Delivery Staff</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            {selectedRole === "DeliveryStaff" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Type
                  </label>
                  <input
                    type="text"
                    name="vehicleType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter vehicle type"
                    defaultValue={initialData?.vehicleType}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Number
                  </label>
                  <input
                    type="text"
                    name="vehicleNumber"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter vehicle number"
                    defaultValue={initialData?.vehicleNo}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-6 flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              {initialData ? "Update User" : "Add User"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};