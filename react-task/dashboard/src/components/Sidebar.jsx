import {
  LayoutDashboard,
  Users,
  GitBranch,
  Settings as SettingsIcon,
  User,
  CircleAlert,
  ChevronDown,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          
          <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              G
            </span>
          </div>

          <span className="text-xl font-bold tracking-wide text-gray-900">
            GRASS
          </span>

        </div>
      </div>

      {/* Workspace */}
      <div className="px-4 pt-6 pb-4">

        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Workspace
        </span>

        <button className="w-full mt-2 flex items-center justify-between px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">

          <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                G
              </span>
            </div>

            <span className="text-sm font-semibold text-gray-800">
              Grass
            </span>

          </div>

          <ChevronDown
            size={17}
            className="text-gray-500"
          />

        </button>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <LayoutDashboard size={19} />
          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <Users size={19} />
          <span>Customers</span>
        </NavLink>

        <NavLink
          to="/integrations"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <GitBranch size={19} />
          <span>Integrations</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <SettingsIcon size={19} />
          <span>Settings</span>
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <User size={19} />
          <span>Account</span>
        </NavLink>

        <NavLink
          to="/error-page"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <CircleAlert size={19} />
          <span>Error</span>
        </NavLink>

      </nav>

      {/* Bottom */}
      <div className="p-4 mt-auto">

        <div className="border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-400">
            © 2026 Grass
          </p>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;