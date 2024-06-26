import React from 'react'
import "../../CSS components/FooterLandingPageCSS.css"
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
                    <img src={Git_hub_image} alt="Git-hub_image" />
                </div>
                <div className='contact'>
                    <img src={LinkedIN_image} alt="LinkedIN_image" />
                </div>
                <div className='contact'>
                    <img src={Instagram_image} alt="Instagram_image" />
                </div>
                <div className='contact'>
                    <img src={thread_image} alt="thread_image" />
                </div>
            </div>
        </div>    
    </>
  )
}

export default FooterLandingPage