import React from "react"
const Footer = () => {
  return (
    <footer className="footer bg-dark fixed-bottom">
      <div style={{ alignContent: "start" }}>
        <h2 id="footer-logo" style={{ color: "white", marginTop: "10px" }}>
          Cameron Faith
        </h2>
        <p style={{ color: "white" }}>Software Engineer | Data Analysis</p>
        <p style={{ color: "white" }}>Algorithmic Trading | Blockchain</p>
      </div>
      <div style={{ alignContent: "end", marginLeft: "50px" }}>
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
        <a href="https://twitter.com/cmrnfaith">
          <img
            src="https://img.icons8.com/color/50/000000/twitter--v2.png"
            alt="Twitter"
            className="icon"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
