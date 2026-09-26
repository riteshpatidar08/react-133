import {
  DollarSign,
  Users,
  List,
  Receipt,
} from "lucide-react";

import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import TrafficChart from "../components/TrafficChart";

function Overview() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Overview
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening with your workspace today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="BUDGET"
          value="$24k"
          icon={
            <DollarSign
              size={25}
              color="white"
            />
          }
          color="#635bff"
          percentage={12}
          type="up"
          description="Since last month"
        />

        <StatCard
          title="TOTAL CUSTOMERS"
          value="1.6k"
          icon={
            <Users
              size={25}
              color="white"
            />
          }
          color="#14b8a6"
          percentage={16}
          type="down"
          description="Since last month"
        />

        <StatCard
          title="TASK PROGRESS"
          value="75.5%"
          icon={
            <List
              size={25}
              color="white"
            />
          }
          color="#f59e0b"
          progress={75.5}
        />

        <StatCard
          title="TOTAL PROFIT"
          value="$15k"
          icon={
            <Receipt
              size={25}
              color="white"
            />
          }
          color="#635bff"
        />

      </div>

      {/* Charts */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
        {/* Sales - 2/3 Width */}
        <div className="xl:col-span-2 min-w-0">
          <SalesChart />
        </div>

        {/* Traffic - 1/3 Width */}
        <div className="xl:col-span-1 min-w-0">
          <TrafficChart />
        </div>

      </div>

    </div>
  );
}

export default Overview;