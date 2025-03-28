import React, { useState, useEffect } from "react";
import { Plus, Search } from "lucide-react";
import { MenuTable } from "./MenuComponents/MenuTable";
import { MenuForm } from "./MenuComponents/MenuForm";
import { DeleteConfirmationModal } from "./UsersComponents/DeleteConfirmationModal";

export const MenuPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [menuItems, setMenuItems] = useState([]); // State to store fetched menu items

  // Fetch menu items from the backend
  const fetchMenuItems = async () => {
    try {
      const response = await fetch("http://localhost:8080/HungryBarFinal/getMenuItems");
      if (response.ok) {
        const data = await response.json();
        setMenuItems(data); // Update the menu items state
      } else {
        console.error("Failed to fetch menu items");
      }
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  // Fetch menu items on component mount
  useEffect(() => {
    fetchMenuItems();
  }, []);

  // Handle delete button click
  const handleDelete = (itemId) => {
    setItemToDelete(itemId); // Set the item ID to delete
    setShowDeleteModal(true); // Show the confirmation modal
  };

  // Handle bulk delete button click
  const handleBulkDelete = () => {
    setItemToDelete(null);
    setShowDeleteModal(true);
  };

  // Handle confirmation of deletion
  const handleDeleteConfirm = async () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Menu Management</h1>
        <p className="text-gray-500">Manage your restaurant's menu items</p>
      </div>
      <div className="mb-6 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search menu items..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Menu Item
        </button>
      </div>
      {selectedItems.length > 0 && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {selectedItems.length} items selected
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => {
                // Handle bulk status update
              }}
              className="text-sm text-gray-600 hover:text-red-500"
            >
              Update Status
            </button>
            <button
              onClick={handleBulkDelete}
              className="text-sm text-gray-600 hover:text-red-500"
            >
              Delete Selected
            </button>
          </div>
        </div>
      )}
      <MenuTable
  items={menuItems}
  onEdit={(item) => {
    setEditingItem(item); // Set the item to edit
    setShowForm(true); // Show the form
  }}
  onDelete={handleDelete}
/>
      {showForm && (
        <MenuForm
          initialData={editingItem}
          onClose={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
          onSubmit={() => {
            // Handle form submission
            setShowForm(false);
            setEditingItem(null);
            fetchMenuItems(); // Refetch menu items after successful addition/update
          }}
        />
      )}
      {showDeleteModal && (
        <DeleteConfirmationModal
          isMultiple={!itemToDelete && selectedItems.length > 0}
          onClose={() => {
            setShowDeleteModal(false);
            setItemToDelete(null);
          }}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
};