import React from "react";
import { X, AlertTriangle } from "lucide-react";

export const DeleteConfirmationModal = ({
  onClose,
  onConfirm,
  isMultiple,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Confirm Deletion
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete{" "}
            {isMultiple ? "these users" : "this user"}? This action cannot be
            undone.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};