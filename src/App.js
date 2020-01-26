import React from "react";
import "./assets/scss/App.scss";

import RouterClass from "./components/Router";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <RouterClass>
        <Home />
      </RouterClass>
    </div>
  );
}

export default App;
