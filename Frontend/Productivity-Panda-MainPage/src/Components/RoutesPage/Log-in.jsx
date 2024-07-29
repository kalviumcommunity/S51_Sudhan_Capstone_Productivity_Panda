import React, { useState, useEffect, useContext } from 'react'; // Import useEffect
import "../../index.css";
import sign_in_and_log_in_image from "../../assets/images/Sign-up and login-in image.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { ParentComponent } from "../ParentComponent"
import "../CSS components/Log-inCSS.css"

const Login = () => {
  // State variables to manage email, password, and their respective errors
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [userLogin, setUserLogin] = useState({})
  const { setIsLoggedIn } = useContext(ParentComponent)
  // Hook from react-router-dom to navigate between pages
  const navigate = useNavigate();

  // Function to handle changes in the email input field
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

  // Function to handle changes in the password input field
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

  // Function to handle form submission
  const handleSubmit = async (event) => {
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
    if (!(isError)) {
      try {
        const response = await axios.post("https://s51-sudhan-capstone-productivity-panda-5.onrender.com/log-in", { Email, Password })
        const { token } = await response.data
        console.log(response)

        if (response.status == 200) {
          localStorage.setItem("TokenizedValue", token)
          if(token){
            navigate("/MainPage");
            setIsLoggedIn(true)
          }
        } else {
          console.error("error:", response.statusText)
        }
      } catch {
        console.error("An issue is raised in the log-in")
      }
    }
  }

  function handleCallBackResponseOfGoogleButton(response) {
    let decoded_Credential = jwtDecode(response.credential);
    console.log(decoded_Credential)
    setUserLogin(decoded_Credential)
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "763400746152-usfqfej22honfo6vfi7gv957egp3pfgj.apps.googleusercontent.com",
      callback: handleCallBackResponseOfGoogleButton
    })

    google.accounts.id.renderButton(
      document.getElementById("Google-container"),
      {
        theme: "Outline",
        size: "xx-larger"
      }
    )
  }, [])

  useEffect(() => {
    const sendGoogleSignInData = async () => {
      try {
        const response = await axios.post("https://s51-sudhan-capstone-productivity-panda-5.onrender.com/GoogleSignupRoutes", {
          name: userLogin.given_name,
          email: userLogin.email,
        });
        const { token } = await response.data
        localStorage.setItem("TokenizedValue", token)
        if(token){
          navigate("/MainPage");
          setIsLoggedIn(true)
        }
        console.log("Google sign-in response:", response.data);
      } catch (error) {
        console.error("Error in the google sign-in:", error);
      }
    };

    if (userLogin.given_name && userLogin.email) {
      sendGoogleSignInData();
    }
  }, [userLogin]);

  // JSX code for the login form
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

          <button id="Google-container" className='Google-container' type="button" style={{ border: "none", display: "flex", justifyContent: "center", alignItems: "center", background: "white", marginTop: "2%", marginBottom: "2%" }}></button>
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