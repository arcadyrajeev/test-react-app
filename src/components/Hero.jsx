import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero({ text, fsize = "25vw", leftpadding = "0" }) {
  return (
    <div className="sticky-header">
      <div className="sticky-content" style={{ paddingLeft: leftpadding }}>
        <h1 style={{ fontSize: fsize }}>{text}</h1>
      </div>
    </div>
  );
}
