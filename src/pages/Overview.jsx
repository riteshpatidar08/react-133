import React from 'react';

function Overview() {
  const salesData = [
    { main: 18000, light: 12000 },
    { main: 16000, light: 11000 },
    { main: 5000, light: 5000 },
    { main: 8000, light: 6000 },
    { main: 3000, light: 2000 },
    { main: 14000, light: 9000 },
    { main: 14000, light: 9000 },
    { main: 16000, light: 10000 },
    { main: 17000, light: 11000 },
    { main: 19000, light: 12000 },
    { main: 18000, light: 13000 },
    { main: 20000, light: 13000 },
  ];

  return (
    <div className="overview">

      {/* ================= TOP CARDS ================= */}

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-info">
            <p>BUDGET</p>
            <h2>$24k</h2>

            <span className="positive">↑ 12%</span>
            <span className="last-month">Since last month</span>
          </div>

          <div className="stat-icon purple">$</div>
        </div>


        <div className="stat-card">
          <div className="stat-info">
            <p>TOTAL CUSTOMERS</p>
            <h2>1.6k</h2>

            <span className="negative">↓ 16%</span>
            <span className="last-month">Since last month</span>
          </div>

          <div className="stat-icon green">👥</div>
        </div>


        <div className="stat-card">
          <div className="stat-info">
            <p>TASK PROGRESS</p>
            <h2>75.5%</h2>

            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>

          <div className="stat-icon orange">☷</div>
        </div>


        <div className="stat-card">
          <div className="stat-info">
            <p>TOTAL PROFIT</p>
            <h2>$15k</h2>
          </div>

          <div className="stat-icon purple">▤</div>
        </div>

      </div>


      {/* ================= CHART SECTION ================= */}

      <div className="charts-grid">

        {/* SALES */}

        <div className="sales-card">

          <div className="chart-header">
            <h2>Sales</h2>

            <button>
              ↻ &nbsp; Sync
            </button>
          </div>


          <div className="sales-chart">

            {/* Y AXIS */}

            <div className="y-axis">
              <span>20K</span>
              <span>15K</span>
              <span>10K</span>
              <span>5K</span>
              <span>0</span>
            </div>


            {/* GRAPH */}

            <div className="graph">

              <div className="grid-line line-20"></div>
              <div className="grid-line line-15"></div>
              <div className="grid-line line-10"></div>
              <div className="grid-line line-5"></div>
              <div className="grid-line line-0"></div>


              <div className="bars">

                {salesData.map((item, index) => (
                  <div className="bar-group" key={index}>

                    <div
                      className="bar light-bar"
                      style={{
                        height: `${item.light / 100}px`,
                      }}
                    ></div>

                    <div
                      className="bar main-bar"
                      style={{
                        height: `${item.main / 100}px`,
                      }}
                    ></div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>


        {/* TRAFFIC SOURCE */}

        <div className="traffic-card">

          <h2>Traffic source</h2>

          <div className="donut-container">

            <div className="donut">
              <div className="donut-center"></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Overview;