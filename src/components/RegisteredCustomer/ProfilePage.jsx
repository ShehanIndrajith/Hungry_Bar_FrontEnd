import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { MapPin, Mail, CreditCard, Edit2, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Removed useParams - not needed

export const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/HungryBarFinal/profile`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          if (response.status === 401) {
            navigate("/login");
            return;
          }
          throw new Error(`Server error - Status: ${response.status}`);
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message || "Failed to fetch profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEditProfile = () => {
    if (profile?.userID) {
      navigate(`/edit-profile/${profile.userID}`, { state: { user: profile } });
    } else {
      console.error("User ID is missing");
    }
  };

  if (error) {
    return <div className="text-red-500 text-center mt-4">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <img
                src={profile?.imageURL || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                alt="Profile picture"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <button
                className="absolute bottom-0 right-0 bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors"
                aria-label="Edit profile picture"
              >
                <Edit2 size={16} />
              </button>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mt-4">
              {profile?.name || "~"}
            </h1>
            <div className="flex items-center mt-2">
              <span className="flex items-center text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <CheckCircle size={14} className="mr-1" />
                Active Member
              </span>
            </div>
          </div>

          {/* Profile Information */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">{profile?.email || "~"}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-900">{profile?.address || "~"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Payment Method
              </h2>
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Primary Payment</p>
                  <p className="text-gray-900">
                    {profile?.paymentMethod || "~"}
                  </p>
                </div>
              </div>
            </div>

            {/* Edit Profile Button */}
            <div className="flex justify-center pt-4">
              <button onClick={handleEditProfile} className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors flex items-center">
                <Edit2 size={18} className="mr-2" />
                Edit Profile Details
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
