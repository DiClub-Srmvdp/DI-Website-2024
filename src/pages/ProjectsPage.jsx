import React from "react";

export default function ProjectsPage() {
  const projects = [
    {
      image: "/assets/img/projects/gpawiz.png",
      link: "https://virajp4.me/GPA-Wiz",
      title: "GPA-Wiz",
      description: "A website that helps the students of SRM IST to calculate their GPA.",
    },
    {
      image: "/assets/img/projects/flappy.jpg",
      link: "https://lalithabishekg.github.io/flying-shuttle/",
      title: "Flying Shuttle",
      description: "A simple flappy bird like game, made using HTML,CSS and JavaScript.",
    },
  ];

  return (
    <main>
      <section className="di-banner"></section>
      <section className="projects-wrapper">
        <div className="projects-title my-4 pt-5">
          <h1 className="text-center">
            <span>P</span>rojects
          </h1>
          <p className="my-3">
            DI Club has been working on various projects since its inception. The projects are based on different domains and technologies. The
            projects are developed by the members of the club and are mentored by the seniors. The projects are developed with the aim of solving real
            world problems and to provide solutions to the problems faced by the students of SRM IST.
          </p>
          <div className="d-flex">
            <a href="#" className="btn btn-light projects-btn mx-auto" role="button">
              Register your Project
            </a>
          </div>
        </div>
        <div className="projects">
          <div className="row row-cols-md-1 row-cols-lg-3 justify-content-evenly">
            {projects.map((project, index) => (
              <ProjectCard key={index} image={project.image} link={project.link} title={project.title} description={project.description} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ image, link, title, description }) {
  return (
    <div className="col col-md-3">
      <div className="card projects-card">
        <img src={image} className="card-img-top p-3" alt={title} />
        <div className="projects-card-body">
          <div className="projects-card-title">
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-title">
              {title}
            </a>
          </div>
          <div className="d-flex">
            <p className="projects-card-text mx-auto px-3">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
