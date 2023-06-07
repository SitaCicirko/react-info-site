import React from "react";
import ReactLogo from "../images/logo192.png";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img className="nav-logo" src={ReactLogo} alt="React Logo" />
      <h1 className="nav-logo-title">ReactFacts</h1>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
}

export default Nav;
