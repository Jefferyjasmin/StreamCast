import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./NavSideBar.css";
import SideBarRow from "./SideBarRow";
 
import requests from "./request";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const NavSideBar = () => {
  const { user } = useSelector((state) => state.auth);
  const [movies, setMovies] = useState(null);
  const dispatch = useDispatch();

  const side_bar_items = [
    {
      title: "Trending",
      id: 1,
      movie: <SideBarRow title="Top Rated" fetchUrl={requests.fetchTopRated} />,
    },
    {
      title: "NetFlixOriginals",
      id: 2,
      movie: <SideBarRow title="Top Rated" fetchUrl={requests.fetchTopRated} />,
    },
    {
      title: "Top Rated",
      id: 3,
      movie: <SideBarRow title="Top Rated" fetchUrl={requests.fetchTopRated} />,
    },
    {
      title: "Action Movies",
      id: 4,
      movie: (
        <SideBarRow
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
      ),
    },
    {
      title: "Comdey Movies",
      id: 5,
      movie: (
        <SideBarRow
          title="Comedy Movies"
          fetchUrl={requests.fetchComdeyMovies}
        />
      ),
    },
    {
      title: "Horror Movies",
      id: 6,
      movie: (
        <SideBarRow
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
      ),
    },
    {
      title: "Romance Movies",
      id: 7,
      movie: (
        <SideBarRow
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
      ),
    },
    {
      title: "Documentaries",
      id: 8,
      movie: (
        <SideBarRow
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
      ),
    },
  ];

  console.log("this is movie", movies);

  const [selected, setSelected] = useState("");
  const handleItemClick = (index) => {
    setSelected(index.id);
    setMovies(index.movie);
  };

  const height = {
    height: "28px",
    marginRight: "10px",
  };

  console.log("this is movies", movies);
  return (
    <div className="side_bar_con">
      <div className="side_bar">
        <button className="side_bar_item">
          <AccountBoxIcon style={height} />{" "}
          <p>{user?.name ? user.name.toUpperCase() : "User Name"}</p>
          <div className="side_bar_item_overlay"></div>
        </button>

        {side_bar_items.map((item) => (
          <>
            <button
              className="side_bar_item "
              key={item.id}
              onClick={() => handleItemClick(item)}
            >
              <div
                className={` ${
                  item.id === selected ? "side_bar_item_overlay_selector" : ""
                }`}
              ></div>{" "}
              {item.title}
              <div className="side_bar_item_overlay"></div>
            </button>
          </>
        ))}
      </div>
      <div className="side_bar_topics">
        <div className="side_bar_topics_container">${movies}</div>
      </div>
    </div>
  );
};

export default NavSideBar;
