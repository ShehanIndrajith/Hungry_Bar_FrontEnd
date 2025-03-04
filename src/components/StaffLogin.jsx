import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pizza } from "lucide-react";
import { LoginForm } from "./Auth/LoginForm";

export const StaffLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (data) => {
        setIsLoading(true);
        setError("");

        if (data) {
            console.log("Login successful:", data);

            // Redirect based on role
            switch (data.role.toLowerCase()) {
                case "admin":
                    navigate("/admin-dashboard"); // Redirect to admin dashboard
                    break;
                case "manager":
                    navigate("/manager-dashboard"); // Redirect to manager dashboard
                    break;
                case "kitchen_staff":
                    navigate("/kitchen-dashboard"); // Redirect to kitchen dashboard
                    break;
                case "delivery_staff":
                    navigate("/delivery-dashboard"); // Redirect to delivery dashboard
                    break;
                default:
                    navigate("/home"); // Default redirect
                    break;
            }
        } else {
            setError("Invalid credentials. Please try again.");
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                {/* Logo and Header */}
                <div className="text-center">
                    <Pizza className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Welcome to Hungry Bar
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Please sign in to your staff account
                    </p>
                </div>

                {/* Login Form */}
                <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />

                {/* Footer */}
                <p className="text-center text-sm text-gray-500">
                    Having trouble logging in?{" "}
                    <a href="#" className="text-red-600 hover:text-red-700">
                        Contact support
                    </a>
                </p>
            </div>
        </div>
    );
};