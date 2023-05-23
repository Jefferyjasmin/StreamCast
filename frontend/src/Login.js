import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login, reset } from "./features/auth/authSlice";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/main");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    console.log("this is user data from login", userData);
    dispatch(login(userData));
  };

  const on_register = () => {
    navigate("/register");
  };

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }
  let display = null;

  return (
    <>
      <secction className="login_heading">
        <h2 className="login_title">Login</h2>
      </secction>
      <section className="login_form_section">
        <div className="login_form_overlay">
          <form className="login_form" onSubmit={onSubmit}>
            <p style={{ color: "white" }}>Login in to your account</p>
            <div className="login_form-group">
              {" "}
              <input
                type="text"
                className="login_input"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your Email"
                onChange={onChange}
              />
            </div>
            <div className="login_form-group">
              {" "}
              <input
                type="text"
                className="login_input"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>

            <div className="login_form-group">
              <button type="submit" className="login_btn ">
                SUBMIT
              </button>
            </div>
            <button className="login_register" onClick={on_register}>
              Register?
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
