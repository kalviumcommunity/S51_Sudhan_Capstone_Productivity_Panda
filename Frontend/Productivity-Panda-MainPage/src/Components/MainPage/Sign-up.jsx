import React from 'react';
import "../../index.css";
import sign_in_and_log_in_image from "../../assets/images/Sign-up and login-in image.png"

const SignUp = () => {
  return (
    <div className='sign-in-page'>
    <div className="sign-up-container">
      <p className="sign-up-title">Welcome Maverick!</p>
      <p className='details-paragraph-tag'>Please enter your details</p>
      <form className="sign-up-form">
        <label className="sign-up-label" htmlFor="name">Username</label>
        <input className="sign-up-input" type="text" id="name" />
        <label className="sign-up-label" htmlFor="email">Email</label>
        <input className="sign-up-input" type="email" id="email" />
        <label className="sign-up-label" htmlFor="password">Password</label>
        <input className="sign-up-input" type="password" id="password" />
        <label className="sign-up-label" htmlFor="confirm-password">Confirm Password</label>
        <input className="sign-up-input" type="password" id="confirm-password" />
        <button className="sign-up-button" type="submit">Sign Up</button>
        <button className='Google-container' type="submit">Sign-in with Google</button>
        <p className='sign-in-link'>Already have an accound_sign-in</p>
      </form>
    </div>
    <div className='task-management-sign-in-image'>
      <img src={sign_in_and_log_in_image} alt="TASK-MANAGEMENT-IMAGE" />
      </div>
    </div>
  );
};

export default SignUp;