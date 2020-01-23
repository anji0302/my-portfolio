import React from "react";
import { Link } from "react-router-dom";

function MovieDetails() {
  return (
    <div className="MovieDetails">
      <p> MovieDetails Component</p>

      <Link to="/movies">Back to all movies</Link>
    </div>
  );
}

export default MovieDetails;
