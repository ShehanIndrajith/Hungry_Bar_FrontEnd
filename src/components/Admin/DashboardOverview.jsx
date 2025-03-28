import React, { useState } from "react";
import { Header } from "./layout/Header";
import { Sidebar } from "./layout/Sidebar";
import { MenuPage } from "./MenuPage";
import { Dashboard } from "./Dashboard";
import { PromotionsPage } from "./PromotionsPage";
import { OrdersPage } from "./OrdersPage";
import { UsersPage } from "./UsersPage";

export function DashboardOverview() {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const renderPage = () => {
    switch (selectedPage) {
      case "menupage":
        return <MenuPage />;
      case "orderpage":
        return <OrdersPage />;
      case "promotionspage":
        return <PromotionsPage />;
      case "userpage":
        return <UsersPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Pass selectedPage and setSelectedPage to Sidebar */}
      <Sidebar activePage={selectedPage} onSelectPage={setSelectedPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">{renderPage()}</main>
        <footer className="bg-gray-900 text-white p-4 text-center text-sm">
          <p>© 2024 Hungry Bar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}