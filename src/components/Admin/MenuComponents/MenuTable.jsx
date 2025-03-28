import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import { DeleteConfirmationModal } from "../UsersComponents/DeleteConfirmationModal";

export const MenuTable = ({items, onEdit, onDelete }) => {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [menuToDelete, setMenuToDelete] = useState(null);

// Handle delete button click
const handleDeleteClick = (itemId) => {
  setMenuToDelete(itemId); // Set the user ID to delete
  setShowDeleteModal(true); // Show the confirmation modal
};

  const handleConfirmDelete = async () => {
    if (menuToDelete) {
      try {
        // Send a request to the backend to delete the user
        const response = await fetch(
          "http://localhost:8080/HungryBarFinal/deleteMenuItem",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `itemId=${menuToDelete}`,
          }
        );

        if (response.ok) {
          alert("Menu Item deleted successfully");
          onDelete(menuToDelete); // Update the parent component's state
        } else {
          const errorMessage = await response.text();
          alert(`Failed to delete Menu Item: ${errorMessage}`);
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    }
    setShowDeleteModal(false); // Close the modal
    setMenuToDelete(null); // Reset the user to delete
  };
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.itemID} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-lg object-cover"
                      src={item.imageURL}
                      alt={item.name}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.itemType}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    LKR {item.price.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.available ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-gray-600 hover:text-red-500 mr-3"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(item.itemID)}
                    className="text-gray-600 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Delete Confirmation Modal */}
            {showDeleteModal && (
              <DeleteConfirmationModal
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleConfirmDelete}
                isMultiple={false}
              />
            )}
    </div>
  );
};