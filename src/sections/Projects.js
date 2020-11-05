import React from "react";
import Project from "./../components/Project";
import { PROJECTS } from "./../DATA";

const Projects = () => {
  return (
    <div className="section">
      <h4 className="mx-auto w-fc mb-5">Some of the projects I am proud of</h4>
      <div className="d-flex justify-content-around flex-wrap">
        {PROJECTS.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
