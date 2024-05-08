import React from 'react'; // Importing React library for building UI components
import '../../../src/index.css'; // Importing custom CSS styles
import NavBar from './NavBar'; // Importing NavBar component
import NavHomeBTN from './NavHomeBTN'; // Importing NavHomeBTN component
import NavAboutPage from './NavAboutPage'; // Importing NavAboutPage component
import TechnologiesPage from './TechnologiesPage'; // Importing TechnologiesPage component
import ContactPage from './contactPage'; // Importing ContactPage component

// Functional component for the Landing Page
function LandingPage() {
  return (
    <>
      {/* Navbar component */}
      <NavBar />
      {/* Navigation button for home */}
      <NavHomeBTN />
      {/* Navigation button for about page */}
      <NavAboutPage />
      {/* Component for displaying technologies */}
      <TechnologiesPage />
      {/* Component for displaying contact information */}
      <ContactPage />
    </>
  )
}

export default LandingPage; // Exporting the LandingPage component
