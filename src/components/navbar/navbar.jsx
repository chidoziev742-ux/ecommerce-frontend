import React, { useContext, useState } from 'react';
import './navbar.css';
import logo from '../assets/download.png';
import carticon from '../assets/cart icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>Shopper</p>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link to="/" className={menu === "home" ? "active" : ""}>Home</Link>
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/mens" className={menu === "men" ? "active" : ""}>Men</Link>
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/womens" className={menu === "women" ? "active" : ""}>Women</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" className={menu === "kids" ? "active" : ""}>Kids</Link>
        </li>
      </ul>

      {/* Login & Cart Section */}
      <div className="nav-login-card">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={carticon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
