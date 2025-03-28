import React, { useState } from "react";
import { X, Upload } from "lucide-react";

export const MenuForm = ({ onClose, onSubmit, initialData }) => {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("itemID", initialData?.itemID); // Include itemID for edit operation
    formData.append("name", e.target.name.value);
    formData.append("description", e.target.description?.value || "");
    formData.append("price", e.target.price.value);
    formData.append("categoryID", e.target.category.value);
    formData.append("itemType", e.target.itemType?.value || "Pizza");
    formData.append("isCustomizable", e.target.isCustomizable?.checked || false);
    formData.append("available", e.target.available?.checked || true);
    formData.append("restaurantID", 3); // Replace with actual restaurant ID
    if (image) {
      formData.append("image", image);
    }

    const url = initialData
      ? "http://localhost:8080/HungryBarFinal/editMenuItem" // Edit endpoint
      : "http://localhost:8080/HungryBarFinal/addMenuItem"; // Add endpoint

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert(initialData ? "Menu item updated successfully" : "Menu item added successfully");
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
            {initialData ? "Edit Menu Item" : "Add Menu Item"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter item name"
                defaultValue={initialData?.name}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="hidden"
                  id="image"
                />
                <label htmlFor="image" className="cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="mt-1 text-sm text-gray-500">
                    Click to upload or drag and drop
                  </p>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                defaultValue={initialData?.categoryID}
              >
                <option value="">Select category</option>
                <option value="1">Pizza</option>
                <option value="2">Sides</option>
                <option value="3">Drinks</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="0.00"
                defaultValue={initialData?.price}
              />
            </div>
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="available"
                  className="sr-only peer"
                  defaultChecked={initialData?.available}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">
                  In Stock
                </span>
              </label>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              {initialData ? "Update Menu Item" : "Add Menu Item"}
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