import React from 'react'
import linkedIN from "../../assets/images/linkedIN.png"
import instagram_icon from "../../assets/images/instagram icon.png"
function ContactPage() {
  return (
    <>
    <div className='footer-container'>
        <div className="first-line-divs">
    <div className='mail_information'>
        <p className='heading-red'>Email Address:</p>
        <p>sudhanssudhan83@gmail.com</p>
    </div>
    <div className='Additional-link_container'>
        <p className='heading-red'>Additional Links:</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>FAQ</p>
    </div>
    <div className='Quick-link_container'>
        <p className='heading-red'>Quick Links:</p>
        <p>Home</p>
        <p>About</p>
        <p>Features</p>
    </div>
    <div className='newsletter_container'>
        <p className='newsletter-container'>Newsletter Signup:</p>
        <div className='input-field-container-for-newsletter-signup'>
        <input type="text" placeholder='Enter you email'/>
        <button>Subscribe</button>
        </div>
        <p className='about-newsletter-container'>"Get the latest updates and exclusive offers by subscribing to our newsletter! Enter your email above and hit subscribe. We respect your privacy and promise not to spam. <pre>Join us now!"</pre>
</p>
    </div>
    </div>
    <div className='social-media-container'>
        <p className="heading-red">Social Media Links:</p>
        <div className='social-media-icon-container'>
        <img src={linkedIN} alt="linkedIN_icon" />
        <img src={instagram_icon} alt="instagram_icon" />
        </div>
    </div>
    <div className='copyright_container'>
        <p className="heading-red">Copyright Information:</p>
        <p>Copyright © 2024 Productivity Panda</p>
    </div>
    </div>
    </>
  )
}

export default ContactPage