import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductivityPandaImage from '../../assets/images/logo-productivity-panda-transparent.png';


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`NavBarContainer ${isMenuOpen ? 'CrossSymbol' : 'open'}`}>
      <div className='ProductivityPandaImage'>
        <img src={ProductivityPandaImage} alt="Logo" />
      </div>
      <div className="HamburgerMenu" onClick={toggleMenu}>
        <div className={`HamburgerLine ${isMenuOpen ? 'line1' : ''}`}></div>
        <div className={`HamburgerLine ${isMenuOpen ? 'line2' : ''}`}></div>
        <div className={`HamburgerLine ${isMenuOpen ? 'line3' : ''}`}></div>
      </div>
      <ul className={`${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/technologies">Features</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>Log-in</li>
        <li>Sign-Up</li>
      </ul>
    </nav>
  );
}

export default NavBar;
