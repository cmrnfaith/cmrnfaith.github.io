import React from "react"
import ProfileImage from "../images/profile.png"
const About = () => {
  return (
    <section className="container">
      <h2 class="top-title">Cameron Faith</h2>
      <hr></hr>
      <div>
        <img class="mb-5" id="avatar" src={ProfileImage} alt="Cameron Faith" />

        <p>Summary of my experience</p>
        <p>Strong knowledge of...</p>
        <p>Final text Here</p>
      </div>
    </section>
  )
}

export default About
