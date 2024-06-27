import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; // Importing Link from react-router-dom as RouterLink

import ProductivityPandaImage from '../../assets/images/logo-productivity-panda-lightMode.png';
import '../CSS components/navBarCSS.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="NavBarContainer">
      <div className='horizontal-container'></div>
      <div className='downside-container'>
        <img src={ProductivityPandaImage} alt="logo" />
        <div className={`navigation-container ${isOpen ? 'open' : ''}`}>
          {/* Scroll links for smooth scrolling within the same page */}
          <ScrollLink to="home" smooth={true} duration={1000}><p>Home</p></ScrollLink>
          <ScrollLink to="about" smooth={true} duration={1000}><p>About</p></ScrollLink>
          <ScrollLink to="features" smooth={true} duration={1000}><p>Features</p></ScrollLink>
          <ScrollLink to="contacts" smooth={true} duration={1000}><p>Contacts</p></ScrollLink>
          
          {/* Router link for navigation to different routes/pages */}
          <div className='Sign-up-button'>
            <RouterLink to="/Sign-Up"><button>Sign-Up</button></RouterLink>
          </div>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
