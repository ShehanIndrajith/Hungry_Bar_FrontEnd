import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export function AddressFormModal({ isOpen, onClose }) {
  const [opacity, setOpacity] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    streetAddress: "",
    apt: "",
    postalCode: "",
    province: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    streetAddress: "",
    postalCode: "",
    province: "",
  });

  useEffect(() => {
    if (isOpen) {
      // Fade in animation
      setOpacity(0);
      setTimeout(() => setOpacity(100), 10);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      ...errors,
    };
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "Street address is required";
      valid = false;
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
      valid = false;
    } else if (!/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/.test(formData.postalCode)) {
      newErrors.postalCode = "Invalid postal code format (e.g. A1A 1A1)";
      valid = false;
    }
    if (!formData.province) {
      newErrors.province = "Province is required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      onClose();
    }
  };

  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-2xl transition-opacity duration-300 ease-in-out opacity-${opacity}`}
        style={{
          opacity: opacity / 100,
        }}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Delivery Address</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label
                htmlFor="fullName"
                className="block mb-1 font-medium text-gray-700"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>
            <div className="col-span-2">
              <label
                htmlFor="streetAddress"
                className="block mb-1 font-medium text-gray-700"
              >
                Street Address*
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                placeholder="123 Main St"
              />
              {errors.streetAddress && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.streetAddress}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="apt"
                className="block mb-1 font-medium text-gray-700"
              >
                Apartment/Unit{" "}
                <span className="text-gray-400 text-sm">(Optional)</span>
              </label>
              <input
                type="text"
                id="apt"
                name="apt"
                value={formData.apt}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                placeholder="Apt 4B"
              />
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="block mb-1 font-medium text-gray-700"
              >
                Postal Code*
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                placeholder="A1A 1A1"
              />
              {errors.postalCode && (
                <p className="mt-1 text-sm text-red-500">{errors.postalCode}</p>
              )}
            </div>
            <div className="col-span-2">
              <label
                htmlFor="province"
                className="block mb-1 font-medium text-gray-700"
              >
                Province*
              </label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-white"
              >
                <option value="">Select a province</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
              {errors.province && (
                <p className="mt-1 text-sm text-red-500">{errors.province}</p>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-md"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}