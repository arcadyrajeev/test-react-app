import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/base.css";
import "../styles/main.css";
import "../styles/components.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BlogPost from "../components/BlogPost";
import MarqueeText from "../components/MarqueeText";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //fake database fetch
    fetch("src/database/blogPosts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <div className="head">
        <Navbar />
      </div>

      <div className="hero-section">
        <Hero text="BLOG" fsize="30vw" leftpadding="30vw" />
      </div>

      <div className="blog-wrapper">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            imglink={post.imglink}
            heading={post.heading}
            duration={post.duration}
            date={post.date}
            month={post.month}
            year={post.year}
          />
        ))}
      </div>

      <div>
        <MarqueeText />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
