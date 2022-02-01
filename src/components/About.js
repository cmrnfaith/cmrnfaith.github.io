import React from "react"
import ProfileImage from "../images/profile.png"
const About = () => {
  return (
    <section className="container">
      <h2 class="top-title">Cameron Faith</h2>
      <hr></hr>
      <div>
        <img class="mb-5" id="avatar" src={ProfileImage} alt="Cameron Faith" />

        <p>
          I'm a Computer Engineer from the University of Calgary with an
          aptitude in Data Analysis, Algorithms and Finance.
        </p>
        <p>
          I have a strong foundation in Object Oriented Programing (OOP),
          Algorithm Design, Embedded Systems Programing, Project Management, and
          Web Design.
        </p>
        <p>
          I am looking for a full-time remote position, but am open to
          relocating for the right opportunity.{" "}
        </p>
      </div>
    </section>
  )
}

export default About
