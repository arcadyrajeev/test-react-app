import React from "react";
import "../styles/main.css";

export default function MarqueeText() {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <span className="scroll-text">
          WORK WITH US
          <hr /> LET'S CHAT
          <hr />
        </span>
        <span className="scroll-text">
          WORK WITH US
          <hr /> LET'S CHAT
          <hr />
        </span>
      </div>
    </div>
  );
}
