import React from 'react'
import Authentication_img_BG from "../../assets/images/Authentication img transparent.png"
import Trusted_and_secure_img_BG from "../../assets/images/Secure and trusted browsing transparent.png"
import Mail_img_BG from "../../assets/images/Mail img BG.png";
import calendar_img from "../../assets/images/Calendar img BG.png"
import group_img from "../../assets/images/Group img BG.png"
import extension_img from "../../assets/images/Extension img BG.png"

function NavAboutPage() {
  return (
    <>
    <div id='About_me' className='About-page' style={{backgroundColor: "white"}}>
        <p className='about-P-tag'>About me</p>
        <p className='Description-p-tag-of-about-me'> 
        "Welcome to Productive Panda, where we transform your day, one task at a time. Our platform streamlines your workflow, empowering you to achieve goals effortlessly. We prioritize seamless user experience, ensuring adaptability to your needs. From task creation to collaboration, our feature-rich app covers it all.
        Real-time communication keeps you connected throughout your journey. Our mission is clear: to exceed expectations and support your success.
        </p>
        <p className='Description-p-tag-of-about-me'>
          Join us at Productive Panda, where productivity meets simplicity."
        </p>
        <button className='Join-Now-btn' alt="Join Now!">
        <i>J</i>
        <i>o</i>
        <i>i</i>
        <i>n</i>
        <i>&nbsp;</i>
        <i>N</i>
        <i>o</i>
        <i>w</i>
        <i>!</i>
  </button>
      <p className='features-p-tag-of-about-me'>
        Features
        </p>
        <div className='Features-container-1'>
          <div className='Authetication_container'>
            <img src={Authentication_img_BG} alt="Authentication_BG" />
            <p>Integration with Third party authentication</p>
          </div>
          <div className='Reliable_Container'>
            <img src={Trusted_and_secure_img_BG} alt="Trusted_img_BG" />
            <p>Safe and Secure trusted user experience</p>
          </div>
          <div className='Mail_container'>
            <img src={Mail_img_BG} alt="Mail_img_BG" />
            <p>Sending notifications to the user's email</p>
          </div>
          </div>
          <div className='Features-container-2'>
            <div className='calendar_container'>
              <img src={calendar_img} alt="calendar_img" />
              <p>Adding tasks to the user's Google Calendar</p>
            </div>
            <div className='Group-img_container'>
              <img src={group_img} alt="group_img" />
              <p>Facilitating group communication within projects for multiple users</p>
            </div>
            <div className='extension_container'>
              <img src={extension_img} alt="extension_img" />
              <p>Offering a browser extension for enhanced accessibility</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default NavAboutPage