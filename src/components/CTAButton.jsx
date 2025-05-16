import React from "react";
import "../styles/main.css";
import { NavLink } from "react-router-dom";

export default function CTA({ text, link }) {
  return (
    <div className="cta-button">
      <NavLink to={link} className="upper">
        {text}
      </NavLink>
      <NavLink to={link} className="lower">
        {text}
      </NavLink>
    </div>
  );
}
