import React from 'react';
import { StatsCard } from './DashboardComponent/StatsCard';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react'; // Assuming you're using lucide-react for icons

export const Dashboard = () => {
  return (
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
          <h3 className="text-lg font-medium mb-4">Popular Items</h3>
        </div>
      </div>
    </main>
  );
};