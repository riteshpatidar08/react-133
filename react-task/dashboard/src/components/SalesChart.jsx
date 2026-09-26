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
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Sales
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Monthly sales performance
          </p>
        </div>

        {/* Sync Button */}
        <button
          onClick={handleSync}
          disabled={syncing}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span
            className={`text-lg leading-none ${
              syncing ? "animate-spin" : ""
            }`}
          >
            ↻
          </span>

          <span>
            {syncing ? "Syncing..." : "Sync"}
          </span>
        </button>

      </div>

      {/* Chart */}
      <div className="w-full h-[350px]">

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
              stroke="#e5e7eb"
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
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
              formatter={(value) =>
                `$${value.toLocaleString()}`
              }
            />

            <Bar
              dataKey="sales"
              fill="#635bff"
              barSize={34}
              radius={[5, 5, 0, 0]}
            />

            <Bar
              dataKey="previous"
              fill="#d7d5ff"
              barSize={34}
              radius={[5, 5, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#635bff]"></span>
          <span>This Year</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#d7d5ff]"></span>
          <span>Previous Year</span>
        </div>

      </div>

    </div>
  );
}

export default SalesChart;