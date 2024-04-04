import React from 'react'
import '../../../src/index.css';
import NavBar from './NavBar';
import NavHomeBTN from './NavHomeBTN';
import NavAboutPage from './NavAboutPage';

function LandingPage() {
  return (
    <>
     <NavBar/>
    <NavHomeBTN/>
    <NavAboutPage/>
    </>
  )
}

export default LandingPage