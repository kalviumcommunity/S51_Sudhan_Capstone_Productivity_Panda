import React from 'react'
import NavBar from '../Components/LandingPage-Component/navBar'
import GetstartedPage from '../Components/LandingPage-Component/getstartedPage'
import AboutPage from '../Components/LandingPage-Component/aboutPage'
import FeaturesPage from '../Components/LandingPage-Component/FeaturesPage'
import FooterLandingPage from '../Components/LandingPage-Component/FooterLandingPage'

function Assemble() {
  return (
    <>
      <NavBar />
      <GetstartedPage />
      <AboutPage/>
      <FeaturesPage/>
      <FooterLandingPage/>
    </>
  )
}

export default Assemble