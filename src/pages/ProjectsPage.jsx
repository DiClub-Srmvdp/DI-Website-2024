import React, { useState } from "react";

import Slider from "../components/Slider";

export default function ProjectsPage() {
  const projects = [
    {
      image: `/assets/img/projects/dld/parking_proj.png`,
      title: "Parking Project",
    },
    {
      image: `/assets/img/projects/dld/code_editor_proj.png`,
      title: "Code Editor",
    },
    {
      image: `/assets/img/projects/dld/Stadium_proj.jpg`,
      title: "Stadium Management",
    },
    {
      image: `/assets/img/projects/dld/tic_proj.png`,
      title: "Tic-Tac-Toe App",
    },
    {
      image: `/assets/img/projects/dld/blog_proj.png`,
      title: "Java Blog",
    },
    {
      image: `/assets/img/projects/dld/cmpn_intrst.png`,
      title: "Compound Interest Calculator",
    },
  ];

  return (
    <main>
      <section className="di-banner"></section>
      <div className="top-projects">
        <section className="projects-wrapper">
          <div className="projects-title my-4 pt-5">
            <h1 className="text-center">
              <span>P</span>rojects
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
          <div class="w-100 row projects-grid p-5 gap-4 justify-content-center">
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function Project({ project }) {
  return <div className="projects-grid-item" style={{ backgroundImage: `url(${project.image})` }} data-title={project.title}></div>;
}
