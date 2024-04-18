// Login.jsx
import React from 'react';
import "../../index.css";
import sign_in_and_log_in_image from "../../assets/images/Sign-up and login-in image.png";

const Login = () => {
  return (
    <div className='log-in-page white-background'>
      <div className="log-in-container">
        <p className="log-in-title">Welcome Back Maverick!</p>
        <p className='details-paragraph-tag1'>Please enter your details</p>
        <form className="log-in-form">
          <label className="log-in-label" htmlFor="email">Email</label>
          <input className="log-in-input" type="email" id="email" />
          <label className="log-in-label" htmlFor="password">Password</label>
          <input className="log-in-input" type="password" id="password" />
          <button className="log-in-button" type="submit">Log in</button>
          <button className='Google-container' type="submit">Sign-in with Google</button>
          <p className='log-in-link'>Don't you have an account</p>
        </form>
      </div>
      <div className='task-management-sign-in-image'>
        <img src={sign_in_and_log_in_image} alt="TASK-MANAGEMENT-IMAGE" />
      </div>
    </div>
  );
};

export default Login;
