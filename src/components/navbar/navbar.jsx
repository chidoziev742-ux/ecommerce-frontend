import React, { useContext, useRef, useState } from 'react';
import './navbar.css';
import logo from '../assets/download.png';
import carticon from '../assets/cart icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_dropdown from '../assets/nav_dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdownRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    dropdownRef.current.classList.toggle('open');
  };

  // Close dropdown menu when link clicked
  const handleLinkClick = (menuName) => {
    setMenu(menuName);
    if (window.innerWidth <= 800) {
      menuRef.current.classList.remove('nav-menu-visible');
      dropdownRef.current.classList.remove('open');
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>Shopper</p>
      </div>

      <img
        ref={dropdownRef}
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt="menu dropdown"
      />

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => handleLinkClick("home")}>
          <Link to="/" className={menu === "home" ? "active" : ""}>Home</Link>
        </li>
        <li onClick={() => handleLinkClick("men")}>
          <Link to="/mens" className={menu === "men" ? "active" : ""}>Men</Link>
        </li>
        <li onClick={() => handleLinkClick("women")}>
          <Link to="/womens" className={menu === "women" ? "active" : ""}>Women</Link>
        </li>
        <li onClick={() => handleLinkClick("kids")}>
          <Link to="/kids" className={menu === "kids" ? "active" : ""}>Kids</Link>
        </li>
      </ul>

      <div className="nav-login-card">
        {localStorage.getItem('auth-token') ? (
  <button
    onClick={() => {
      localStorage.removeItem('auth-token');
      window.location.replace('/');
    }}
  >
    Log out
  </button>
) : (
  <Link to="/login">
    <button>Login</button>
  </Link>
)}

        
       
        <Link to="/cart">
          <img src={carticon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
