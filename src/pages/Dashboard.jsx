import React from 'react';
import './dashboard.css';
import { Link, Outlet } from 'react-router-dom';
function Dashboard() {
  return (
    <div className="outer_container">
      <header className="header">
        <h1>Dashboard</h1>
      </header>
      <div className="container">
        <aside className="sidebar">
        
              <Link to="/dashboard/overview">Overview</Link>
          
              <Link to="/dashboard/integration">Integration</Link>
         
              <Link to="/dashboard/settings">Setting</Link>
            
       
        </aside>
        <div className="content">

            <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
