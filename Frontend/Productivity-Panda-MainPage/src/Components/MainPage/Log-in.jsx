import React, { useState } from 'react';
import "../../index.css";
import sign_in_and_log_in_image from "../../assets/images/Sign-up and login-in image.png";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const emailRegex = /^$|^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{,2}$/;
    if (emailRegex.test(emailValue)) {
      setEmail(emailValue);
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email");
    }
  }

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    const passwordRegex = /^\d{,6}$/;
    if (passwordRegex.test(passwordValue)) {
      setPassword(passwordValue);
      setPasswordError("");
    } else {
      setPasswordError("Please enter a valid password (at least 6 characters)");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Email === "") {
      setEmailError("Email is required");
    }
    if (Password === "") {
      setPasswordError("Password is required");
    }
  }

  return (
    <div className='log-in-page white-background'>
      <div className="log-in-container">
        <p className="log-in-title">Welcome Back Maverick!</p>
        <p className='details-paragraph-tag1'>Please enter your details</p>
        <form className="log-in-form" onSubmit={handleSubmit}>
          <label className="log-in-label" htmlFor="email">Email</label>
          <input className="log-in-input" type="email" id="email" value={Email} onChange={handleEmailChange} placeholder='Enter your email' />
          {EmailError && <p className="error-message">{EmailError}</p>}

          <label className="log-in-label" htmlFor="password">Password</label>
          <input className="log-in-input" type="password" id="password" value={Password} onChange={handlePasswordChange} placeholder='Enter your password' />
          {PasswordError && <p className="error-message">{PasswordError}</p>}

          <button className="log-in-button" type="submit">Log in</button>
          <button className='Google-container' type="button">Sign-in with Google</button>
          <p className='log-in-link'>Don't you have an account? <a href="/Sign-Up">Sign up here</a></p>
        </form>
      </div>
      <div className='task-management-sign-in-image'>
        <img src={sign_in_and_log_in_image} alt="TASK-MANAGEMENT-IMAGE" />
      </div>
    </div>
  );
};

export default Login;
