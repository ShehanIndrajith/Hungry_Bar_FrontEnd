import React from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Star,
  Package,
  Clock,
  Shield,
  Award,
} from "lucide-react";

const MOCK_PROFILE = {
  personalInfo: {
    name: "John Smith",
    phone: "(555) 123-4567",
    email: "john.smith@example.com",
    address: "123 Delivery St, New York, NY 10001",
    joinDate: "Jan 15, 2023",
    status: "Active",
    id: "DP-2024-001",
  },
  statistics: {
    totalDeliveries: 856,
    rating: 4.8,
    completionRate: "98%",
    avgDeliveryTime: "28 mins",
    thisMonth: {
      deliveries: 45,
      earnings: "$1,125.00",
      rating: 4.9,
      onTime: "96%",
    },
  },
};

export const Profile = () => {
  return (
    <main className="bg-gray-50 min-h-screen pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            {MOCK_PROFILE.personalInfo.status}
          </span>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <span className="text-sm text-gray-500">
              ID: {MOCK_PROFILE.personalInfo.id}
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <User className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">
                    {MOCK_PROFILE.personalInfo.name}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">
                    {MOCK_PROFILE.personalInfo.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">
                    {MOCK_PROFILE.personalInfo.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">
                    {MOCK_PROFILE.personalInfo.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Joined Date</p>
                  <p className="font-medium">
                    {MOCK_PROFILE.personalInfo.joinDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Statistics */}
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Deliveries
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {MOCK_PROFILE.statistics.totalDeliveries}
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Average Rating
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {MOCK_PROFILE.statistics.rating}
                </p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Completion Rate
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {MOCK_PROFILE.statistics.completionRate}
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Avg Delivery Time
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {MOCK_PROFILE.statistics.avgDeliveryTime}
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* This Month's Performance */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold">This Month's Performance</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <p className="text-sm text-gray-500">Deliveries Completed</p>
              <p className="text-xl font-semibold mt-1">
                {MOCK_PROFILE.statistics.thisMonth.deliveries}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Earnings</p>
              <p className="text-xl font-semibold mt-1">
                {MOCK_PROFILE.statistics.thisMonth.earnings}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Rating</p>
              <p className="text-xl font-semibold mt-1">
                {MOCK_PROFILE.statistics.thisMonth.rating}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">On-Time Delivery</p>
              <p className="text-xl font-semibold mt-1">
                {MOCK_PROFILE.statistics.thisMonth.onTime}
              </p>
            </div>
          </div>
        </div>

        {/* Admin Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            To update your profile information, please contact the administrator
          </p>
        </div>
      </div>
    </main>
  );
};