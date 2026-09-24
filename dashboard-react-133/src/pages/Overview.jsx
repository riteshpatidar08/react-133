import {
  DollarSign,
  Users,
  List,
  Receipt,
} from "lucide-react";

import StatCard from "../components/StatCard";

function Overview() {
  return (
    <div className="overview">

      <div className="stats-grid">

        {/* Budget */}
        <StatCard
          title="BUDGET"
          value="$24k"
          icon={<DollarSign size={25} color="white" />}
          color="#635bff"
          percentage={12}
          type="up"
          description="Since last month"
        />

        {/* Customers */}
        <StatCard
          title="TOTAL CUSTOMERS"
          value="1.6k"
          icon={<Users size={25} color="white" />}
          color="#14b8a6"
          percentage={16}
          type="down"
          description="Since last month"
        />

        {/* Task Progress */}
        <StatCard
          title="TASK PROGRESS"
          value="75.5%"
          icon={<List size={25} color="white" />}
          color="#f59e0b"
          progress={75.5}
        />

        {/* Profit */}
        <StatCard
          title="TOTAL PROFIT"
          value="$15k"
          icon={<Receipt size={25} color="white" />}
          color="#635bff"
        />

      </div>

    </div>
  );
}

export default Overview;