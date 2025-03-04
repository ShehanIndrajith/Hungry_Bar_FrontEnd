import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";

export const UsersTable = ({
  users,
  selectedUsers,
  onSelectUser,
  onSelectAll,
  onEdit,
  onDelete,
  onViewProfile,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Handle delete button click
  const handleDeleteClick = (userId) => {
    setUserToDelete(userId); // Set the user ID to delete
    setShowDeleteModal(true); // Show the confirmation modal
  };

  // Handle confirmation of deletion
  const handleConfirmDelete = async () => {
    if (userToDelete) {
      try {
        // Send a request to the backend to delete the user
        const response = await fetch("http://localhost:8080/HungryBarFinal/deleteStaff", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `userId=${userToDelete}`,
        });

        if (response.ok) {
          alert("User deleted successfully");
          onDelete(userToDelete); // Update the parent component's state
        } else {
          const errorMessage = await response.text();
          alert(`Failed to delete user: ${errorMessage}`);
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    }
    setShowDeleteModal(false); // Close the modal
    setUserToDelete(null); // Reset the user to delete
  };

  // Get role color for styling
  const getRoleColor = (role) => {
    switch (role) {
      case "manager":
        return "bg-purple-100 text-purple-800";
      case "KitchenStaff":
        return "bg-blue-100 text-blue-800";
      case "DeliveryStaff":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Format role for display
  const formatRole = (role) => {
    return role
      .split(/(?=[A-Z])/) // Split by uppercase letters (e.g., "KitchenStaff" -> ["Kitchen", "Staff"])
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join with spaces
  };

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-red-500 focus:ring-red-500"
                    checked={selectedUsers.length === users.length && users.length > 0}
                    onChange={(e) => onSelectAll(e.target.checked)}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.userID} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-red-500 focus:ring-red-500"
                      checked={selectedUsers.includes(user.userID)}
                      onChange={() => onSelectUser(user.userID)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={
                          user.profilePicture
                            ? user.profilePicture
                            : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        alt=""
                        className="h-8 w-8 rounded-full"
                      />
                      <div className="ml-4">
                        <div
                          className="text-sm font-medium text-gray-900 hover:text-red-500 cursor-pointer"
                          onClick={() => onViewProfile(user)}
                        >
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(user.role)}`}
                    >
                      {formatRole(user.role)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onEdit(user)}
                      className="text-gray-600 hover:text-red-500 mx-2"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(user.userID)}
                      className="text-gray-600 hover:text-red-500 mx-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr> 
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteConfirmationModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleConfirmDelete}
          isMultiple={false}
        />
      )}
    </>
  );
};