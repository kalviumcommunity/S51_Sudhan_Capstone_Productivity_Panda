import React, { useState } from 'react';
import axios from "axios";
import "../../index.css";
import { LoginSocialGoogle } from 'reactjs-social-login';
import sign_in_and_log_in_image from "../../assets/images/Sign-up and login-in image.png"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [Username, setUserName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const [UsernameError, setUserNameError] = useState("")
  const [EmailError, setEmailError] = useState("")
  const [PasswordError, setPasswordError] = useState("")
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("")

  const navigate = useNavigate()

  const handleUserNameChange = (event) => {
    const userNameValue = event.target.value;
    setUserName(event.target.value)
    const usernameRegex = /^$|^[a-zA-Z0-9._-]{4,12}$/;
    if (usernameRegex.test(userNameValue)) {
      setUserNameError("");
    } else {
      setUserNameError("Please enter a valid username")
    }
  }

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
    const passwordRegex = /^.{6,12}$/;
    if (passwordRegex.test(passwordValue)) {
      setPasswordError("");
    } else {
      setPasswordError("Please enter a valid password (at least 6 characters)")
    }
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (confirmPasswordValue !== Password) {
      setConfirmPasswordError("Confirm Password doesn't match with the password")
    } else {
      setConfirmPasswordError("");
      setConfirmPassword(confirmPasswordValue)
    }
  }

  const handleSubmit = async (event) => {
    let isError = false
    event.preventDefault();
    if (Username === '') {
      setUserNameError('Name is required');
      isError = true
    }
    if (Email === '') {
      setEmailError('Email is required');
      isError = true
    }
    if (Password === '') {
      setPasswordError('Password is required');
      isError = true
    }
    if (ConfirmPassword !== Password) {
      setConfirmPasswordError("Passwords do not match")
      isError = true
    } else if (ConfirmPassword === "") {
      setConfirmPasswordError('confirm Password is required')
      isError = true
    } if (!(isError)) {
      try {
        const response = await axios.post("http://localhost:3000/Sign-Up", { Username, Email, Password })
        const { token } = await response.data
        console.log(response)

        if (response.status === 201) {
          navigate("/MainPage")
          localStorage.setItem("TokenizedValue", token)
        } else {
          console.error("error:", response.statusText)
        }
      } catch {
        console.error("An issue is rised in the resgiration form")
      }
    }
  }

  return (
    <div className='sign-in-page white-background'>
      <div className="sign-up-container">
        <p className="sign-up-title">Welcome Maverick!</p>
        <p className='details-paragr aph-tag'>Please enter your details</p>
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
