import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { useState } from "react";

const salesData = [
  { month: "Jan", sales: 18000, previous: 12000 },
  { month: "Feb", sales: 16000, previous: 11000 },
  { month: "Mar", sales: 5000, previous: 4000 },
  { month: "Apr", sales: 8000, previous: 6000 },
  { month: "May", sales: 3000, previous: 2000 },
  { month: "Jun", sales: 14000, previous: 9000 },
  { month: "Jul", sales: 14000, previous: 9000 },
  { month: "Aug", sales: 16000, previous: 10000 },
  { month: "Sep", sales: 17000, previous: 11000 },
  { month: "Oct", sales: 19000, previous: 12000 },
  { month: "Nov", sales: 18000, previous: 13000 },
  { month: "Dec", sales: 20000, previous: 13000 },
];

function SalesChart() {

  const [syncing, setSyncing] = useState(false);

  function handleSync() {
    setSyncing(true);

    setTimeout(() => {
      setSyncing(false);
    }, 1000);
  }

  return (
    <div className="sales-card">

      <div className="sales-header">

        <h2>Sales</h2>

        <button
          className="sync-button"
          onClick={handleSync}
        >
          ↻

          <span>
            {syncing ? "Syncing..." : "Sync"}
          </span>
        </button>

      </div>

      <div className="sales-chart">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={salesData}
            margin={{
              top: 20,
              right: 10,
              left: 0,
              bottom: 10,
            }}
            barGap={2}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 20000]}
              ticks={[
                0,
                5000,
                10000,
                15000,
                20000,
              ]}
              tickFormatter={(value) =>
                value === 0
                  ? "0"
                  : `${value / 1000}K`
              }
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
            />

            <Tooltip
              formatter={(value) =>
                `$${value.toLocaleString()}`
              }
            />

            <Bar
              dataKey="sales"
              fill="#635bff"
              barSize={34}
            />

            <Bar
              dataKey="previous"
              fill="#d7d5ff"
              barSize={34}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default SalesChart;