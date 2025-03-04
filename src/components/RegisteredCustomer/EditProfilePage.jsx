import React, { useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import {Pizza,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Upload,
  Trash2,
  Plus,
  CreditCard,
  Edit,
  X,
  Check,
  AlertCircle,Facebook,
  Instagram,
  Twitter,
  ArrowRight
} from "lucide-react";

export function EditProfilePage() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [activeSection, setActiveSection] = useState("personal");
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      isDefault: true,
    },
  ]);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiryDate: "12/24",
    },
  ]);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>
        <div className="max-w-4xl mx-auto">
          {/* Profile Navigation */}
          <div className="flex border-b mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveSection("personal")}
              className={`px-4 py-2 font-medium ${activeSection === "personal" ? "border-b-2 border-red-500 text-red-500" : "text-gray-600"}`}
            >
              Personal Info
            </button>
            <button
              onClick={() => setActiveSection("security")}
              className={`px-4 py-2 font-medium ${activeSection === "security" ? "border-b-2 border-red-500 text-red-500" : "text-gray-600"}`}
            >
              Password & Security
            </button>
            <button
              onClick={() => setActiveSection("addresses")}
              className={`px-4 py-2 font-medium ${activeSection === "addresses" ? "border-b-2 border-red-500 text-red-500" : "text-gray-600"}`}
            >
              Addresses
            </button>
            <button
              onClick={() => setActiveSection("payment")}
              className={`px-4 py-2 font-medium ${activeSection === "payment" ? "border-b-2 border-red-500 text-red-500" : "text-gray-600"}`}
            >
              Payment Methods
            </button>
          </div>
          <div className="space-y-8">
            {/* Profile Picture Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Profile Picture</h2>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src="https://avatar.iran.liara.run/public/12"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-sm border">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-gray-50">
                    <Upload className="w-4 h-4" />
                    <span>Upload New</span>
                  </button>
                  <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center space-x-2 text-red-600 hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
            {activeSection === "personal" && (
              <form
                onSubmit={handleSaveChanges}
                className="bg-white p-6 rounded-lg shadow-sm space-y-6"
              >
                <h2 className="text-xl font-semibold mb-6">
                  Personal Information
                </h2>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Save Changes
                </button>
              </form>
            )}
            {activeSection === "security" && (
              <form
                onSubmit={handleSaveChanges}
                className="bg-white p-6 rounded-lg shadow-sm space-y-6"
              >
                <h2 className="text-xl font-semibold mb-6">Change Password</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Update Password
                </button>
              </form>
            )}
            {activeSection === "addresses" && (
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Saved Addresses</h2>
                  <button className="flex items-center space-x-2 text-red-500 hover:text-red-600">
                    <Plus className="w-4 h-4" />
                    <span>Add New</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{address.street}</p>
                          <p className="text-gray-600">
                            {address.city}, {address.state} {address.zip}
                          </p>
                          {address.isDefault && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-2 inline-block">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-600 hover:text-gray-900">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-500 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeSection === "payment" && (
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Payment Methods</h2>
                  <button className="flex items-center space-x-2 text-red-500 hover:text-red-600">
                    <Plus className="w-4 h-4" />
                    <span>Add New</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="w-6 h-6 text-gray-600" />
                          <div>
                            <p className="font-medium">
                              {method.type} ending in {method.last4}
                            </p>
                            <p className="text-sm text-gray-600">
                              Expires {method.expiryDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-600 hover:text-gray-900">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-500 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 rounded-full p-2">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold">Confirm Changes</h3>
              </div>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to save these changes? This action cannot be
              undone.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <Footer/>
    </div>
  );
}