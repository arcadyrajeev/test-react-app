import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/main.css";
import image from "/images/VR-2.jpg";
import { motion } from "framer-motion";

export default function BigTextCard() {
  const slideUpVariant = {
    hidden: { opacity: 0, y: "10vw" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bigtextcard">
      <motion.div
        className="large-text"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1>STRAIGHT</h1>
      </motion.div>

      <motion.div
        className="large-text"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1>TO THE</h1>
      </motion.div>

      <motion.div
        className="large-text"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1>BOLD IDEAS</h1>
      </motion.div>
      <div className="image-container">
        <img src={image} />
      </div>
    </div>
  );
}
