import "./Banner.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";

import request from "./request";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetechData = async () => {
      const requests = await axios.get(request.fetchNetFlixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests;
    };
    fetechData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgoundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
