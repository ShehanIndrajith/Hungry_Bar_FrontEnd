import React from "react";
import { AlertTriangle, X } from "lucide-react";

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <p className="text-gray-600 mb-6">{message}</p>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};