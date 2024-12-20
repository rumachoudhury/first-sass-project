import React, { useState } from "react";
import {
  FaAngleDown,
  FaMoon,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <nav className="navbar ">
      {/* Section 2: Menu */}
      <div className="navbar-menu-container navbar-bottom">
        {/* Image for Menu Toggle */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <img
            src="/figma-images/Vector.png"
            alt="Menu"
            className="navbar-toggle-icon"
          />
          <button className="navbar-category-button">
            Category <FaAngleDown />
          </button>
          <ul
            className={`navbar__menu ${
              isMenuOpen ? "navbar-menu-open " : "navbar-menu-close"
            }`}
          >
            <li className="navbar-item">Campaigns</li>
            <li className="navbar-item">Brands</li>
            <li className="navbar-item">Categories</li>
            <li className="navbar-item">Help</li>
            <li className="navbar-item">FAQ</li>
          </ul>
        </div>
        {/* Menu List end*/}
      </div>
      {/* Section 1: Search, Language, and Icons */}
      <div className="navbar-section navbar-top">
        <div className="navbar-search-wrapper">
          <FaSearch className="navbar-search-icon" aria-hidden="true" />
          <input
            type="text"
            className="navbar-search"
            placeholder="Search..."
          />
        </div>
        <div className="navbar-language" onClick={toggleLanguageDropdown}>
          <h5> English </h5>
          <FaAngleDown className="navbar-icon" />
          {isLanguageOpen && (
            <ul className="language-dropdown">
              <li className="language-item">Spanish</li>
              <li className="language-item">French</li>
              <li className="language-item">German</li>
            </ul>
          )}
        </div>
        {/* Moon Icon */}
        <FaMoon className="navbar-icon navbar-icon-moon" title="Dark Mode" />
        <FaShoppingCart className="navbar-icon navbar-icon-cart" title="Cart" />
        <FaUser className="navbar-icon navbar-icon-user" title="User" />
      </div>
    </nav>
  );
};

export default Navbar;
