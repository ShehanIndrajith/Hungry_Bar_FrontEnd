import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pizza, Eye, EyeOff, Facebook, Instagram } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const loginData = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    try {
        const response = await fetch("http://localhost:8080/HungryBarFinal/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
            credentials: "include",  // This is required for session cookies
        });

        const data = await response.json();

        if (data.success) {
            // Redirect to the homepage
            navigate("/home");
            console.log("UserID from session:", data.userID); // Display in browser console
        } else {
            setErrorMessage(data.message);
        }
    } catch (error) {
        setErrorMessage("Login failed. Please try again.");
    }
};

  return (
    <main className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
            <Pizza className="text-white h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Hungry Bar</h1>
          <p className="text-gray-500 mt-2">Sign in to order your pizza</p>
        </div>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input id="email" name="email" type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input id="password" name="password" type={showPassword ? "text" : "password"} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Keep me logged in
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-red-500 hover:text-red-600">
                Forgot password?
              </a>
            </div>
          </div>
          <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
            Sign In
          </button>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <button type="button" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
              <FcGoogle className="h-5 w-5"/>
            </button>
            <button type="button" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
              <Facebook className="h-5 w-5 text-[#1877F2]" />
            </button>
            <button type="button" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
              <Instagram className="h-5 w-5 text-[#E4405F]" />
            </button>
          </div>
          <div>
            <Link to='/staff-login' className='underline text-sm text-blue-700'>Staff Login</Link>
          </div>
        </form>
      </div>
    </main>
  );
};