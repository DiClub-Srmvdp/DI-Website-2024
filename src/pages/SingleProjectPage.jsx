import React from "react";
import { useParams } from "react-router-dom";

import projectsData from "../../projectsData.json";

export default function SingleProjectPage() {
  const { projectKey } = useParams();

  const project = projectsData.projects.find((project) => project.key === Number(projectKey));

  return (
    <div className="single-project-container d-flex justify-content-center align-items-center">
      <div className="project-content row">
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <figure className="project-image-frame">
            <img src={project.image} alt={project.title} width="100%" height="100%" />
          </figure>
          <div className="mt-5">
            <a className="project-github" href={project.link} target="_blank">
              <i className="fa-brands fa-github"></i>View On Github
            </a>
          </div>
        </div>

        <div className="project-desc col">
          <div className="project-title">
            <h1>{project.title}</h1>
            <h2>
              {" "}
              - {project.name} ({project.dept})
            </h2>
            <hr className="mt-1" />
          </div>
          <div className="details">
            <p>{project.description}</p>
          </div>
          <div className="techstack">
            {project.skills.map((tech) => (
              <button className="tech">{tech}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
