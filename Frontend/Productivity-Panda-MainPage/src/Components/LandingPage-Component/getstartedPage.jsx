import React from 'react'
import "../CSS components/getstartedPageCSS.css"
import landingPage_GetStarted_Page_Image from "../../assets/images/Frame 1.png"

function GetstartedPage() {
  return (
    <div className='getstartedPage-alignment-css'>
        <img src={landingPage_GetStarted_Page_Image} alt="landing_page_image"/>
        <div className='Get-started-btn'>
            <button>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default GetstartedPage