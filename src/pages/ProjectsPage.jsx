import React, { useState } from "react";

import Slider from "../components/Slider";
import projectsList from "../../projectsData.json";

export default function ProjectsPage() {
  const projects = projectsList.projects;
  return (
    <main>
      <section className="di-banner"></section>
      <div className="top-projects">
        <section className="projects-wrapper">
          <div className="projects-title my-4 pt-5">
            <h1 className="text-center">
              <div className="di-home-banner-moto pt-2 pt-lg-5">
                <span>D</span>esign <span>L</span>ab <span>P</span>rojects
              </div>
            </h1>
            <p className="my-3">
              DI Club has been working on various projects since its inception. The projects are based on different domains and technologies. The
              projects are developed by the members of the club and are mentored by the seniors. The projects are developed with the aim of solving
              real world problems and to provide solutions to the problems faced by the students of SRM IST.
            </p>
            {/* <div className="d-flex">
            <a href="#" className="btn btn-light projects-btn mx-auto" role="button">
              Submit your Project
            </a>
          </div> */}
          </div>
        </section>
        <div className="d-flex flex-column gap-4">
          <h1 className="text-center text-decoration-underline">Featured Projects</h1>
          <Slider />
        </div>
      </div>

      <div className="bottom-projects">
        <div className="d-flex flex-column pt-5">
          <h1 className="text-center text-decoration-underline">All Projects</h1>
          <div className="w-100 row projects-grid p-5 gap-4 justify-content-center">
            {projects.map((project) => (
              <Project key={project.key} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function Project({ project }) {
  return (
    <a
      href={`/projects/` + project.key}
      target="_blank"
      className="projects-grid-item"
      style={{ backgroundImage: `url(${project.image})` }}
      data-title={project.title}
    ></a>
  );
}
