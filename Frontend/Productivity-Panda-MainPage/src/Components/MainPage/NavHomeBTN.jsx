import React from 'react'; // Importing React library for building UI components
import RisingUpArrow from "../../assets/images/Rising-up-arrow-BG.png"; // Importing Rising Up Arrow image
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation

// Functional component for the Home Button in the Navigation Bar
function NavHomeBTN() {
  return (
    <>
      {/* Overall div of the get started page */}
      <div className='Overall-div-of-get-started-page'>
        {/* Rising Up Arrow image */}
        <img src={RisingUpArrow} alt="risingUpArrow" />
        {/* Slogan and tagline of the get started page */}
        <div className='Slogan-and-tagline-of-get-started-page'>
          <p className='slogan-para'>Stay-Focused</p>
          <p className='slogan-para'>Stay-Productive with</p>
          <p className='slogan-para'>Productivity Panda</p>
          <p className='tagline-of-the-landing-page'>Transform Your Day, Boost Your Productivity, One Task at a Time: Productive Panda</p>
        </div>
        {/* Button to get started */}
        <button className="get-started-btn"><Link className= "Linkage" to="/Sign-Up">Get Started</Link></button>
      </div>
    </>
  );
}

export default NavHomeBTN; // Exporting the NavHomeBTN component
