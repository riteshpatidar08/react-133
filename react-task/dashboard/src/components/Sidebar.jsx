import {
  LayoutDashboard,
  Users,
  Plug,
  Settings,
  UserCircle,
  X,
  ChevronUp,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    {
      name: "Overview",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: Users,
    },
    {
      name: "Integrations",
      path: "/integrations",
      icon: Plug,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
    {
      name: "Account",
      path: "/account",
      icon: UserCircle,
    },
    {
      name: "Error",
      path: "/error",
      icon: X,
    },
  ];

  return (
    <>
      {/* =================================
          MOBILE OVERLAY
      ================================= */}

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}


      {/* =================================
          SIDEBAR
      ================================= */}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-[300px]
          flex-col
          bg-[#111521]
          text-white
          transition-transform duration-300

          ${isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        {/* =================================
            LOGO
        ================================= */}

        <div className="flex h-[88px] items-center justify-between border-b border-slate-700/50 px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#111521]">
              ◇
            </div>

            <span className="text-xl font-bold">
              DeviasKit
            </span>

          </div>


          {/* MOBILE CLOSE */}

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <X size={22} />
          </button>

        </div>


        {/* =================================
            WORKSPACE
        ================================= */}

        <div className="border-b border-slate-700/50 p-5">

          <p className="mb-2 text-xs font-medium text-slate-400">
            Workspace
          </p>

          <button className="flex w-full items-center justify-between rounded-xl border border-slate-600 bg-slate-900/40 px-3 py-3 text-left">

            <div>
              <p className="text-sm text-slate-400">
                Workspace
              </p>

              <p className="mt-1 font-semibold text-white">
                Devias
              </p>
            </div>

            <div className="flex flex-col text-slate-400">
              <ChevronUp size={14} />
              <ChevronDown size={14} />
            </div>

          </button>

        </div>


        {/* =================================
            MENU
        ================================= */}

        <nav className="flex-1 space-y-1 px-3 py-4">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3 rounded-lg px-4 py-3
                  text-sm font-medium
                  transition

                  ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-sm"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }
                  `
                }
              >

                <Icon size={20} />

                <span>
                  {item.name}
                </span>

              </NavLink>
            );
          })}

        </nav>


        {/* =================================
            BOTTOM PRO CARD
        ================================= */}

        <div className="border-t border-slate-700/50 p-5">

          <p className="text-sm font-semibold text-white">
            Need more features?
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            Check out our Pro solution template.
          </p>


          <div className="my-5 flex h-24 items-center justify-center rounded-xl bg-slate-800">

            <div className="text-center">

              <div className="text-3xl">
                🚀
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Pro Dashboard
              </p>

            </div>

          </div>


          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600">

            Pro version

            <ExternalLink size={16} />

          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;