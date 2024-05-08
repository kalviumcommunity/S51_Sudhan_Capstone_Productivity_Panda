import React from 'react'; // Importing React library for building UI components
import linkedIN from "../../assets/images/linkedIN.png"; // Importing linkedIN image asset
import instagram_icon from "../../assets/images/instagram icon.png"; // Importing Instagram icon image asset

// Functional component for the Contact Page
function ContactPage() {
    return (
        <>
            <div id='Contact_page' className='footer-container'>
                {/* Div containing information and links */}
                <div className="first-line-divs">
                    {/* Email information */}
                    <div className='mail_information'>
                        <p className='heading-red'>Email Address:</p>
                        <p>sudhanssudhan83@gmail.com</p>
                    </div>
                    {/* Additional links */}
                    <div className='Additional-link_container'>
                        <p className='heading-red'>Additional Links:</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>FAQ</p>
                    </div>
                    {/* Quick links */}
                    <div className='Quick-link_container'>
                        <p className='heading-red'>Quick Links:</p>
                        <p>Home</p>
                        <p>About</p>
                        <p>Features</p>
                    </div>
                    {/* Newsletter signup */}
                    <div className='newsletter_container'>
                        <p className='newsletter-container'>Newsletter Signup:</p>
                        <div className='input-field-container-for-newsletter-signup'>
                            <input type="text" placeholder='Enter you email' />
                            <button>Subscribe</button>
                        </div>
                        {/* Information about newsletter */}
                        <p className='about-newsletter-container'>"Get the latest updates and exclusive offers by subscribing to our newsletter! Enter your email above and hit subscribe. We respect your privacy and promise not to spam. <pre>Join us now!"</pre>
                        </p>
                    </div>
                </div>
                {/* Social media links */}
                <div className='social-media-container'>
                    <p className="heading-red">Social Media Links:</p>
                    <div className='social-media-icon-container'>
                        <img src={linkedIN} alt="linkedIN_icon" />
                        <img src={instagram_icon} alt="instagram_icon" />
                    </div>
                </div>
                {/* Copyright information */}
                <div className='copyright_container'>
                    <p className="heading-red">Copyright Information:</p>
                    <p>Copyright © 2024 Productivity Panda</p>
                </div>
            </div>
        </>
    )
}

export default ContactPage; // Exporting the ContactPage component
