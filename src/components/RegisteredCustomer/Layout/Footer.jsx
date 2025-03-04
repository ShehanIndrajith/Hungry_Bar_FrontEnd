// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Pizza, ArrowRight, Facebook, Instagram, Twitter } from "lucide-react"; // Replace with your actual icon imports

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Pizza className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">Hungry Bar</span>
            </div>
            <p className="text-gray-400">
              Serving the best pizzas since 2023
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/customer-support" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              123 Pizza Street
              <br />
              New York, NY 10001
            </p>
            <p className="text-gray-400 mt-2">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
              />
              <button className="bg-red-500 px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;