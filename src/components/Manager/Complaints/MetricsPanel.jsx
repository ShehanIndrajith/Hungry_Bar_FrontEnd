import React from "react";
import { AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react";

export const MetricsPanel = () => {
  const metrics = [
    {
      label: "Total Complaints",
      value: "156",
      icon: AlertCircle,
      color: "text-blue-500",
    },
    {
      label: "Resolved",
      value: "89",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      label: "Pending",
      value: "45",
      icon: Clock,
      color: "text-yellow-500",
    },
    {
      label: "Escalation Rate",
      value: "12%",
      icon: TrendingUp,
      color: "text-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="bg-white p-4 rounded-lg border border-gray-200"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">{metric.label}</p>
              <p className="text-2xl font-semibold mt-1">{metric.value}</p>
            </div>
            <metric.icon className={`w-5 h-5 ${metric.color}`} />
          </div>
        </div>
      ))}
    </div>
  );
};