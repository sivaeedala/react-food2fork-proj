import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link to="/" className="navbar navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/recipies" className="nav-link">
              Recipies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
