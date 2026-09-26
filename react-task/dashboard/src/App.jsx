import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Overview from "./pages/Overview";
import Customers from "./pages/Customers";
import Integrations from "./pages/Integrations";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import ErrorPage from "./pages/ErrorPage";

function App() {

  // =====================================
  // SIDEBAR STATE
  // =====================================

  const [sidebarOpen, setSidebarOpen] = useState(false);


  // =====================================
  // DARK MODE
  // =====================================

  useEffect(() => {

    const savedSettings =
      localStorage.getItem("settings");

    if (savedSettings) {

      const settings =
        JSON.parse(savedSettings);

      if (settings.darkMode) {

        document.documentElement.classList.add(
          "dark"
        );

      } else {

        document.documentElement.classList.remove(
          "dark"
        );

      }

    }

  }, []);


  return (

    <BrowserRouter>

      {/* =================================
          MAIN LAYOUT
      ================================= */}

      <div className="
        min-h-screen
        bg-gray-50
        dark:bg-slate-950
      ">


        {/* =================================
            SIDEBAR
        ================================= */}

        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />


        {/* =================================
            NAVBAR
        ================================= */}

        <Navbar
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />


        {/* =================================
            MAIN CONTENT
        ================================= */}

        <main
          className="
            min-h-screen
            w-full
            overflow-x-hidden
            pt-[88px]

            lg:ml-[300px]
            lg:w-[calc(100%-300px)]
          "
        >

          <div className="w-full min-w-0">

            <Routes>

              {/* =========================
                  OVERVIEW
              ========================= */}

              <Route
                path="/"
                element={<Overview />}
              />


              {/* =========================
                  CUSTOMERS
              ========================= */}

              <Route
                path="/customers"
                element={<Customers />}
              />


              {/* =========================
                  INTEGRATIONS
              ========================= */}

              <Route
                path="/integrations"
                element={<Integrations />}
              />


              {/* =========================
                  SETTINGS
              ========================= */}

              <Route
                path="/settings"
                element={<Settings />}
              />


              {/* =========================
                  ACCOUNT
              ========================= */}

              <Route
                path="/account"
                element={<Account />}
              />


              {/* =========================
                  ERROR
              ========================= */}

              <Route
                path="*"
                element={<ErrorPage />}
              />

            </Routes>

          </div>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;