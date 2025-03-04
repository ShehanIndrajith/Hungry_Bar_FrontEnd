import React, { useState } from "react";
import { FileUpload } from "../components/FileUpload";
import { IssueTypeSelector } from "../components/IssueTypeSelector";
import { ConfirmationModal } from "../components/ConfirmationModal";
import { User, MapPin, ScrollText } from "lucide-react";

const MOCK_ORDER = {
  id: "1234",
  customerName: "John Doe",
  phone: "(555) 123-4567",
  address: "123 Main St, New York, NY 10001",
  items: [
    {
      name: "Pepperoni Pizza (Large)",
      quantity: 1,
    },
    {
      name: "Garlic Knots",
      quantity: 2,
    },
    {
      name: "Coca Cola",
      quantity: 2,
    },
  ],
  specialInstructions: "Please ring doorbell twice",
};

export const ReportIssue = () => {
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    console.log("Submitting report:", {
      issueType,
      description,
      files,
    });
    setShowConfirmation(false);
    // Handle submission
  };

  const isFormValid = issueType && description.trim().length > 0;

  return (
    <main className="bg-gray-50 min-h-screen pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Report Order Issues
        </h1>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Order #{MOCK_ORDER.id}</h2>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
              Issue Reported
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <User className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium">{MOCK_ORDER.customerName}</p>
                <p className="text-gray-600">{MOCK_ORDER.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
              <p className="text-gray-600">{MOCK_ORDER.address}</p>
            </div>
            <div className="flex items-start space-x-3">
              <ScrollText className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium mb-2">Order Items</p>
                <ul className="space-y-1">
                  {MOCK_ORDER.items.map((item, index) => (
                    <li key={index} className="text-gray-600">
                      {item.quantity}x {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Report Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-medium mb-4">Issue Details</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Issue Type
                </label>
                <IssueTypeSelector
                  selectedType={issueType}
                  onSelect={setIssueType}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please provide detailed information about the issue..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Evidence (Optional)
                </label>
                <FileUpload onFileSelect={(files) => setFiles(files)} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
              isFormValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Submit Report
          </button>
        </form>

        <ConfirmationModal
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          onConfirm={handleConfirmSubmit}
          title="Confirm Report Submission"
          message="Are you sure you want to submit this issue report? This action cannot be undone."
          confirmText="Submit Report"
        />
      </div>
    </main>
  );
};