import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { register, reset } from "./features/auth/authSlice";
const Register = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  console.log("this is the props", props);
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { user_name, email, password, password2 } = formData;

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/main");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      const userData = {
        name: user_name,
        email: email,
        password: password,
      };
      console.log("this is user data", userData);
      dispatch(register(userData));
    } else {
      console.log("Passwords dont match");
    }
  };
  return (
    <>
      <secction className="register_heading">
        <h2 className="register_title">Register</h2>
      </secction>
      <section className="register_form_section">
        <div className="register_form_overlay">
          <form className="register_form" onSubmit={onSubmit}>
            <p style={{ color: "white" }}>Register in to your account</p>
            <div className="register_form-group">
              {" "}
              <input
                type="text"
                className="register_input"
                id="user_name"
                name="user_name"
                value={user_name}
                placeholder="Enter your full name"
                onChange={onChange}
              />
            </div>
            <div className="register_form-group">
              {" "}
              <input
                type="text"
                className="register_input"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your Email"
                onChange={onChange}
              />
            </div>
            <div className="register_form-group">
              {" "}
              <input
                type="text"
                className="register_input"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>
            <div className="register_form-group">
              <input
                type="text"
                className="register_input"
                id="password"
                name="password2"
                value={password2}
                placeholder="please verify your password"
                onChange={onChange}
              />
            </div>

            <div className="register_form-group">
              <button type="submit" className="register_btn ">
                SUBMIT
              </button>
            </div>
            <button
              className="register_register"
              onClick={() => navigate("/login")}
            >
              Login{" "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
