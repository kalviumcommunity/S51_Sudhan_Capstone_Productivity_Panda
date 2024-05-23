import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import "../../index.css";
import {jwtDecode} from "jwt-decode"; // Corrected import
import sign_in_and_log_in_image from "../../assets/images/Sign-up and login-in image.png"
import { useNavigate } from 'react-router-dom';
import {ParentComponent} from "../ParentComponent"

const SignUp = () => {
  // State variables to manage username, email, password, and their respective errors
  const [Username, setUserName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [userLogin, setUserLogin] = useState({})
  const {setIsLoggedIn} = useContext(ParentComponent)

  const [UsernameError, setUserNameError] = useState("")
  const [EmailError, setEmailError] = useState("")
  const [PasswordError, setPasswordError] = useState("")
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("")

  // Hook from react-router-dom to navigate between pages
  const navigate = useNavigate()

  // Function to handle changes in the username input field
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
    const passwordRegex = /^.{6,12}$/;
    if (passwordRegex.test(passwordValue)) {
      setPasswordError("");
    } else {
      setPasswordError("Please enter a valid password (at least 6 characters)")
    }
  }

  // Function to handle changes in the confirm password input field
  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (confirmPasswordValue !== Password) {
      setConfirmPasswordError("Confirm Password doesn't match with the password")
    } else {
      setConfirmPasswordError("");
    }
  }

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    let isError = false;

    // Check if any field is empty
    if (!Username) {
      setUserNameError('Name is required');
      isError = true;
    }
    if (!Email) {
      setEmailError('Email is required');
      isError = true;
    }
    if (!Password) {
      setPasswordError('Password is required');
      isError = true;
    }
    if (!ConfirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      isError = true;
    } else if (ConfirmPassword !== Password) {
      setConfirmPasswordError("Passwords do not match");
      isError = true;
    }

    // If no error, proceed with form submission
    if (!isError) {
      try {
        const response = await axios.post("http://localhost:8000/Sign-Up", { Username, Email, Password });
        const { token } = response.data;

        if (response.status === 201) {
          // If successful, navigate to MainPage and store token in localStorage
          navigate("/MainPage");
          localStorage.setItem("TokenizedValue", token);
          setIsLoggedIn(true)
          console.log("UserName: ", Username);
    console.log("Email: ", Email);
    console.log("Password: ", Password);
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("An issue occurred during registration:", error);
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
        const response = await axios.post("http://localhost:8000/GoogleSignupRoutes", {
          name: userLogin.given_name,
          email: userLogin.email,
          profile: userLogin.picture,
        });
        localStorage.setItem("Profile", userLogin.picture)
        navigate("/MainPage")
        setIsLoggedIn(true)
        console.log("Google sign-in response:", response.data);
      } catch (error) {
        console.error("Error in the google sign-in:", error);
      }
    };
  
    if (userLogin.given_name && userLogin.email && userLogin.picture) {
      sendGoogleSignInData();
    }
  }, [userLogin]);

  // JSX code for the sign-up form
  return (
    <div className='sign-in-page white-background'>
      <div className="sign-up-container">
        <p className="sign-up-title">Welcome Maverick!</p>
        <p className='details-paragraph-tag'>Please enter your details</p>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          {/* Username input */}
          <label className="sign-up-label" htmlFor="Username">Username</label>
          <input className="sign-up-input" type="text" id="name" value={Username} onChange={handleUserNameChange} />
          {UsernameError && <p className="error-message">{UsernameError}</p>}

          {/* Email input */}
          <label className="sign-up-label" htmlFor="Email">Email</label>
          <input className="sign-up-input" type="email" id="email" value={Email} onChange={handleEmailChange} />
          {EmailError && <p className="error-message">{EmailError}</p>}

          {/* Password input */}
          <label className="sign-up-label" htmlFor="Password">Password</label>
          <input className="sign-up-input" type="password" id="password" value={Password} onChange={handlePasswordChange} />
          {PasswordError && <p className="error-message">{PasswordError}</p>}

          {/* Confirm Password input */}
          <label className="sign-up-label" htmlFor="ConfirmPassword">Confirm Password</label>
          <input className="sign-up-input" type="password" id="ConfirmPassword" value={ConfirmPassword} onChange={handleConfirmPasswordChange} />
          {ConfirmPasswordError && <p className="error-message">{ConfirmPasswordError}</p>}

          {/* Sign Up button */}
          <button className="sign-up-button" type="submit">Sign Up</button>

          <button id="Google-container" className='Google-container' type="button" style={{ border: "none", display: "flex", justifyContent: "center", alignItems: "center", background: "white", marginTop: "2%", marginBottom: "2%" }}></button>

          {/* Link to Log-in page */}
          <p className='sign-in-link'>Already have an account?<a href="/log-in">Log-in here</a></p>
        </form>
      </div>
      {/* Image */}
      {/* {userLogin && <div><img src={userLogin.picture} style={{borderRadius:"50px", height:"40%", width:"40%"}}/></div>} */}
      <div className='task-management-sign-in-image'>
        <img src={sign_in_and_log_in_image} alt="TASK-MANAGEMENT-IMAGE" />
      </div>
    </div>
  );
}

export default SignUp;
