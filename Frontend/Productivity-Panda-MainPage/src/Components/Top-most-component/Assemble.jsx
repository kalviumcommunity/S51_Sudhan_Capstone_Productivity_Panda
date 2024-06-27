import React from 'react';
import NavBar from '../LandingPage-Component/navBar';
import GetstartedPage from '../LandingPage-Component/getstartedPage';
import AboutPage from '../LandingPage-Component/aboutPage';
import FeaturesPage from '../LandingPage-Component/FeaturesPage';
import FooterLandingPage from '../LandingPage-Component/FooterLandingPage';

function Assemble() {
  return (
    <div>
      <NavBar />
      <section id="home"><GetstartedPage /></section>
      <section id="about"><AboutPage /></section>
      <section id="features"><FeaturesPage /></section>
      <section id="contacts"><FooterLandingPage /></section>
    </div>
  );
}

export default Assemble;
