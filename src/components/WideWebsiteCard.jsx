import "../styles/main.css";
import "../styles/components.css";
import { NavLink } from "react-router-dom";

// Section with two cards

export default function WideWeb({ imglink, title }) {
  return (
    <div className="wide-web">
      <NavLink className="image-card">
        <img src={imglink} />
      </NavLink>
      <NavLink className="title-card">
        <span className="text">{title}</span>
      </NavLink>
    </div>
  );
}
