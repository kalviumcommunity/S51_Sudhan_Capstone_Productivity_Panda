import React, { useState } from 'react';
import "../../index.css";
import sign_in_and_log_in_image from "../../assets/images/Sign-up and login-in image.png"

const SignUp = () => {
  const [Username, setUserName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const [UsernameError, setUserNameError] = useState("")
  const [EmailError, setEmailError] = useState("")
  const [PasswordError, setPasswordError] = useState("")
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("")

  const handleUserNameChange = (event) => {
    const userNameValue = event.target.value;
    const usernameRegex = /^$|^[a-zA-Z0-9._-]{0,12}$/;
    if (usernameRegex.test(userNameValue)) {
      setUserName(event.target.value)
      setUserNameError("");
    } else {
      setUserNameError("Please enter a valid username")
    }
  }

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const emailRegex = /^$|^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      setEmail(emailValue)
      setEmailError("")
    } else {
      setEmailError("Please enter a valid email")
    }
  }

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    const passwordRegex = /^\d{6,}$/;
    if (passwordRegex.test(passwordValue)) {
      setPassword(passwordValue);
      setPasswordError("");
    } else {
      setPasswordError("Please enter a valid password (at least 6 characters)")
    }
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    if (confirmPasswordValue !== Password) {
      setConfirmPasswordError("Confirm Password doesn't match with the password")
    } else {
      setConfirmPasswordError("");
      setConfirmPassword(confirmPasswordValue)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Username === '') {
      setUserNameError('Name is required');
    }
    if (Email === '') {
      setEmailError('Email is required');
    }
    if (Password === '') {
      setPasswordError('Password is required');
    }
    if (ConfirmPassword !== Password) {
      setConfirmPasswordError("Passwords do not match")
    } else if (ConfirmPassword === "") {
      setConfirmPasswordError('confirm Password is required')
    }
  }

  return (
    <div className='sign-in-page white-background'>
      <div className="sign-up-container">
        <p className="sign-up-title">Welcome Maverick!</p>
        <p className='details-paragraph-tag'>Please enter your details</p>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label className="sign-up-label" htmlFor="Username">Username</label>
          <input className="sign-up-input" type="text" id="name" value={Username} onChange={handleUserNameChange} />
          {UsernameError && <p className="error-message">{UsernameError}</p>}
          <label className="sign-up-label" htmlFor="Email">Email</label>
          <input className="sign-up-input" type="email" id="email" value={Email} onChange={handleEmailChange} />
          {EmailError && <p className="error-message">{EmailError}</p>}
          <label className="sign-up-label" htmlFor="Password">Password</label>
          <input className="sign-up-input" type="password" id="password" value={Password} onChange={handlePasswordChange} />
          {PasswordError && <p className="error-message">{PasswordError}</p>}
          <label className="sign-up-label" htmlFor="ConfirmPassword">Confirm Password</label>
          <input className="sign-up-input" type="password" id="ConfirmPassword" value={ConfirmPassword} onChange={handleConfirmPasswordChange} />
          {ConfirmPasswordError && <p className="error-message">{ConfirmPasswordError}</p>}
          <button className="sign-up-button" type="submit">Sign Up</button>
          <button className='Google-container' type="submit">Sign-in with Google</button>
          <p className='sign-in-link'>Already have an account?<a href="/log-in">Log-in here</a></p>
        </form>
      </div>
      <div className='task-management-sign-in-image'>
        <img src={sign_in_and_log_in_image} alt="TASK-MANAGEMENT-IMAGE" />
      </div>
    </div>
  );

};

export default SignUp;
