import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NavSideBar from "./NavSideBar";
import { logout } from "./features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const { user } = useSelector((state) => state.auth);
  const style = {
    color: "white",
    cursor: "pointer",
  };
  const button = {
    background: "none",
    border: "none",
  };
  const style2 = {
    color: "white",
    marginRight: "2%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const [show, handleShow] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleDisplay = () => {
    setDisplay(!display);
  };

  // const onLogOut = () => {
  //   console.log("click");
  //   dispatch(logout());
  // };

  useEffect(() => {
    if (!user || user == null) {
      navigate("/");
    }
  }, [user, navigate]);

  console.log("this is user from navbar.js", typeof user, user);
  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <div>
          <div style={{ display: "flex" }}>
            <h2 className="nav_title">STREAMCAST</h2>
            <button className="nav_button" onClick={handleClick}>
              <MenuIcon style={style} />
            </button>
          </div>

          <div
            className={`nav_sidebar_display ${
              clicked === false ? "" : "nav_sidebar_dispaly"
            } `}
          >
            <div
              className="nav_app_overlay"
              id="app_over"
              onClick={handleClick}
            ></div>
            <NavSideBar />
          </div>
        </div>

        <div style={style2}>
          <input
            type="text"
            className="search_nav"
            style={{ height: "16px" }}
          />
          <button className="nav_button">
            <SearchIcon style={style} />
          </button>

          <button
            className={`nav_button ${display === false ? "" : "nav_black"}`}
            onClick={handleDisplay}
          >
            <MoreHorizIcon style={style} />
          </button>
          <div
            className={`nav_auth_display ${
              display === false ? "nav_sidebar_dispaly" : ""
            }`}
          >
            <div className="nav_auth_button">
              <button className="nav_auth">Settings</button>
            </div>
            <div className="nav_auth_button">
              <button className="nav_auth" onClick={() => dispatch(logout())}>
                {user?.name ? "Logout" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
