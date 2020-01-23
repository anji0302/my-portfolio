import React from "react";
import { Link } from "react-router-dom";
// import MovieHeader from "./MovieHeader";

function Movies() {
  return (
    <div className="Movies">
      {/* <MovieHeader /> */}
      All Movies
      <Link to="/movie/1">movies details</Link>
    </div>
  );
}

export default Movies;
