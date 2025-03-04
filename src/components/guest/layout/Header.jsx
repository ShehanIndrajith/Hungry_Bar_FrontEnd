// components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pizza, ShoppingCart, Menu, X } from "lucide-react"; // Replace with your actual icon imports

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <Pizza className="h-8 w-8 text-red-500" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Hungry Bar
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/menupage" className="text-gray-700 hover:text-gray-900">
              Menu
            </Link>
            <Link to="/aboutpage" className="text-gray-700 hover:text-gray-900">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700">
                Home
              </Link>
              <Link to="/menu" className="block px-3 py-2 text-gray-700">
                Menu
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700">
                About Us
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700">
                Contact
              </Link>
              <Link to="/login" className="block px-3 py-2 text-gray-700">
                Login
              </Link>
              <Link to="/register" className="block px-3 py-2 text-gray-700">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;