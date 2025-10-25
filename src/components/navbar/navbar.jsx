import React from 'react';
import './navbar.css';
import logo from '../assets/download.png';
import carticon from '../assets/cart icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>Shopper</p>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mens">Men</Link></li>
        <li><Link to="/womens">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>

      {/* Login & Cart Section */}
      <div className="nav-login-card">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={carticon} alt="Card" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
