import React, { useContext } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Nav() {
  const navStyle = {
    color: 'white',
  };

  const { user } = useContext(UserContext);

  return (
    <nav>
      <h3>Frittfall</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Hjem</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>Om oss</li>
        </Link>
        <li>Welcome, {user}!</li>
      </ul>
    </nav>
  );
}

export default Nav;
