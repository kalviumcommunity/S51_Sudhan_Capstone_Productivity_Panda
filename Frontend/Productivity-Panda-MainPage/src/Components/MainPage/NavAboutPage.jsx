import React from 'react';
import { Link } from "react-router-dom";

// Importing images
import Authentication_img_BG from "../../assets/images/Authentication img transparent.png";
import Trusted_and_secure_img_BG from "../../assets/images/Secure and trusted browsing transparent.png";
import Mail_img_BG from "../../assets/images/Mail img BG.png";
import calendar_img from "../../assets/images/Calendar img BG.png";
import group_img from "../../assets/images/Group img BG.png";
import extension_img from "../../assets/images/Extension img BG.png";

function NavAboutPage() {

  const scrollToGetStarted = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <>
      {/* About section */}
      <div id='About_me' className='About-page' style={{ backgroundColor: "white" }}>
        {/* Heading */}
        <p className='about-P-tag'>About me</p>
        {/* Description */}
        <p className='Description-p-tag-of-about-me'>
          "Welcome to Productive Panda, where we transform your day, one task at a time. Our platform streamlines your workflow, empowering you to achieve goals effortlessly. We prioritize seamless user experience, ensuring adaptability to your needs. From task creation to collaboration, our feature-rich app covers it all. Real-time communication keeps you connected throughout your journey. Our mission is clear: to exceed expectations and support your success.
        </p>
        <p className='Description-p-tag-of-about-me'>
          Join us at Productive Panda, where productivity meets simplicity."
        </p>
        {/* Join Now button */}
        <button className='Join-Now-btn' alt="Join Now!">
          <Link className="Linkage" to="/" onClick={scrollToGetStarted}>
            {/* Join Now text */}
            <i>J</i>
            <i>o</i>
            <i>i</i>
            <i>n</i>
            <i>&nbsp;</i>
            <i>N</i>
            <i>o</i>
            <i>w</i>
            <i>!</i>
          </Link>
        </button>
      </div>

      {/* Features section */}
      <p className='features-p-tag-of-about-me'>
        Features
      </p>

      {/* Features container 1 */}
      <div className='Features-container-1'>
        {/* Authentication feature */}
        <div className='Authetication_container'>
          <img src={Authentication_img_BG} alt="Authentication_BG" />
          <p>Integration with Third party authentication</p>
        </div>
        {/* Trusted and secure feature */}
        <div className='Reliable_Container'>
          <img src={Trusted_and_secure_img_BG} alt="Trusted_img_BG" />
          <p>Safe and Secure trusted user experience</p>
        </div>
        {/* Mail feature */}
        <div className='Mail_container'>
          <img src={Mail_img_BG} alt="Mail_img_BG" />
          <p>Sending notifications to the user's email</p>
        </div>
      </div>

      {/* Features container 2 */}
      <div className='Features-container-2'>
        {/* Calendar feature */}
        <div className='calendar_container'>
          <img src={calendar_img} alt="calendar_img" />
          <p>Adding tasks to the user's Google Calendar</p>
        </div>
        {/* Group communication feature */}
        <div className='Group-img_container'>
          <img src={group_img} alt="group_img" />
          <p>Facilitating group communication within projects for multiple users</p>
        </div>
        {/* Browser extension feature */}
        <div className='extension_container'>
          <img src={extension_img} alt="extension_img" />
          <p>Offering a browser extension for enhanced accessibility</p>
        </div>
      </div>
    </>
  );
}

export default NavAboutPage;
