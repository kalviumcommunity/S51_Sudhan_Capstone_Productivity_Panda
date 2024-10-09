import React from 'react'
import "../CSS components/FooterLandingPageCSS.css"
import Footer_Image from "../../assets/images/Footer.png"
import Git_hub_image from "../../assets/images/Github-Black.png"
import LinkedIN_image from "../../assets/images/Linkedin-Black.png"
import Instagram_image from "../../assets/images/Instagram-Black.png"
import thread_image from "../../assets/images/Treads-Black.png"


function FooterLandingPage() {
  return (
    <>
        <div className='Footer_Container'>
            <img src={Footer_Image} alt="Footer_Image" />
            <div className='contact_list_container'>
                <div className='contact'>
                    <a href="https://github.com/Sudhan1112" target='_blank'><img src={Git_hub_image} alt="Git-hub_image" /></a>
                </div>
                <div className='contact'>
                <a href="https://www.linkedin.com/feed/" target="_blank"><img src={LinkedIN_image} alt="LinkedIN_image" /></a>
                </div>
                <div className='contact'>
                <a href="https://www.instagram.com/_.alone____lover._/" target="_blank"><img src={Instagram_image} alt="Instagram_image" /></a>
                </div>
                <div className='contact'>
                    <a href="https://www.threads.net/@_.alone____lover._?xmt=AQGz5x_cVflAHaWt5jDMRp3ZyHw0ScvNjtqdgqUOmlslEKI" target='_blank'><img src={thread_image} alt="thread_image" /></a>
                </div>
            </div>
        </div>    
    </>
  )
}

export default FooterLandingPage