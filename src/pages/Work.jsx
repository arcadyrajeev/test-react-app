import React from "react";
import Navbar from "../components/Navbar";
import "../styles/base.css";
import "../styles/main.css";
import "../styles/components.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WideWeb from "../components/WideWebsiteCard";
import MarqueeText from "../components/MarqueeText";

import web1 from "../assets/images/landlite_ing_1.jpg";
import web2 from "../assets/images/elegance_img_1.jpg";
import web3 from "../assets/images/bombay_royal_img_1.jpg";
import web4 from "../assets/images/workline_img_1.jpg";
import web5 from "../assets/images/techland_img_1.jpg";

export default function Works() {
  return (
    <div>
      <div className="head" id="navbar">
        <Navbar />
      </div>

      {/* Hero section */}
      <div className="hero-section">
        <Hero text="WORKS" fsize="30vw" leftpadding="20vw" />
      </div>

      {/* website showcase section */}
      <div className="wide-web-wrapper">
        <WideWeb imglink={web1} title="LANDLITE" />
        <WideWeb imglink={web2} title="ELEGANCE" />
        <WideWeb imglink={web3} title="BOMBAY ROYAL" />
        <WideWeb imglink={web4} title="WORKLINE" />
        <WideWeb imglink={web5} title="TECHLAND" />
      </div>

      {/* infinite scrolling text  */}
      <div>
        <MarqueeText />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
