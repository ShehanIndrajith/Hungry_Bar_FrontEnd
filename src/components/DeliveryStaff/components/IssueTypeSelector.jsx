import React from "react";

const ISSUE_TYPES = [
  {
    id: "damaged",
    label: "Damaged Items",
    description: "Items were damaged during delivery",
  },
  {
    id: "incorrect",
    label: "Incorrect Order",
    description: "Order contents do not match what was ordered",
  },
  {
    id: "missing",
    label: "Missing Items",
    description: "Some items are missing from the order",
  },
  {
    id: "customer",
    label: "Customer Issues",
    description: "Problems with customer contact or delivery location",
  },
];

export const IssueTypeSelector = ({ selectedType, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {ISSUE_TYPES.map((type) => (
        <div
          key={type.id}
          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
            selectedType === type.id
              ? "border-blue-600 bg-blue-50"
              : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => onSelect(type.id)}
        >
          <div className="flex items-center space-x-2">
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedType === type.id ? "border-blue-600" : "border-gray-400"
              }`}
            >
              {selectedType === type.id && (
                <div className="w-2 h-2 rounded-full bg-blue-600" />
              )}
            </div>
            <span className="font-medium">{type.label}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1 ml-6">{type.description}</p>
        </div>
      ))}
    </div>
  );
};