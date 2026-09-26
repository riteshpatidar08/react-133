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
  return (
    <BrowserRouter>

      {/* Main Layout */}
      <div className="flex min-h-screen bg-gray-50">

        {/* Sidebar */}
        <Sidebar />

        {/* Right Side */}
        <main className="flex-1 min-w-0">

          <Navbar />

          <div className="page-content">

            <Routes>

              <Route
                path="/"
                element={<Overview />}
              />

              <Route
                path="/customers"
                element={<Customers />}
              />

              <Route
                path="/integrations"
                element={<Integrations />}
              />

              <Route
                path="/settings"
                element={<Settings />}
              />

              <Route
                path="/account"
                element={<Account />}
              />

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