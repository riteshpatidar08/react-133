import React from 'react';
import './dashboard.css';

import { Link, Outlet } from 'react-router-dom';

import { CiSearch } from 'react-icons/ci';
import { AiOutlineTeam } from 'react-icons/ai';
import { GoBell } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Header */}
      <header className="header">

        <div className="left-icon">
          <CiSearch />
        </div>

        <div className="right-icon">
          <AiOutlineTeam />
          <GoBell />
          <CgProfile />
        </div>

      </header>


      {/* Main Layout */}
      <div className="dashboard-body">

        {/* Sidebar */}
        <aside className="sidebar">

  <div className="logo">
    <div className="logo-box">◇</div>
    <h2>DeviasKit</h2>
  </div>

  <div className="workspace">
    <span>Workspace</span>
    <strong>Devias</strong>
    <div className="arrows">⌃<br />⌄</div>
  </div>

  <nav className="pages">

    <Link to="/dashboard/overview">
      <span>◉</span>
      Overview
    </Link>

    <Link to="/dashboard/integration">
      <span>⚒</span>
      Integrations
    </Link>

    <Link to="/dashboard/settings">
      <span>⚙</span>
      Settings
    </Link>

    <Link to="/dashboard/account">
      <span>♙</span>
      Account
    </Link>

    <Link to="/dashboard/error">
      <span>⊠</span>
      Error
    </Link>

    <Link to="/dashboard/customers">
  <span>♧</span>
  Customers
</Link>

  </nav>

  <div className="sidebar-bottom">
    <h3>Need more features?</h3>
    <p>Check out our Pro solution template.</p>

    <button>Pro version ↗</button>
  </div>

</aside>


        {/* Page Content */}
        <main className="content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default Dashboard;