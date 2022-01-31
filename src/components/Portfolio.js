import ProjectCards from "../components/ProjectCards"
import React from "react"
import portfolio from "../portfolio.json"
import "bootstrap/dist/css/bootstrap.min.css"

const Wrapper = (props) => {
  return <div className="wrapper">{props.children}</div>
}

const Portfolio = () => {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Bootcamp Portfolio</h2>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
        {portfolio.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
            topics={project.topics}
          />
        ))}
      </Wrapper>
    </section>
  )
}

export default Portfolio
