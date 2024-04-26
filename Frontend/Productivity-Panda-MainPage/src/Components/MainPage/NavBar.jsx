import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductivityPandaImage from '../../assets/images/logo-productivity-panda-transparent.png';

function NavBar() {
  // State to manage the menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scrolling to the top
  const scrollToGetStarted = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to handle scrolling to the about section
  const scrollToAbout = () => {
    // Define scroll behavior based on screen size
    if (window.innerWidth < 321 && window.innerHeight < 624) {
      window.scrollTo({
        top: 270,
        behavior: 'smooth'
      });
    } else if (window.innerWidth <= 426 && window.innerHeight <= 624) {
      window.scrollTo({
        top: 300,
        behavior: 'smooth'
      });
    } else if (window.innerWidth < 770 && window.innerHeight < 624) {
      window.scrollTo({
        top: 300,
        behavior: 'smooth'
      });
    } else if (window.innerWidth < 1025) {
      window.scrollTo({
        top: 300,
        behavior: 'smooth'
      });
    } else if (window.innerHeight < 1440) {
      window.scrollTo({
        top: window.innerHeight * 1.05,
        behavior: 'smooth'
      });
    }
  };

  // Function to handle scrolling to the features section
  const scrollToFeatures = () => {
    // Define scroll behavior based on screen size
    if (window.innerWidth < 321 && window.innerHeight < 624) {
      window.scrollTo({
        top: window.innerHeight * 0.43,
        behavior: 'smooth'
      });
    } else if (window.innerWidth < 426 && window.innerHeight < 624) {
      window.scrollTo({
        top: window.innerHeight * 0.45,
        behavior: 'smooth'
      });
    } else if (window.innerWidth < 768 && window.innerHeight < 624) {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: 'smooth'
      });
    } else if (window.innerWidth < 1025) {
      window.scrollTo({
        top: window.innerHeight * 2.7,
        behavior: 'smooth'
      });
    } else if (window.innerHeight < 1440) {
      window.scrollTo({
        top: window.innerHeight * 2.7,
        behavior: 'smooth'
      });
    }
  };

  // Function to handle scrolling to the contact section
  const scrollToContact = () => {
    // Define scroll behavior based on screen size
    if (window.innerWidth < 321 && window.innerHeight < 624) {
      window.scrollTo({
        top: window.innerHeight * 3,
        behavior: 'smooth'
      });
    } else if (window.innerWidth < 426 && window.innerHeight < 624) {
      window.scrollTo({
        top: window.innerHeight * 3,
        behavior: 'smooth'
      });
    } else if (window.innerWidth < 768 && window.innerHeight < 624) {
      window.scrollTo({
        top: window.innerHeight * 3,
        behavior: 'smooth'
      });
    } else if (window.innerWidth < 1025) {
      window.scrollTo({
        top: window.innerHeight * 3.2,
        behavior: 'smooth'
      });
    } else if (window.innerHeight < 1440) {
      window.scrollTo({
        top: window.innerHeight * 3.2,
        behavior: 'smooth'
      });
    }
  };

  return (
    // Navbar container
    <nav className={`NavBarContainer ${isMenuOpen ? 'CrossSymbol' : 'open'}`}>
      {/* Productivity Panda logo */}
      <div className='ProductivityPandaImage'>
        <img src={ProductivityPandaImage} alt="Logo" />
      </div>
      {/* Hamburger menu icon */}
      <div className="HamburgerMenu" onClick={toggleMenu}>
        <div className={`HamburgerLine ${isMenuOpen ? 'line1' : ''}`}></div>
        <div className={`HamburgerLine ${isMenuOpen ? 'line2' : ''}`}></div>
        <div className={`HamburgerLine ${isMenuOpen ? 'line3' : ''}`}></div>
      </div>
      {/* Navigation links */}
      <ul className={`${isMenuOpen ? 'open' : ''}`}>
        <li><Link className='Linkage' to="/" onClick={scrollToGetStarted}>Home</Link></li>
        <li><Link className='Linkage' to="/" onClick={scrollToAbout}>About</Link></li>
        <li><Link className='Linkage' to="/" onClick={scrollToFeatures}>Features</Link></li>
        <li><Link className='Linkage' to="/" onClick={scrollToContact}>Contact</Link></li>
        <li><Link className='Linkage' to='/log-in'>Log-in</Link></li>
        <li><Link className='Linkage' to='/Sign-Up'>Sign-Up</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
