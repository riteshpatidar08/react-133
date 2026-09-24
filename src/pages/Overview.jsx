import React from "react";


function Overview() {
  const cards = [
    {
      title: "BUDGET",
      value: "$24k",
      change: "12%",
      text: "Since last month",
      type: "up",
      icon: "$",
    },
    {
      title: "TOTAL CUSTOMERS",
      value: "1.6k",
      change: "16%",
      text: "Since last month",
      type: "down",
      icon: "♧",
    },
    {
      title: "TASK PROGRESS",
      value: "75.5%",
      icon: "☷",
      progress: true,
    },
    {
      title: "TOTAL PROFIT",
      value: "$15k",
      icon: "▤",
    },
  ];

  return (
    <div className="overview">

      {/* TOP CARDS */}
      <div className="stats-grid">
        {cards.map((card, index) => (
          <div className="stat-card" key={index}>

            <div className="card-content">
              <p className="card-title">{card.title}</p>
              <h2>{card.value}</h2>

              {card.change && (
                <div className={`change ${card.type}`}>
                  <span>
                    {card.type === "up" ? "↑" : "↓"} {card.change}
                  </span>
                  <small>{card.text}</small>
                </div>
              )}

              {card.progress && (
                <div className="progress-container">
                  <div className="progress"></div>
                </div>
              )}
            </div>

            <div className="card-icon">
              {card.icon}
            </div>

          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="dashboard-grid">

        {/* SALES */}
        <div className="sales-box">
          <div className="box-header">
            <h2>Sales</h2>

            <button>
              ↻ &nbsp; Sync
            </button>
          </div>

          <div className="chart">

            <div className="y-axis">
              <span>20K</span>
              <span>15K</span>
              <span>10K</span>
              <span>5K</span>
            </div>

            <div className="bars">

              <div className="bar" style={{ height: "55%" }}></div>
              <div className="bar" style={{ height: "43%" }}></div>
              <div className="bar" style={{ height: "30%" }}></div>
              <div className="bar" style={{ height: "48%" }}></div>
              <div className="bar" style={{ height: "35%" }}></div>
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "67%" }}></div>
              <div className="bar" style={{ height: "78%" }}></div>
              <div className="bar" style={{ height: "55%" }}></div>
              <div className="bar" style={{ height: "85%" }}></div>

            </div>
          </div>
        </div>

        {/* TRAFFIC SOURCE */}
        <div className="traffic-box">

          <h2>Traffic source</h2>

          <div className="donut"></div>

          <div className="traffic-info">
            <div>
              <span className="dot purple"></span>
              Direct
            </div>

            <div>
              <span className="dot orange"></span>
              Social
            </div>

            <div>
              <span className="dot green"></span>
              Referral
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Overview;