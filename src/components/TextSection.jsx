import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/main.css";

export default function TextSection({
  text,
  children,
  classn = "text-container",
}) {
  const textRef = useRef(null); // Ref to the text container
  const coverRef = useRef(null); // Ref to the gradient cover element

  return (
    <div className="text-card">
      <div className={classn}>{text}</div>

      {children && <div className="button-wrapper">{children}</div>}
    </div>
  );
}
