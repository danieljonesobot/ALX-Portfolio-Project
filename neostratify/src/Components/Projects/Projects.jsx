import React from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => {
          return (
            <div className={styles.contain} key={index}>
              <img
                className={styles.image}
                src={getImageUrl(project.imageSrc)}
                alt={`image of ${project.title}`}
              />
              <h3 className={styles.till}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, index) => {
                  return (
                    <li className={styles.skill} key={index}>
                      {skill}
                    </li>
                  );
                })}
              </ul>

              <div className={styles.links}>
                <a className={styles.link} href={project.demo}>
                  Demo
                </a>
                <a className={styles.link} href="#">
                  {project.service}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
