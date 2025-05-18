import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/"} className="left">
        <hr></hr>
        <div className="name">STUDIO</div>
      </NavLink>
      <div className="right">
        <NavLink to={"/"} className="nav-options">
          <div className="optiontext">
            <div className="optiontext__box">Home</div>
            <div className="optiontext__box">Home</div>
          </div>
        </NavLink>
        <h2>,</h2>
        <NavLink to={"/works"} className="nav-options">
          <div className="optiontext">
            <div className="optiontext__box">Works</div>
            <div className="optiontext__box">Works</div>
          </div>
        </NavLink>
        <h2>,</h2>
        <NavLink to={"/blog"} className="nav-options">
          <div className="optiontext">
            <div className="optiontext__box">Blog</div>
            <div className="optiontext__box">Blog</div>
          </div>
        </NavLink>
        <h2>,</h2>
        <NavLink to={"/contact"} className="nav-options">
          <div className="optiontext">
            <div className="optiontext__box">Contact</div>
            <div className="optiontext__box">Contact</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
