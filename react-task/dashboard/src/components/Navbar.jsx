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
    <header className="navbar">

      
      <div className="search-box">

        <Search size={22} />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />

      </div>

    
      <div className="navbar-right">

        <button className="nav-icon">
          <Users size={22} />
        </button>

        <button className="nav-icon notification">

          <Bell size={22} />

          <span className="notification-dot"></span>

        </button>

        <button className="profile-button">

          <img
            src="https://i.pravatar.cc/100?img=47"
            alt="profile"
          />

        </button>

      </div>

    </header>
  );
}

export default Navbar;