import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/footer.css";
import { GoArrowUp } from "react-icons/go";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upperbox">
        {" "}
        <div className="menu-wrapper">
          {" "}
          <div className="menu">
            <div className="heading">Sitemap</div>
            <NavLink to={"/"} className="menu-option">
              Home
              <hr />
            </NavLink>
            <NavLink to={"/works"} className="menu-option">
              Work
              <hr />
            </NavLink>
            <NavLink to={"/"} className="menu-option">
              About
              <hr />
            </NavLink>
            <NavLink to={"/blog"} className="menu-option">
              Blog
              <hr />
            </NavLink>
          </div>
          <div className="menu">
            <div className="heading">Legal</div>
            <NavLink className="menu-option">
              Licensing
              <hr />
            </NavLink>
            <NavLink className="menu-option">
              Changelog
              <hr />
            </NavLink>
          </div>
          <div className="menu">
            <div className="heading">Social</div>
            <NavLink className="menu-option">
              Instagram
              <hr />
            </NavLink>
            <NavLink className="menu-option">
              LinkedIn
              <hr />
            </NavLink>
            <NavLink className="menu-option">
              Facebook
              <hr />
            </NavLink>
          </div>
        </div>
        <div className="email-box">
          E-mail <NavLink className="email-button">GET NOTIFIED</NavLink>
        </div>
      </div>
      <div className="lowerbox">
        <NavLink to={"/"} className="copy-link">
          Copyright © Digital Innovation Studio — made by Rajeev
        </NavLink>
        <a
          href="#navbar"
          className="backtotop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Back To Top </span>
          <div className="arrowbox">
            <div className="box">
              <GoArrowUp />
            </div>
            <div className="box">
              <GoArrowUp />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
