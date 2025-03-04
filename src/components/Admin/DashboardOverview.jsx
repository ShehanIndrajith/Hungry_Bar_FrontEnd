import React from "react";
import { Header } from "./layout/Header";
import { Sidebar } from "./layout/Sidebar";
import { StatsCard } from "./DashboardComponent/StatsCard";
import { MenuPage } from "./MenuPage";
import {PromotionsPage} from "./PromotionsPage"
import {OrdersPage} from "./OrdersPage"
import {UsersPage} from "./UsersPage"
import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";

export function DashboardOverview() {
  const currentPage = "menu";
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <Header />
      {currentPage === "users" ? (
          <UsersPage />
        ) :currentPage === "orders" ? (
          <OrdersPage />
        ) :currentPage === "menu" ?(
        <MenuPage />):
        currentPage === "promotions" ? (
          <PromotionsPage />
        ) : (
          <>
            <main className="flex-1 p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back, Admin</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                  title="Total Sales"
                  value="$24,780"
                  icon={DollarSign}
                  trend={{
                    value: "+12.5% from last month",
                    positive: true,
                  }}
                />
                <StatsCard title="Active Orders" value="45" icon={ShoppingBag} />
                <StatsCard
                  title="Total Users"
                  value="1,240"
                  icon={Users}
                  trend={{
                    value: "+8.1% from last month",
                    positive: true,
                  }}
                />
                <StatsCard
                  title="Revenue Growth"
                  value="18.2%"
                  icon={TrendingUp}
                  trend={{
                    value: "+4.3% from last month",
                    positive: true,
                  }}
                />
              </div>
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Recent Orders</h3>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-medium mb-4"> Popular Items</h3>
                </div>
              </div>
            </main>
          </>
        )}
        <footer className="bg-gray-900 text-white p-4 text-center text-sm">
              <p> © 2024 Hungry Bar. All rights reserved. </p>
        </footer>
      </div>
    </div>
  );
}