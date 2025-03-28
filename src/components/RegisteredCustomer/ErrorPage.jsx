import React from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {
  Home,
  RefreshCw,
  ChefHat,
  ServerCrash,
  HelpCircle,
} from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate(); // Use this to programmatically navigate
  const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get("code") || "500";
    const role = params.get("role");

    console.log("Error page - code:", code, "role:", role); 
  const content = {
    "404": {
      title: "Page Not Found",
      message: "Oops! The page you're looking for doesn't exist.",
      icon: ChefHat,
      primaryAction: {
        label: "Go to Home",
        icon: Home,
        onClick: () => navigate("/guesthome"),
      },
      secondaryAction: {
        label: "Contact Support",
        icon: HelpCircle,
      },
    },
    "500": {
      title: "Internal Server Error",
      message: "Something went wrong on our end. Please try again later.",
      icon: ServerCrash,
      primaryAction: {
        label: "Refresh Page",
        icon: RefreshCw,

      },
      secondaryAction: {
        label: "Return to Home",
        icon: Home,
        onClick: () => navigate("/guesthome"),
      },
    },
  };

  const {
    title,
    message,
    icon: Icon,
    primaryAction,
    secondaryAction,
  } = content[code];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-lg w-full text-center">
          {/* Error Illustration */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 bg-red-50 rounded-full mx-auto flex items-center justify-center">
              <Icon className="w-16 h-16 text-red-500" />
            </div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full border border-gray-200">
              <span className="text-4xl font-bold text-gray-900">{code}</span>
            </div>
          </div>
          {/* Error Message */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 mb-8">{message}</p>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={primaryAction.onClick}
              className="flex items-center justify-center gap-2 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 min-w-[160px]"
            >
              <primaryAction.icon className="w-4 h-4" />
              {primaryAction.label}
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 min-w-[160px]" onClick={secondaryAction.onClick}>
              <secondaryAction.icon className="w-4 h-4" />
              {secondaryAction.label}
            </button>
          </div>
          {/* Support Info */}
          <div className="mt-12 text-sm text-gray-600">
            <p>Need immediate assistance?</p>
            <p className="mt-1">
              Contact our support team at{" "}
              <a
                href="mailto:support@hungrybar.com"
                className="text-red-500 hover:text-red-600"
              >
                support@hungrybar.com
              </a>
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="py-4 text-center text-sm bg-gray-900 text-white border-t">
        <p>© 2024 Hungry Bar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ErrorPage;