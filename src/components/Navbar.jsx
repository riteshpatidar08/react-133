import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Link, NavLink } from 'react-router-dom';
import './../styles/Navbar.css';
import './../styles/new.css';
const Navbar = () => {
  const { totalResults } = useContext(MovieContext);

  return (
    <header className="navbar">
      <h1 className="logo">CineVerse</h1>

      <nav className="nav-links">
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}

          // className={({ isActive }) => isActive ? 'active' : ''}
          // className='active'
        >
          Home
        </NavLink>
        {/* <Link to="/">Home</Link> */}
        <NavLink
          to="/events"
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : 'white',
            textDecoration: 'underline',
          })}

          // className={({ isActive }) => (isActive ? 'active' : null)}
          // className='active'
        >
          Events
        </NavLink>

        <NavLink
  to="/movies"
  style={({ isActive }) => ({
    color: isActive ? "yellow" : "white",
    textDecoration: "underline",
  })}
>
  Movies
</NavLink>

      </nav>

      <div className="nav-actions">
        <p className="results">{totalResults} Movies</p>
        <button className="signin-btn">Sign in</button>
      </div>
    </header>
  );
};

export default Navbar;
