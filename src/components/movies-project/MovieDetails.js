import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MovieDetails({ match }) {
  const [hasError, setErrors] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const ALL_MOVIES_API_URL = `https://swapi.co/api/planets/${match.params.id}`;
      setLoading(true);
      setErrors(false);

      const res = await fetch(`${ALL_MOVIES_API_URL}`);
      res
        .json()
        .then(response => {
          setMovieDetails(response);
          setLoading(false);
        })
        .catch(error => {
          setErrors(true);
          alert(error);
        });
    };

    fetchMovieDetails();
  }, [match.params.id]);

  return (
    <div className="MovieDetails">
      {loading && <div style={{ color: `green` }}>fetching details...</div>}
      <p>
        {movieDetails.name}: {movieDetails.climate}
      </p>

      <Link to="/movies">Back to all movies</Link>
      {hasError && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
