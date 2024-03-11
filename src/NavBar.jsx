import React from 'react';
import { NavLink }  from 'react-router-dom'; // Import for navigation links

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container"> {/* Container for better layout */}
        <NavLink to="/" className="logo">Your Logo</NavLink> {/* Link to your homepage */}
        <ul className="nav-menu">
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/">Contact</NavLink></li>
          {/* Add more navigation links here */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
