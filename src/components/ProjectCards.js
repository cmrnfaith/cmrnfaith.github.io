import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";

// Individual Cards
const ProjectCards = (props) => {
  return (
    <div className="card">
      <Link to={props.blog}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </Link>

      <div className="content">
        <p className="card-title">{props.name}</p>
        <p className="proj-icons-container">
          {props.github !== "" ? (
            <a href={props.github}>
              <img
                className="project-icon"
                src="https://img.icons8.com/fluent/48/000000/github.png"
                alt="GitHub Repo"
              />
            </a>
          ) : (
            <></>
          )}
          {props.deploy !== "" ? (
            <a href={props.deploy}>
              <img
                className="project-icon"
                src="https://img.icons8.com/fluent/48/000000/domain.png"
                alt="Live Application"
              />
            </a>
          ) : (
            <></>
          )}
        </p>
        <p className="topics">({props.topics})</p>
      </div>
    </div>
  );
};

export default ProjectCards;
