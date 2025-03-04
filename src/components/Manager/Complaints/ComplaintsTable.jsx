import React from "react";
import { Eye, ChevronUp, MoreVertical } from "lucide-react";

export const ComplaintsTable = () => {
  const complaints = [
    {
      id: "CMP001",
      customer: "John Doe",
      orderId: "ORD123",
      description: "Food was cold upon delivery",
      status: "New",
    },
    {
      id: "CMP002",
      customer: "Jane Smith",
      orderId: "ORD124",
      description: "Missing items in order",
      status: "In Progress",
    },
    // Add more sample data as needed
  ];

  const getStatusColor = (status) => {
    const colors = {
      New: "bg-blue-50 text-blue-600",
      "In Progress": "bg-yellow-50 text-yellow-600",
      Resolved: "bg-green-50 text-green-600",
      Escalated: "bg-red-50 text-red-600",
    };
    return colors[status] || "";
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 text-sm font-medium text-gray-600">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              {[
                "Complaint ID",
                "Customer",
                "Order ID",
                "Description",
                "Status",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="text-left p-4 text-sm font-medium text-gray-600"
                >
                  <div className="flex items-center gap-1">
                    {header}
                    <ChevronUp className="w-4 h-4" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id} className="border-b border-gray-200">
                <td className="p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="p-4 text-sm">{complaint.id}</td>
                <td className="p-4 text-sm font-medium">
                  {complaint.customer}
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {complaint.orderId}
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {complaint.description}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${getStatusColor(complaint.status)}`}
                  >
                    {complaint.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-50 rounded">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-50 rounded">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};