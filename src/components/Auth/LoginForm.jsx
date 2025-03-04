import React, { useState } from "react";
import { Settings, ClipboardList, ChefHat, Bike, Eye, EyeOff, Loader2 } from "lucide-react";

const ROLES = [
    { id: "admin", label: "Admin", icon: Settings },
    { id: "manager", label: "Manager", icon: ClipboardList },
    { id: "kitchen_staff", label: "Kitchen Staff", icon: ChefHat },
    { id: "delivery_staff", label: "Delivery Staff", icon: Bike },
];

export const LoginForm = ({ onSubmit, isLoading, error }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [touched, setTouched] = useState({ email: false, password: false, role: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ email: true, password: true, role: true });
    
        if (email && password && role) {
            try {
                const response = await fetch("http://localhost:8080/HungryBarFinal/stafflogin", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({ email, password, role }),
                });
    
                if (response.ok) {
                    const user = await response.json();
                    onSubmit(user); // Pass user data to parent component
                } else {
                    const errorMessage = await response.text();
                    onSubmit(null, errorMessage); // Pass error message to parent component
                }
            } catch (err) {
                console.error("API request failed:", err);
                onSubmit(null, "An error occurred. Please try again.");
            }
        }
    };

    const isEmailValid = email.includes("@");
    const isPasswordValid = password.length >= 6;

    return (
        <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Role</label>
                    <div className="grid grid-cols-2 gap-3">
                        {ROLES.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setRole(id)}
                                className={`flex items-center gap-2 p-3 rounded-lg border ${
                                    role === id ? "border-red-500 bg-red-50 text-red-700" : "border-gray-200 hover:border-gray-300"
                                } transition-colors`}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="text-sm font-medium">{label}</span>
                            </button>
                        ))}
                    </div>
                    {touched.role && !role && <p className="mt-1 text-sm text-red-600">Please select a role</p>}
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setTouched({ ...touched, email: true })}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                            touched.email && !isEmailValid ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your email"
                    />
                    {touched.email && !isEmailValid && <p className="mt-1 text-sm text-red-600">Please enter a valid email address</p>}
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => setTouched({ ...touched, password: true })}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                                touched.password && !isPasswordValid ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                    {touched.password && !isPasswordValid && <p className="mt-1 text-sm text-red-600">Password must be at least 6 characters</p>}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="rounded border-gray-300 text-red-500 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <button type="button" className="text-sm text-red-600 hover:text-red-700">
                        Forgot password?
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                        <p className="text-sm text-red-600">{error}</p>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Logging in...
                        </>
                    ) : (
                        "Login"
                    )}
                </button>
            </form>
        </div>
    );
};