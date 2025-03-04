import React from "react";
import { ChevronUp, Download } from "lucide-react";

export const ReportTable = () => {
  const data = [
    {
      id: "ORD001",
      date: "2024-01-15",
      amount: "$156.00",
      method: "Credit Card",
      status: "Completed",
    },
    {
      id: "ORD002",
      date: "2024-01-15",
      amount: "$89.50",
      method: "PayPal",
      status: "Completed",
    },
    {
      id: "ORD003",
      date: "2024-01-14",
      amount: "$245.00",
      method: "Credit Card",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-medium">Transactions</h3>
        <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
          <Download className="w-4 h-4" />
          Download All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {["Order ID", "Date", "Amount", "Payment Method", "Status"].map(
                (header) => (
                  <th
                    key={header}
                    className="text-left p-4 text-sm font-medium text-gray-600"
                  >
                    <div className="flex items-center gap-1">
                      {header}
                      <ChevronUp className="w-4 h-4" />
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b border-gray-200">
                <td className="p-4 text-sm font-medium">{row.id}</td>
                <td className="p-4 text-sm text-gray-600">{row.date}</td>
                <td className="p-4 text-sm font-medium">{row.amount}</td>
                <td className="p-4 text-sm text-gray-600">{row.method}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      row.status === "Completed"
                        ? "bg-green-50 text-green-600"
                        : "bg-yellow-50 text-yellow-600"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};