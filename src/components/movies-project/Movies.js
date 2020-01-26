import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import MovieHeader from "./MovieHeader";

function Movies() {
  const [hasError, setErrors] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const ALL_MOVIES_API_URL = `https://swapi.co/api/planets`;
    setLoading(true);
    setErrors(false);

    const res = await fetch(`${ALL_MOVIES_API_URL}`);
    res
      .json()
      .then(response => {
        setMovieList(response.results);
        setLoading(false);
      })
      .catch(error => {
        setErrors(true);
        console.log(error);
      });
  };

  return (
    <div className="Movies">
      {/* <MovieHeader /> */}
      All Movies
      {loading && <div style={{ color: `green` }}>fetching...</div>}
      <ul>
        {movieList.map((item, index) => (
          <li key={index + 1}>
            <Link to={`/movie/${index + 1}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {hasError && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
    </div>
  );
}

export default Movies;
