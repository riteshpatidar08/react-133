import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Link, NavLink } from 'react-router-dom';
import styles from '../components/Button.module.css'
import './../styles/Navbar.css';
import './../styles/new.css';
const Navbar = () => {
  console.log(styles)
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
      </nav>

      <div className="nav-actions">
        <p className="results">{totalResults} Movies</p>
        <button className={`${styles.btn}`}>Sign in</button>
      </div>
    </header>
  );
};

export default Navbar;
