import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/main.css";

export default function TextSection({
  text,
  children,
  classn = "text-container",
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false });

  // Scroll progress relative to card itself
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"], // when card starts entering, and when it leaves
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Root scroll progress:", latest); // logs 1
  });

  // Animate opacity and y based on scroll progress
  const x = useTransform(scrollYProgress, [0.1, 0.7], ["0vw", "100vw"]);

  return (
    <div className="text-card">
      <div className={classn}>{text}</div>
      <div className="cover-wrapper" ref={cardRef}>
        <motion.div
          style={{ x: isInView ? x : "0%" }}
          className="cover-card"
        ></motion.div>
      </div>
      {children && <div className="button-wrapper">{children}</div>}
    </div>
  );
}
