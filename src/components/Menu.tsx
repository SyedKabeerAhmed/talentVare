import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';
import logoImage from '../assets/Group 1907.png';
import searchIcon from '../assets/Group 1321315337.png';
import userAvatar from '../assets/Rectangle 1516.png';

const Menu: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Find Jobs' },
    { path: '/top-companies', label: 'Top Companies' },
    { path: '/job-tracker', label: 'Job Tracker' },
    { path: '/calendar', label: 'My Calendar' },
    { path: '/documents', label: 'Documents' },
    { path: '/messages', label: 'Messages' },
    { path: '/notifications', label: 'Notifications' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="menu-header">
      <div className="menu-container">
        <div className="left-section">
          <div className="logo-section">
            <img src={logoImage} alt="Logo" className="logo" />
          </div>
          <nav className="nav-links">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="right-section">
          <div className="search-bar">
            <img src={searchIcon} alt="Search" className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <button className="resume-builder-btn">Resume Builder</button>
          <div className="user-profile">
            <img src={userAvatar} alt="User Avatar" className="user-avatar" />
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>

        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <img src={logoImage} alt="Logo" className="mobile-logo" />
            <button className="close-menu" onClick={closeMobileMenu}>×</button>
          </div>
          
          <nav className="mobile-nav-links">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-search-section">
            <div className="mobile-search-bar">
              <img src={searchIcon} alt="Search" className="mobile-search-icon" />
              <input type="text" placeholder="Search" className="mobile-search-input" />
            </div>
            <button className="mobile-resume-builder-btn">Resume Builder</button>
          </div>

          <div className="mobile-user-section">
            <img src={userAvatar} alt="User Avatar" className="mobile-user-avatar" />
            <span className="mobile-user-name">Albert Flores</span>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>}
    </header>
  );
};

export default Menu;
