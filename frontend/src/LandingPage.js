import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingPageItems from "./LandingPageItems.json";
import "./LandingPage.css";
import AddIcon from "@mui/icons-material/Add";
import Register from "./Register";
const LandingPage = () => {
  const navigate = useNavigate();
  const [icon, setIcon] = useState(null);
  const [click, setClicked] = useState(true);
  const [frontend, setFrontend] = useState("");
  const handleItemClick = (id) => {
    setIcon(id);
    setClicked(!click);
  };

  const onClick = (e) => {
    if (e.target.id === "login") {
      navigate("/login");
    }
  };

  // useEffect(() => {
  //   const hasRefreshed = localStorage.getItem("hasRefreshed");

  //   if (!hasRefreshed) {
  //     localStorage.setItem("hasRefreshed", true);
  //     refreshPage();
  //   }
  // }, []);

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("this is frontend from onsubmit", frontend);
    // <Register frontend={frontend} setFrontend={setFrontend} />;
    navigate("/register");
  };
  const handleInput = (event) => {
    setFrontend(event.target.value);
  };
  console.log("frontend", frontend);
  return (
    <div id="background">
      {/* <div className="background_overlay"> */}
      <div className="landing_nav">
        <div style={{ width: " 10.4rem" }}>
          {" "}
          <h2 className="landing_title">STREAMCAST</h2>
        </div>
        <div>
          {" "}
          <select name="language" id="language" className="">
            <option value="Eng">Eng</option>
            <option value="Creole">Creole</option>
            <option value="French">French</option>
          </select>
          <button
            onClick={(e) => onClick(e)}
            id="login"
            className="landing_nav_btn"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="landing_main">
        <h1>
          Unlimited Movies, Tv <br /> shows, and more
        </h1>
        <p>Watch anywhere cancel anytime </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <label htmlFor="email">
            Ready to Watch? Enter your email to create or restart your
            membership
          </label>
          <form onSubmit={onSubmit}>
            {" "}
            <input
              type="text"
              placeholder="Email address"
              value={frontend}
              onChange={handleInput}
            />
            <button type="submit" className="landing_email_submit">
              Get Started {">"}
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
      <div className="tv">
        <div className="container">
          <div className="description">
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv,
              Blue-ray, players, and more
            </p>
          </div>
          <div className="tvclip">
            <div className="tvclip_text">
              {" "}
              <p>Enjoy on your TV Watch on Smart TV</p>
              <p style={{ fontSize: " 1.25rem", fontWeight: "500" }}>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
                alt="tvclip"
              />
            </div>
          </div>
          <div className="tvclip">
            <div>
              <img
                style={{ width: "100%" }}
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
                alt="tvclip2"
              />
            </div>
            <div className="tvclip_text">
              {" "}
              <p>Enjoy on your TV Watch on Smart TV</p>
              <p style={{ fontSize: " 1.25rem", fontWeight: "500" }}>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
          </div>
          <div className="tvclip">
            <div className="tvclip_text">
              {" "}
              <p>Create profiles for kids</p>
              <p style={{ fontSize: " 1.25rem", fontWeight: "500" }}>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en.png"
                alt="tvclip"
              />
            </div>
          </div>
          <div className="tvclip" style={{ borderBottom: "none" }}>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png"
                alt="tvclip2"
              />
            </div>
            <div className="tvclip_text">
              {" "}
              <p>Download your shows to watch offline</p>
              <p>Only available on ad-free plans.</p>
            </div>
          </div>
          <div className="faq">
            <div className="faq_contanier"></div>
            <div className="faq_container">
              <h1
                style={{
                  color: "white",
                  alignSelf: "self-start",
                  marginLeft: "10%",
                }}
              >
                Frequently Asked Questions
              </h1>
              {LandingPageItems?.faq.length > 0
                ? LandingPageItems?.faq.map((item) => (
                    <div
                      key={item.id}
                      className="faq_btn_container"
                      onClick={() => handleItemClick(item.id)}
                    >
                      <button className="faq_btn" id="what_is">
                        {item.title}
                        <div>
                          <AddIcon
                            className={
                              icon === item.id && click === false
                                ? "rotate"
                                : ""
                            }
                          />
                        </div>
                      </button>
                      <div
                        className={`faq_text ${
                          icon === item.id && click === false ? "" : "Display"
                        } `}
                      >
                        <p className="faq_text_p">{item.content}</p>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
