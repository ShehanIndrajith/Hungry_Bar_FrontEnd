import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const ReportChart = () => {
  const data = [
    {
      name: "Mon",
      sales: 4000,
    },
    {
      name: "Tue",
      sales: 3000,
    },
    {
      name: "Wed",
      sales: 2000,
    },
    {
      name: "Thu",
      sales: 2780,
    },
    {
      name: "Fri",
      sales: 1890,
    },
    {
      name: "Sat",
      sales: 2390,
    },
    {
      name: "Sun",
      sales: 3490,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h3 className="text-lg font-medium mb-4">Sales Overview</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};