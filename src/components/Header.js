import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Movies from "./movies-project/Movies";
import MovieDetails from "./movies-project/MovieDetails";

function Header() {
  return (
    <div className="header">
      Header Component
      <Router>
        <Link to="/">Logo</Link>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/movie/1" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default Header;
