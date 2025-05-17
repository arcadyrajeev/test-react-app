import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Navbar from "../components/Navbar";
import "../styles/base.css";
import "../styles/main.css";
import "../styles/components.css";

import HomeHero from "../components/HomeHero";
import TextSection from "../components/TextSection";
import CTA from "../components/CTAButton";
import DualCard from "../components/DualCard";
import PointBlock from "../components/PointBlock";
import WideWeb from "../components/WideWebsiteCard";
import BigTextCard from "../components/BigTextCard";
import MarqueeText from "../components/MarqueeText";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";

import image1 from "/images/image1.avif";
import image2 from "/images/image2.avif";
import image3 from "/images/image3.avif";

import web1 from "/images/landlite_ing_1.jpg";
import web2 from "/images/elegance_img_1.jpg";
import web3 from "/images/bombay_royal_img_1.jpg";

import blog1 from "/images/blog1.avif";
import blog2 from "/images/blog2.avif";
import blog3 from "/images/blog3.avif";

//Home page

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="head" id="navbar">
        <Navbar />
      </div>

      {/* Hero section */}
      <div className="hero-section">
        <HomeHero text="DIGITAL INNOVATION STUDIO" />
      </div>

      {/* text section */}
      <div className="text-section">
        <TextSection
          text="Digital Innovation Studio is a forward-thinking agency that transforms
        ideas into immersive digital experiences. We specialize in creating
        innovative web solutions, captivating designs, and strategic digital
        transformations that help brands make a splash in the digital world."
        />
      </div>

      {/* website showcase section */}
      <div className="wide-web-wrapper">
        <WideWeb imglink={web1} title="LANDLITE" />
        <WideWeb imglink={web2} title="ELEGANCE" />
        <WideWeb imglink={web3} title="BOMBAY ROYAL" />
      </div>

      <div className="text-section">
        <TextSection
          text='"Working with Digital Innovation Studio was an exceptional experience from start to finish."'
          classn="bigtext-container"
        />
      </div>
      <div className="text-section">
        <TextSection text="Our expertise is in designing visuals that effectively connect with the target audience.">
          <CTA text="WORK WITH US" link="/" />
        </TextSection>
      </div>

      {/* sections with two cards*/}
      <div className="dualcard-wrapper">
        {" "}
        <DualCard
          imglink={image1}
          heading="strategy"
          bodytext="We craft comprehensive digital strategies that align with your business goals and resonate with your target audience."
        >
          <PointBlock text="Digital Strategy" />
          <PointBlock text="Brand Growth" />
          <PointBlock text="Market Analysis" />
          <PointBlock text="ROI Optimization" />
        </DualCard>
        {/*Flipping the card using row-reverese */}
        <DualCard
          imglink={image2}
          heading="ui/ux design"
          bodytext="Creating intuitive and engaging user experiences that delight your audience and drive meaningful interactions."
          direction="row-reverse"
        >
          <PointBlock text="User Research" />
          <PointBlock text="Interface Design" />
          <PointBlock text="Prototyping" />
          <PointBlock text="Usability Testing" />
        </DualCard>
        <DualCard
          imglink={image3}
          heading="web design"
          bodytext="Building beautiful, responsive websites that combine stunning aesthetics with powerful functionality."
        >
          <PointBlock text="Custom Design" />
          <PointBlock text="Responsive" />
          <PointBlock text="Performance" />
          <PointBlock text="Innovation" />
        </DualCard>
      </div>

      {/* Big text section  section */}
      <div className="big-wrapper">
        <BigTextCard />
      </div>

      <div className="below">
        <TextSection text="Discover how Digital Innovation Studio can help transform your digital presence with our innovative solutions and creative expertise.">
          <CTA text="VIEW ALL" link="/" />
        </TextSection>
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
      </div>

      {/* infinite scrolling text  */}
      <div>
        <MarqueeText />
      </div>

      {/* Footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
