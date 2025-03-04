import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { PromotionsTable } from "./PromotionComponents/PromotionsTable";
import { PromotionForm } from "./PromotionComponents/PromotionForm";

const SAMPLE_PROMOTIONS = [
  {
    id: "1",
    name: "Summer Special",
    type: "percentage",
    value: 20,
    startDate: "2024-06-01",
    expiryDate: "2024-08-31",
    status: "scheduled",
    applyTo: "all",
    appliedTo: [],
  },
  {
    id: "2",
    name: "Happy Hour",
    type: "fixed",
    value: 5,
    startDate: "2024-01-01",
    expiryDate: "2024-12-31",
    status: "active",
    applyTo: "category",
    appliedTo: ["Drinks"],
  },
];

export const PromotionsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState(null);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Promotions Management</h1>
        <p className="text-gray-500">Create and manage promotional offers</p>
      </div>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search promotions..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>
          <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="scheduled">Scheduled</option>
            <option value="expired">Expired</option>
          </select>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Promotion
        </button>
      </div>
      <PromotionsTable
        promotions={SAMPLE_PROMOTIONS}
        onEdit={(promotion) => {
          setEditingPromotion(promotion);
          setShowForm(true);
        }}
        onDelete={(id) => {
          // Handle delete
        }}
      />
      {showForm && (
        <PromotionForm
          initialData={editingPromotion}
          onClose={() => {
            setShowForm(false);
            setEditingPromotion(null);
          }}
          onSubmit={(data) => {
            // Handle form submission
            setShowForm(false);
            setEditingPromotion(null);
          }}
        />
      )}
    </div>
  );
};