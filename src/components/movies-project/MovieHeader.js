import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../../App";
// import MovieDetails from "./MovieDetails";

function MovieHeader() {
  return (
    <div className="MovieHeader">
      MovieHeader Component
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/movie/1">movie/1</Link>
              </li> */}
            </ul>
          </nav>

          <Switch>
            {/* <Route path="/movie/1">
              <MovieDetails />
            </Route> */}
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default MovieHeader;
