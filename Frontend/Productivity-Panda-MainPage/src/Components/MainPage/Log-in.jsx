import React, { useState } from 'react';
import "../../index.css";
import { LoginSocialGoogle } from "reactjs-social-login";
import sign_in_and_log_in_image from "../../assets/images/Sign-up and login-in image.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue)
    const emailRegex = /^$|^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      setEmailError("")
    } else {
      setEmailError("Please enter a valid email")
    }
  }

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    const passwordRegex = /^\d{0,6}$/;
    if (passwordRegex.test(passwordValue)) {
      setPasswordError("");
    } else {
      setPasswordError("Please enter a valid password (at least 6 characters)")
    }
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    let isError = false;
    event.preventDefault();
    if (Email === "") {
      setEmailError("Email is required");
      isError = true;
    }
    if (Password === "") {
      isError = true;
      setPasswordError("Password is required");
    }
    if(!(isError)){
      navigate("/MainPage")
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
          <button className='Google-container' type="button">
            <LoginSocialGoogle
              client_id='763400746152-usfqfej22honfo6vfi7gv957egp3pfgj.apps.googleusercontent.com'
              access_type='offline'
              onResolve={({ provider, data }) => {
                console.log(provider, data)
                navigate("/MainPage");
              }}
              onReject={(error) => {
                console.log(error)
              }}>
              Sign-in with Google
            </LoginSocialGoogle>
          </button>
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
