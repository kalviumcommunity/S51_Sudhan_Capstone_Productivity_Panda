// App.jsx
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/Components/MainPage/LandingPage';
import NavAboutPage from '../src/Components/MainPage/NavAboutPage';
import ContactPage from '../src/Components/MainPage/contactPage';
import Login from '../src/Components/MainPage/Log-in';
import Signup from '../src/Components/MainPage/Sign-up';
import TechnologiesPage from '../src/Components/MainPage/TechnologiesPage';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("hwllo")
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout);
  });

  if (!loaded) {
    return (
      <div className="gearbox" style={{ backgroundColor: "black" }}>
        <div className="overlay"></div>
        <div className="gear one">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gear two">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gear three">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gear four large">
          <div className="gear-inner">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="#About_me" element={<NavAboutPage />} />
          <Route path="#Technology_Page" element={<TechnologiesPage />} />
          <Route path="#Contact_page" element={<ContactPage />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/Sign-Up" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
