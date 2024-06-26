import React, { useState } from 'react';
import ProductivityPandaImage from '../../assets/images/logo-productivity-panda-lightMode.png';
import '../../CSS components/navBarCSS.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="NavBarContainer">
                <div className='horizontal-container'></div>
                <div className='downside-container'>
                        <img src={ProductivityPandaImage} alt="logo" />
                    <div className={`navigation-container ${isOpen ? 'open' : ''}`}>
                        <p>Home</p>
                        <p>About</p>
                        <p>Features</p>
                        <p>Contacts</p>
                    <div className='sign-up-button'>
                        <button>Sign-Up</button>
                    </div>
                    </div>
                    <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
