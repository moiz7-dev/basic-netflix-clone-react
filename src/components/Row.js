import React, { Fragment, useEffect, useState } from "react";
import YouTube from "react-youtube";
import Loader from "react-loader-spinner";

import axios from "../utils/axios";
import classes from "./Row.module.css";
import { YT_API_KEY, YT_BASE_URL } from "../utils/requests";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movieName, setMovieName] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(props.fetchUrl);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [props.fetchUrl]);

  const handleClick = (movie) => {
    setIsLoading(true);
    setMovies(movies);
    setTrailerUrl("");
    
    if(movieName === movie.name || movieName === movie.title){
      setIsLoading(false);
      return;
    }

    axios
      .get(`${YT_BASE_URL}key=${YT_API_KEY}&q=${movie.name || movie.title}%20trailer`)
      .then((res) => {
        setIsLoading(false);
        setTrailerUrl(res.data.items[0].id.videoId);
        setMovieName(movie.name || movie.title)
      });
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const loader = (<div className={classes['loader-wrapper']}>
  <Loader
  type="Rings"
  color="#E50914"
  height='100'
  width='{100}'
/></div>)

  return (
    <div className={classes.row}>
      <h2>{props.title}</h2>
      <div className={classes.posters}>
        {movies.map((movie) => {
          if(!movie.backdrop_path) return;

          return (
            <img
              onClick={() => handleClick(movie)}
              className={`${classes.poster} ${
                props.isLargeRow ? classes.posterLarge : ''
              }`}
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title || movie.name}
            />
          )

        })}
      </div>
      {isLoading && loader}
      {trailerUrl && !isLoading && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
