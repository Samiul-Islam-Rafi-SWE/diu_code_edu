import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={isSticky ? {
      backgroundColor: "rgba(16, 28, 50, 0.7)",
      backdropFilter: "blur(15px)",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    } : {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      boxShadow: "none"
    }}>
      <h3 className="logo-text">DIU Code Education</h3>
      
      <div className="Navigation">
        <ul id="menu-list" className={menuActive ? 'active' : ''}>
          <i className="fas fa-times" id="menu-close" onClick={toggleMenu}></i>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/tutorials" onClick={toggleMenu}>Free Tutorials</Link></li>
          <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
          <li><Link to="/registration" onClick={toggleMenu}>Registration</Link></li>
        </ul>
        <i className="fas fa-bars" id="menu-btn" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
};

export default Header;