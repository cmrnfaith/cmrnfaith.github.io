import React from "react";
import ProfileImage from "../images/profile.png";
const About = () => {
  return (
    <section className="container">
      <h2 className="top-title">Cameron Faith</h2>
      <hr></hr>
      <div>
        <img
          className="mb-5"
          id="avatar"
          src={ProfileImage}
          alt="Cameron Faith"
        />
        <h5>Summary</h5>
        <p>
          I'm a Computer Engineer from the University of Calgary with an
          aptitude in cloud infrastructure, full-stack development, and 3D
          design. I am currently working to grow my skills in AI, technology,
          and product development. I am experienced in financial data analysis,
          web design, AR, and cloud computing and enjoy working on challenging
          problems.
        </p>
        <p></p>
        <h5>Achievements</h5>
        <p>
          I have co-authored a patent for a Remote Multiplayer AR software
          design. Created a full paper-trading crypto web platform where user's
          could backtest various trading algorithms and test their validity.
          Developed a trading bot in Python that implemented a few of the ideas
          discovered through my site.
        </p>
      </div>
    </section>
  );
};

export default About;
