import React from "react";
import { DollarSign, ShoppingBag, CreditCard, Users } from "lucide-react";

export const ReportMetrics = () => {
  const metrics = [
    {
      label: "Total Sales",
      value: "$24,567",
      icon: DollarSign,
      change: "+12.5%",
      positive: true,
    },
    {
      label: "Total Orders",
      value: "1,234",
      icon: ShoppingBag,
      change: "+8.2%",
      positive: true,
    },
    {
      label: "Total Payments",
      value: "$22,890",
      icon: CreditCard,
      change: "+15.3%",
      positive: true,
    },
    {
      label: "Active Customers",
      value: "892",
      icon: Users,
      change: "-2.4%",
      positive: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="bg-white p-4 rounded-lg border border-gray-200"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">{metric.label}</p>
              <p className="text-2xl font-semibold mt-1">{metric.value}</p>
              <p
                className={`text-sm mt-1 ${
                  metric.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {metric.change}
              </p>
            </div>
            <metric.icon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      ))}
    </div>
  );
};