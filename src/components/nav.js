import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h1 translate="false" className="title">
          Recipea
        </h1>
      </Link>

      <Link to="/bookmark">
        <i className="fa fa-bookmark bookmark-icon" aria-hidden="true"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
