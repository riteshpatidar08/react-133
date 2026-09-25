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
    <div className="traffic-card">

      {/* Header */}
      <div className="traffic-header">
        <h2>Traffic source</h2>
      </div>

      {/* Donut Chart */}
      <div className="traffic-chart">

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
              innerRadius={75}
              outerRadius={110}
              paddingAngle={2}
              stroke="none"
            >

              {trafficData.map((item, index) => (
                <Cell
                  key={item.name}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Traffic Details */}
      <div className="traffic-details">

        {trafficData.map((item, index) => (

          <div
            className="traffic-item"
            key={item.name}
          >

            <div className="traffic-name">

              <span
                className="traffic-dot"
                style={{
                  backgroundColor: COLORS[index],
                }}
              ></span>

              <span>
                {item.name}
              </span>

            </div>

            <strong>
              {item.value}%
            </strong>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TrafficChart;