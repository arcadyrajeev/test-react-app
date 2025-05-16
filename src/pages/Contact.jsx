import React from "react";
import Navbar from "../components/Navbar";
import "../styles/base.css";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <TextSection
        text="Digital Innovation Studio is a forward-thinking agency that transforms
        ideas into immersive digital experiences. We specialize in creating
        innovative web solutions, captivating designs, and strategic digital
        transformations that help brands make a splash in the digital world."
      />
      <TextSection
        text='"Working with Digital Innovation Studio was an exceptional experience from start to finish."'
        classn="bigtext-container"
      />
      <TextSection text="Our expertise is in designing visuals that effectively connect with the target audience.">
        <CTA text="WORK WITH US" link="/" />
      </TextSection>

      <DualCard
        imglink="/"
        heading="strategy"
        bodytext="We craft comprehensive digital strategies that align with your business goals and resonate with your target audience."
      >
        <PointBlock text="Digital Strategy" />
        <PointBlock text="Brand Growth" />
        <PointBlock text="Market Analysis" />
        <PointBlock text="ROI Optimization" />
      </DualCard>

      <DualCard
        imglink="/"
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
        imglink="/"
        heading="web design"
        bodytext="Building beautiful, responsive websites that combine stunning aesthetics with powerful functionality."
      >
        <PointBlock text="Custom Design" />
        <PointBlock text="Responsive" />
        <PointBlock text="Performance" />
        <PointBlock text="Innovation" />
      </DualCard>

      <TextSection text="Discover how Digital Innovation Studio can help transform your digital presence with our innovative solutions and creative expertise.">
        <CTA text="VIEW ALL" link="/" />
      </TextSection>
    </div>
  );
}
