import React from "react";
import "./Auth.css";
const Auth = () => {
  const handleSubmit = () => {
    console.log("hello");
  };
  return (
    <div className="auth">
      <h2 className="auth_title">STREMPLAY</h2>
      <div className="auth_con">
        <form className="auth_form" onSubmit={handleSubmit}>
          <div className="auth_inputs">
            <input
              className="auth_input_fields"
              type="text"
              placeholder="Email"
            />
            <input
              className="auth_input_fields"
              type="text"
              placeholder="Password"
            />
          </div>
          <button className="auth_submit_btn" type="submit">
            Sign In
          </button>
        </form>
        <button className="auth_password_btn">Forgot Your Password?</button>
      </div>
      <div className="auth_line"></div>
      <button className="auth_password_btn">Create an Account</button>
    </div>
  );
};

export default Auth;
