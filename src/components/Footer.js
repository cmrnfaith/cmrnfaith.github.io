import React from "react"
const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div style={{ alignContent: "start", marginLeft: "10px" }}>
        <h2 id="footer-logo" style={{ color: "white", marginTop: "10px" }}>
          Cameron Faith
        </h2>
        <p style={{ color: "white", textAlign: "left" }}>
          Software Engineer | Data Analysis
        </p>
        <p style={{ color: "white", textAlign: "left" }}>
          Algorithmic Trading | Technology
        </p>
      </div>
      <div
        style={{ alignContent: "end", marginLeft: "50px", marginRight: "5px" }}
      >
        <a href="https://github.com/cmrnfaith">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/cmrnfaith/">
          <img
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
