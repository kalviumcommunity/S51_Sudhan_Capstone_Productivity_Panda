import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductivityPandaImage from '../../assets/images/logo-productivity-panda-transparent.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scrolling to about section

  const scrollToGetStarted = () => {
    window.scrollTo({
      top: 0, // Scroll 100 screen heights down
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };
  const scrollToAbout = () => {
    if(window.innerWidth < 321 && window.innerHeight < 624){
      window.scrollTo({
        top:window.innerHeight * 0.43,
        behavior: 'smooth'
      })
     }
    else if(window.innerWidth < 426 && window.innerHeight < 624){
      window.scrollTo({
        top:window.innerHeight * 0.3,
        behavior: 'smooth'
      })
     }
    else if(window.innerWidth < 769 && window.innerHeight < 624){
     window.scrollTo({
       top:window.innerHeight * 1,
       behavior: 'smooth'
     })
    }
   else if(window.innerWidth < 1025){
    window.scrollTo({
      top:window.innerHeight * 1.2,
      behavior: 'smooth'
    })
   } 
   else if(window.innerHeight < 1440){
    window.scrollTo({
      top:window.innerHeight * 1.05,
      behavior: 'smooth'
    })
   }
  };

  const scrollToFeatures = () => {
    if(window.innerWidth < 321 && window.innerHeight < 624){
      window.scrollTo({
        top:window.innerHeight * 0.43,
        behavior: 'smooth'
      })
     }
    else if(window.innerWidth < 426 && window.innerHeight < 624){
      window.scrollTo({
        top:window.innerHeight * 0.45,
        behavior: 'smooth'
      })
     }
    else if(window.innerWidth < 768 && window.innerHeight < 624){
     window.scrollTo({
       top:window.innerHeight * 3,
       behavior: 'smooth'
     })
    }
   else if(window.innerWidth < 1025){
    window.scrollTo({
      top:window.innerHeight * 1.62,
      behavior: 'smooth'
    })
   } 
   else if(window.innerHeight < 1440){
    window.scrollTo({
      top:window.innerHeight * 2.7,
      behavior: 'smooth'
    })
   }
  }

  const scrollToContact = () => {
    if(window.innerWidth < 1025){
      window.scrollTo({
        top:window.innerHeight * 3.1,
        behavior: 'smooth'
      })
     }
  }


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
        <li><Link className= 'Linkage' to="/"onClick={scrollToGetStarted}>Home</Link></li>
        <li><Link className= 'Linkage' to="/" onClick={scrollToAbout}>About</Link></li>
        <li><Link className= 'Linkage' to="/" onClick={scrollToFeatures}>Features</Link></li>
        <li><Link className= 'Linkage' to="/" onClick={scrollToContact}>Contact</Link></li>
        <li><Link className='Linkage' to='/log-in'>Log-in</Link></li>
        <li><Link className='Linkage' to='/Sign-Up'>Sign-Up</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
