import React from 'react';
import "../../index.css";
import { useForm } from "react-hook-form";
import sign_in_and_log_in_image from "../../assets/images/Sign-up and login-in image.png";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='log-in-page white-background'>
      <div className="log-in-container">
        <p className="log-in-title">Welcome Back Maverick!</p>
        <p className='details-paragraph-tag1'>Please enter your details</p>
        <form className="log-in-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="log-in-label" htmlFor="email">Email</label>
          <input className="log-in-input" type="email" id="email" placeholder='Enter your email' {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
          {errors.email && <span className='error-message'>{errors.email.message}</span>}

          <label className="log-in-label" htmlFor="password">Password</label>
          <input className="log-in-input" type="password" id="password" placeholder='Enter your password' {...register('password', { required: true, maxLength: 12, minLength: 8 })} />
          {errors.password && <span className='error-message'>{errors.password.message}</span>}

          <button className="log-in-button" type="submit">Log in</button>
          <button className='Google-container' type="button">Sign-in with Google</button>
          <p className='log-in-link'>Don't you have an account? <a href="/signup">Sign up here</a></p>
        </form>
      </div>
      <div className='task-management-sign-in-image'>
        <img src={sign_in_and_log_in_image} alt="TASK-MANAGEMENT-IMAGE" />
      </div>
    </div>
  );
};

export default Login;
