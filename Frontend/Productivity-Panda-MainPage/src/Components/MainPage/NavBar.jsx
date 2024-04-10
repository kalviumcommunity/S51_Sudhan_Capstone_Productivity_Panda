import React, { useState } from 'react';
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
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
        <li>Log-in</li>
        <li>Sign-Up</li>
      </ul>
    </nav>
  );
}

export default NavBar;
