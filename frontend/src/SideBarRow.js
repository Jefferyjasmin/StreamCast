/* eslint-disable no-unused-vars */
import React from "react";
import axios from "./axios";
import "./SideBarRow.css";
import { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_Url = "https://image.tmdb.org/t/p/original/";

const SideBarRow = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((respond) => {
          console.log(respond);
          const urlParams = new URLSearchParams.get(
            new URL(respond).searchparams
          );
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="side_bar_row">
      <h2>{title}</h2>
      <div className="side_bar_row_posters">
        {movies.map((movie) => {
          return (
            <>
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`side_bar_row_poster ${
                  isLargeRow && "side_bar_row_posterLarge"
                }`}
                src={`${base_Url}${
                  isLargeRow ? movie.backdrop_path : movie.poster_path
                }`}
                alt={movie.name}
              />
            </>
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default SideBarRow;
