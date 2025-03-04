import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pizza, ShoppingCart, User, ChevronDown } from "lucide-react";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userID, setUserID] = useState(null);
  const navigate = useNavigate();
  const profileRef = useRef();

  // Fetch userID on mount
  useEffect(() => {
    const fetchUserID = async () => {
      try {
        const response = await fetch("http://localhost:8080/HungryBarFinal/getUserID", {
          credentials: "include", // Include cookies for session tracking
        });

        if (response.status === 401) {
          navigate("/login");
          return;
        }

        const data = await response.json();
        setUserID(data?.userID || null);
      } catch (error) {
        console.error("Error fetching userID:", error);
      }
    };

    fetchUserID();
  }, [navigate]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleProfileClick = () => {
    if (userID) {
      navigate(`/profile/${userID}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Pizza className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold">Hungry Bar</span>
            </div>

            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/menu" className="text-gray-600 hover:text-gray-900">
                Menu
              </Link>
              <Link to="/aboutus" className="text-gray-600 hover:text-gray-900">
                About Us
              </Link>
              <button
                onClick={handleProfileClick}
                className="text-gray-600 hover:text-gray-900"
              >
                Profile
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <Link to="/cart">
                <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2 {/* This can be dynamic if you want */}
                </span>
              </Link>
            </div>

            {/* Profile dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <User className="w-6 h-6" />
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                  <button
                    onClick={handleProfileClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Dashboard
                  </button>
                  <Link
                    to="/edit-profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <hr className="my-2" />
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
