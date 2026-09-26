import { useState } from "react";

import {
  Search,
  Users,
  Bell,
} from "lucide-react";

function Navbar() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <header className="h-20 w-full bg-white border-b border-gray-200 flex items-center justify-between px-6">

      {/* Search Box */}
      <div className="flex items-center gap-3 w-full max-w-md bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition">

        <Search
          size={21}
          className="text-gray-400 shrink-0"
        />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 ml-6">

        {/* Users Button */}
        <button
          className="relative w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
          title="Users"
        >
          <Users size={21} />
        </button>

        {/* Notification Button */}
        <button
          className="relative w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
          title="Notifications"
        >
          <Bell size={21} />

          {/* Notification Dot */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Profile */}
        <button
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition ml-1"
          title="Profile"
        >
          <img
            src="https://i.pravatar.cc/100?img=47"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </button>

      </div>

    </header>
  );
}

export default Navbar;