import {
  LayoutDashboard,
  Users,
  GitBranch,
  Settings as SettingsIcon,
  User,
  CircleAlert,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

     
      <div className="logo">
         <span>GRASS</span>
      </div>

      
      <div className="workspace">

        <span>Workspace</span>

        <div className="workspace-name">
          Grass
          <span>⌃</span>
        </div>

      </div>

     
      <nav className="sidebar-menu">

        <NavLink to="/" className="sidebar-link">

          <LayoutDashboard size={20} />

          <span>Overview</span>

        </NavLink>

        <NavLink to="/customers" className="sidebar-link">

          <Users size={20} />

          <span>Customers</span>

        </NavLink>

        <NavLink to="/integrations" className="sidebar-link">

          <GitBranch size={20} />

          <span>Integrations</span>

        </NavLink>

        <NavLink to="/settings" className="sidebar-link">

          <SettingsIcon size={20} />

          <span>Settings</span>

        </NavLink>

        <NavLink to="/account" className="sidebar-link">

          <User size={20} />

          <span>Account</span>

        </NavLink>

        <NavLink to="/error-page" className="sidebar-link">

          <CircleAlert size={20} />

          <span>Error</span>

        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;