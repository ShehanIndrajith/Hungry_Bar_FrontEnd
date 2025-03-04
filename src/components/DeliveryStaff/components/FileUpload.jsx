import React, { useState } from "react";
import { Upload, X } from "lucide-react";

export const FileUpload = ({ onFileSelect }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles((prev) => [...prev, ...files]);
    onFileSelect(files);
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div className="flex flex-col items-center">
          <Upload className="h-8 w-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 mb-1">
            Drag and drop files here, or
          </p>
          <label className="cursor-pointer">
            <span className="text-sm text-blue-600 hover:text-blue-700">
              browse files
            </span>
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleFileSelect}
              accept="image/*,.pdf"
            />
          </label>
          <p className="text-xs text-gray-500 mt-1">
            Supported formats: JPG, PNG, PDF
          </p>
        </div>
      </div>
      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
            >
              <span className="text-sm text-gray-600 truncate">
                {file.name}
              </span>
              <button
                onClick={() => removeFile(index)}
                className="p-1 hover:bg-gray-200 rounded-full"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};