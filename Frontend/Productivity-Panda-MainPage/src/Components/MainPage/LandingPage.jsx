import React from 'react'
import '../../../src/index.css';
import NavBar from './NavBar';
import NavHomeBTN from './NavHomeBTN';
import NavAboutPage from './NavAboutPage';
import TechnologiesPage from './TechnologiesPage';
import ContactPage from './contactPage';

function LandingPage() {
  return (
    <>
     <NavBar/>
    <NavHomeBTN/>
    <NavAboutPage/>
    <TechnologiesPage/>
    <ContactPage/>
    </>
  )
}

export default LandingPage