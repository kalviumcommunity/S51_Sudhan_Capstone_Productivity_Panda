import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/RoutesPage/Log-in'; // Ensure Login is imported
import Signup from './Components/RoutesPage/Sign-up';
import MainPage from './Components/RoutesPage/MainPage';
import { ParentComponentProvider, ParentComponent } from "./Components/ParentComponent";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Assemble from './Components/Top-most-component/Assemble';

function App() {
  const { isLoggedIn } = useContext(ParentComponent);

  return (
    <ParentComponentProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Assemble />} />
          <Route path="/Sign-Up" element={isLoggedIn ? <Navigate to="/MainPage" /> : <Signup />} />
          <Route path="/log-in" element={isLoggedIn ? <Navigate to="/MainPage" /> : <Login />} />
          <Route path="/MainPage" element={<MainPage />}/>
        </Routes>
      </Router>
    </ParentComponentProvider>
  );
}

export default App;
