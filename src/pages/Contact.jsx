import React from "react";
import Navbar from "../components/Navbar";
import "../styles/base.css";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import MarqueeText from "../components/MarqueeText";

export default function Contact() {
  return (
    <div>
      <div className="head">
        <Navbar />
      </div>

      <div className="hero-section">
        <Hero text="CONTACT" fsize="30vw" leftpadding="10vw" />
      </div>

      <div className="contact-wrapper">
        <ContactForm />
      </div>

      <div className="">
        <MarqueeText />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
