import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/base.css";
import "../styles/main.css";
import "../styles/components.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WideWeb from "../components/WideWebsiteCard";
import MarqueeText from "../components/MarqueeText";

export default function Works() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    //fake database fetch
    fetch("src/database/works.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
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
        {works.map((work, index) => (
          <WideWeb key={index} imglink={work.imglink} title={work.title} />
        ))}
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
