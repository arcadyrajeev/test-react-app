import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import image1 from "../assets/images/face1.avif";
import image2 from "../assets/images/front2.avif";
import image3 from "../assets/images/front3.avif";
import image4 from "../assets/images/front4.avif";
import image5 from "../assets/images/back1.avif";
import image6 from "../assets/images/back2.avif";

export default function HomeHero({
  text,
  fsize = "30.5vw",
  leftpadding = "0",
}) {
  const sectionRef = useRef(null);

  // Track scroll progress of the sticky header section
  const { scrollYProgress } = useScroll();

  // Map scroll progress [0, 1] to horizontal X movement
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-250%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["10%", "-300%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-190%"]);

  return (
    <div ref={sectionRef} className="sticky-header">
      <motion.div
        className="sticky-content"
        style={{ x, paddingLeft: leftpadding }}
      >
        <h1 style={{ fontSize: fsize }}>{text}</h1>
      </motion.div>

      <motion.div className="front" style={{ y: y1 }}>
        <div className="img-box" id="front1">
          <img src={image1} />
        </div>
        <div className="img-box" id="front2">
          <img src={image2} />
        </div>
        <div className="img-box" id="front3">
          <img src={image3} />
        </div>
        <div className="img-box" id="front4">
          <img src={image4} />
        </div>
      </motion.div>

      <motion.div className="back" style={{ y: y2 }}>
        <div className="img-box" id="back1">
          <img src={image5} />
        </div>
        <div className="img-box" id="back2">
          <img src={image6} />
        </div>
      </motion.div>
    </div>
  );
}
