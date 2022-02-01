import React from "react"
import ResumePDF from "../images/Cameron Faith - Resume.pdf"

const Resume = () => {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Cameron Faith</h2>
          <ul></ul>
          <h5>
            Below are a list of my key skills and links to both my resume and
            LinkedIn:
          </h5>
          <div class="justify-content-center mt-5">
            <div>
              <h2 className="top-title">Proficiencies</h2>
              <ul>
                <li>
                  <br />
                  <h5 style={{ fontWeight: "600" }}>Software Development</h5>
                  Python, C/C++, Java, Git, BASH, Linux, SSH,
                  <br />
                  <br />
                  <h5 style={{ fontWeight: "600" }}>Web Development</h5>
                  PostgreSQL, SQL, API's, React.js, HTML, CSS, Bootstrap,
                  <br />
                  <br />
                  <h5 style={{ fontWeight: "600" }}>Finance</h5>
                  Derivatives, Options, Exchange API's, DeFi, Excel
                </li>
              </ul>
            </div>
          </div>
          <p
            style={{
              alignContent: "end",
              display: "flex",
              marginRight: "10px",
            }}
          >
            <p
              class=""
              style={{
                marginRight: "30px",
                marginLeft: "5px",
                marginTop: "10px",
              }}
            >
              <h3 className="top-title"> LinkedIn</h3>
              <a href="https://www.linkedin.com/in/cmrnfaith/">
                <img
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  alt="linkedIn"
                />
              </a>
            </p>
            <p
              class=""
              style={{
                marginRight: "30px",
                marginLeft: "5px",
                marginTop: "10px",
              }}
            >
              <h3 className="top-title"> Download Resume </h3>
              <a
                href="https://github.com/cmrnfaith/portfolio/raw/master/docs/Cameron%20Faith%20-%20Resume.pdf"
                class="link"
              >
                <img
                  src="https://img.icons8.com/ios/50/000000/open-resume.png"
                  alt="Download Resume"
                />
              </a>
            </p>
          </p>
        </div>
      </div>

      <iframe
        src={ResumePDF}
        width="100%"
        height="1150px"
        title="Resume"
      ></iframe>
    </section>
  )
}

export default Resume
