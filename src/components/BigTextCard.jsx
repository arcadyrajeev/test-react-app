import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/main.css";
import image from "/images/VR-2.jpg";

export default function BigTextCard() {
  const textRef = useRef(null); // Ref to the text container
  const coverRef = useRef(null); // Ref to the gradient cover element

  return (
    <div className="bigtextcard">
      <div className="large-text">
        <h1>STRAIGHT</h1>
      </div>
      <div className="large-text">
        <h1>TO THE</h1>
        <div className="image-container">
          <img src={image} />
        </div>
      </div>
      <div className="large-text">
        <h1>BOLD IDEAS</h1>
      </div>
    </div>
  );
}
