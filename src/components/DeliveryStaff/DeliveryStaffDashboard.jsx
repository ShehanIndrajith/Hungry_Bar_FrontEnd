import React, { useState } from "react";
import { AssignedOrders } from "./pages/AssignedOrders.jsx";
import { NavigateToCustomer } from "./pages/NavigateToCustomer.jsx";
import { PaymentInformation } from "./pages/PaymentInformation.jsx";
import { Profile } from "./pages/Profile.jsx";
import { ReportIssue } from "./pages/ReportIssue.jsx";
import { UpdateDeliveryStatus } from "./pages/UpdateDeliveryStatus.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

function DeliveryStaffDashboard() {
  const [selectedPage, setSelectedPage] = useState("assignedOrders");

  // Render the selected page
  const renderPage = () => {
    switch (selectedPage) {
      case "updatestatus":
        return <UpdateDeliveryStatus />;
      case "navigate":
        return <NavigateToCustomer />;
      case "reportissue":
        return <ReportIssue />;
      case "payments":
        return <PaymentInformation />;
      case "profile":
        return <Profile />;
      default:
        return <AssignedOrders />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar onSelectPage={setSelectedPage} />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow p-6 lg:pl-64">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default DeliveryStaffDashboard;
