import React, { useState, useEffect } from "react";
import { Plus, Search } from "lucide-react";
import { MenuTable } from "./MenuComponents/MenuTable";
import { MenuForm } from "./MenuComponents/MenuForm";

export const MenuPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  // Fetch menu items from the backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/HungryBarFinal/getMenuItems");
        if (response.ok) {
          const data = await response.json();
          setMenuItems(data);
        } else {
          console.error("Failed to fetch menu items");
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

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
      <MenuTable
        items={menuItems}
        onEdit={(item) => {
          setEditingItem(item);
          setShowForm(true);
        }}
        onDelete={(id) => {
          // Handle delete
        }}
      />
      {showForm && (
        <MenuForm
          initialData={editingItem}
          onClose={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
          onSubmit={(data) => {
            // Handle form submission
            setShowForm(false);
            setEditingItem(null);
          }}
        />
      )}
    </div>
  );
};