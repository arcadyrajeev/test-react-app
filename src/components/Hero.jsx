import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image2 from "../assets/images/front2.avif";

import "../styles/main.css";

export default function Hero({ text, fsize = "25vw", leftpadding = "0" }) {
  const { scrollYProgress } = useScroll();

  // Map scroll progress [0, 1] to horizontal X movement
  const y = useTransform(scrollYProgress, [0, 1], ["2%", "-250%"]);
  return (
    <div className="sticky-header" style={{ height: "90vh" }}>
      <div className="sticky-content" style={{ paddingLeft: leftpadding }}>
        <h1 style={{ fontSize: fsize }}>{text}</h1>
      </div>
      <div className="front">
        <motion.div
          className="img-box"
          style={{
            y,
            width: "10vw",
            height: "14vw",
            position: "absolute",
            top: "10%",
            left: "86%",
          }}
        >
          <img src={image2} />
        </motion.div>
      </div>
    </div>
  );
}
