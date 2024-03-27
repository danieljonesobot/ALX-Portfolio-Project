import React from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`image of ${project.title}`}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.skills.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>

              <div>
                <a href={project.demo}></a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
