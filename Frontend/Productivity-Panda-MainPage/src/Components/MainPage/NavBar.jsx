import React from 'react';
import ProductivityPandaImage from '../../assets/images/logo-productivity-panda-transparent.png';

function NavBar() {
  return (
    <>
    <nav className='NavBarContainer'>
      <div className='ProductivityPandaImage'><img src={ProductivityPandaImage} alt="Logo" /></div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
        <li>Log-in</li>
        <li>Sign-Up</li>
      </ul>
    </nav>
    </>
  )
}

export default NavBar;