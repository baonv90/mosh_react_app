import React, { Component } from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar
        <span className="badge badge-secondary badge-pill m-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
