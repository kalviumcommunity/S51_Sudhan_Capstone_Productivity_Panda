import React, { useState } from 'react';
import RisingUpArrow from "../../assets/images/Rising-up-arrow-BG.png";
import {Link} from "react-router-dom";

function NavHomeBTN() {
  return (
    <>
      <div className='Overall-div-of-get-started-page'>
        <img src={RisingUpArrow} alt="risingUpArrow" />
        <div className='Slogan-and-tagline-of-get-started-page'>
          <p className='slogan-para'>Stay-Focused</p>
          <p className='slogan-para'>Stay-Productive with</p>
          <p className='slogan-para'>Productivity Panda</p>
          <p className='tagline-of-the-landing-page'>Transform Your Day, Boost Your Productivity, One Task at a Time: Productive Panda</p>
        </div>
        <button className="get-started-btn"><Link className= "Linkage" to="/Sign-Up">Get Started</Link></button>
      </div>
    </>
  );
}

export default NavHomeBTN;