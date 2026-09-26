import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const trafficData = [
  {
    name: "Desktop",
    value: 63,
  },
  {
    name: "Tablet",
    value: 15,
  },
  {
    name: "Phone",
    value: 22,
  },
];

const COLORS = [
  "#635bff",
  "#22c55e",
  "#f59e0b",
];

function TrafficChart() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Traffic source
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Visitors by device
          </p>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="w-full h-[250px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>

            <Pie
              data={trafficData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
              stroke="none"
            >

              {trafficData.map((item, index) => (
                <Cell
                  key={item.name}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />

          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Traffic Details */}
      <div className="mt-2 space-y-3">

        {trafficData.map((item, index) => (

          <div
            className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition"
            key={item.name}
          >

            {/* Name */}
            <div className="flex items-center gap-3">

              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              ></span>

              <span className="text-sm font-medium text-gray-600">
                {item.name}
              </span>

            </div>

            {/* Percentage */}
            <strong className="text-sm font-semibold text-gray-900">
              {item.value}%
            </strong>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TrafficChart;