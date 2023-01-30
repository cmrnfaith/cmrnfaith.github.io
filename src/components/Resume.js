import React from "react";
import ResumePDF from "../images/Cameron Faith - Resume.pdf";

const Resume = () => {
  return (
    <section className="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div className="mt-5">
          <div className="justify-content-center mt-5">
            <div>
              <h3 className="top-title">Proficiencies</h3>
              <ul>
                <li>
                  <br />
                  <h5 style={{ fontWeight: "600" }}>Software Development</h5>
                  ReactJS, ExpressJS, Python, Java, C#, PyTorch
                  <br />
                  <br />
                  <h5 style={{ fontWeight: "600" }}>Cloud Infrastructure</h5>
                  Google Cloud Platform, Kubernetes, Docker, GitHub CI/CD
                  <br />
                  <br />
                  <h5 style={{ fontWeight: "600" }}>Unique Talents</h5>
                  AR Development, 3D Development in JS, Financial Direvatives,
                  Data Analysis
                </li>
              </ul>
            </div>
          </div>
          <div
            className=""
            style={{
              marginRight: "30px",
              marginLeft: "5px",
              marginTop: "10px",
              marginBottom: "10px",
              alignContent: "end",
              display: "flex",
            }}
          >
            <div
              className=""
              style={{
                marginRight: "30px",
                marginLeft: "5px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <h3
                className="top-title"
                style={{
                  marginRight: "30px",
                  marginLeft: "5px",
                  marginTop: "10px",
                  alignContent: "end",
                  display: "flex",
                }}
              >
                {" "}
                LinkedIn
              </h3>
              <a href="https://www.linkedin.com/in/cmrnfaith/">
                <img
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  alt="linkedIn"
                />
              </a>
            </div>
            <div
              className=""
              style={{
                marginRight: "30px",
                marginLeft: "5px",
                marginTop: "10px",
                marginBottom: "10px",
                // alignContent: "end",
                // display: "flex",
              }}
            >
              <h3
                className="top-title"
                style={{
                  marginRight: "30px",
                  marginLeft: "5px",
                  marginTop: "10px",
                  alignContent: "end",
                  display: "flex",
                }}
              >
                {" "}
                Download Resume{" "}
              </h3>
              <a
                href="https://github.com/cmrnfaith/portfolio/raw/master/docs/Cameron%20Faith%20-%20Resume.pdf"
                className="link"
              >
                <img
                  src="https://img.icons8.com/ios/50/000000/open-resume.png"
                  alt="Download Resume"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src={ResumePDF}
        width="100%"
        height="1150px"
        title="Resume"
      ></iframe>
    </section>
  );
};

export default Resume;
