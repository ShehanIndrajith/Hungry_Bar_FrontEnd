import React from "react";
import { ComplaintsTable } from "../Complaints/ComplaintsTable";
import { FilterBar } from "../Complaints/FilterBar";
import { MetricsPanel } from "../Complaints/MetricsPanel";

export function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Complaints Management</h1>
            <p className="text-gray-600 mt-1">
              Track and manage customer complaints
            </p>
          </div>
          <MetricsPanel />
          <FilterBar />
          <ComplaintsTable />
        </div>
      </main>
    </div>
  );
}