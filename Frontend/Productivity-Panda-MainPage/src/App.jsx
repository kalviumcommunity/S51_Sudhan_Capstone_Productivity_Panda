// App.jsx
import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../src/Components/MainPage/LandingPage';
import NavAboutPage from '../src/Components/MainPage/NavAboutPage';
import ContactPage from '../src/Components/MainPage/contactPage';
import Login from '../src/Components/MainPage/Log-in';
import Signup from '../src/Components/MainPage/Sign-up';
import TechnologiesPage from '../src/Components/MainPage/TechnologiesPage';
import MainPage from '../src/Components/MainPage/MainPage';
import { ParentComponentProvider, ParentComponent } from "./Components/ParentComponent"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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

  const { isLoggedIn } = useContext(ParentComponent);
  return (
    <>
      <Router>
        <ParentComponentProvider>
          <ToastContainer/>
          <Routes>
            <Route path="/" element={<LandingPage />} />


            {/* comment this until project gets over */}
            {/* <Route path="#About_me" element={<NavAboutPage />} />
            <Route path="#Technology_Page" element={<TechnologiesPage />} />
            <Route path="#Contact_page" element={<ContactPage />} /> */}

            
            <Route path="/log-in" element={isLoggedIn ? <Navigate to="/MainPage" /> : <Login />} />
            <Route path="/Sign-Up" element={isLoggedIn ? <Navigate to="/MainPage" /> : <Signup />} />
            <Route path='/MainPage' element={<MainPage />}></Route>
          </Routes>
        </ParentComponentProvider>
      </Router>
    </>
  );
}

export default App;
