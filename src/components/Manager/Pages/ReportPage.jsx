import React from "react";
import { ReportFilters } from "../Reports/ReportFilters";
import { ReportMetrics } from "../Reports/ReportMetrics";
import { ReportChart } from "../Reports/ReportChart";
import { ReportTable } from "../Reports/ReportTable";

export function ReportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Reports</h1>
            <p className="text-gray-600 mt-1">
              View and analyze your business performance
            </p>
          </div>
          <ReportMetrics />
          <ReportFilters />
          <ReportChart />
          <ReportTable />
        </div>
      </main>
    </div>
  );
}