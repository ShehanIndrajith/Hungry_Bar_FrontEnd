import React, { useState, useEffect } from "react";
import { Plus, Search } from "lucide-react";
import { UsersTable } from "./UsersComponents/UsersTable";
import { UserForm } from "./UsersComponents/UserForm";
import { DeleteConfirmationModal } from "./UsersComponents/DeleteConfirmationModal";

export const UsersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null);
  const [users, setUsers] = useState([]); // State to store fetched users

  // Fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/HungryBarFinal/fetchStaff"
      );
      if (response.ok) {
        const data = await response.json();
        setUsers(data); // Update the users state
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (userId) => {
    setUserToDelete(userId);
    setShowDeleteModal(true);
  };

  const handleBulkDelete = () => {
    setUserToDelete(null);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    // Handle delete logic here
    setShowDeleteModal(false);
    setUserToDelete(null);
    setSelectedUsers([]);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <p className="text-gray-500">Manage staff accounts and permissions</p>
      </div>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>
          <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">All Roles</option>
            <option value="manager">Manager</option>
            <option value="KitchenStaff">Kitchen Staff</option>
            <option value="DeliveryStaff">Delivery Staff</option>
          </select>
          <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add User
        </button>
      </div>
      {selectedUsers.length > 0 && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {selectedUsers.length} users selected
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => {
                /* Handle bulk status update */
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
      <UsersTable
        users={users} // Use fetched users
        selectedUsers={selectedUsers}
        onSelectUser={(id) => {
          setSelectedUsers((prev) =>
            prev.includes(id)
              ? prev.filter((userId) => userId !== id)
              : [...prev, id]
          );
        }}
        onSelectAll={(checked) => {
          setSelectedUsers(checked ? users.map((user) => user.userID) : []);
        }}
        onEdit={(user) => {
          setEditingUser(user);
          setShowForm(true);
        }}
        onDelete={handleDelete}
        onViewProfile={(user) => {
          // Handle view profile
        }}
      />
      {showForm && (
        <UserForm
          initialData={editingUser}
          onClose={() => {
            setShowForm(false);
            setEditingUser(null);
          }}
          onSubmit={() => {
            // Handle form submission
            setShowForm(false);
            setEditingUser(null);
            fetchUsers(); // Refetch users after successful addition
          }}
        />
      )}
      {showDeleteModal && (
        <DeleteConfirmationModal
          isMultiple={!userToDelete && selectedUsers.length > 0}
          onClose={() => {
            setShowDeleteModal(false);
            setUserToDelete(null);
          }}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
};
