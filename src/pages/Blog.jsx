import React from "react";
import Navbar from "../components/Navbar";
import "../styles/base.css";
import "../styles/main.css";
import "../styles/components.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BlogPost from "../components/BlogPost";
import MarqueeText from "../components/MarqueeText";

import blog1 from "../assets/images/blog1.avif";
import blog2 from "../assets/images/blog2.avif";
import blog3 from "../assets/images/blog3.avif";

export default function Blog() {
  return (
    <div>
      <div className="head">
        <Navbar />
      </div>

      {/* Hero section */}
      <div className="hero-section">
        <Hero text="BLOG" fsize="30vw" leftpadding="30vw" />
      </div>

      {/* Blogs section */}
      <div className="blog-wrapper">
        <BlogPost
          imglink={blog1}
          heading="Undersranding Content Management"
          duration="5min"
          date="1"
          month="October"
          year="2023"
        />

        <BlogPost
          imglink={blog2}
          heading="Undersranding Content Management"
          duration="5min"
          date="1"
          month="October"
          year="2023"
        />

        <BlogPost
          imglink={blog3}
          heading="Undersranding Content Management"
          duration="5min"
          date="1"
          month="October"
          year="2023"
        />
        <BlogPost
          imglink={blog1}
          heading="Undersranding Content Management"
          duration="5min"
          date="1"
          month="October"
          year="2023"
        />

        <BlogPost
          imglink={blog2}
          heading="Undersranding Content Management"
          duration="5min"
          date="1"
          month="October"
          year="2023"
        />

        <BlogPost
          imglink={blog3}
          heading="Undersranding Content Management"
          duration="5min"
          date="1"
          month="October"
          year="2023"
        />
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
