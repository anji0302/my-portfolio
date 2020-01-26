import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header d-flex container-fluid">
      <Link to="/" className="logo">Logo</Link>
      <div className="menu">Menu</div>
    </div>
  );
}

export default Header;
