import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
// import Footer from "./Footer";
import Home from "./Home";
import Movies from "./movies-project/Movies";
import MovieDetails from "./movies-project/MovieDetails";
import DDC_Home from "./ddc-project/DDC_Home";

function RouterClass() {
  return (
    <div className="routes">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ddc" component={DDC_Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default RouterClass;
