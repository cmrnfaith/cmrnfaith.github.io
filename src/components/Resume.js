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
          <ul>
            <li>Core competencies include...</li>
          </ul>
          <div class="justify-content-center mt-5">
            <div>
              <h2 className="top-title">Proficiencies</h2>
              <ul>
                <li>
                  SDL Tridion, Adobe Experience Manager (6.5, As a cloud
                  Service), C#.NET, ASP.NET, JAVA,
                  <br />
                  HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery,
                  React.js, IndexedDB,
                  <br />
                  Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL,
                  APIs, Templating.
                </li>
              </ul>
            </div>
          </div>
          <p class="mt-5">
            <h3 className="top-title"> LinkedIn</h3>
            <a href="https://www.linkedin.com/in/cmrnfaith/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedIn"
              />
            </a>
          </p>
          <p class="mt-5">
            <h3 className="top-title"> Download Resume </h3>
            <a
              href="https://github.com/cmrnfaith/portfolio/blob/master/docs/Cameron%20Faith%20-%20Resume.pdf"
              class="link"
            >
              <img
                src="https://img.icons8.com/ios/50/000000/open-resume.png"
                alt="Download Resume"
              />
            </a>
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
